import { Injectable } from '@angular/core';
import { formatDate, Location } from '@angular/common';

import * as moment from 'moment';
import * as fileSaver from 'file-saver';
import * as _ from 'lodash';

import {
  LicenseConstants,
  WorkFlowNameListConstants,
  SubCategoryDescConstants
} from '@app/containers/licencemgnt/license.constants';
import {
  AuthService, AlertService, DistrictMasterService, 
  TalukMasterService, StatemasterService, DocumentUploadService,
  DropdownConfigService
} from '@app/services';

interface Post { startDate: Date; }

const {
  STATUS_DRAFT, STATUS_SAVE, STATUS_SUBMITTED, STATUS_SENDBACK, STATUS_APPROVED, STATUS_PENDING_SITE_INFO,
  STATUS_SENDBACK_SITE_INFO, CUSTOMER,
  FF_SITE_DOCUMENT, COMMENT_SENDBACK, COMMENT_ACTION_REJECTED, COMMENT_SENDBACK_SITE_INFO,

  WHOLESALE_LICENSE_CATEGORY, EVENT_BAR_LICENSE_CATEGORY, HBR_LICENSE_CATEGORY, BWFL_PARENT_LICENSE_CATEGORY,
  BOND_WAREHOUSE_LICENSE_CATEGORY, DISTI_BOTTL_LICENSE_CATEGORY,
} = LicenseConstants;


@Injectable({
  providedIn: 'root'
})
export class LicenseCommonService {

  licenseConsts = LicenseConstants;
  workFlowConsts = WorkFlowNameListConstants;
  subCatDescConsts = SubCategoryDescConstants;

  post: Post = { startDate: new Date(Date.now()) };
  applicationDate = formatDate(this.post.startDate, 'yyyy-MM-dd', 'en');

  maxDOBDate = moment(new Date()).subtract(18, 'years').format('YYYY-MM-DD');
  minDOBDate = moment(this.maxDOBDate).subtract(5, 'years').format('YYYY-MM-DD');

  viewFileArr = {
    [FF_SITE_DOCUMENT]: []
  };

  constructor(
    private stateSer: StatemasterService,
    private districtSer: DistrictMasterService,
    private dropdownConfigSer: DropdownConfigService,
    private talukSer: TalukMasterService,
    private docUplSer: DocumentUploadService,
    private authService: AuthService,
    private alert: AlertService,
    private location: Location,
  ) { }

  back(): void { this.location.back(); }
  randomNum(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); }
  randomStr() { const alpha = 'abcdefghijklmnopqrstuvwxyz'; return alpha[Math.floor(Math.random() * alpha.length)]; }
  mergeWith(obj1, obj2) { return _.mergeWith(obj1, obj2); }
  fileSaver(resp, documentName) { return fileSaver.saveAs(resp, documentName); }

  numberOnly(event): boolean {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
      }
      return true;
  }

  combineArr(oldArr, newArr) {
    // console.log('oldArr::', oldArr);
    // console.log('newArr::', newArr);

    if (newArr.length > 0) {

      newArr.forEach(element => {
        const ind = oldArr.findIndex((item) => item.name === element.name);
        if (ind !== -1) {
          oldArr[ind] = element;
        } else {
          oldArr.push(element);
        }
      });

    }
    return oldArr;
  }

  invertDate(date) {
    if (!date) {
      return date;
    }
    date = date.split('-');
    return date[2] + '-' + date[1] + '-' + date[0];
  }

  stringToDate(strDate) {
    let res;
    if (strDate) {
      const dt = strDate.split('-');
      res = formatDate(dt[2] + '-' + dt[1] + '-' + dt[0], 'yyyy-MM-dd', 'en');
    }
    return res;
  }

  unsetValidator(formControl, fileArr) {
    fileArr.forEach((ele) => {
      const eleSource = ele + '_source';
      if (formControl.get(ele) && formControl.get(eleSource)) {
        formControl.get(ele).setValidators([]);
        formControl.get(ele).updateValueAndValidity();
        formControl.get(eleSource).setValidators([]);
        formControl.get(eleSource).updateValueAndValidity();
      } else {
        console.log('eleSource::', ele + '_file_source');
      }
    });
    return true;
  }

  customerCommentFilter(res) {
    if (res.actionKey === COMMENT_SENDBACK && res.sendBackTo === 'Level 1') {
      return true;
    } else if (res.actionKey === COMMENT_ACTION_REJECTED || res.actionKey === COMMENT_SENDBACK_SITE_INFO) {
      return true;
    } else {
      return false;
    }

    // (res.actionKey === COMMENT_SENDBACK || res.sendBackTo === '')
  }

  getLicenseData(licAppliData): any {
    const { financialYear, applicationDate, licenseType, addressList, applicantDetails, bankList, businessUnitDetails,
      wholeSaleLicenses, status, commentList } = licAppliData;
    const licenseObj = wholeSaleLicenses ? wholeSaleLicenses : [];
    this.mergeWith(licenseObj, { addressList, applicantDetails, bankList, businessUnitDetails });

    return {
      financialYear, applicationDate, licenseType, licenseObj,
      addressList, applicantDetails, businessUnitDetails, bankList, status, commentList
    };
  }

  isEditFormIsReadOnly(isCustomer, status, stage, licenseCategory) {
    console.log('status::', status);
    console.log('stage::', stage);
    console.log('licenseCategory::', licenseCategory);

    let readOnly;
    let showActionFor;
    if (isCustomer) {
      console.log('CUSTOMER_ACTION_BUTTONS_WITH_READONLY_YES_OR_NO');
      const { condition } = this.getCondition(licenseCategory, status);
      if ( condition ) {
        if (stage == null || stage == 'null' || stage === 'customer') {
          console.log('NEED_CUSTOMER_ACTION_BUTTONS_BECAUSE_ITS_IN_CUSTOMER_HAND');
          readOnly = false;
          showActionFor = CUSTOMER;
          // display save, submit cancel
        } else {
          console.log('NO_NEED_CUSTOMER_ACTION_BUTTONS_BECAUSE_ITS_NOT_IN_CUSTOMER_HAND');
          readOnly = true;
          showActionFor = '';
        }
      } else {
        console.log('NO_NEED_CUSTOMER_ACTION_BUTTONS_AFTER_APPROVED');
        readOnly = true;
        showActionFor = '';
      }
    }
    return { readOnly, showActionFor };
  }

  getCondition(licenseCategory,status) {
    let condition;
    switch (licenseCategory) {
      case WHOLESALE_LICENSE_CATEGORY:
        condition = (status !== STATUS_APPROVED &&
          status !== STATUS_PENDING_SITE_INFO &&
          status !== STATUS_SENDBACK_SITE_INFO);
        break;
      case BOND_WAREHOUSE_LICENSE_CATEGORY:
        condition = (status !== STATUS_APPROVED &&
          status !== STATUS_PENDING_SITE_INFO &&
          status !== STATUS_SENDBACK_SITE_INFO);
        break;

      default:
        condition = (status !== STATUS_APPROVED);
        break;
    }
    return { condition };
  }

  onSiteDocumentFileChange(event, idx, siteDocumentCntrl, sourceName, fileFor) {
    const secName = FF_SITE_DOCUMENT;
    const fileUpRes = this.onFileChange(event, sourceName, fileFor, siteDocumentCntrl);
    if (!fileUpRes) {
      return false;
    }

    if (this.viewFileArr[secName][idx]) {
      this.viewFileArr[secName][idx].push(sourceName);
    } else {
      this.viewFileArr[secName][idx] = [];
      this.viewFileArr[secName][idx].push(sourceName);
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

  getCheckListLogInfo( checkList, comment, idx ) {
    const { level: commentOfficerLevel, designation } = comment;
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

  getSiteDoc(isCustomer, licenseData, customerSiteDetails, officierSiteDetails, propertyName, idx) {
    const propObj = (isCustomer) ? customerSiteDetails : officierSiteDetails;
    return (
      propObj && propObj[propertyName] && propObj[propertyName][idx] &&
      propObj[propertyName][idx].documentName !== null
    ) ? propObj[propertyName][idx] : false;
  }

  isSiteDocFileExists(isCustomer, licenseData, customerSiteDetails, officierSiteDetails, propertyName, idx) {
    return (!licenseData) ? false : this.getSiteDoc(isCustomer, licenseData, customerSiteDetails, officierSiteDetails, propertyName, idx);
  }

  downloadSiteDocument(isCustomer, licenseData, customerSiteDetails, officierSiteDetails, propertyName, idx) {

    if (licenseData) {

      const fileObj = this.getSiteDoc(isCustomer, licenseData, customerSiteDetails, officierSiteDetails, propertyName, idx);

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
