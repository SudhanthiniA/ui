import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicenceManagementService, AlertService } from '@app/services';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.scss']
})
export class ChallanComponent implements OnInit {
  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;

  licenseConsts = LicenseConstants;
  applicationNumber: any;
  licenseApplicationData: any;
  paymentData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private licenseSer: LicenceManagementService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
      }
    });
    this.loadLicenseData();
    this.findPaymentDetails();
  }

  findPaymentDetails() {
    const { FEE_TYPE_APPLICATION_PROCESSING: feeType } = this.licenseConsts;
    this.licenseSer.findPaymentDetails(this.applicationNumber, feeType).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.paymentData = respContent;
        this.alert.showSuccess(resp.responseMessage, 'Success');
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;
      }
    });
  }

  onOk() {
    this.checkListCloseBtn.nativeElement.click();
    this.router.navigate(['/licencemgnt/wholesale']);
  }

}
