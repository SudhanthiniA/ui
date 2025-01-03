import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LicenceManagementService, DocumentUploadService, 
  AlertService, AuthService, DropdownConfigService,
  UserManagmentService, ValidationService } from '@app/services';
import {
  LicenseConstants, WorkFlowNameListConstants,
  CheckListCodeConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  docuPropObj, FF_SITE_DOCUMENT, PROP_SITE_DOCUMENT,
  STATUS_DRAFT, STATUS_SENDBACK, STATUS_REJECTED, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, STATUS_PENDING_LICENSE_FEE, STATUS_APPROVED_SITE_VISIT,
  STATUS_REJECTED_SITE_VISIT, STATUS_SEND_BACK_REJECTED_SITE_VISIT, STATUS_FORWARD_REJECTED_SITE_VISIT,
  STATUS_RECONSIDER_REJECTED_SITE_VISIT, STATUS_PENDING_SITE_VISIT,
  EVENT_SENDBACK_SITE_INFO, EVENT_SITE_VISIT_OFFICER_ASSIGMENT, EVENT_LICENSE_RELEASE,
  COMMENT_ACTION_CLARIFICATION, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO, COMMENT_SENDBACK,
  MODULE_NAME_CODE, HBR_LICENSE_CATEGORY,
  STR_CUSTOMER, STR_LEVEL_ONE, STR_MODULE_NAME, LICENSE_URL
} = LicenseConstants;

@Component({
  selector: 'app-bwfl-license-view',
  templateUrl: './bwfl-license-view.component.html',
  styleUrls: ['./bwfl-license-view.component.scss']
})
export class BwflLicenseViewComponent implements OnInit {

  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;
  @ViewChild('assignSiteOfficierCloseBtn', { static: false }) assignSiteOfficierCloseBtn;

  licConst = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants.WAREHOUSE;
  CheckListCodeList = CheckListCodeConstants.WAREHOUSE;
  docuPropObj = docuPropObj;

  licenseData: any;
  screenSubType: any;
  applicationNumber: any;
  isSiteInfoFormEnable = false;
  isSiteInfoSecEnable = false;

  commentForm: FormGroup;
  sendbackForm: FormGroup;
  checkListForm: FormGroup;
  siteDetForm: FormGroup;
  assignSiteOfficierForm: FormGroup;

  commandformSub = false;
  siteDetformSub = false;
  assignSiteOfficierformSub = false;

  licenseComments = [];
  licenseStatus: string;
  licenseStage: string;
  customerSiteDetails: any = {};
  officierSiteDetails: any = {};

  officierRoleList = [];
  officiersList = [];

  isActionBtnFor = '';
  isCustomer: boolean;
  isOfficier: boolean;
  checkListStatus = false;
  isAssignSiteOfficier = false;
  isButtionshow = true;


  workFlowConfig: object;
  officerLevel: string;
  isRejected: boolean;
  isFinished: boolean;
  isSendBack: boolean;
  sendBackList: any;
  isForwardWithOutApproval: boolean;
  isSiteVisitOfficer: boolean;
  showAppicantSiteVisitForm = false;
  showOfficierSiteVisitForm = false;
  showAppicantSiteVisitDet = false;
  showOfficierSiteVisitDet = false;
  showRemarksSec = false;
  showAssignOfficerSec = false;

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
    private userManageSer: UserManagmentService,
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
  getSiteDetForm() { return this.siteDetForm; }
  get siteDetFormControls() { return this.siteDetForm.controls; }
  get siteDocumentFormControls() { return (this.siteDetFormControls[PROP_SITE_DOCUMENT] as FormArray).controls; }
  getSiteDetFormCntr(element) { return this.getSiteDetForm().get(element); }
  getSiteDocumentFormCntr() { return this.getSiteDetFormCntr(PROP_SITE_DOCUMENT); }

  // Modified by :: ss
  getSitedocCntrIdxIns(idx) { return (this.getSiteDocumentFormCntr() as FormArray).at(idx); }
  getSitedocCntrIdx(idx, element = '') { return (element) ? this.getSitedocCntrIdxIns(idx).get(element) : this.getSitedocCntrIdxIns(idx); }

  addSiteDocumentRow() { (this.getSiteDocumentFormCntr() as FormArray).push(this.validateSer.buildSiteDocumentFormGroup()); }
  remSiteDocumentRow(idx: number) { (this.getSiteDocumentFormCntr() as FormArray).removeAt(idx); }
  getSiteDocumentLen(): number { return (this.getSiteDocumentFormCntr() as FormArray).length; }

  getSiteDocumentByIdxFormCntr(idx, element = null) {
    const inst = this.getSiteDocumentFormCntr().get(idx);
    return (element) ? inst.get(element) : inst;
  }
  createSiteDetForm(data?: any) { this.siteDetForm = this.validateSer.buildSiteDetFormGroup(data); }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  createCheckListForm(data?: any) { this.checkListForm = this.validateSer.buildCheckListFormGroup(this.applicationNumber,data); }
  get getCheckListDocumentFormArray() { return this.checkListForm.get('checkListDocument') as FormArray; }

  updateCheckListDoumentArr(dropDownCheckList) {
    dropDownCheckList.forEach(element => {
      const { paramKey: documentCode, paramValue: documentDesc } = element;
      (this.getCheckListDocumentFormArray as FormArray).push(
        this.validateSer.buildCheckListDetFormGroup({ documentCode, documentDesc, isVerified: false })
      );
    });
    console.log('updateCheckListDoumentArr::', this.checkListForm);
  }

  updateCheckListDoumentArrIsVerified(apiCheckListData) {

    if (this.checkListStatus === false){
      console.log('updateCheckListDoumentArrIsVerified.checkListStatus::', this.checkListStatus);
      return;
    }

    const { checkListDocument: apiCheckListDocument } = apiCheckListData;
    let isVerified = false;

    if (apiCheckListDocument) {
      console.log('apiCheckListDocument::', apiCheckListDocument);
      apiCheckListDocument.forEach(( ele , idx ) => {
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

  getAssignSiteForm() { return this.assignSiteOfficierForm; }
  getAssignSiteFormCntr(element = '') {
    const inst = this.getAssignSiteForm();
    return (element) ? inst.get(element) : inst;
  }
  createAssignSiteForm(data?: any) { this.assignSiteOfficierForm = this.validateSer.buildAssignSiteFormGroup(data); }

  getAssignSiteDistrict() {
    this.licenseSer.findApplicationDistrict(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        console.log('getAssignSiteDistrict-respContent::', respContent);
        this.getAssignSiteFormCntr().patchValue({
          districtCode: respContent[0].districtCode,
          districtDesc: respContent[0].districtDesc
        });
      } else {
        this.alert.showError('Error in getting site officer district');
      }
    });
  }

  getAssignSiteRoles() {
    const payload = {
      page: 0,
      pageSize: 100
    };
    this.userManageSer.getAllActiveRoles(payload).subscribe((respData: any) => {
      const { responseCode: respCode, content: respContent } = respData;
      if (respCode === 200) {
        this.officierRoleList = (respContent.content) ? respContent.content : [];
      } else {
        this.alert.showError('Error in loading assign officier roles');
      }
    });
  }

  getAssignSiteOfficiers(roleCode) {

    this.userManageSer.getUserByRole(roleCode).subscribe((respData: any) => {
      const { responseCode: respCode, content: respContent } = respData;
      if (respCode === 200) {
        this.officiersList = (respContent) ? respContent : [];
      } else {
        this.alert.showError('Error in loading assign officier roles');
      }
    });
  }

  onAssignSiteRoleChange(roleCode) {
    const officierRoleObj = this.officierRoleList.find((resp: any) => resp.roleCode === roleCode);
    this.getAssignSiteOfficiers(roleCode);
    this.getAssignSiteFormCntr().patchValue({ roleDesc: officierRoleObj.roleName});
  }

  onAssignSiteOfficierChange(username) {
    const officiersObj = this.officiersList.find((resp: any) => resp.username === username);
    this.getAssignSiteFormCntr().patchValue({
      userEmail: officiersObj.email,
      name: officiersObj.firstName + ' ' + officiersObj.lastName,
      designationCode: officiersObj.designationCode,
      designationDesc: officiersObj.designationDesc
    });
  }

  onAssignSiteSubmit() {
    console.log('this.assignSiteOfficierForm::', this.assignSiteOfficierForm);
    console.log('this.assignSiteOfficierForm.value::', this.assignSiteOfficierForm.value);

    const form = this.assignSiteOfficierForm;
    if (form.valid === false) {
      this.assignSiteOfficierformSub = true;
      return false;
    }

    const payload: any = this.assignSiteOfficierForm.value;
    payload.applicationNumber = this.applicationNumber;
    if (this.licenseData.licenseSiteVisitOfficer) {
      payload.id = this.licenseData.licenseSiteVisitOfficer.id;
      payload.createdBy = this.licenseData.licenseSiteVisitOfficer.createdBy;
      payload.createdDate = this.licenseData.licenseSiteVisitOfficer.createdDate;
    }

    console.log('onAssignSiteSubmit-payload::', payload);

    this.licenseSer.saveSiteVisitOfficer(payload).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        console.log('respContent::', respContent);
        this.licenseData.licenseSiteVisitOfficer = respContent;
        this.assignSiteOfficierCloseBtn.nativeElement.click();
        this.alert.showSuccess('Officier assigned successfully');
      } else {
        this.alert.showError('Error in assign officier');
      }
    });

  }

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    this.licenseCommonSer.onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor);
  }

  loadLicenseData() {
    this.licenseSer.findLicenseApplication(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseData = respContent;
        this.getWorkFlowConfig();
        const { status: licenseStatus, stage, siteDetails, commentList, licenseSiteVisitOfficer } = this.licenseData;
        this.licenseStatus = licenseStatus;
        this.licenseStage = stage;

        this.customerSiteDetails = siteDetails.find((res) => res.isCustomer === true);
        this.officierSiteDetails = siteDetails.find((res) => res.isCustomer === false);
        this.licenseComments = (this.isOfficier) ? commentList : commentList.filter((res) => {
          // customerCommentArr.includes(res.actionKey) && res.sendBackTo === 'Level 1'
          if (res.actionKey === COMMENT_SENDBACK && res.sendBackTo === STR_LEVEL_ONE) {
            return true;
          } else if (res.actionKey === COMMENT_ACTION_REJECTED || res.actionKey === COMMENT_SENDBACK_SITE_INFO) {
            return true;
          } else {
            return false;
          }
        } );
        console.log('this.isOfficier:', this.isOfficier);
        console.log('this.licenseComments::', this.licenseComments);

        if (
          licenseStatus === STATUS_PENDING_SITE_INFO &&
          ( licenseSiteVisitOfficer == null || (licenseSiteVisitOfficer && licenseSiteVisitOfficer.isProceed === false) )
        ) {
          this.isAssignSiteOfficier = true;
          this.createAssignSiteForm();
          this.getAssignSiteDistrict();
          this.getAssignSiteRoles();

          if (licenseSiteVisitOfficer) {
            this.getAssignSiteOfficiers(licenseSiteVisitOfficer.roleCode);
            this.assignSiteOfficierForm.patchValue(licenseSiteVisitOfficer);
          }
        }

        this.showRemarksSec = this.isOfficier ? true : (
          this.licenseStage === STR_CUSTOMER && (licenseStatus === STATUS_SENDBACK_SITE_INFO || licenseStatus === STATUS_SENDBACK) );

        this.showAppicantSiteVisitDet = this.customerSiteDetails && licenseStatus !== STATUS_SENDBACK_SITE_INFO;
        this.showOfficierSiteVisitDet = this.officierSiteDetails && this.isOfficier && licenseStatus !== STATUS_PENDING_SITE_VISIT;

        this.showAppicantSiteVisitForm = (
          this.isCustomer &&
          (licenseStatus === STATUS_PENDING_SITE_INFO || licenseStatus === STATUS_SENDBACK_SITE_INFO) &&
          licenseSiteVisitOfficer && licenseSiteVisitOfficer.isProceed === true
        ) ? true : false;

        this.showOfficierSiteVisitForm = (this.isOfficier && licenseStatus === STATUS_PENDING_SITE_VISIT) ? true : false;

        if (this.showAppicantSiteVisitForm || this.showOfficierSiteVisitForm) {
          this.createSiteDetForm();

          if (this.customerSiteDetails || this.officierSiteDetails) {
            this.patchSiteVisit();
          }
        }

        if (licenseSiteVisitOfficer && licenseSiteVisitOfficer.isProceed === true) {
          this.showAssignOfficerSec = this.isOfficier ? true : false;
        }

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
        console.log('this.showAssignOfficerSec::', this.showAssignOfficerSec);
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

  patchSiteVisit() {

    const siteDetails = (this.isCustomer) ? this.customerSiteDetails : this.officierSiteDetails;
    if (siteDetails) {

      this.siteDetForm.patchValue(siteDetails);

      this.remSiteDocumentRow(0);
      siteDetails.documentList.forEach(element => {
        (this.getSiteDocumentFormCntr() as FormArray).push(this.validateSer.buildSiteDocumentFormGroup(element));
      });
    }
  }

  isSiteDocFileExists(propertyName, idx) {
    return this.licenseCommonSer.isSiteDocFileExists(
      this.isCustomer, this.licenseData, this.customerSiteDetails, this.officierSiteDetails, propertyName, idx);
  }

  downloadSiteDocument(propertyName, idx) {
    return this.licenseCommonSer.downloadSiteDocument(
      this.isCustomer, this.licenseData, this.customerSiteDetails, this.officierSiteDetails, propertyName, idx);
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

  getCheckListLogInfo( comment, idx ) {
    this.licenseCommonSer.getCheckListLogInfo( (this.licenseData ? this.licenseData.checkList : []), comment, idx );
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

  async createFormData(applicationNo, files, formCntrl) {

    if (files.length === 0) {
      return [];
    }

    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const fileStr = files[i];
      const fileSrc = formCntrl.get(fileStr).value;

      formData.append('files[' + i + '].name', fileSrc.fileFor);
      formData.append('files[' + i + '].file', fileSrc);
    }

    formData.append('moduleName', STR_MODULE_NAME);
    formData.append('screenName', 'hbr');
    formData.append('applicationNumber', applicationNo);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async uploadSiteDocumentFiles(applicationNo) {
    const files = this.licenseCommonSer.viewFileArr[FF_SITE_DOCUMENT];
    const allUpRes = [];

    console.log('files::', files);

    if (files.length === 0) {
      return [];
    }

    for (let idx = 0; idx < files.length; idx++) {
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getSiteDocumentFormCntr()['controls'][idx];
      const fileArr = files[idx];
      const upRes = await this.createFormData(applicationNo, fileArr, formCntrl);
      allUpRes.push(upRes);
    }
    return allUpRes;
  }

  async addLicenseSiteDet(saveType, applicationNo) {
    this.siteDetformSub = false;
    const form = this.siteDetForm;
    console.log('this.siteDetForm.valid::', form.valid);
    console.log('this.siteDetForm.value::', form.value);
    console.log('this.siteDetForm::', form);

    if (saveType !== STATUS_DRAFT && form.valid === false) {
      this.siteDetformSub = true;
      return false;
    }

    const formValue = form.value;
    const {
      documentList: formValdocumentList
    } = formValue;

    const documentListProp = [
      'site_photo_file', 'site_photo_file_source'
    ];

    documentListProp.forEach((ele) => formValdocumentList.forEach((documentEle) => delete documentEle[ele]));

    let uploadSitePhotoFiles;

    uploadSitePhotoFiles = await this.uploadSiteDocumentFiles(applicationNo);
    console.log('uploadSitePhotoFiles::', uploadSitePhotoFiles);

    const siteDetails = (this.isCustomer) ? this.customerSiteDetails : this.officierSiteDetails;
    if (siteDetails) {
      const {
        documentList: apiDataDocumentList
      } = siteDetails;

      if (apiDataDocumentList.length > 0) {
        let fileInst;
        apiDataDocumentList.forEach((ele, ind) => {
          fileInst = uploadSitePhotoFiles[ind];
          if (!fileInst) {
            uploadSitePhotoFiles.push([ele]);
          }
        });
      }
    }

    let fileInstant;
    formValdocumentList.forEach((ele, ind) => {
      fileInstant = uploadSitePhotoFiles[ind][0];
      fileInstant.description = ele.description;
      formValdocumentList[ind] = fileInstant;
    });

    console.log('formValue::', formValue);

    const payload: any = {
      applicationNumber: applicationNo,
      licenseCategory: HBR_LICENSE_CATEGORY,
      licenseSubCategory: this.screenSubType,
      isCustomer: this.isCustomer,
      ...formValue
    };
    console.log('addLicenseSiteDet-payload::', payload);

    let status = false;
    let data = {};
    const saveUpdateSiteDetailsRes: any = await this.licenseSer.saveUpdateSiteDetails(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = saveUpdateSiteDetailsRes;
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

  async onSubmit(saveType) {
    console.log('onSubmit.saveType::', saveType);
    const licenseStatus = this.licenseStatus;

    const commentForm = this.commentForm;
    const siteVisitForm = this.siteDetForm;


    if (
      (licenseStatus === STATUS_PENDING_SITE_INFO || saveType === STATUS_APPROVED_SITE_VISIT) &&
      siteVisitForm && siteVisitForm.valid === false
    ) {
      this.siteDetformSub = true;
      return;
    }

    if (
      (
        this.isOfficier ||
        (licenseStatus === STATUS_SENDBACK || licenseStatus === STATUS_SENDBACK_SITE_INFO)
      ) && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    if (this.isOfficier) {

      if (saveType !== STATUS_SENDBACK) {
        if (saveType === STATUS_PENDING_SITE_INFO) {
          if (this.licenseData.licenseSiteVisitOfficer == null) {
            this.alert.showError('Please assign site officier');
            return;
          }
        }
        if (saveType === STATUS_APPROVED || saveType === STATUS_REJECTED) {
          if (!this.checkListStatus) {
            this.alert.showError('Please validate the CheckList');
            return;
          }
        }
      }

      if (
        saveType === STATUS_APPROVED_SITE_VISIT ||
        (saveType === STATUS_SENDBACK && licenseStatus === STATUS_PENDING_SITE_VISIT) ||
        saveType === STATUS_REJECTED_SITE_VISIT
      ) {
        const siteDetailResp: any = await this.addLicenseSiteDet(saveType, this.applicationNumber);
        if (siteDetailResp.status) {
          const licenseResp: any = await this.createLicense(this.licenseData, saveType);
          if (licenseResp.status) {
            this.router.navigate([LICENSE_URL.VIEW_LICENSE_STATUS]);
          }
        }
      } else {
        const licenseResp: any = await this.createLicense(this.licenseData, saveType);
        if (licenseResp.status) {
          this.router.navigate([LICENSE_URL.VIEW_LICENSE_STATUS]);
        }
      }
    }

    if (this.isCustomer) {
      if (saveType === STATUS_PENDING_LICENSE_FEE || saveType === STATUS_SENDBACK ) {
        const licenseResp: any = await this.createLicense(this.licenseData, saveType);
        if (licenseResp.status) {
          const mainUrl = (licenseStatus === STATUS_SENDBACK) ? LICENSE_URL.ACKNOWLEDGEMENT : LICENSE_URL.PAYMENT;
          this.router.navigate([ mainUrl + this.applicationNumber]);
        }
      } else {
        const siteDetailResp: any = await this.addLicenseSiteDet(saveType, this.applicationNumber);
        if (siteDetailResp.status) {
          const licenseResp: any = await this.createLicense(this.licenseData, saveType);
          if (licenseResp.status) {
            this.router.navigate([LICENSE_URL.VIEW_LICENSE_STATUS]);
          }
        }
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

    if (
      (
        this.isOfficier ||
        ( this.licenseStatus === STATUS_SENDBACK || this.licenseStatus === STATUS_SENDBACK_SITE_INFO )
      ) && commentForm.valid === false ) {
      this.commandformSub = true;
      return false;
    }

    switch (saveType) {
      case STATUS_PENDING_LICENSE_FEE:
      case STATUS_APPROVED:
      case STATUS_REJECTED:
      case STATUS_APPROVED_SITE_VISIT:
      case STATUS_REJECTED_SITE_VISIT:
      case STATUS_SEND_BACK_REJECTED_SITE_VISIT:
      case STATUS_FORWARD_REJECTED_SITE_VISIT:
      case STATUS_RECONSIDER_REJECTED_SITE_VISIT:
        payload.event = saveType;
        payload.level = this.officerLevel;
        break;
      case STATUS_SENDBACK:
        payload.event = (this.licenseStatus === STATUS_PENDING_SITE_VISIT) ? EVENT_SENDBACK_SITE_INFO : STATUS_SENDBACK;
        payload.level = this.officerLevel;
        break;
      case STATUS_PENDING_SITE_INFO:
        payload.event = (this.isOfficier) ? EVENT_SITE_VISIT_OFFICER_ASSIGMENT : STATUS_PENDING_SITE_INFO;
        payload.level = this.officerLevel;
        break;
      default:
        payload.event = '';
        payload.level = '';
        break;
    }

    const { comments } = commentForm.value;
    if (comments) {
      payload.comments = comments;
    }

    if (this.isOfficier && saveType === STATUS_SENDBACK && this.licenseStatus !== STATUS_PENDING_SITE_VISIT) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }

    return payload;
  }

  issueLicense() { this.processSiteVisitWorkflow(); }

  processSiteVisitWorkflow() {
    const subModuleNameCode = this.workFlowNameList[this.screenSubType];
    const payload = {
      applicationNumber: this.applicationNumber,
      comments: 'Digital signature released',
      event: EVENT_LICENSE_RELEASE,
      subModuleNameCode
    };
    console.log('processSiteVisitWorkflow-payload::', payload);
    this.licenseSer.processSiteVisitWorkflow(payload).subscribe((resp: any) => {
      console.log('processSiteVisitWorkflow resp::', resp);
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.alert.showSuccess(resp.responseMessage);
        this.router.navigate(['/licencemgnt/viewLicenseStatus']);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  buttionvalidate(event){
    console.log('event of clarification field ::',event.target.value);
    this.isButtionshow =(event.target.value !=="")?false: true;
   }
}
