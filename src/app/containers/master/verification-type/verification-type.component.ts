import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerificationTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { VerificationTypeConfig } from '@app/config/table-config/verificationtype-config';
import { VerificationType } from '@app/models/master';

@Component({
  selector: 'app-verification-type',
  templateUrl: './verification-type.component.html',
  styleUrls: ['./verification-type.component.css']
})
export class VerificationTypeComponent implements OnInit {
  verificationtypeData: any;
  verificationObj: any = {};
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = VerificationTypeConfig.titleSection.list;
  public breadcrumbs = VerificationTypeConfig.breadcrumbs;
  public columns = VerificationTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<VerificationType>();

  constructor(private verificationService: VerificationTypeService, private router: Router) { }

  ngOnInit() {
    this.verificationObj.isActive = true;
    this.getVerification();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/verification-type/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/verification-type/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getVerification(pageNo, pageSize);
  }

  getVerification(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.verificationObj.code ? this.verificationObj.code : null,
        name: this.verificationObj.name ? this.verificationObj.name : null,
        isActive: this.verificationObj.isActive ? JSON.parse(this.verificationObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.verificationService.searchVerificationType(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as VerificationType[];
      }
    });
  }

  searchVerificationType() {
    this.getVerification();
  }

  resetKey() {
    this.verificationObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getVerification();
  }
}
