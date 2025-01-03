import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface AppliPremisesAddress {
  unitName: string;
  addressDocumentList: [];
}

@Component({
  selector: 'app-application-premises-address',
  templateUrl: './application-premises-address.component.html',
  styleUrls: ['./application-premises-address.component.scss']
})
export class ApplicationPremisesAddressComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public cardTitle: string;

  @Input()
  public appliPremisesAddress: AppliPremisesAddress;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.appliPremisesAddress) {

      const fileArr = this.appliPremisesAddress.addressDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.appliPremisesAddress) {

      const fileArr = this.appliPremisesAddress.addressDocumentList;
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
