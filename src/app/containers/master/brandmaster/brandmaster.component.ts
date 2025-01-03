import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BrandMasterConfig } from '@app/config/table-config/brandmaster-config';
import { Location } from '@app/models/master';
import { BrandMasterService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brandmaster',
  templateUrl: './brandmaster.component.html',
  styleUrls: ['./brandmaster.component.scss']
})
export class BrandmasterComponent implements OnInit{

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = BrandMasterConfig.titleSection.list;
  public breadcrumbs = BrandMasterConfig.breadcrumbs;
  public columns = BrandMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  //dtOptions: DataTables.Settings = {};

  liquorList: any;
  brandlists: any;
  selected: any;
  brandObj: any = {
    brandCode: '',
    brandName: '',
    isActive: true
  };

  constructor(
    private router: Router,
    private brandService: BrandMasterService
  ) { }

  ngOnInit() {
    this.getBrandMaster();
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getBrandMaster();
  }

  getBrandMaster() {
    const searchobj = {
      filters: {
        brandCode: this.brandObj.brand_code ? this.brandObj.brand_code : null,
        brandName: this.brandObj.brand_name ? this.brandObj.brand_name : null,
        isActive: this.brandObj.isActive ? JSON.parse(this.brandObj.isActive) : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.brandService.searchBrandMaster(searchobj).subscribe((responceData: any) => {
      this.brandlists = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      }
    });
    // this.brandService.searchBrandMaster(searchobj)
    //   .subscribe((resp: any) => {
    //     this.brandlists = resp.data.contents;
    //     if ( resp.errorCode === 200 ) {
    //       this.totalCount = resp.data.totalElements;
    //       this.dataSource.data = resp.data.contents;
    //     }
    //   });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/brandmaster/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/brandmaster/view/' + event.id ]);
  }

  searchBrandMaster() {
    this.getBrandMaster();
  }

  resetKey() {
    this.brandObj = {
      code: '',
      name: '',
      isActive: true
    };
    this.getBrandMaster();
  }

}
