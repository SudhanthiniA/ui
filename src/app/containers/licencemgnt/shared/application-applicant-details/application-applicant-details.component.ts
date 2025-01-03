import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface AppliApplicantDetail {
  salutationDesc: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  genderDesc: string;
  aadharNumber: string;
  emailId: string;
  mobileNumber: string;
  panNumber: string;
  applicantDocumentList: [];
}

interface Address {
  addressIdentifier: string;
  country: string;
  districtCode: string;
  districtDesc: string;
  locality: string;
  localityType: string;
  pinCode: string;
  stateCode: string;
  stateDesc: string;
  street: string;
  tahsilCode: string;
  tahsilDesc: string;
}

@Component({
  selector: 'app-application-applicant-details',
  templateUrl: './application-applicant-details.component.html',
  styleUrls: ['./application-applicant-details.component.scss']
})
export class ApplicationApplicantDetailsComponent implements OnInit {
  
  licenseConsts = LicenseConstants;

  @Input()
  public cardTitle: string;

  @Input()
  public appliApplicantDetail: AppliApplicantDetail;

  @Input()
  public appliApplicantAddr: Address;


  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.appliApplicantDetail) {

      const fileArr = this.appliApplicantDetail.applicantDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.appliApplicantDetail) {

      const fileArr = this.appliApplicantDetail.applicantDocumentList;
      const fileObj = fileArr.find((resp: any) => resp.name === fileFor);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => fileSaver.saveAs(resp, documentName),
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
