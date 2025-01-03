import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantStatusService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantStatusConfig } from '@app/config/table-config/applicationstatus-config';
import { ApplicantStatus } from '@app/models/master';

@Component({
  selector: 'app-applicationstatus',
  templateUrl: './applicationstatus.component.html',
  styleUrls: ['./applicationstatus.component.css']
})
export class ApplicationstatusComponent implements OnInit {

  applicantstatusList: any;
  applicantstatusObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ApplicantStatusConfig.titleSection.list;
  public breadcrumbs = ApplicantStatusConfig.breadcrumbs;
  public columns = ApplicantStatusConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ApplicantStatus>();

  constructor(
    private router: Router,
    private applicantStatusService: ApplicantStatusService
  ) { }

  ngOnInit() {
    this.getApplicantstatuslist();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/applicationstatus/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/applicationstatus/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getApplicantstatuslist(pageNo, pageSize);
  }

  getApplicantstatuslist(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.applicantstatusObj.code ? this.applicantstatusObj.code : null,
        name: this.applicantstatusObj.name ? this.applicantstatusObj.name : null,
        isActive: this.applicantstatusObj.isActive ? JSON.parse(this.applicantstatusObj.isActive) : null
      },
      pageNo,
      paginationSize
    };
    this.applicantStatusService.searchApplicantStatus(searchobj)
      .subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as ApplicantStatus[];
        }
      });
  }

  searchApplicantStatus() {
    this.getApplicantstatuslist();
  }

  resetKey() {
    this.applicantstatusObj = {
      code: '',
      name: '',
      isActive: true
    };
    this.getApplicantstatuslist();
  }
}
