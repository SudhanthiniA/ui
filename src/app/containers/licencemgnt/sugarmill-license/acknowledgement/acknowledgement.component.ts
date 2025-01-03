import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AuthService,
  AlertService,
  StatemasterService,
  DistrictMasterService,
  MunicipalityMasterService,
  VillageMasterService,
  BlockMasterService,
  TalukMasterService,
  LicenceManagementService,
  DocumentUploadService,
  CountrymasterService
} from '@app/services';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss']
})
export class AcknowledgementComponent implements OnInit {

  applicationNumber: string;
  licenseApplicationData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private licenseSer: LicenceManagementService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('params.screenSubType::', params);
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
      }
    });
    this.loadLicenseData();
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;

        this.alert.showSuccess(resp.responseMessage, 'Success');

      } else {
        this.alert.showError(resp.responseMessage, 'Error');
      }
    });
  }

}
