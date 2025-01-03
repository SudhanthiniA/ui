import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LicenceManagementService, AlertService, DropdownConfigService } from '@app/services';
import { LicenseConstants, WorkFlowNameListConstants } from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';
const {
  CODE_PAYMENT_TYPE, DISTI_BOTTL_LICENSE_CATEGORY, MODULE_NAME_CODE,
  STR_LICENCE_FEE, STR_PROCESSING_FEE,
  FEE_TYPE_APPLICATION_PROCESSING, FEE_TYPE_LICENSE_PROCESSING,
  MSG_NO_RESP, MSG_NO_PAYMENT_METHOD, LICENSE_URL
} = LicenseConstants;
const { ACKNOWLEDGEMENT: acknowledgementUrl } = LICENSE_URL;

export class PAYMENTTYPE {
  paramKey: string;
  paramValue: string;
}

@Component({
  selector: 'app-online-payment',
  templateUrl: './online-payment.component.html',
  styleUrls: ['./online-payment.component.scss']
})
export class OnlinePaymentComponent implements OnInit {

  licenseConsts = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants;

  applicationNumber: any;
  licenseApplicationData: any;
  paymentTypeList: PAYMENTTYPE[];
  payTypeSel: any;
  payTypeSelected = 'WALLET';

  workFlowConfig: object;
  feeText = '';
  feeType: string;
  paymentAmount = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private licenseSer: LicenceManagementService,
    private dropdownConfigSer: DropdownConfigService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.applicationNumber) {
        this.applicationNumber = params.applicationNumber;
      }
    });

    this.getPaymentTypeList();
    this.loadLicenseData();
  }

  back(): void { this.licenseCommonSer.back(); }
  getSelectedPaymentType(paramKey) { this.payTypeSel = this.paymentTypeList.find(Item => Item.paramKey === paramKey); }
  onItemChange(item) { this.getSelectedPaymentType(item.paramKey); }

  getPaymentTypeList() {
    this.dropdownConfigSer.findDropDownMaster(CODE_PAYMENT_TYPE).subscribe(
      (res) => {
        this.paymentTypeList = res.data ? res.data.downDropDownMasterValueList : [];
        this.getSelectedPaymentType(this.payTypeSelected);
      }
    );
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseApplicationData = respContent;
        this.getWorkFlowConfig();
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  getWorkFlowConfig() {
    const { licenseCategory, licenseSubCategory } = this.licenseApplicationData;
    const subModuleCode = this.workFlowNameList[licenseCategory][licenseSubCategory];
    this.licenseSer.findWorkFlowByModuleAndSubModule(MODULE_NAME_CODE, subModuleCode).subscribe((resp: any) => {
      const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
      if (respCode === 200) {
        console.log(respCont);
        if (respCont) {
          this.workFlowConfig = respCont;

          const { isProcessingFeeRequired, isLicenseFeeRequired }: any = this.workFlowConfig;
          const { paymentProcessingFee, isProcessingFeePaid, isLicenseFeePaid } = this.licenseApplicationData;

          switch (licenseCategory) {
            case DISTI_BOTTL_LICENSE_CATEGORY:
              this.feeText = STR_LICENCE_FEE;
              this.feeType = FEE_TYPE_LICENSE_PROCESSING;
              this.paymentAmount = paymentProcessingFee * 100;
              break;

            default:
              const isfeeReqPaid = (isProcessingFeeRequired && !isProcessingFeePaid);
              this.feeText = (isfeeReqPaid) ? STR_PROCESSING_FEE : STR_LICENCE_FEE;
              this.feeType = (isfeeReqPaid) ? FEE_TYPE_APPLICATION_PROCESSING : FEE_TYPE_LICENSE_PROCESSING;
              this.paymentAmount = (isfeeReqPaid) ? paymentProcessingFee : paymentProcessingFee * 100;
              break;
          }
        } else {
          this.alert.showError(MSG_NO_RESP);
        }
      } else {
        this.alert.showError(respMsg);
      }
    });
  }

  onPayment() {

    if (this.payTypeSel) {
      const { paramKey: modeOfPayment } = this.payTypeSel;
      const { licenseCategory, licenseSubCategory } = this.licenseApplicationData;
      const payload = {
        applicationNumber: this.applicationNumber,
        licenseCategory,
        licenseSubCategory,
        modeOfPayment,
        feeType: this.feeType,
        paymentAmount: this.paymentAmount
      };
      this.licenseSer.saveUpdatePaymentDetails(payload).subscribe((resp: any) => {
        console.log('resp::', resp);
        const { responseCode: respCode, content: respContent } = resp;
        if (respCode === 200) {
          this.alert.showSuccess(resp.responseMessage);
          this.router.navigate([acknowledgementUrl + this.applicationNumber]);
        } else {
          this.alert.showError(resp.responseMessage);
        }
      });
    } else {
      this.alert.showError(MSG_NO_PAYMENT_METHOD);
    }
  }

}
