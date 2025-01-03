import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeadcodeService, FeetypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { HeadcodeConfig } from '@app/config/table-config/headcode-config';
import { Headcode } from '@app/models/master';

@Component({
  selector: 'app-headcode',
  templateUrl: './headcode.component.html',
  styleUrls: ['./headcode.component.css']
})
export class HeadcodeComponent implements OnInit {

  headcodeObj: any = {
    headCode: '',
    headName: '',
    feeid: '',
    active: true
  };
  headcodeList: any;
  liquorCategoryList: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = HeadcodeConfig.titleSection.list;
  public breadcrumbs = HeadcodeConfig.breadcrumbs;
  public columns = HeadcodeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Headcode>();
  feeTypeData: any;

  constructor(
    private router: Router,
    private headcodeService: HeadcodeService,
    private feetypeService: FeetypeService
  ) { }

  ngOnInit() {
    this.getHeadcodeList();
    this.getfeetypelist();
  }
  getfeetypelist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
      },
      pageNo,
      paginationSize
    };
    this.feetypeService.searchFeetype(searchObj).subscribe((responceData: any) => {
      this.feeTypeData = responceData.data.contents;
    });
  }
  onEdit(event) {
    this.router.navigate(['/master/headcode/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/headcode/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getHeadcodeList(pageNo, pageSize);
  }

  getHeadcodeList(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        headCode: this.headcodeObj.code ? this.headcodeObj.code : null,
        headName: this.headcodeObj.headcode ? this.headcodeObj.headcode : null,
        isActive: this.headcodeObj.active ? JSON.parse(this.headcodeObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.headcodeService.searchHeadcode(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Headcode[];
      }
    });
  }

  searchHeadcode() {
    this.getHeadcodeList();
  }

  resetForm() {
    this.headcodeObj = {
      headCode: '',
      headName: '',
      feeid: '',
      active: true
    };
  }

}
