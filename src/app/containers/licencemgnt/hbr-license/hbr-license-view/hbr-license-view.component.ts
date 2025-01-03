import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  LicenceManagementService, DocumentUploadService, AlertService,
  AuthService, DropdownConfigService, ValidationService
} from '@app/services';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';
import {
  LicenseConstants, WorkFlowNameListConstants, SubCategoryDescConstants, CheckListCodeConstants
} from '@app/containers/licencemgnt/license.constants';
import { LicenseCommonService } from '@appLicMgntShared/license-common.service';

const {
  LICENSE_URL, SCREEN_NAME_MODULE, SCREEN_NAME_HBR
} = LicenseConstants;
const { VIEW_LICENSE_STATUS: viewStatusUrl, ACKNOWLEDGEMENT: acknowledgementUrl, PAYMENT: paymentUrl } = LICENSE_URL;

@Component({
  selector: 'app-hbr-license-view',
  templateUrl: './hbr-license-view.component.html',
  styleUrls: ['./hbr-license-view.component.scss']
})
export class HbrLicenseViewComponent implements OnInit {

  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;

  licenseConsts = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants.HBR;
  CheckListCodeList = CheckListCodeConstants.HBR;
  docuPropObj = this.licenseConsts.docuPropObj;
  subCategoryDesc = SubCategoryDescConstants.HBR;

  licenseData: any;
  screenSubType: any;
  applicationNumber: any;
  isSiteInfoFormEnable = false;
  isSiteInfoSecEnable = false;

  commentForm: FormGroup;
  sendbackForm: FormGroup;
  checkListForm: FormGroup;
  siteDetForm: FormGroup;

  commandformSub = false;
  siteDetformSub = false;
  isButtionshow = true;

  licenseComments = [];
  licenseStatus: string;
  licenseStage: string; 
  customerSiteDetails: any = {};
  officierSiteDetails: any = {};

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
  isSiteVisitOfficer: boolean;
  sendBackList: any;
  showSiteVisitForm = false;

  checkList = [];
  valiReqOnly = [Validators.required];

  fileArr = {
    [this.licenseConsts.FF_SITE_DOCUMENT]: []
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private licenseSer: LicenceManagementService,
    private docUplSer: DocumentUploadService,
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
    this.createSiteDetForm();
    this.createCheckListForm();
  }

  back(): void { this.licenseCommonSer.back(); }

  getSiteDetForm() {
    return this.siteDetForm;
  }

  get siteDetFormControls() { return this.siteDetForm.controls; }
  get siteDocumentFormControls() { return (this.siteDetFormControls[this.licenseConsts.PROP_SITE_DOCUMENT] as FormArray).controls; }

  getSiteDetFormCntr(element) {
    return this.getSiteDetForm().get(element);
  }

  getSiteDocumentFormCntr() {
    return this.getSiteDetFormCntr(this.licenseConsts.PROP_SITE_DOCUMENT);
  }

    // modified by::ss

    getSitedocCntrIdxIns(idx) { return (this.getSiteDocumentFormCntr() as FormArray).at(idx); }
    getSitedocCntrIdx(idx, element = '') { return (element) ? this.getSitedocCntrIdxIns(idx).get(element) : this.getSitedocCntrIdxIns(idx); }


  getSiteDocumentByIdxFormCntr(idx, element = null) {
    const inst = this.getSiteDocumentFormCntr().get(idx);
    return (element) ? inst.get(element) : inst;
  }

  addSiteDocumentRow() {
    (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup());
  }

  remSiteDocumentRow(idx: number) {
    (this.getSiteDocumentFormCntr() as FormArray).removeAt(idx);
  }

  getSiteDocumentLen(): number {
    return (this.getSiteDocumentFormCntr() as FormArray).length;
  }

  createcommentForm(data?: any) { this.commentForm = this.validateSer.buildCommentFormGroup(data); }
  createsendbackForm(data?: any) { this.sendbackForm = this.validateSer.buildSendbackFormGroup(data); }

  buildSiteDocumentFormGroup(data?: any) {
    const basicEle = {
      description: [data ? data.description : '', this.valiReqOnly],

      site_photo_file: data ? [''] : ['', this.valiReqOnly],
      site_photo_file_source: data ? [''] : ['', this.valiReqOnly],
    };
    return this.formBuilder.group(basicEle);
  }

  createSiteDetForm() {
    const basicEle = {
      latitude: ['', this.valiReqOnly],
      longitude: ['', this.valiReqOnly],
      east: ['', this.valiReqOnly],
      north: ['', this.valiReqOnly],
      south: ['', this.valiReqOnly],
      west: ['', this.valiReqOnly],

      documentList: this.formBuilder.array([
        this.buildSiteDocumentFormGroup()
      ]),
    };

    this.siteDetForm = this.formBuilder.group(basicEle);
  }

  buildCheckListDetFormGroup(data?: any) {
    const basicEle = {
      documentCode: [data.documentCode ? data.documentCode : '', this.valiReqOnly],
      documentDesc: [data.documentDesc ? data.documentDesc : '', this.valiReqOnly],
      isVerified: [data.isVerified ? data.isVerified : false, this.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  createCheckListForm() {
    const basicEle = {
      applicationNumber: [this.applicationNumber, this.valiReqOnly],
      checkListDocument: this.formBuilder.array([]),
    };

    this.checkListForm = this.formBuilder.group(basicEle);
  }

  get getCheckListDocumentFormArray() {
    return this.checkListForm.get('checkListDocument') as FormArray;
  }

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
      console.log('updateCheckListDoumentArrIsVerified.checkListStatus::', this.checkListStatus)
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

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    const secName = this.licenseConsts.FF_SITE_DOCUMENT;
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, siteDocumentCntrl);
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
        this.licenseData.entityFirmCode = this.licenseData.hbrLicenses.entityFirmCode;
        this.licenseData.entityFirmDesc = this.licenseData.hbrLicenses.entityFirmDesc;
        this.licenseStatus = this.licenseData.status;
        this.licenseStage = this.licenseData.stage;

        this.customerSiteDetails = this.licenseData.siteDetails.find((res) => res.isCustomer === true);
        this.officierSiteDetails = this.licenseData.siteDetails.find((res) => res.isCustomer === false);
        this.licenseComments = (this.isOfficier) ? this.licenseData.commentList : this.licenseData.commentList.filter(
          (res) => this.licenseCommonSer.customerCommentFilter(res));
        console.log('this.isOfficier:', this.isOfficier);
        console.log('this.licenseComments::', this.licenseComments);
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
          const { level, isRejected, isSendBack, sendBackList, isForwardWithOutApproval, isSiteVisitOfficer, isFinished } = respCont;
          this.officerLevel = level;
          this.isRejected = isRejected;
          this.isSendBack = isSendBack;
          this.sendBackList = sendBackList;
          this.isFinished = isFinished;
          this.isForwardWithOutApproval = isForwardWithOutApproval;
          this.isSiteVisitOfficer = isSiteVisitOfficer;

          const { STATUS_PENDING_DSC } = this.licenseConsts;
          this.showSiteVisitForm = (this.isOfficier && this.isSiteVisitOfficer && this.licenseStatus !== STATUS_PENDING_DSC);

          if (this.isSiteVisitOfficer && this.officierSiteDetails) {
            // patch form data.
            this.patchSiteVisit();
          }

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

    this.siteDetForm.patchValue(this.officierSiteDetails);

    this.remSiteDocumentRow(0);
    this.officierSiteDetails.documentList.forEach(element => {
      (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup(element));
    });
  }

  getSiteDoc(propertyName, idx, isCustomer) {
    const { siteDetails } = this.getLicenseData();
    const propObj = siteDetails.find((resp: any) => resp.isCustomer === isCustomer);
    return (propObj && propObj[propertyName] && propObj[propertyName][idx] && propObj[propertyName][idx].documentName !== null) ? propObj[propertyName][idx] : false;
  }

  isSiteDocFileExists(propertyName, idx, isCustomer) {

    let res = false;
    if (this.licenseData) {
      res = this.getSiteDoc(propertyName, idx, isCustomer);
    }

    return res;
  }

  downloadSiteDocument(propertyName, idx, isCustomer) {

    if (this.licenseData) {

      const fileObj = this.getSiteDoc(propertyName, idx, isCustomer);

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

  async onSubmit(saveType) {
    
    console.log('this.checkListStatus::', this.checkListStatus);

    const commentForm = this.commentForm;
    if (this.isOfficier && commentForm.valid === false) {
      this.commandformSub = true;
      return false;
    }

    if (this.isCustomer) {
      console.log('customer license payment');
      this.router.navigate([ paymentUrl + this.applicationNumber]);
    } else {
      if (saveType !== this.licenseConsts.STATUS_SENDBACK && !this.checkListStatus ) {
        this.alert.showError('Please validate the CheckList');
        return;
      }

      /**
       * If case :
       *  site information is needed from officier 
       * else case :
       *  site information is not needed from officier in the case of already some one updated the officier site information
       */
      if (this.isSiteVisitOfficer) {
        const siteDetailResp: any = await this.addLicenseSiteDet(saveType, this.applicationNumber);
        if (siteDetailResp.status) {
          const licenseResp: any = await this.submitLicense(saveType);
          if (licenseResp.status) {
            this.router.navigate([viewStatusUrl]);
          }
        }
      } else {
        const licenseResp: any = await this.submitLicense(saveType);
        if (licenseResp.status) {
          this.router.navigate([viewStatusUrl]);
        }
      }

    }
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
    this.licenseSer.processSiteVisitWorkflow(payload).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.alert.showSuccess(resp.responseMessage);
        this.router.navigate([viewStatusUrl]);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
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
    console.log(this.screenSubType);
    console.log(this.workFlowNameList);
    console.log(this.workFlowNameList[this.screenSubType]);
    payload.workFlowName = this.workFlowNameList[this.screenSubType];
    console.log('final-payload::', payload);

    let status = false;
    let data = {};
    const licenseCreationRes: any = await this.licenseSer.createLicense(payload);
    const { responseCode: respCode, responseMessage: respMsg, content: respContent } = licenseCreationRes;
    if (respCode === 200) {
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg, 'error');
    }
    return { status, data };
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
    console.log('event::', saveType);
    payload.event = saveType;
    payload.level = this.officerLevel;

    if (comments) {
      console.log('comments::', comments);
      payload.comments = comments;
    }

    if (saveType === STATUS_SENDBACK) {
      const { sendback } = sendbackForm.value;
      payload.sentBackLevels = sendback;
    }

    return payload;
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

    formData.append('moduleName', SCREEN_NAME_MODULE);
    formData.append('screenName', SCREEN_NAME_HBR);
    formData.append('applicationNumber', applicationNo);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async uploadSiteDocumentFiles(applicationNo) {
    const files = this.fileArr[this.licenseConsts.FF_SITE_DOCUMENT];
    const allUpRes = [];

    console.log('files::', files);

    if (files.length === 0) {
      return [];
    }

    for (let idx = 0; idx < files.length; idx++) {
      console.log('idx::', idx);
      // tslint:disable-next-line: no-string-literal
      const formCntrl = this.getSiteDocumentFormCntr()['controls'][idx];
      const fileArr = files[idx];
      console.log('formCntrl::', formCntrl);
      console.log('fileArr::', fileArr);
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

    if (saveType !== this.licenseConsts.STATUS_DRAFT && form.valid === false) {
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

    if (this.isSiteVisitOfficer && this.officierSiteDetails) {
      const {
        siteDetails
      } = this.getLicenseData();
      const {
        documentList: apiDataDocumentList
      } = siteDetails.find((resp: any) => resp.isCustomer === false);

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
      licenseCategory: this.licenseConsts.HBR_LICENSE_CATEGORY,
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
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg, 'error');
    }

    return { status, data };
  }

  getLicenseData(): any {
    const { applicationDate, licenseType, addressList, applicantDetails, bankList, siteDetails,
      hbrLicenses, checkList } = this.licenseData;
    const licenseObj = hbrLicenses ? hbrLicenses : [];
    _.mergeWith(licenseObj, { addressList, applicantDetails, bankList });

    return { applicationDate, licenseType, licenseObj, addressList, applicantDetails, bankList, checkList, siteDetails };
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

  buttionvalidate(event) {
   console.log('event of clarification field ::',event.target.value);
   this.isButtionshow =(event.target.value !=="")?false: true;
  }

}
