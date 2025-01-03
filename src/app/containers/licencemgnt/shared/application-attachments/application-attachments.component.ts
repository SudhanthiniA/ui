import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface AppliAttachments {
  solvencyCerticateValidity: string;
  additionalDocumentList: [];
}

@Component({
  selector: 'app-application-attachments',
  templateUrl: './application-attachments.component.html',
  styleUrls: ['./application-attachments.component.scss']
})
export class ApplicationAttachmentsComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public appliAttachments: AppliAttachments;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  isFileExists(fileFor) {

    let res = false;
    if (this.appliAttachments) {

      const fileArr = this.appliAttachments.additionalDocumentList;
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor) {

    if (this.appliAttachments) {

      const fileArr = this.appliAttachments.additionalDocumentList;
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
