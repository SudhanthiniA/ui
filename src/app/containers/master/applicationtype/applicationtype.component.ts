import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantTypeConfig } from '@app/config/table-config/applicanttype-config';
import { ApplicantType } from '@app/models/master';

@Component({
  selector: 'app-applicationtype',
  templateUrl: './applicationtype.component.html',
  styleUrls: ['./applicationtype.component.css']
})
export class ApplicationtypeComponent implements OnInit {

  applicanttypeList: any;
  typeObj: any = {
    code: '',
    type: '',
    isActive: false
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ApplicantTypeConfig.titleSection.list;
  public breadcrumbs = ApplicantTypeConfig.breadcrumbs;
  public columns = ApplicantTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ApplicantType>();

  constructor(
    private router: Router,
    private applicanttypeService: ApplicantTypeService
  ) { }

  ngOnInit() {
    this.getApplicanttypelist();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/applicationtype/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/applicationtype/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getApplicanttypelist(pageNo, pageSize);
  }

  getApplicanttypelist(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.typeObj.code ? this.typeObj.code : null,
        type: this.typeObj.type ? this.typeObj.type : null,
        isActive: this.typeObj.isActive ? JSON.parse(this.typeObj.isActive) : null
      },
      pageNo,
      paginationSize
    };
    this.applicanttypeService.searchApplicantType(searchobj)
      .subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as ApplicantType[];
        }
      });
  }

  searchApplicantType() {
    this.getApplicanttypelist();
  }

  resetKey() {
    this.typeObj = {
      code: '',
      name: '',
      isActive: false
    };
    this.getApplicanttypelist();
  }
}
