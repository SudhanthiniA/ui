import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenceManagementService, AuthService, AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseStatusListConfig } from '@app/config/table-config/license-status-list-config';
import { License } from '@app/models/license-master';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

const { STATUS_APPROVED, STATUS_PENDING_LICENSE_FEE, STATUS_PENDING_DSC, STATUS_REJECTED } = LicenseConstants;

@Component({
  selector: 'app-view-license-status',
  templateUrl: './view-license-status.component.html',
  styleUrls: ['./view-license-status.component.scss']
})
export class ViewLicenseStatusComponent implements OnInit {

  isCustomer: boolean;
  isOfficier: boolean;
  searchText: string;
  pageNo = 0;
  public actionKeys = ['edit', 'view', 'download'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public columns = LicenseStatusListConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<License>();
  licenseList: License[];

  licenseConsts = LicenseConstants;
  
  searchDateRange;
  locale: any = {
    applyLabel: 'Okay',
    format: 'DD-MM-YYYY',
    separator: ' To '
  };

  searchInput = {
    licenseCategory: null,
    licenseSubCategory: null,
    startDate: null,
    endDate: null,
  };

  constructor(
    private router: Router,
    private licenseSer: LicenceManagementService,
    private authService: AuthService,
    private alert: AlertService,
    ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.isOfficier = !this.isCustomer;
    this.actionKeys = (this.isCustomer) ? this.actionKeys : ['view'];
    this.searchLicenseApplications();
    if (this.isCustomer) {
      this.columns = LicenseStatusListConfig.customerColumns;
    }
  }

  getNavigateUrlWithAppliNo(licenseId) {
    const filterLicenseObj: any = this.licenseList.find((res) => res.id === licenseId);
    const category = filterLicenseObj.licenseCategory;
    const subCategory = filterLicenseObj.licenseSubCategory;
    const applicationNumber = filterLicenseObj.applicationNumber;
    const navigateLink = this.licenseConsts.LICENSE_URL[category] + '/' + subCategory;
    return { navigateLink, applicationNumber };
  }

  onEdit(event) {
    console.log('onEdit-event::', event);
    const filterLicenseObj: any = this.licenseList.find((res) => res.id === event.id);
    const { status } = filterLicenseObj;

    // STATUS_PENDING_DSC
    if (status === STATUS_PENDING_LICENSE_FEE) {
      this.alert.showError('Your application is waiting for license fee.Please pay the license fee from view page itself');
      return;
    }

    if (status === STATUS_PENDING_DSC) {
      this.alert.showError('Application under processing, so cannot edit the license');
      return;
    }

    if (status === STATUS_APPROVED || status === STATUS_REJECTED) {
      this.alert.showError('Approved/Rejected application can not be edited, Please use view icon to view the data');
      return;
    }

    const result = this.getNavigateUrlWithAppliNo(event.id);
    const { navigateLink, applicationNumber } = result;
    this.router.navigate([navigateLink + '/' + applicationNumber]);
  }

  onView(event) {
    console.log('onView-event::', event);
    const result = this.getNavigateUrlWithAppliNo(event.id);
    const { navigateLink, applicationNumber } = result;
    this.router.navigate([navigateLink + '/' + applicationNumber + '/view']);
  }

  onDownload(event) {
    console.log('onDownload-event::', event);
    const filterLicenseObj: any = this.licenseList.find((res) => res.id === event.id);
    console.log('filterLicenseObj::', filterLicenseObj);
    const { status } = filterLicenseObj;
    if (status !== STATUS_APPROVED) {
      this.alert.showError('Only approved license can download');
      return;
    }

    this.alert.showSuccess('License downloaded successfully');
    return;
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchLicenseApplications(pageNo, pageSize);
  }

  searchLicenseApplications(page = 0, pageSize = 5) {
    const searchObj = {
      searchInput: this.searchInput,
      page,
      pageSize
    };
    this.licenseSer.searchLicenseApplications(searchObj).subscribe((resp: any) => {
      const { responseCode, content: respCont } = resp;
      if (responseCode === 200) {
        const { totalElements, content: respDataCon } = respCont;
        this.totalCount = totalElements;
        this.licenseList = respDataCon;
        this.dataSource.data = respDataCon as License[];
      }
    });
  }

  searchLicense() {
    console.log('searchDateRange::', this.searchDateRange);
    console.log('searchInput::', this.searchInput);

    this.searchInput.startDate = this.searchDateRange.startDate.format('DD/MM/YYYY');
    this.searchInput.endDate = this.searchDateRange.endDate.format('DD/MM/YYYY');
    console.log('asdf-searchInput::', this.searchInput);
    this.searchLicenseApplications();
    return true;
  }

  clearSearch() {
    this.searchDateRange = null;
    this.searchInput = {
      licenseCategory: null,
      licenseSubCategory: null,
      startDate: null,
      endDate: null,
    };
    this.searchLicenseApplications();
    return true;
  }

  // searchLicense(key) {
  //   if (key && key.length >= 3) {
  //     this.searchText = key;
  //     this.searchLicenseApplications();
  //   } else {
  //     console.log('key should be atleaset 3 char');
  //   }
  // }

}
