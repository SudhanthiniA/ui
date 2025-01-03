import { Component, OnInit, ViewChild } from '@angular/core';
import { OutsidelabelService } from '@app/services/ware-house/outsidelabel.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Router,ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MasterapiService, DistilleryapiService,ApiService, TransportGenService, LiquorTypeService, LicenseeService, BrandMasterService, WarehouseNewbrandService, AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { WarehouseTrnsportPassGenService, WorkflowcofigService } from '@app/services/ware-house'; 
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { LabelRegistrationConfig } from '@app/config/warehouse/labelRegistration-config';
import { LabelRegistration } from '@app/models/warehouse/label-registration';

@Component({
  selector: 'app-outupdistlabelreg',
  templateUrl: './outupdistlabelreg.component.html',
  styleUrls: ['./outupdistlabelreg.component.scss']
})
export class OutupdistlabelregComponent implements OnInit {
  alllabels: any;  
  outUpbrandlist:any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = LabelRegistrationConfig.titleSection.list;
  public breadcrumbs = LabelRegistrationConfig.breadcrumbs;
  public columns = LabelRegistrationConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<LabelRegistration>();
  allbrands: any;
  Brandreg: any;
  Lagelreg:any;
  brandlists:any;
  page: number;
  limit: any;
  LabelRegObj = {
    brandCode: '',
    applicationNumber:'',
    createdDate:''
  };
  dateselected: any = moment().format('LLLL');
  rawmaterialList: any;
  workflowobj: any;

  public actionBtnBasedOnCondSendback = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
    view: {
      column: 'status',
      condition: 'SENDBACK',
    },
  };
  constructor( 
    private labelservice: OutsidelabelService,
    private router: Router,
    private wrokflowconfig: WorkflowcofigService
    ) { }

  ngOnInit() {
     this.getallBrand();
    // this.getallLabels();
    this.searchLabelRegData();
  }

  getallLabels() {
    this.labelservice.getalllabels()
    .subscribe((resp: any) => {
      this.alllabels =resp.data
    })
  }

  
  getallBrand() {
    this.labelservice.getallbrand()
    .subscribe((resp: any) => {
      console.log(resp);
      this.outUpbrandlist = resp.data 
    })

    let iscustomer=localStorage.getItem('IS_CUSTOMER');
    if(iscustomer == 'false'){
      this.wrokflowconfig.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_LABEL_REGISTRATION').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })
    }
   
  }


  getdata(val,id) {
  let data;
    switch(val) {

      case 'applnum':
        data = this.outUpbrandlist.find(x => x.id == id).applicationNumber;
        break;

        case 'brnadname':
            data = this.outUpbrandlist.find(x => x.id ==id).brandRegistrationDetails.brandDetails.brandCode;
            break;
    }

    return data;
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/outupdistlabelreg/edit/' + event.id]);
  }

  onView(event) {
    // this.router.navigate(['/supplychainmanagement/warehouse/outupdistlabelreg/view/' + event.id]);
 
    const findobj = this.alllabels.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/warehouse/outupdistlabelreg/edit/' + event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/warehouse/outupdistlabelreg/view/' + event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/warehouse/outupdistlabelreg/edit/' + event.id]);
    }
 
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchLabelRegData(pageNo, pageSize);
  }

  // handlePagination(event) {
  //   const pageNo = event.currentPage;
  //   const pageSize = event.pageSize;
  // }

  searchLabelRegData(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        applicationNumber: this.LabelRegObj.applicationNumber ? this.LabelRegObj.applicationNumber : null,
        brandCode: this.LabelRegObj.brandCode ? this.LabelRegObj.brandCode : null,
        createdDate: this.LabelRegObj.createdDate ? this.LabelRegObj.createdDate : null,
      },
      pageNo,
      paginationSize,
    };
    this.labelservice.searchLabelReg(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      //this.outUpbrandlist =  responceData.data.contents 
      this.alllabels = responceData.data.contents
      this.dataSource.data = responceData.data.contents as LabelRegistration[];
      this.totalCount = responceData.data.totalElements;
      // this.alllabels = responceData.data.contents;
      });
  }

  resetKey() {
    this.LabelRegObj = {
      brandCode: '',
      createdDate:'',
      applicationNumber: '',
    };
    this.searchLabelRegData();
  }

  // refreshTabIns() {
  //   if (this.dtElement.dtInstance) {
  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.destroy();
  //       this.dtTrigger.next();
  //     });
  //   } else {
  //     this.dtTrigger.next();
  //   }
  //   return true;
  // }
}
