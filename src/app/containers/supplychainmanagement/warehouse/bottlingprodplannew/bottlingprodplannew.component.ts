import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';
import { BottlingPlaneConfig } from '@app/config/warehouse/bottlingPlane.config';
import { BottlingPlneNew } from '@app/models/warehouse/bottlingPlaneNew';

@Component({
  selector: 'app-bottlingprodplannew',
  templateUrl: './bottlingprodplannew.component.html',
  styleUrls: ['./bottlingprodplannew.component.scss']
})
export class BottlingprodplannewComponent implements OnInit {

  alldata:any={};
  dataofarray =[];
  bottlelist: any;
  brandlists: any = [];
  viewId: any;
  bottledata: any;
  sizelist: any;
  qrcodemappinglists: any;
  bottlingObj:any={
    planDate:'',
    brandId:'',
    planId:'',
    status:''
  };

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = BottlingPlaneConfig.titleSection.list;
  public breadcrumbs = BottlingPlaneConfig.breadcrumbs;
  public columns = BottlingPlaneConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<BottlingPlneNew>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private apiservice: ApiService,
    private brandService: BrandMasterService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private bottlingplanservice: WarehousebottlingplanService
  ) { }

  ngOnInit() {
    this.getdata();
    this.getBrandMaster();
    this.searchBottlingData();
  }

  // calling brand
  getBrandMaster() {
    this.brandService.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
      });
  }
  getdata(){
    this.bottlingplanservice.getallbotlingplan()
    .subscribe((resp: any) => {
      this.bottlelist = resp.data
    })
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/bottlingprodplannew/edit' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/bottlingprodplannew/view' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchBottlingData(pageNo, pageSize);
  }

  // search
  searchBottlingData(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        planDate: this.bottlingObj.planDate ? this.bottlingObj.planDate : null,
        planId: this.bottlingObj.planId ? this.bottlingObj.planId : null,  
        brandId: this.bottlingObj.brandId ? this.bottlingObj.brandId : null,
        status: this.bottlingObj.status ? this.bottlingObj.status : null,       
      },
      pageNo,
      paginationSize,
    };

    this.bottlingplanservice.searchBottlingData(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.dataSource.data = responceData.data.contents as BottlingPlneNew[];
      this.totalCount = responceData.data.totalElements;
      // this.bottlelist = responceData.data.contents;
      // this.refreshTabIns();
      
      });
  }

  resetKey() {
    this.bottlingObj = {
      planDate:'',
      brandId:'',
      planId:'',
      status:'',
    };
  }
}
