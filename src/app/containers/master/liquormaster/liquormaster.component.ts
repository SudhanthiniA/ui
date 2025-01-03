import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LiquorCategoryService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LiquorCategoryConfig } from '@app/config/table-config/liquormaster-config';
import { LiquorCategory } from '@app/models/master';

@Component({
  selector: 'app-liquormaster',
  templateUrl: './liquormaster.component.html',
  styleUrls: ['./liquormaster.component.scss']
})
export class LiquormasterComponent implements OnInit {
  liquorList: any;
  liquorObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LiquorCategoryConfig.titleSection.list;
  public breadcrumbs = LiquorCategoryConfig.breadcrumbs;
  public columns = LiquorCategoryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<LiquorCategory>();
  constructor(private router: Router, private liquorService: LiquorCategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/liquor/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/liquor/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, paginationSize = 5) {
    const searchObj = {
      filters: {
        code: this.liquorObj.code ? this.liquorObj.code : null,
        name: this.liquorObj.name ? this.liquorObj.name : null,
        isActive: this.liquorObj.isActive ? JSON.parse(this.liquorObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.liquorService.searchLiquor(searchObj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as LiquorCategory[];
      }
    });
  }

  searchLiquorCategory() {
    this.getCategory();
  }
  resetKey() {
    this.liquorObj = {
      code: '',
      name: '',
      active: true
    };
    this.getCategory();
  }
}
