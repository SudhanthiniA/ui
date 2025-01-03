import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleStockinService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { orderpickconfig } from  '@app/config/wholesale/orderpickup-config';
import {completed, Inprogress, pending} from '@app/models/wholesale/orderpickup';
@Component({
  selector: 'app-orderpickup',
  templateUrl: './orderpickup.component.html',
  styleUrls: ['./orderpickup.component.scss']
})
export class OrderpickupComponent implements OnInit {
  orderslist: any;
  orderlistObj = {
    orderdate: '',
    indentnum: '',
    unitname: '',
    statuss: ''
  }
  
  pageNo = 0;
  pageNoPen = 0;
  pageNocom = 0;
  public actionBtnBasedOnCondinpro = {
    edit: {
      column: 'orderPickUpStatus',
      condition: 'INPROGRESS',
    },
    view: {
      column: 'orderPickUpStatus',
      condition: 'SUBMITTED',
    },
  };
  public actionBtnBasedOnCondCompltd = {
  
    view: {
      column: 'orderPickUpStatus',
      condition: 'COMPLETED',
    },
  };
  public actionBtnBasedOnCondPend = {
    edit: {
      column: 'orderPickUpStatus',
      condition: 'PENDING',
    },
    
  };
  public actionKeyspen = ['edit'];
  public actionKeysinrro = ['edit', 'view'];
  public actionKeyscompl= ['view'];

  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public pageSizePen = 5;
  public totalCountPen: number;
  public isSearchResPen = false;

  public pageSizeCompl = 5;
  public totalCountCompl: number;
  public isSearchResCompl = false;

  public pending = orderpickconfig.pendings;
  public inprogress = orderpickconfig.Inprogress;
  public complete = orderpickconfig.completetd;

  public dataSourcepending = new MatTableDataSource<pending>();
  public dataSourceinpro = new MatTableDataSource<Inprogress>();
  public dataSourcecompleted = new MatTableDataSource<completed>();

  @ViewChild('tabSet', {static: false}) tabSet;
  submittedorderslist: any;
  allDraftorderslist: any;
  acceptedorderslist: any;
  constructor(private WholesaleStockinService: WholesaleStockinService,
    private AlertService: AlertService, private Router: Router) { }

  ngOnInit() {
    this.getallAcceptedordrpickup();
    this.getDraftlist();
    this.getAllsubmittedrecords();
  }
   //list page clear button function
  clearform(){
    this.orderlistObj={
      orderdate: '',
    indentnum: '',
    unitname: '',
    statuss: ''
    }
    this.getallAcceptedordrpickup();
    this.getDraftlist();
    this.getAllsubmittedrecords();
  }
  handlePagination(event?) {
    // console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getDraftlist(pageNo,pageSize);
    // const isSearchRes = event.isSearchRes;
  }
  handlePagination1(event?) {
    // console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAllsubmittedrecords(pageNo,pageSize);
    // const isSearchRes = event.isSearchRes;
  }
  handlePagination2(event?) {
    // console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getallAcceptedordrpickup(pageNo,pageSize);

    // const isSearchRes = event.isSearchRes;
  }
  

  //list page search button function
  getlist(){
    this.getallAcceptedordrpickup();
    this.getDraftlist();
    this.getAllsubmittedrecords();
  }

  //Inprogress list 
  getDraftlist(pageNo = 0, pageSize = 5) {
    // console.log('draft' )
    const paginationSize = pageSize;
    let params = {
      "filters": {
        "indentDate": this.orderlistObj.orderdate ? this.orderlistObj.orderdate : '',
        "indentNo": this.orderlistObj.indentnum ? this.orderlistObj.indentnum : '',
        "unitName": this.orderlistObj.unitname ? this.orderlistObj.unitname : '',
        "orderPickStatus": 'INPROGRESS'
      },
      "fromDate": "",
      pageNo,
      paginationSize,
      "search": "",
      "sortField": "",
      "sortOrder": "",
      "toDate": "",

    }
    this.WholesaleStockinService.getallDrafttorderpickup(params).subscribe((res: any) => {
      // console.log('draft',res )
      this.allDraftorderslist = res.data.contents;
      this.dataSourceinpro.data = res.data.contents as Inprogress[];;
      this.totalCount = res.data.totalElements;
    })
  }

  //completed list table
  getAllsubmittedrecords(pageNo = 0, pageSizeCompl = 5) {
    const paginationSize = pageSizeCompl;
    let params = {
      "filters": {
        "indentDate": this.orderlistObj.orderdate ? this.orderlistObj.orderdate : '',
        "indentNo": this.orderlistObj.indentnum ? this.orderlistObj.indentnum : '',
        "unitName": this.orderlistObj.unitname ? this.orderlistObj.unitname : '',
        "orderPickStatus": 'COMPLETED'
      },
      "fromDate": "",
      pageNo,
      paginationSize,
      "search": "",
      "sortField": "",
      "sortOrder": "",
      "toDate": "",

    }
    this.WholesaleStockinService.getallSubmittedorderpickup(params).subscribe((res: any) => {
      console.log('submitted', res)
      this.submittedorderslist = res.data.contents;
      this.dataSourcecompleted.data = res.data.contents as completed[];;
      this.totalCountCompl = res.data.totalElements;
    })
  }

  //pending list table
  getallAcceptedordrpickup(pageNo = 0,pageSizePen = 5) {
    const paginationSize = pageSizePen;
    let params = {
      "filters": {
        "indentDate": this.orderlistObj.orderdate ? this.orderlistObj.orderdate : '',
        "indentNo": this.orderlistObj.indentnum ? this.orderlistObj.indentnum : '',
        "unitName": this.orderlistObj.unitname ? this.orderlistObj.unitname : '',
        "orderPickStatus": 'PENDING'
      },
      "fromDate": "",
      pageNo,
      paginationSize,
      "search": "",
      "sortField": "",
      "sortOrder": "",
      "toDate": "",

    }
    this.WholesaleStockinService.getallAcceptedorderpickup(params).subscribe((res: any) => {
      console.log('submitted', res)
      if(res.data){
        this.acceptedorderslist = res.data.contents;
        this.dataSourcepending.data = res.data.contents as pending[];;
        this.totalCountPen = res.data.totalElements;
      }
     
    })
  }

  //status search 
  changestatus(status){
    this.tabSet.select(status);
  }
  
  

  //pending list navigations
  view(event) {
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/view/'+ indentNum.indentNo]);
  }
  editt(event){
    
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    // console.log(indentNum)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/add/'+ indentNum.indentNo])
    
  } 
  edit(event) {
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/add/'+ indentNum.indentNo])

  } 

  // inprogress list navigations
  viewInpro(event) {
    let indentNum = this.allDraftorderslist.find(ele =>ele.id==event.id)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/view/'+ indentNum.indentNo]);
  }
  editInpro(event) {
    let indentNum = this.allDraftorderslist.find(ele =>ele.id==event.id)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/add/'+ indentNum.indentNo]);
  }

 //completed list navigations
  viewCom(event){
    let indentNum =  this.submittedorderslist.find(ele =>ele.id==event.id)
    this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/view/' +  indentNum.indentNo]);
  }
}
