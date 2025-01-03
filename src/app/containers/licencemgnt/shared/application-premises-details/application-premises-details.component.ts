import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface PremisesDetail {
  districtCategoryCode: string;
  districtCategoryDesc: string;
  firmName: string;
  numberOfRoomsCode: string;
  numberOfRoomsDesc: string;
  ownershipTypeCode: string;
  ownershipTypeDesc: string;
  premisesDocumentList: [];
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
  selector: 'app-application-premises-details',
  templateUrl: './application-premises-details.component.html',
  styleUrls: ['./application-premises-details.component.scss']
})
export class ApplicationPremisesDetailsComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public premisesDetail: PremisesDetail;

  @Input()
  public premisesAddr: Address;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.premisesDetail) {

      const fileArr = this.premisesDetail.premisesDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.premisesDetail) {

      const fileArr = this.premisesDetail.premisesDocumentList;
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
