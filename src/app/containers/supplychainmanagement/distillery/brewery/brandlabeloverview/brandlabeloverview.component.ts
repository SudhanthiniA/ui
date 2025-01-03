import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { BrandlabelregService} from '@app/services';
import { DatePipe } from '@angular/common';
import { BrandlabelOvrView } from '@app/models/warehouse/brand-label-overview';
import { BrandLabelOverViewConfig } from '@app/config/warehouse/brandLabelOverview-config';
import { DropdownConfigService } from '@app/services';

@Component({
  selector: 'app-brandlabeloverview',
  templateUrl: './brandlabeloverview.component.html',
  styleUrls: ['./brandlabeloverview.component.scss']
})
export class BrandlabeloverviewComponent implements OnInit {
  data: any;
  years: any;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT'||'SENDBACK',
    },
  };

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = BrandLabelOverViewConfig.titleSection.list;
  public breadcrumbs = BrandLabelOverViewConfig.breadcrumbs;
  public columns = BrandLabelOverViewConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<BrandlabelOvrView>();

  constructor(private router: Router, 
    private brandlabelregService: BrandlabelregService,  
    private datepipe: DatePipe ,
    private dropDownService: DropdownConfigService) 
  { }

  ngOnInit() {
    this.getList();
    this.getAllYear();
    //this.getbrandnames();
    // this.addedit = this.router.url.includes('warehouse') === true ? 'Warehouse' : 'Distillery';
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/edit/', event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getList(pageNo, pageSize);
  }

  brandlabeloverviewObj: any = {
    brandValue: '',
    liquorTypeValue: '',
    subLiquorTypeValue: '',
    year: ''
  };

  getList(pageNo = 0, pageSize = 5) {
    const requestParam = {
      filters: {
        "brandCode": this.brandlabeloverviewObj.brandValue? this.brandlabeloverviewObj.brandValue : null,
        "liquorTypeValue": this.brandlabeloverviewObj.liquorTypeValue? this.brandlabeloverviewObj.liquorTypeValue : null,
        "subLiquorTypeValue": this.brandlabeloverviewObj.subLiquorTypeValue? this.brandlabeloverviewObj.subLiquorTypeValue : null,
        "regYear": this.brandlabeloverviewObj.year? this.brandlabeloverviewObj.year : null,
      },
      "pageNo": pageNo,
      "paginationSize": pageSize
     
    };

    this.brandlabelregService.search(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.dataSource.data = resp.data.contents as BrandlabelOvrView[];
          this.totalCount = resp.data.totalElements;
          this.data = resp.data.contents;
        }
       
      });
  }

  getAllYear() {
    this.dropDownService.getDropdownByKey('YEAR_OF_REGISTRATION')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.years = resp.data.downDropDownMasterValueList;
        }
      });
  }

  searchTank() {
    this.getList();
  }

  resetKey() {
    this.brandlabeloverviewObj = {
      brandValue: '',
      liquorTypeValue: '',
      subLiquorTypeValue: '',
      year: ''
    };
    this. getList();
  }
}


