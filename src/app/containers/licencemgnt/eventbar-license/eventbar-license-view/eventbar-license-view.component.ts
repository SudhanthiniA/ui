import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LicenceManagementService, DocumentUploadService, AlertService,
  AuthService, DropdownConfigService, ValidationService
} from '@app/services';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';
import { LicenseConstants, WorkFlowNameListConstants, CheckListCodeConstants } from '@app/containers/licencemgnt/license.constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-eventbar-license-view',
  templateUrl: './eventbar-license-view.component.html',
  styleUrls: ['./eventbar-license-view.component.scss']
})
export class EventbarLicenseViewComponent implements OnInit {
  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;

  licenseConsts = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants.EVENT_BAR;
  CheckListCodeList = CheckListCodeConstants.EVENT_BAR;
  docuPropObj = this.licenseConsts.docuPropObj;

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

  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isSendBack: boolean;
  isFinished: boolean;
  isForwardWithOutApproval: boolean;
  sendBackList: any;

  checkList = [];
  shopForm: FormGroup;
  valiReqOnly = [Validators.required];
  public readonly FF_SHOP = 'SalesmanFiles';

  fileArr = { [this.FF_SHOP]: [] };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private dropdownConfigSer: DropdownConfigService,
    private modalService: NgbModal,
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
    this.createSiteDetForm();
    this.createCheckListForm();
  }

  back(): void { this.licenseCommonSer.back(); }

  getForm() { return this.shopForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getshopDetFormCntr() { return this.getFormCntr('shopDetList'); }
  shopDetFormGroup() {
    const basicEle = {
      photo: ['', this.validateSer.valiReqOnly],
      description: ['', this.validateSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }
  addShopRow() { (this.getshopDetFormCntr() as FormArray).push(this.shopDetFormGroup()); }
  remShopRow(idx: number) { (this.getshopDetFormCntr() as FormArray).removeAt(idx); }
  getShopLen(): number { return (this.getshopDetFormCntr() as FormArray).length; }

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
    console.log('this.checkListForm::', this.checkListForm);
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
    console.log('this.checkListForm::', this.checkListForm);
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

  createSiteDetForm() {
    this.shopForm = this.formBuilder.group({
      shopDetList: this.formBuilder.array([
        this.shopDetFormGroup()
      ])
    });
  }

  onShopFileChange(event, secName, idx, salemanCntrl, sourceName, fileFor) {
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, salemanCntrl);
    if (!fileUpRes) {
      return false;
    }

    if (this.fileArr[secName][idx]) {
      this.fileArr[secName][idx].push(sourceName);
    } else {
      this.fileArr[secName][idx] = [];
      this.fileArr[secName][idx].push(sourceName);
    }

  }

  onFileChange(event, sourceName, fileFor, formControl) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      file.fileFor = fileFor;
      formControl.patchValue({ [sourceName]: file });
      return true;
    }
    return false;
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseData = respContent;
        console.log('commentList', this.licenseData.commentList);
        const { COMMENT_SENDBACK, COMMENT_SENDBACK_SITE_INFO, COMMENT_ACTION_REJECTED } = this.licenseConsts;
        // this.licenseComments = this.licenseData.commentList;
        this.licenseComments = (this.isOfficier) ? this.licenseData.commentList : this.licenseData.commentList.filter(
          (res) => this.licenseCommonSer.customerCommentFilter(res) );
        console.log('this.isOfficier:', this.isOfficier);
        this.licenseStatus = this.licenseData.status;
        this.licenseStage = this.licenseData.stage;
        /**
         * for officier only we are hitting the workflow config and checklist api
         */
        if (this.isOfficier) {
          this.processFormActions();
          this.getCheckList();
        }
      }
    });
  }

  processFormActions() {
    console.log('NEED_OFFICER_ACTION_BUTTONS_WITH_READONLY');

    const { MODULE_NAME_CODE } = this.licenseConsts;
    const workFlowName = this.workFlowNameList[this.screenSubType];
    this.licenseSer.findWorkFlowDetailsByLoginUserDesignation(MODULE_NAME_CODE, workFlowName).subscribe((resp: any) => {
      console.log('resp::', resp);
      const { responseCode: respCode, responseMessage: respMsg, content: respCont } = resp;
      if (respCode === 200) {
        console.log(respCont);
        if (respCont) {
          const { level, isRejected, isSendBack, sendBackList, isFinished, isForwardWithOutApproval } = respCont;
          this.officerLevel = level;
          this.isRejected = isRejected;
          this.isSendBack = isSendBack;
          this.sendBackList = sendBackList;
          this.isFinished = isFinished;
          this.isForwardWithOutApproval = isForwardWithOutApproval;

          /**
           * once workflow api have some data we need to check checklist status for before appoval by officer 
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
      console.log('resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200 && respContent) {
        console.log('respContent::', respContent);
        this.checkListStatus = (respContent && respContent.status) ? respContent.status : false;
        this.updateCheckListDoumentArrIsVerified(respContent ? respContent : []);
      }
    });
  }

  onSubmit(saveType) {
    console.log('this.checkListStatus::', this.checkListStatus);

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    if (saveType === this.licenseConsts.STATUS_SENDBACK) {
      if (!sendbackForm.valid) {
        this.alert.showError('Please select user to clarify');
        return;
      }
    } else {
      if (!this.checkListStatus) {
        this.alert.showError('Please validate the CheckList');
        return;
      }
    }

    if (!commentForm.valid) {
      this.commandformSub = true;
      return false;
    }

    this.submitLicense(saveType);
  }

  async submitLicense(saveType) {
    console.log('saveType::', saveType);

    let payload = this.licenseData;
    console.log('before-payload::', payload);
    payload = await this.getFinalPayload(payload, saveType);
    if (!payload) {
      console.log('payload problem');
      return false;
    }
    payload.workFlowName = this.licenseConsts.EVENT_BAR_FL11_WORKFLOW_NAME;
    console.log('final-payload::', payload);

    const modalRef = this.modalService.open(CommonPopupComponent);
    modalRef.result.then(respData => {
      if (respData) {
        const licenseCreationRes: any = this.licenseSer.createLicense(payload).then((resp: any) => {
          const { responseCode: respCode, responseMessage: respMsg, content: respContent } = resp;
          if (respCode === 200) {
            this.alert.showSuccess(respMsg);
            this.router.navigate(['/licencemgnt/viewLicenseStatus']);
          } else {
            this.alert.showError(respMsg);
          }
        });
      }
    });
  }

  async getFinalPayload(payload, saveType) {

    const commentForm = this.commentForm;
    const sendbackForm = this.sendbackForm;

    const { comments } = commentForm.value;

    if (commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    const { STATUS_APPROVED, STATUS_SENDBACK, STATUS_REJECTED } = this.licenseConsts;
    payload.event = saveType;
    payload.level = this.officerLevel;

    if (comments) {
      payload.comments = comments;
    }

    if (saveType === STATUS_SENDBACK) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }

    return payload;
  }

  getLicenseData(): any {
    const { applicationDate, licenseType, addressList, applicantDetails, bankList, 
      eventBarLicenses: licenseObj, checkList } = this.licenseData;
    _.mergeWith(licenseObj, { addressList, applicantDetails, bankList });

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
}
