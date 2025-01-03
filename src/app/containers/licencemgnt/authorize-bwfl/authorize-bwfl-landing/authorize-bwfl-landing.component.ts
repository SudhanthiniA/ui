import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenceManagementService, AuthService, AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorizePersonListConfig } from '@app/config/table-config/authorize-person-list-config';
import { AuthBWFLPerson } from '@app/models/auth-bwfl-person';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

const { STATUS_APPROVED, STATUS_PENDING_LICENSE_FEE, STATUS_PENDING_DSC, STATUS_REJECTED } = LicenseConstants;

@Component({
  selector: 'app-authorize-bwfl-landing',
  templateUrl: './authorize-bwfl-landing.component.html',
  styleUrls: ['./authorize-bwfl-landing.component.scss']
})
export class AuthorizeBwflLandingComponent implements OnInit {

  licenseConsts = LicenseConstants;

  isCustomer: boolean;
  isOfficier: boolean;
  searchText: string;
  pageNo = 0;
  actionKeys = ['view'];
  pageSize = 5;
  totalCount: number;
  isSearchRes = false;

  columns = AuthorizePersonListConfig.columns;
  dataSource = new MatTableDataSource<AuthBWFLPerson>();
  authBWFLPersonList: AuthBWFLPerson[];

  searchInput = {
    licenseCategory: null,
    licenseSubCategory: null,
    startDate: null,
    endDate: null,
  };

  isCustomerBWFLParentExist = false;

  constructor(
    private router: Router,
    private licenseSer: LicenceManagementService,
    private authService: AuthService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.isOfficier = !this.isCustomer;
    this.searchLicenseApplications();
    this.checkCustomerBWFLParentExist();
  }

  onView(event) {
    console.log('onView-event::', event);
    const authPersonId = event.id;
    this.router.navigate(['licencemgnt/authorizebwfl/' + authPersonId + '/view']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchLicenseApplications(pageNo, pageSize);
  }

  checkCustomerBWFLParentExist() {
    this.licenseSer.isCustomerBWFLParentExist().subscribe((resp: any) => {
      const { responseCode, content: respCont } = resp;
      if (responseCode === 200) {
        this.isCustomerBWFLParentExist = respCont;
      }
    });
  }

  searchLicenseApplications(page = 0, pageSize = 5) {
    const searchObj = {
      searchInput: this.searchInput,
      page,
      pageSize
    };
    this.licenseSer.searchAuthorizePerson(searchObj).subscribe((resp: any) => {
      const { responseCode, content: respCont } = resp;
      if (responseCode === 200) {
        const { totalElements, content: respDataCon } = respCont;
        this.totalCount = totalElements;
        this.authBWFLPersonList = respDataCon;
        this.dataSource.data = respDataCon as AuthBWFLPerson[];
      }
    });
  }

}
