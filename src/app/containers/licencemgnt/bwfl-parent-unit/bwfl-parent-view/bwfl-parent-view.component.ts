import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LicenceManagementService, DocumentUploadService,
  AlertService, AuthService, DropdownConfigService,
  ValidationService
} from '@app/services';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';
import {
  LicenseConstants, WorkFlowNameListConstants,
  CheckListCodeConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, STATUS_SENDBACK, STATUS_REJECTED, STATUS_APPROVED,
  COMMENT_ACTION_CLARIFICATION, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO, COMMENT_SENDBACK,
  MODULE_NAME_CODE, LICENSE_URL
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-bwfl-parent-view',
  templateUrl: './bwfl-parent-view.component.html',
  styleUrls: ['./bwfl-parent-view.component.scss']
})
export class BwflParentViewComponent implements OnInit {

  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;

  licConst = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants.BWFL;
  CheckListCodeList = CheckListCodeConstants.BWFL;
  docuPropObj = docuPropObj;

  licenseData: any;
  screenSubType: any;
  applicationNumber: any;

  commentForm: FormGroup;
  sendbackForm: FormGroup;
  checkListForm: FormGroup;

  commandformSub = false;

  licenseComments = [];
  licenseStatus: string;
  licenseStage: string;


  isActionBtnFor = '';
  isCustomer: boolean;
  isOfficier: boolean;
  checkListStatus = false;
  isButtionshow = true;

  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isFinished: boolean;
  isSendBack: boolean;
  sendBackList: any;
  isForwardWithOutApproval: boolean;
  showRemarksSec = false;

  checkList = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dropdownConfigSer: DropdownConfigService,
    private validateSer: ValidationService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  ngOnInit() {
    this.isCustomer = this.authService.isCustomer();
    this.isOfficier = !this.isCustomer;
    this.route.params.subscribe(params => {
      if (params.screenSubType && params.applicationNumber) {
        this.screenSubType = params.screenSubType;
        this.applicationNumber = params.applicationNumber;
      }
    });
    this.loadLicenseData();
    this.createcommentForm();
    this.createCheckListForm();
  }

  back(): void { this.licenseCommonSer.back(); }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  buildCheckListDetFormGroup(data?: any) {
    const basicEle = {
      documentCode: [data.documentCode ? data.documentCode : '', this.validateSer.valiReqOnly],
      documentDesc: [data.documentDesc ? data.documentDesc : '', this.validateSer.valiReqOnly],
      isVerified: [data.isVerified ? data.isVerified : false, this.validateSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  createCheckListForm() {
    const basicEle = {
      applicationNumber: [this.applicationNumber, this.validateSer.valiReqOnly],
      checkListDocument: this.formBuilder.array([]),
    };

    this.checkListForm = this.formBuilder.group(basicEle);
  }

  get getCheckListDocumentFormArray() { return this.checkListForm.get('checkListDocument') as FormArray; }

  updateCheckListDoumentArr(dropDownCheckList) {
    dropDownCheckList.forEach(element => {
      const { paramKey: documentCode, paramValue: documentDesc } = element;
      (this.getCheckListDocumentFormArray as FormArray).push(
        this.buildCheckListDetFormGroup({ documentCode, documentDesc, isVerified: false })
      );
    });
    console.log('updateCheckListDoumentArr::', this.checkListForm);
  }

  updateCheckListDoumentArrIsVerified(apiCheckListData) {

    if (this.checkListStatus === false) {
      console.log('updateCheckListDoumentArrIsVerified.checkListStatus::', this.checkListStatus);
      return;
    }

    const { checkListDocument: apiCheckListDocument } = apiCheckListData;
    let isVerified = false;

    if (apiCheckListDocument) {
      console.log('apiCheckListDocument::', apiCheckListDocument);
      apiCheckListDocument.forEach((ele, idx) => {
        isVerified = ele.isVerified;
        (this.getCheckListDocumentFormArray as FormArray).at(idx).patchValue({ isVerified });
      });
    }
    console.log('updateCheckListDoumentArrIsVerified::', this.checkListForm);
  }

  onCheckListSubmit() {
    console.log('this.checkListForm::', this.checkListForm);
    console.log('this.checkListForm.value::', this.checkListForm.value);

    const form = this.checkListForm;
    if (form.valid === false) {
      this.alert.showError('Please verify the checklist');
      return false;
    }

    const payload: any = this.checkListForm.value;
    payload.level = this.officerLevel;
    payload.status = this.checkListStatus;

    this.licenseSer.saveUpdateCheckList(payload).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        console.log('respContent::', respContent);
        /**
         * reset the checklist status variable for approve enable
         */
        this.checkListStatus = true;
        this.checkListCloseBtn.nativeElement.click();
        this.alert.showSuccess('CheckList Verified');
      } else {
        this.alert.showError('Error in checkList verification');
      }
    });

  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseData = respContent;
        this.getWorkFlowConfig();

        const { status: licenseStatus, stage, commentList } = this.licenseData;
        this.licenseStatus = licenseStatus;
        this.licenseStage = stage;

        this.licenseComments = (this.isOfficier) ? commentList : commentList.filter((res) => this.licenseCommonSer.customerCommentFilter(res) );
        console.log('this.isOfficier:', this.isOfficier);
        console.log('this.licenseComments::', this.licenseComments);

        this.showRemarksSec = this.isOfficier;

        /**
         * for officier only we are hitting the workflow config and checklist api
         */
        if (this.isOfficier) {
          /**
           * initiate the workflow action btns
           */
          this.processFormActions();
          this.getCheckList();
        }
      }
    });
  }

  getWorkFlowConfig() {
    const subModuleCode = this.workFlowNameList[this.screenSubType];
    this.licenseSer.findWorkFlowByModuleAndSubModule(MODULE_NAME_CODE, subModuleCode).subscribe((resp: any) => {
      const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
      if (respCode === 200) {
        if (respCont) {
          this.workFlowConfig = respCont;

          // const { isProcessingFeeRequired }: any = this.workFlowConfig;

        } else {
          this.alert.showError('respCont Not available');
        }
      } else {
        this.alert.showError(respMsg);
      }
    });
  }

  processFormActions() {
    console.log('NEED_OFFICER_ACTION_BUTTONS_WITH_READONLY');
    const workFlowName = this.workFlowNameList[this.screenSubType];
    this.licenseSer.findWorkFlowDetailsByLoginUserDesignation(MODULE_NAME_CODE, workFlowName).subscribe((resp: any) => {
      console.log('findWorkFlowDetailsByLoginUserDesignation-resp::', resp);
      const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
      if (respCode === 200) {
        console.log(respCont);
        if (respCont) {
          const { level, isRejected, isSendBack, sendBackList, isForwardWithOutApproval, isFinished } = respCont;
          this.officerLevel = level;
          this.isRejected = isRejected;
          this.isSendBack = isSendBack;
          this.sendBackList = sendBackList;
          this.isFinished = isFinished;

          this.isForwardWithOutApproval = isForwardWithOutApproval;

          /**
           * once workflow api have some data we need to check checklist status because it need offier level for before appoval by officer
           * and as well as enable the sendbackform controls
           */
          this.getCheckListStatus();
          this.createsendbackForm();

          this.alert.showSuccess('Action Initiated');
        } else {
          this.alert.showError('respCont Not available');
        }
      } else {
        this.alert.showError(respMsg);
      }
    });

  }

  getCheckList() {
    const codeCheckList = this.CheckListCodeList[this.screenSubType];
    this.dropdownConfigSer.findDropDownMaster(codeCheckList).subscribe(
      (res) => {
        this.checkList = res.data ? res.data.downDropDownMasterValueList : [];
        this.updateCheckListDoumentArr(this.checkList);
      }
    );
  }

  getCheckListLogInfo(comment, idx) {
    const { level: commentOfficerLevel, designation } = comment;
    const { checkList } = this.getLicenseData();
    let officerCheckListApiData = (checkList) ? checkList.find((resp: any) => resp.level === commentOfficerLevel) : {};
    officerCheckListApiData = (officerCheckListApiData && officerCheckListApiData.length > 1) ?
      officerCheckListApiData[idx] : officerCheckListApiData;

    let isCustomerComment = true;
    let totCheckListCount = 0;
    let apprCheckListCount = 0;
    const unApprDocCodeArr = [];

    if (checkList && officerCheckListApiData) {
      isCustomerComment = false;
      officerCheckListApiData.checkListDocument.forEach(element => {
        totCheckListCount++;
        if (element.isVerified === true) {
          apprCheckListCount++;
        } else {
          unApprDocCodeArr.push(element.documentDesc);
        }
      });
    }
    return { isCustomerComment, totCheckListCount, apprCheckListCount, unApprDocCodeArr };
  }

  getCheckListStatus() {
    this.licenseSer.findCheckList(this.applicationNumber, this.officerLevel).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200 && respContent) {
        this.checkListStatus = (respContent && respContent.status) ? respContent.status : false;
        this.updateCheckListDoumentArrIsVerified(respContent ? respContent : []);
      }
    });
  }

  async onSubmit(saveType) {
    console.log('onSubmit.saveType::', saveType);

    const commentForm = this.commentForm;
    if (this.isOfficier && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    if (this.isOfficier) {

      if (saveType !== STATUS_SENDBACK) {
        if (saveType === STATUS_APPROVED || saveType === STATUS_REJECTED) {
          if (!this.checkListStatus) {
            this.alert.showError('Please validate the CheckList');
            return;
          }
        }
      }

      const licenseResp: any = await this.createLicense(this.licenseData, saveType);
      if (licenseResp.status) {
        this.router.navigate([viewStatusUrl]);
      }

    }

    return true;
  }

  async createLicense(payload, saveType) {

    console.log('before-payload::', payload);

    payload = await this.getFinalPayload(payload, saveType);
    if (!payload) {
      return false;
    }
    payload.workFlowName = this.workFlowNameList[this.screenSubType];
    console.log('final-payload::', payload);

    let status = false;
    let data = {};
    const licenseCreationRes: any = await this.licenseSer.createLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    console.log('respContent::', respContent);
    if (respCode === 200) {
      this.alert.showSuccess(respMsg, 'Success');
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg, 'error');
    }
    return { status, data };
  }

  async getFinalPayload(payload, saveType) {

    console.log('getFinalPayload-saveType::', saveType);

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    if ( this.isOfficier && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    payload.event = saveType;
    payload.level = this.officerLevel;

    const { comments } = commentForm.value;
    if (comments) {
      payload.comments = comments;
    }

    if (this.isOfficier && saveType === STATUS_SENDBACK ) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }

    return payload;
  }

  async issueLicense() {
    this.processSiteVisitWorkflow();
  }

  processSiteVisitWorkflow() {
    const subModuleNameCode = this.workFlowNameList[this.screenSubType];
    const payload = {
      applicationNumber: this.applicationNumber,
      comments: 'Digital signature released',
      event: 'LICENSE_RELEASE',
      subModuleNameCode
    };
    console.log('processSiteVisitWorkflow-payload::', payload);
    this.licenseSer.processSiteVisitWorkflow(payload).subscribe((resp: any) => {
      console.log('processSiteVisitWorkflow resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.alert.showSuccess(resp.responseMessage);
        this.router.navigate([viewStatusUrl]);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  getLicenseData(): any {
    const { applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails,
      wholeSaleLicenses: licenseObj, checkList } = this.licenseData;
    _.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return { applicationDate, licenseType, licenseObj, addressList, applicantDetails, bankList, checkList };
  }

  getFileArr(propertyName, idx = null) {
    const { licenseObj } = this.getLicenseData();
    // console.log('licenseObj::', licenseObj);
    const propObj = licenseObj[propertyName];
    const docProp = this.docuPropObj[propertyName];
    const fileArr = (idx !== null) ? propObj[idx][docProp] : propObj[docProp];
    return fileArr;
  }

  isFileExists(propertyName, fileFor, idx = null) {

    let res = false;
    if (this.licenseData) {

      const fileArr = this.getFileArr(propertyName, idx);
      res = fileArr.find((resp: any) => resp.name === fileFor);
    }

    return res;
  }

  downloadDocument(propertyName, fileFor) {

    if (this.licenseData) {

      const fileArr = this.getFileArr(propertyName);
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

  buttionvalidate(event){
    console.log('event of clarification field ::',event.target.value);
    this.isButtionshow =(event.target.value !=="")?false: true;
   }

}
