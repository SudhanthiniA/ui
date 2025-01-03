import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { PenalityMasterConfig } from '@app/config/table-config/penalitymaster-config';
import { PenalityService } from '@app/services';
import { Location } from "@app/models/master";

@Component({
  selector: 'app-penaltymaster',
  templateUrl: './penaltymaster.component.html',
  styleUrls: ['./penaltymaster.component.scss']
})
export class PenaltymasterComponent implements OnInit {


  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = PenalityMasterConfig.titleSection.list;
  public breadcrumbs = PenalityMasterConfig.breadcrumbs;
  public columns = PenalityMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  dateselected: any = moment().format('LLLL');
  penaltyList: any;
  selected: any;
  penalityObj: any = {
    code: '',
    name: '',
    isActive: true,
  };
  constructor(
    private router: Router,
    private penalityService: PenalityService
  ) { }

  ngOnInit() {
  // const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
    this.getCategory();
  }
  onEdit(event) {
    this.router.navigate(['/master/penaltymaster/edit/' + event.id]);
  }
  onView(event) {
    this.router.navigate(['/master/penaltymaster/view/', + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.penalityObj.code ? this.penalityObj.code : null,
        name: this.penalityObj.name ? this.penalityObj.name : null,
        isActive: this.penalityObj.isActive ? JSON.parse(this.penalityObj.isActive) : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.penalityService.searchPenality(objtest).subscribe((responceData: any) => {
      this.penaltyList = responceData.data.contents;
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Location[];
      }
    });
  }
  searchPenality() {
    this.getCategory();
  }
  resetKey() {
    this.penalityObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getCategory();
  }
}
