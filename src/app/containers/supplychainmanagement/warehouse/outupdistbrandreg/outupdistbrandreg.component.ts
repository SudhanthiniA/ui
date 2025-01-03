import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { MasterapiService, WarehouseNewbrandService, WorkflowcofigService,BrandMasterService } from '@app/services';
import { OutsideUpBrandRegisterConfig } from '@app/config/warehouse/outsideupbrandregister-config';
import { OutSideUpBrandReg } from '@app/models/warehouse/outsideupbrand';

@Component({
  selector: 'app-outupdistbrandreg',
  templateUrl: './outupdistbrandreg.component.html',
  styleUrls: ['./outupdistbrandreg.component.scss']
})
export class OutupdistbrandregComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = OutsideUpBrandRegisterConfig.titleSection.list;
  public breadcrumbs = OutsideUpBrandRegisterConfig.breadcrumbs;
  public columns = OutsideUpBrandRegisterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<OutSideUpBrandReg>();
  allbrands: any;
  Brandreg: any;
  page: number;
  financeyear: any;
  BrandRegObj = {
    applicationNumber: '',
    brandCode : '',
    createdDate:'',
    regYear:''
  };
  brandlist: any;
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
    private brandregservice: OutofupbrandService,
    private router: Router,
    private wrokflowconfig: WorkflowcofigService
  ) { }

  ngOnInit() {
    this.searchBrandData();
    this.getallBrand();
    this.brandregservice.getfinanceyear()
    .subscribe((resp: any) => {
      this.financeyear = resp.data;
    });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/outupdistbrandreg/edit/' + event.id]);
  }

  onView(event) {
    // this.router.navigate(['/supplychainmanagement/warehouse/outupdistbrandreg/view/' + event.id]);
    const findobj = this.brandlist.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/warehouse/outupdistbrandreg/edit/' + event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/warehouse/outupdistbrandreg/view/' + event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/warehouse/outupdistbrandreg/edit/' + event.id]);
    }
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchBrandData(pageNo, pageSize);
  }

  getallBrand() {
    this.brandregservice.getallbrand()
      .subscribe((resp: any) => {
        this.brandlist = (resp.data).reverse()
      }) 

      let iscustomer=localStorage.getItem('IS_CUSTOMER');
      if(iscustomer == 'false'){
        this.wrokflowconfig.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_BRAND_REGISTRATION').subscribe((resp: any) => {
          this.workflowobj = resp.content
        })
      }
  }

  searchBrandData(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        applicationNumber: this.BrandRegObj.applicationNumber ? this.BrandRegObj.applicationNumber : null,
        brandCode : this.BrandRegObj.brandCode  ? this.BrandRegObj.brandCode  : null,
        createdDate: this.BrandRegObj.createdDate ? this.BrandRegObj.createdDate : null,
        regYear: this.BrandRegObj.regYear ? this.BrandRegObj.regYear : null,
      },
      pageNo,
      paginationSize,
    };
    this.brandregservice.searchBrandreg(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.allbrands =  responceData.data.contents 
      this.dataSource.data = responceData.data.contents as OutSideUpBrandReg[];
        this.totalCount = responceData.data.totalElements;
    });
  }

  resetKey() {
    this.BrandRegObj = {
      applicationNumber: '',
      brandCode : '',
      createdDate:'',
      regYear:''
    };
    this.searchBrandData();
  }

}
