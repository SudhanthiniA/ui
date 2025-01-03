import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderpickupService } from '@app/services/ware-house/orderpickup.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { MasterapiService, WarehouseNewbrandService, WorkflowcofigService,BrandMasterService } from '@app/services';
import { OrderPickUpConfig } from '@app/config/warehouse/order-pickup.config';
import { completed, Inprogress, pending } from '@app/models/warehouse/orderPickUp';

@Component({
  selector: 'app-orderpickup',
  templateUrl: './orderpickup.component.html',
  styleUrls: ['./orderpickup.component.scss']
})
export class OrderpickupComponent implements OnInit {
  orderlist: any;
  pageNo = 0;
  status:any;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = OrderPickUpConfig.titleSection.list;
  public breadcrumbs = OrderPickUpConfig.breadcrumbs;
  public complete = OrderPickUpConfig.completetd;
  public lastText = 'master.common.list';
  public dataSourcecompleted = new MatTableDataSource<completed>();

  // ----------checking orderpickup-----
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

  public pageSizePen = 5;
  public totalCountPen: number;
  public isSearchResPen = false;

  public pageSizeCompl = 5;
  public totalCountCompl: number;
  public isSearchResCompl = false;

  public pageSizeInpro = 5;
  public totalCountInpro: number;
  public isSearchResInpro = false;

  public pending = OrderPickUpConfig.pendings;
  public inprogress = OrderPickUpConfig.Inprogress;

  public dataSourcepending = new MatTableDataSource<pending>();
  public dataSourceinpro = new MatTableDataSource<Inprogress>();
  allDraftorderslist: any;
  acceptedorderslist: any;

  handlePaginationCompleted(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getAllsubmittedrecords(pageNo, pageSize);
  }

  handlePaginationPending(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getallPendingdordrpickup(pageNo, pageSize);
  }


  //Inprogress list 
  getDraftlist(pageNo = 0, pageSizeInpro = 5) {
    // console.log('draft' )
    const paginationSize = pageSizeInpro;
    let params = {
      filters: {
        indentDate: this.orderPickUpData.indentDate ? this.orderPickUpData.indentDate:null,
        indentNo: this.orderPickUpData.indentNo ? this.orderPickUpData.indentNo:null,
        unitName: this.orderPickUpData.unitName ? this.orderPickUpData.unitName:null,
        //orderPickUpStatus: this.orderPickUpData.orderPickUpStatus ? this.orderPickUpData.orderPickUpStatus:null,
        orderPickStatus: 'INPROGRESS'
      },
      pageNo,
      paginationSize,
     

    }
    // getallDrafttorderpickup(params)
    this.orderpickupservice.getallorderpickup(params).subscribe((res: any) => {
      // console.log('draft',res )
      this.allDraftorderslist = res.data.contents;
      this.dataSourceinpro.data = res.data.contents as Inprogress[];
      this.totalCountInpro = res.data.totalElements;
    })
  }

   //pending list table
   getallPendingdordrpickup(pageNo = 0,pageSizePen = 5) {
    const paginationSize = pageSizePen;
    let params = {
      filters: {
        indentDate: this.orderPickUpData.indentDate ? this.orderPickUpData.indentDate:null,
        indentNo: this.orderPickUpData.indentNo ? this.orderPickUpData.indentNo:null,
        unitName: this.orderPickUpData.unitName ? this.orderPickUpData.unitName:null,
        orderPickStatus: 'PENDING'
      },
      pageNo,
      paginationSize 

    }
    this.orderpickupservice.getallorderpickup(params).subscribe((res: any) => {
      console.log('submitted', res)
      if(res.data){
        this.acceptedorderslist = res.data.contents;
        this.dataSourcepending.data = res.data.contents as pending[];
        this.totalCountPen = res.data.totalElements;
      }
     
    })
  }


   //pending list navigations
   view(event) {
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/view/'+ indentNum.indentNo]);
  }
  editt(event){
    
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    // console.log(indentNum)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/edit/'+ indentNum.indentNo])
    
  } 
  edit(event) {
    let indentNum = this.acceptedorderslist.find(ele =>ele.id==event.id)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/edit/'+ indentNum.indentNo])

  } 

  // inprogress list navigations
  viewInpro(event) {
    let indentNum = this.allDraftorderslist.find(ele =>ele.id==event.id)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/view/'+ indentNum.indentNo]);
  }
  editInpro(event) {
    let indentNum = this.allDraftorderslist.find(ele =>ele.id==event.id)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/edit/'+ indentNum.indentNo]);
  }

 //completed list navigations
  viewCom(event){
    let indentNum =  this.orderlist.find(ele =>ele.id==event.id)
    this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/view/' +  indentNum.indentNo]);
  }
  // -----------ending --------

  @ViewChild('tabSet', {static: false}) tabSet;

  orderPickUpData:any = {
    indentDate: '',
    indentNo: '',
    unitName: '',
    status: "",
    orderPickUpStatus: ''
  };
  constructor(
    private orderpickupservice: OrderpickupService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.getallPendingdordrpickup();
    this.getDraftlist();
    this.getAllsubmittedrecords();
    //this.getorderpickup();
    this.route.queryParams.subscribe(params => {
      if (params.status) {
        let status = params.status;
        setTimeout(function () {
          let ele = document.getElementById(status);
          ele.click();
        }, 10);
      }
    });
  }

  orderPickUpsearch(){
    this.getallPendingdordrpickup();
    this.getDraftlist();
    this.getAllsubmittedrecords();
  }

  handlePaginationInprogress(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getDraftlist(pageNo, pageSize);
  }

  getAllsubmittedrecords(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let params = {
      filters: {
        indentDate: this.orderPickUpData.indentDate ? this.orderPickUpData.indentDate:null,
        indentNo: this.orderPickUpData.indentNo ? this.orderPickUpData.indentNo:null,
        unitName: this.orderPickUpData.unitName ? this.orderPickUpData.unitName:null,
        orderPickStatus: 'COMPLETED'
        //orderPickUpStatus: this.orderPickUpData.orderPickUpStatus ? this.orderPickUpData.orderPickUpStatus:null,
      },
      pageNo,
      paginationSize,
    }
    this.orderpickupservice.getallorderpickup(params)
    .subscribe((resp: any) => {
      if(resp.status == 's') {
        this.orderlist = resp.data.contents;
        this.dataSourcecompleted.data = resp.data.contents as completed[];
        this.totalCount = resp.data.totalElements;
      }
    })
  }

  //status search 
  changestatus(status){
    this.tabSet.select(status);
  }

  // reset data
  resetKey() {
    this.orderPickUpData = {
      indentDate: '',
      indentNo: '',
      unitName: '',
      orderPickUpStatus: ''
    };
    this.ngOnInit();
  }
  // onEdit(event) {
  //   let indentNum = this.orderlist.find(ele =>ele.id==event.id).indentNo
  //   console.log(indentNum)
  //   this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/edit/' + indentNum]);
  // }

  // onView(event) {
  //   let indentNum = this.orderlist.find(ele =>ele.id==event.id).indentNo
  //   console.log(indentNum)
  //   this.router.navigate(['/supplychainmanagement/warehouse/orderpickup/view/' + indentNum]);
  // }
}
