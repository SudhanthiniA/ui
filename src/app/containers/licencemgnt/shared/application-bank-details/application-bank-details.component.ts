import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface AppliBankDetail {
  accountNumber: string;
  ifscCode: string;
  bankCode: string;
  bankName: string;
  bankDocumentList: [];
}

@Component({
  selector: 'app-application-bank-details',
  templateUrl: './application-bank-details.component.html',
  styleUrls: ['./application-bank-details.component.scss']
})
export class ApplicationBankDetailsComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public appliBankDetail: AppliBankDetail;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.appliBankDetail) {

      const fileArr = this.appliBankDetail.bankDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.appliBankDetail) {

      const fileArr = this.appliBankDetail.bankDocumentList;
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
