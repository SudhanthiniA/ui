import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YearMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Year } from '@app/models/master';
import { etinconfig } from '@app/config/table-config/etingen.-config';

@Component({
  selector: 'app-etingenration',
  templateUrl: './etingenration.component.html',
  styleUrls: ['./etingenration.component.css']
})
export class EtingenrationComponent implements OnInit {

  yearListDate: any;
  yearObj: any = {
    name: '',
    startMonth: '',
    endMonth: '',
    active: '',
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = etinconfig.titleSection.list;
  public breadcrumbs = etinconfig.breadcrumbs;
  public columns = etinconfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Year>();

  constructor(private yearService: YearMasterService, private router: Router) { }

  ngOnInit() {
    this.yearObj.active = '';
    this.getYear();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/year/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/year/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getYear(pageNo, pageSize);
  }

  getYear(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        name: this.yearObj.name ? this.yearObj.name : null,
        endMonth: this.yearObj.endMonth ? this.yearObj.endMonth : null,
        startMonth: this.yearObj.startMonth ? this.yearObj.startMonth : null,
        active: this.yearObj.active ? JSON.parse(this.yearObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.yearService.searchYear(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        // this.dataSource.data = responceData.data.contents as Year[];
      }
    });
  }

  searchYear() {
    this.getYear();
  }

  resetKey() {
    this.yearObj = {
      name: '',
      startMonth: '',
      endMonth: '',
      active: '',
    };
    this.getYear();
  }
}
