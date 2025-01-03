import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  LicenceManagementService,
} from '@app/services';
import { LicenseConstants, WorkFlowNameListConstants } from '@app/containers/licencemgnt/license.constants';

const {
  STATUS_SAVE, STATUS_SENDBACK, STATUS_PENDING_LICENSE_FEE, STATUS_PENDING_SITE_INFO,
  WHOLESALE_LICENSE_CATEGORY, EVENT_BAR_LICENSE_CATEGORY, HBR_LICENSE_CATEGORY, BWFL_PARENT_LICENSE_CATEGORY,
  BOND_WAREHOUSE_LICENSE_CATEGORY, DISTI_BOTTL_LICENSE_CATEGORY, LICENSE_URL,
  WHOLESALE_ID3_SUBCATEGORY, WHOLESALE_FL2A_SUBCATEGORY,
  EVENT_PENDING_SITE_INFO, EVENT_PENDING_DSC
} = LicenseConstants;

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss']
})
export class AcknowledgementComponent implements OnInit {

  licenseConsts = LicenseConstants;
  applicationNumber: string;
  licenseApplicationData: any;
  headingText: string;
  workFlowNameListConstants = WorkFlowNameListConstants;
  secShowHide: string;
  showPaymentInfo = false;

  public readonly HEAD_WITH_PAYMENT = 'Payment process completed successfully';
  public readonly HEAD_WITH_OUT_PAYMENT = 'Application Submitted Successfully';

  /**
   * this page for following use cases
   * 1.After processing payment
   *  status : SAVE, isProcessingFeePaid: true
   * 2.Without processing payment
   *  status : SAVE, isProcessingFeePaid: false
   * 3.after sendback if or not processing payment
   *  status : SENDBACK
   * 
   * CODE: SAVE_WITH_PROCESSING_FEE, SAVE_WITHOUT_PROCESSING_FEE,
   * SENDBACK_WITH_OR_WITHOUT_PROCESSING_FEE, STATUS_PENDING_LICENSE_FEE_WITH_LICENSE_FEE
   */

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
        this.initateProcess();
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  initateProcess() {
    const { status, licenseCategory, licenseSubCategory, isProcessingFeePaid, isLicenseFeePaid } = this.licenseApplicationData;

    switch (licenseCategory) {
      case HBR_LICENSE_CATEGORY:
      case BWFL_PARENT_LICENSE_CATEGORY:
      case BOND_WAREHOUSE_LICENSE_CATEGORY:
        if (status === STATUS_SAVE && isProcessingFeePaid) {
          this.showPaymentInfo = true;
          this.initateWorkflow();
        }

        if (status === STATUS_PENDING_LICENSE_FEE && isLicenseFeePaid) {
          this.showPaymentInfo = true;
          this.processSiteVisitWorkflow();
        }

        if (status === STATUS_PENDING_SITE_INFO) {
          this.processSiteVisitWorkflow();
        }
        break;
      case EVENT_BAR_LICENSE_CATEGORY:
        if (status === STATUS_SAVE && isLicenseFeePaid) {
          this.showPaymentInfo = true;
          this.initateWorkflow();
        }
        break;
      case WHOLESALE_LICENSE_CATEGORY:
        if (status === STATUS_SAVE && isProcessingFeePaid) {
          this.showPaymentInfo = true;
          this.initateWorkflow();
        }
        if (status === STATUS_SAVE && isLicenseFeePaid) {
          this.showPaymentInfo = true;
          this.initateWorkflow();
        }

        if (status === STATUS_SAVE && licenseSubCategory === WHOLESALE_FL2A_SUBCATEGORY) {
          this.initateWorkflow();
        }

        if (status === STATUS_PENDING_LICENSE_FEE && isLicenseFeePaid) {
          this.showPaymentInfo = true;
          this.processSiteVisitWorkflow();
        }
        if (status === STATUS_PENDING_SITE_INFO) {
          this.processSiteVisitWorkflow();
        }
        break;
      case DISTI_BOTTL_LICENSE_CATEGORY:
        if (status === STATUS_SAVE && isLicenseFeePaid) {
          this.showPaymentInfo = true;
          this.initateWorkflow();
        }
        break;
    }

    if (status === STATUS_SENDBACK) {
      this.initateWorkflow();
    }

    this.headingText = (this.showPaymentInfo) ? this.HEAD_WITH_PAYMENT : this.HEAD_WITH_OUT_PAYMENT;
    return true;

  }

  initateWorkflow() {
    const { licenseCategory, licenseSubCategory } = this.licenseApplicationData;
    const subModuleNameCode = this.workFlowNameListConstants[licenseCategory][licenseSubCategory];
    const payload = {
      applicationNumber: this.applicationNumber,
      comments: 'Payment done and initiating customer workflow', // License pay paid intiating digital signature
      event: 'INITIATE',
      level: 'Level 1',
      subModuleNameCode
    };
    console.log('payload::', payload);
    this.licenseSer.initiateApplicationWorkFlow(payload).subscribe((resp: any) => {
      console.log('initiateApplicationWorkFlow resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.alert.showSuccess(resp.responseMessage);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  processSiteVisitWorkflow() {
    const { licenseCategory, licenseSubCategory, status } = this.licenseApplicationData;
    const subModuleNameCode = this.workFlowNameListConstants[licenseCategory][licenseSubCategory];
    const payload = {
      applicationNumber: this.applicationNumber,
      comments: 'License pay paid initiating digital signature',
      event: (licenseSubCategory === WHOLESALE_FL2A_SUBCATEGORY) ? EVENT_PENDING_SITE_INFO : EVENT_PENDING_DSC,
      subModuleNameCode
    };
    console.log('processSiteVisitWorkflow-payload::', payload);
    this.licenseSer.processSiteVisitWorkflow(payload).subscribe((resp: any) => {
      console.log('processSiteVisitWorkflow resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.alert.showSuccess(resp.responseMessage);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  onOk() {
    const { licenseCategory } = this.licenseApplicationData;
    const redirectUrl = LICENSE_URL[licenseCategory];
    this.router.navigate([redirectUrl]);
  }

}
