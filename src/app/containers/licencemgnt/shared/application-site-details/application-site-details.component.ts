import { Component, OnInit, Input } from '@angular/core';
import { DocumentUploadService, AlertService } from '@app/services';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

interface SiteDetail {
  latitude: string;
  longitude: string;
  east: string;
  north: string;
  south: string;
  west: string;
  isCustomer: boolean;
  documentList: [];
}

@Component({
  selector: 'app-application-site-details',
  templateUrl: './application-site-details.component.html',
  styleUrls: ['./application-site-details.component.scss']
})
export class ApplicationSiteDetailsComponent implements OnInit {

  @Input()
  public siteDetail: SiteDetail;

  constructor(
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
  }

  downloadDocument(ele) {

    if (this.siteDetail) {

      const { uuid, documentName } = ele;

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
