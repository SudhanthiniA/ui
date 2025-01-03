import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface BoardMemberList {
  aadharNumber: string;
  address: string;
  designation: string;
  fullName: string;
  mobile: string;
  panNumber: string;
  firmCompanyDocumentList: [];
}

@Component({
  selector: 'app-application-board-members',
  templateUrl: './application-board-members.component.html',
  styleUrls: ['./application-board-members.component.scss']
})
export class ApplicationBoardMembersComponent implements OnInit {

  licenseConsts = LicenseConstants;

  @Input()
  public boardMemberList: BoardMemberList;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    console.log('boardMemberList::', this.boardMemberList);
  }

  isFileExists(fileFor, ele) {
    let res = false;
    if (this.boardMemberList) {
      res = ele.firmCompanyDocumentList.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(fileFor, ele) {

    if (this.boardMemberList) {

      const fileObj = ele.firmCompanyDocumentList.find((resp: any) => resp.name === fileFor);

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
