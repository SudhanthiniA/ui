import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeetypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { FeetypeConfig } from '@app/config/table-config/feetype-config';
import { Feetype } from '@app/models/master';

@Component({
  selector: 'app-feetype',
  templateUrl: './feetype.component.html',
  styleUrls: ['./feetype.component.css']
})
export class FeetypeComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = FeetypeConfig.titleSection.list;
  public breadcrumbs = FeetypeConfig.breadcrumbs;
  public columns = FeetypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Feetype>();
  feetypelist: any;
  feetypeObj: any = {
    feetypeCode: '',
    feetypeName: '',
    active: true
  };
  constructor(
    private router: Router,
    private feetypeService: FeetypeService
  ) { }

  ngOnInit() {
    this.getfeetypelist();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/feetype/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/feetype/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getfeetypelist(pageNo, pageSize);
  }

  getfeetypelist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        feetypeCode: this.feetypeObj.feetypeCode ? this.feetypeObj.feetypeCode : null,
        feetypeName: this.feetypeObj.feetypeName ? this.feetypeObj.feetypeName : null,
        isActive: this.feetypeObj.active ? this.feetypeObj.active : null,
      },
      pageNo,
      paginationSize
    };
    this.feetypeService.searchFeetype(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Feetype[];
    });
  }

  searchFeetype() {
    this.getfeetypelist();
  }

  resetKey() {
    this.feetypeObj = {
      feetypeCode: '',
      feetypeName: '',
      active: '',
    };
    this.getfeetypelist();
  }

}
