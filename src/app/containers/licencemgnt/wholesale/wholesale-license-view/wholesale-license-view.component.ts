import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
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
  EVENT_SENDBACK_SITE_INFO, EVENT_SITE_VISIT_OFFICER_ASSIGMENT,
  COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO, COMMENT_SENDBACK,
  MODULE_NAME_CODE, HBR_LICENSE_CATEGORY, LICENSE_URL, STR_CUSTOMER
} = LicenseConstants;

@Component({
  selector: 'app-wholesale-license-view',
  templateUrl: './wholesale-license-view.component.html',
  styleUrls: ['./wholesale-license-view.component.scss']
})
export class WholesaleLicenseViewComponent implements OnInit {
  @ViewChild('checkListCloseBtn', { static: false }) checkListCloseBtn;
  @ViewChild('assignSiteOfficierCloseBtn', { static: false }) assignSiteOfficierCloseBtn;

  licConst = LicenseConstants;
  workFlowNameList = WorkFlowNameListConstants.WHOLESALE;
  CheckListCodeList = CheckListCodeConstants.WHOLESALE;
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
  isButtionshow = true;


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

  fileArr = {
    [FF_SITE_DOCUMENT]: []
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
    private userManageSer: UserManagmentService,
    private validateSer: ValidationService,
    private licenseCommonSer: LicenseCommonService,
  ) { }

  async ngOnInit() {
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
  getSiteDocFormCntridx(idx) { return (this.getSiteDocumentFormCntr() as FormArray).at(idx); }
  getSiteDocumentByIdxFormCntr(idx, element = null) { return (element) ? this.getSiteDocFormCntridx(idx).get(element) : this.getSiteDocFormCntridx(idx); }

  addSiteDocumentRow() { (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup()); }
  remSiteDocumentRow(idx: number) { (this.getSiteDocumentFormCntr() as FormArray).removeAt(idx); }
  getSiteDocumentLen(): number { return (this.getSiteDocumentFormCntr() as FormArray).length; }

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

  buildSiteDocumentFormGroup(data?: any) {
    const basicEle = {
      description: [data ? data.description : '', this.validateSer.valiReqOnly],

      site_photo_file: data ? [''] : ['', this.validateSer.valiReqOnly],
      site_photo_file_source: data ? [''] : ['', this.validateSer.valiReqOnly],
    };
    return this.formBuilder.group(basicEle);
  }

  createSiteDetForm() {
    const basicEle = {
      latitude: ['', this.validateSer.valiReqOnly],
      longitude: ['', this.validateSer.valiReqOnly],
      east: ['', this.validateSer.valiReqOnly],
      north: ['', this.validateSer.valiReqOnly],
      south: ['', this.validateSer.valiReqOnly],
      west: ['', this.validateSer.valiReqOnly],

      documentList: this.formBuilder.array([
        this.buildSiteDocumentFormGroup()
      ]),
    };
    console.log('siteDetForm form created.');
    this.siteDetForm = this.formBuilder.group(basicEle);
  }

  getAssignSiteForm() {
    return this.assignSiteOfficierForm;
  }

  getAssignSiteFormCntr(element = '') {
    const inst = this.getAssignSiteForm();
    return (element) ? inst.get(element) : inst;
  }

  createAssignSiteForm() {
    const basicEle = {
      districtCode: ['', this.validateSer.valiReqOnly],
      districtDesc: ['', this.validateSer.valiReqOnly],
      roleCode: ['', this.validateSer.valiReqOnly],
      roleDesc: ['', this.validateSer.valiReqOnly],
      userEmail: ['', this.validateSer.valiReqOnly],
      userName: ['', this.validateSer.valiReqOnly],
      name: ['', this.validateSer.valiReqOnly],
      designationCode: ['', this.validateSer.valiReqOnly],
      designationDesc: ['', this.validateSer.valiReqOnly],
    };

    this.assignSiteOfficierForm = this.formBuilder.group(basicEle);
  }

  getAssignSiteDistrict() {
    this.licenseSer.findApplicationDistrict(this.applicationNumber).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200 && respContent[0]) {
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

    this.licenseSer.saveSiteVisitOfficer(payload).subscribe((resp: any) => {
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseData.licenseSiteVisitOfficer = respContent;
        this.assignSiteOfficierCloseBtn.nativeElement.click();
        this.alert.showSuccess('Officier assigned successfully');
      } else {
        this.alert.showError('Error in assign officier');
      }
    });

  }

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    const secName = FF_SITE_DOCUMENT;
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
      const { responseCode: respCode, content: respContent } = resp;
      if (respCode === 200) {
        this.licenseData = respContent;
        this.getWorkFlowConfig();
        const { status: licenseStatus, stage, siteDetails, commentList, licenseSiteVisitOfficer } = this.licenseData;
        this.licenseStatus = licenseStatus;
        this.licenseStage = stage;

        this.customerSiteDetails = siteDetails.find((res) => res.isCustomer === true);
        this.officierSiteDetails = siteDetails.find((res) => res.isCustomer === false);
        this.licenseComments = (this.isOfficier) ? commentList :
          commentList.filter((res) => this.licenseCommonSer.customerCommentFilter(res) );

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

        this.showRemarksSec = this.isOfficier ? true : (this.licenseStage === STR_CUSTOMER && licenseStatus === STATUS_SENDBACK_SITE_INFO );

        this.showAppicantSiteVisitDet = this.customerSiteDetails && licenseStatus !== STATUS_SENDBACK_SITE_INFO;
        this.showOfficierSiteVisitDet = this.officierSiteDetails && this.isOfficier && licenseStatus !== STATUS_PENDING_SITE_VISIT;

        console.log('showofficerSitevistdet ::',this.showAppicantSiteVisitDet);
        
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

          this.alert.showSuccess('Action Initiated', 'Success');
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
        (this.getSiteDocumentFormCntr() as FormArray).push(this.buildSiteDocumentFormGroup(element));
      });
    }
  }

  getSiteDoc(propertyName, idx) {
    const propObj = (this.isCustomer) ? this.customerSiteDetails : this.officierSiteDetails;
    return (
      propObj && propObj[propertyName] && propObj[propertyName][idx] &&
      propObj[propertyName][idx].documentName !== null
    ) ? propObj[propertyName][idx] : false;
  }

  isSiteDocFileExists(propertyName, idx) {

    let res = false;
    if (this.licenseData) {
      res = this.getSiteDoc(propertyName, idx);
    }

    return res;
  }

  downloadSiteDocument(propertyName, idx) {

    if (this.licenseData) {

      const fileObj = this.getSiteDoc(propertyName, idx);

      const { uuid, documentName } = fileObj;

      if (uuid && documentName) {
        this.docUplSer.downloadDocument(uuid, documentName).subscribe(
          (resp: any) => this.licenseCommonSer.fileSaver(resp, documentName),
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

  getCheckListLogInfo( comment, idx ) {
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

    formData.append('moduleName', 'licence-mangement');
    formData.append('screenName', 'hbr');
    formData.append('applicationNumber', applicationNo);

    this.authService.fileUploadFlag = true;
    const res: any = await this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    return res;
  }

  async uploadSiteDocumentFiles(applicationNo) {
    const files = this.fileArr[FF_SITE_DOCUMENT];
    const allUpRes = [];

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
      this.alert.showSuccess(respMsg);
      status = true;
      data = respContent;
    } else {
      this.alert.showError(respMsg);
    }

    return { status, data };
  }

  async onSubmit(saveType) {
    console.log('onSubmit.saveType::', saveType);

    const commentForm = this.commentForm;
    if (
      (
        this.isOfficier ||
        (this.licenseStatus === STATUS_SENDBACK || this.licenseStatus === STATUS_SENDBACK_SITE_INFO)
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
        (saveType === STATUS_SENDBACK && this.licenseStatus === STATUS_PENDING_SITE_VISIT) ||
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
          if (this.licenseStatus === STATUS_SENDBACK) {
            this.router.navigate([LICENSE_URL.ACKNOWLEDGEMENT + this.applicationNumber]);
          } else {
            this.router.navigate([LICENSE_URL.PAYMENT + this.applicationNumber]);
          }
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
        this.router.navigate(['/licencemgnt/viewLicenseStatus']);
      } else {
        this.alert.showError(resp.responseMessage);
      }
    });
  }

  getLicenseData(): any {
    const { applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails,
      wholeSaleLicenses: licenseObj, checkList } = this.licenseData;
    this.licenseCommonSer.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

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
          (resp: any) => this.licenseCommonSer.fileSaver(resp, documentName),
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
