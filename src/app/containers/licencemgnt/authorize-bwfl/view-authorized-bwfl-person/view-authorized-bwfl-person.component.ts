import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LicenceManagementService, DocumentUploadService,
  AlertService, AuthService, DropdownConfigService,
  UserManagmentService, ValidationService
} from '@app/services';
import {
  LicenseConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

@Component({
  selector: 'app-view-authorized-bwfl-person',
  templateUrl: './view-authorized-bwfl-person.component.html',
  styleUrls: ['./view-authorized-bwfl-person.component.scss']
})
export class ViewAuthorizedBwflPersonComponent implements OnInit {

  licConst = LicenseConstants;

  authPersonData: any;
  authPersonId: any;

  isCustomer: boolean;
  isOfficier: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
    private authService: AuthService,
    private dropdownConfigSer: DropdownConfigService,
    private userManageSer: UserManagmentService,
    private validateSer: ValidationService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.isOfficier = !this.isCustomer;
    this.route.params.subscribe(params => {
      console.log('params::', params);
      if (params.authPersonId) {
        this.authPersonId = params.authPersonId;
      }
    });
    this.loadAuthPersonData();
  }

  back(): void { this.licenseCommonSer.back(); }

  loadAuthPersonData() {
    this.licenseSer.findAuthorizedPersonDetails(this.authPersonId).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.authPersonData = respContent;
      }
    });
  }

  getFileArr() {
    const propObj = this.authPersonData;
    const docProp = 'authorizedPersonDocumentList';
    const fileArr = propObj[docProp];
    return fileArr;
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.authPersonData) {

      const fileArr = this.getFileArr();
      res = fileArr.find((resp: any) => resp.name === fileFor) ? true : false;
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.authPersonData) {

      const fileArr = this.getFileArr();
      const fileObj = fileArr.find((resp: any) => resp.name === fileFor);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => this.licenseCommonSer.fileSaver(resp, documentName),
          (error: any) => this.alert.showError('Error downloading the file'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available');
      }
    } else {
      this.alert.showError('File details not found');
    }
  }

}
