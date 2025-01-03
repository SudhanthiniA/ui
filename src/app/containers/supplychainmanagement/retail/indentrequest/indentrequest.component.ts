import { Component, OnInit } from '@angular/core';
import { IndentRequestService } from '@app/services/retails';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IndentRequestConfig } from '@app/config/retail/indentrequest-config';
import { IndentRequest } from '@app/models/retails';

@Component({
  selector: 'app-indentrequest',
  templateUrl: './indentrequest.component.html',
  styleUrls: ['./indentrequest.component.scss']
})
export class IndentrequestComponent implements OnInit {
  indentReqObj = {
    indentNumber: '',
    wholesaleName: '',
    indentDate: ''
  };
  indentData: any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = IndentRequestConfig.titleSection.list;
  public breadcrumbs = IndentRequestConfig.breadcrumbs;
  public columns = IndentRequestConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<IndentRequest>();

  constructor(
    private service: IndentRequestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getIndent();
  }
  onView(event) {
   this.router.navigate(['/supplychainmanagement/retail/indentrequest/view/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getIndent(pageNo, pageSize);
  }
  getIndent(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const requestParam = {
      filters: {
        indentNumber: this.indentReqObj.indentNumber ? 124 : null,
        wholesaleName: this.indentReqObj.wholesaleName ? this.indentReqObj.wholesaleName : null,
        indentDate: this.indentReqObj.indentDate ? this.indentReqObj.indentDate : null
      },
      pageNo,
      paginationSize
    };
    this.service.searchIndent(requestParam).subscribe((resp) => {
      this.dataSource.data = resp.data.contents as IndentRequest[];
      this.totalCount = resp.data.totalElements;
    });
  }
  searchIndent() {
    this.getIndent();
  }
  resetForm() {
    this.indentReqObj = {
      indentNumber: '',
      wholesaleName: '',
      indentDate: ''
    };
    this.getIndent();
  }
}
