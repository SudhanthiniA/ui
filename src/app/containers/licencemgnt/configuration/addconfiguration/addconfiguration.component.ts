import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import {
  LicenseConfigService,
  UserManagmentService,
  DropdownConfigService,
  ValidationService,
  AlertService
} from '@app/services';

export interface NgbPanelChangeEvent {
  nextState: boolean;
  panelId: string;
  preventDefault: () => void;
}

interface Post { startDate: Date; }
@Component({
  selector: 'app-addconfiguration',
  templateUrl: './addconfiguration.component.html',
  styleUrls: ['./addconfiguration.component.scss']
})
export class AddconfigurationComponent implements OnInit {
  // private tabs: NgbTabset;

  LicenseConfigForm: FormGroup;
  post: Post = { startDate: new Date(Date.now()) };
  formSubmitted = false;

  licPreReq: any;
  prodDet: any;
  feesDet: any;
  tankDet: any;
  checklist: any;

  entityList: any;
  licenseTypeList: any;
  licenseCountList: any;
  licenseDomainList: any;
  licenseEntityTypeList: any;
  licenseTenureList: any;
  licenseFinancialYearList: any;
  licenseRenewalList: any;
  licenseTypePreReqList: any;
  goodsMaterialList: any;
  goodsTypeList: any;
  goodsCtegoryList: any;
  goodsItemList: any;
  qutaTimelineList: any;
  feeTypeList: any;
  tankTypeList: any;
  checkList: any;

  // feesTotal: number;
  entityCode: any;
  licenseTypeCode: any;
  id: any;

  public readonly PROP_CONFIG = 'licenseConfiguration';
  public readonly PROP_PRE_REQ = 'licensePreRequisiteConfigurationList';
  public readonly PROP_PROD = 'applicationProductList';
  public readonly PROP_FEE = 'feeList';
  public readonly PROP_TANK = 'tankList';
  public readonly PROP_CHECK = 'checkListConfigurationList';
  public readonly PROP_LM_MAPPING = 'licenseMapping';

  list: any;

  lastPanelId: string = null;
  defaultPanelId: string = "panel2";
  entityTypeList: any = [];
  indentAcceptList: any = [];
  indentRequestList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: LicenseConfigService,
    private userManageService: UserManagmentService,
    private dropdownConfigSer: DropdownConfigService,
    private ValSer: ValidationService,
    private alert: AlertService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loadFormControl();
    this.getEntityTypes();
    this.getLicenseCount();
    this.getLicenseDomain();
    this.getLicenseEntityType();
    this.getLicenseTenure();
    this.getLicenseFinancialYear();
    this.getLicenseRenewal();
    this.createEmptyLicPreReq();
    this.getGoodsMaterial();
    this.getGoodsType();
    this.getGoodsCtegory();
    this.getGoodsItem();
    this.getQutaTimeline();
    this.createEmptyProdDet();
    this.getFeeType();
    this.createEmptyFeesDet();
    this.getTankType();
    this.createEmptyTankDet();
    this.getChecklist();
    this.createEmptyChecklist();
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.entityCode) {
        this.entityCode = params.entityCode;
        this.licenseTypeCode = params.licenseTypeCode;
        this.getLicenseConfig();
      }
    });
  }

  loadFormControl() {
    this.createFormGrp();
  }

  createFormGrp() {
    const basicEle = {
      dateTime: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      entityCode: ['', this.ValSer.valiReqOnly],
      entityDesc: ['', this.ValSer.valiReqOnly],
      licenseTypeCode: ['', this.ValSer.valiReqOnly],
      licenseTypeDesc: ['', this.ValSer.valiReqOnly],
      status: ['true', this.ValSer.valiReqOnly],
      [this.PROP_CONFIG]: this.buildLicenseConfigFormGroup(),
      [this.PROP_PRE_REQ]: this.formBuilder.array([]),
      [this.PROP_PROD]: this.formBuilder.array([]),
      [this.PROP_FEE]: this.formBuilder.array([]),
      [this.PROP_TANK]: this.formBuilder.array([]),
      [this.PROP_CHECK]: this.formBuilder.array([]),
    };
    this.LicenseConfigForm = this.formBuilder.group(basicEle);
    console.log(this.LicenseConfigForm);
  }

  buildLicenseConfigFormGroup(data?: any) {
    const basicEle = {
      licenseFirstCode: ['', this.ValSer.valiReqOnly],
      licenseFirstDesc: [''],
      domainCode: ['', this.ValSer.valiReqOnly],
      domainDesc: [''],
      entityTypeCode: ['', this.ValSer.valiReqOnly],
      entityTypeDesc: [''],
      licenseTenureCode: ['', this.ValSer.valiReqOnly],
      licenseTenureDesc: [''],
      licenseFinancialYearCode: ['', this.ValSer.valiReqOnly],
      licenseFinancialYearDesc: [''],
      renewalTimeCode: ['', this.ValSer.valiReqOnly],
      renewalTimeDesc: ['']
    };
    return this.formBuilder.group(basicEle);
  }

  buildLicensePreReqConfigFormGroup(data?: any) {
    const basicEle = {
      entityCode: data && data.entityCode || ['', this.ValSer.valiReqOnly],
      entityDesc: data && data.entityDesc || [''],
      licenseTypeCode: data && data.licenseTypeCode || ['', this.ValSer.valiReqOnly],
      licenseTypeDesc: data && data.licenseTypeDesc || [''],
    };
    return this.formBuilder.group(basicEle);
  }

  buildProductDetailsFormGroup(data?: any) {
    const basicEle = {
      goodTypeCode: data && data.goodTypeCode || ['', this.ValSer.valiReqOnly],
      goodTypeDesc: data && data.goodTypeDesc || ['', this.ValSer.valiReqOnly],
      isQuotaApplicable: data && data.isQuotaApplicable || [true, this.ValSer.valiReqOnly],
      itemCode: data && data.itemCode || ['', this.ValSer.valiReqOnly],
      itemDesc: data && data.itemDesc || ['', this.ValSer.valiReqOnly],
      materialTypeCode: data && data.materialTypeCode || ['', this.ValSer.valiReqOnly],
      materialTypeDesc: data && data.materialTypeDesc || ['', this.ValSer.valiReqOnly],
      quotaQuantity: data && data.quotaQuantity || ['', this.ValSer.valiReqOnly],
      quotaTimeLineCode: data && data.quotaTimeLineCode || ['', this.ValSer.valiReqOnly],
      quotaTimeLineDesc: data && data.quotaTimeLineDesc || ['', this.ValSer.valiReqOnly],
      subCategoryCode: data && data.subCategoryCode || ['', this.ValSer.valiReqOnly],
      subCategoryDesc: data && data.subCategoryDesc || ['', this.ValSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  buildFeeDetailsFormGroup(data?: any) {
    const basicEle = {
      feeTypeCode: data && data.feeTypeCode || ['', this.ValSer.valiReqOnly],
      feeTypeDesc: data && data.feeTypeDesc || ['', this.ValSer.valiReqOnly],
      amount: data && data.amount || ['', this.ValSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  buildTankDetailsFormGroup(data?: any) {
    const basicEle = {
      tankTypeCode: data && data.tankTypeCode || ['', this.ValSer.valiReqOnly],
      tankTypeDesc: data && data.tankTypeDesc || ['', this.ValSer.valiReqOnly],
      maxCapacity: data && data.maxCapacity || ['', this.ValSer.valiReqOnly],
      tankLength: data && data.tankLength || ['', this.ValSer.valiReqOnly],
      tankBreadth: data && data.tankBreadth || ['', this.ValSer.valiReqOnly],
      tankHeight: data && data.tankHeight || ['', this.ValSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  buildChecklistFormGroup(data?: any) {
    const basicEle = {
      checkListCode: data && data.checkListCode || ['', this.ValSer.valiReqOnly],
      checkListDesc: data && data.checkListDesc || ['', this.ValSer.valiReqOnly],
      description: data && data.description || ['', this.ValSer.valiReqOnly]
    };
    return this.formBuilder.group(basicEle);
  }

  getForm() {
    return this.LicenseConfigForm;
  }

  getFormCntr(element) {
    return this.getForm().get(element);
  }

  getLicConfigFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_CONFIG);
    return (element) ? inst.get(element) : inst;
  }

  getLicPreReqFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_PRE_REQ);
    return (element) ? inst.get(element) : inst;
  }

  getProDetFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_PROD);
    return (element) ? inst.get(element) : inst;
  }

  getFeeDetFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_FEE);
    return (element) ? inst.get(element) : inst;
  }

  getTankDetFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_TANK);
    return (element) ? inst.get(element) : inst;
  }

  getChecklistFormCntr(element = '') {
    const inst = this.getFormCntr(this.PROP_CHECK);
    return (element) ? inst.get(element) : inst;
  }

  getEntityTypes() {
    const reqPayload = { page: 0, pageSize: 10 };
    this.userManageService.getActiveEntityType(reqPayload).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.entityList = resp.content.content;
        console.log(this.entityList);
        this.entityTypeList = this.entityList.map((ele, i) => {
          if (ele.licenseList.length > 0) {
            return {
              id: ele.id,
              code: ele.code,
              name: ele.name,
              checked: false,
              licenseList: ele.licenseList.map((el, j) => {
                return this.entityList[el.licenseList] = {
                  id: el.id,
                  isActive: el.isActive,
                  licenseTypeCode: el.licenseTypeCode,
                  licenseTypeDesc: el.licenseTypeDesc,
                  checked: false
                }
              })
            }
          }
        }).filter(item => item !== undefined);
        console.log(this.entityTypeList);
      }
    });
  }

  onEntityChange(entityCode) {
    console.log(this.entityList);
    if (this.entityList && entityCode) {
      const entityObj = this.entityList.find((resp: any) => resp.code === entityCode);
      this.getForm().patchValue({ entityDesc: entityObj.name });
      this.getLicenseType(entityObj.id);
    }
  }

  getLicenseType(entityId) {
    this.userManageService.getLicensesByEntity(entityId).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.licenseTypeList = resp.content;
      }
    });
  }

  async onLicenseTypeChange(licenseTypeCode) {
    const entityCode = this.getFormCntr('entityCode').value;
    const respFlag = await this.service.isConfigurationExist(entityCode, licenseTypeCode);
    console.log(respFlag);
    if (respFlag === true) {
      this.alert.showError('Entity and License Type already Exists !');
    } else {
      const licenseTypeObj = this.licenseTypeList.find((resp: any) => resp.licenseTypeCode === licenseTypeCode);
      this.getForm().patchValue({ licenseTypeDesc: licenseTypeObj.licenseTypeDesc });
      console.log(this.LicenseConfigForm.value);
    }
  }

  // Configuration section
  getLicenseCount() {
    this.dropdownConfigSer.findDropDownMaster('FIRST_LAST_LICENSE').subscribe(
      (res) => this.licenseCountList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getLicenseDomain() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_DOMAIN').subscribe(
      (res) => this.licenseDomainList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getLicenseEntityType() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_ENTITY_TYPE').subscribe(
      (res) => this.licenseEntityTypeList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getLicenseTenure() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_TENURE').subscribe(
      (res) => this.licenseTenureList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getLicenseFinancialYear() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_FINANCIAL_YEAR').subscribe(
      (res) => this.licenseFinancialYearList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getLicenseRenewal() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_RENEWAL').subscribe(
      (res) => this.licenseRenewalList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  onLicenseFirstChange(licenseFirstCode) {
    if (licenseFirstCode && this.licenseCountList) {
      const licenseFirstObj = this.licenseCountList.find((resp: any) => resp.paramKey === licenseFirstCode);
      this.getLicConfigFormCntr().patchValue({ licenseFirstDesc: licenseFirstObj.paramValue });
    }
  }

  onDomainChange(domainCode) {
    if (domainCode && this.licenseDomainList) {
      const domainObj = this.licenseDomainList.find((resp: any) => resp.paramKey === domainCode);
      this.getLicConfigFormCntr().patchValue({ domainDesc: domainObj.paramValue });
    }
  }

  onEntityTypeChange(entityTypeCode) {
    if (entityTypeCode && this.licenseEntityTypeList) {
      const entityTypeObj = this.licenseEntityTypeList.find((resp: any) => resp.paramKey === entityTypeCode);
      this.getLicConfigFormCntr().patchValue({ entityTypeDesc: entityTypeObj.paramValue });
    }
  }

  onLicenseTenureChange(licenseTenureCode) {
    if (licenseTenureCode && this.licenseTenureList) {
      const licenseTenureObj = this.licenseTenureList.find((resp: any) => resp.paramKey === licenseTenureCode);
      this.getLicConfigFormCntr().patchValue({ licenseTenureDesc: licenseTenureObj.paramValue });
    }
  }

  onLicenseFinancialYearChange(licenseFinancialYearCode) {
    if (licenseFinancialYearCode && this.licenseFinancialYearList) {
      const licenseFinancialYearObj = this.licenseFinancialYearList.find((resp: any) => resp.paramKey === licenseFinancialYearCode);
      this.getLicConfigFormCntr().patchValue({ licenseFinancialYearDesc: licenseFinancialYearObj.paramValue });
    }
  }

  onRenewalTimeChange(renewalTimeCode) {
    if (renewalTimeCode && this.licenseRenewalList) {
      const licenseRenewalObj = this.licenseRenewalList.find((resp: any) => resp.paramKey === renewalTimeCode);
      this.getLicConfigFormCntr().patchValue({ renewalTimeDesc: licenseRenewalObj.paramValue });
    }
  }

  // Prerequisite License section
  createEmptyLicPreReq() {
    this.licPreReq = { editRow: '', entityCode: '', entityDesc: '', licenseTypeCode: '', licenseTypeDesc: '' };
  }

  onEntityLicPreReqChange(entityCode) {
    const entityObj = this.entityList.find((resp: any) => resp.code === entityCode);
    this.licPreReq.entityDesc = entityObj.name;
    this.getLicenseTypeLicPreReq(entityObj.id);
  }

  getLicenseTypeLicPreReq(entityId) {
    this.userManageService.getLicensesByEntity(entityId).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.licenseTypePreReqList = resp.content;
      }
    });
  }

  onlicenseTypeLicPreReqChange(licenseTypeCode) {
    const licenseTypeObj = this.licenseTypePreReqList.find((resp: any) => resp.licenseTypeCode === licenseTypeCode);
    this.licPreReq.licenseTypeDesc = licenseTypeObj.licenseTypeDesc;
  }

  addLicensePreReq() {
    if (this.licPreReq.entityCode && this.licPreReq.licenseTypeCode) {
      const cntr = this.getLicPreReqFormCntr() as FormArray;
      let test = cntr['controls'].filter(data => data.value.entityCode == this.licPreReq.entityCode &&
        data.value.licenseTypeCode == this.licPreReq.licenseTypeCode);
      if (test.length === 0 || this.licPreReq.editRow.length > 0) {
        if (this.licPreReq.editRow.length > 0) {
          cntr.controls[parseInt(this.licPreReq.editRow, 10)].patchValue(this.licPreReq);
        } else {
          cntr.push(this.buildLicensePreReqConfigFormGroup(this.licPreReq));
        }
        this.createEmptyLicPreReq();
        console.log(this.LicenseConfigForm.value);
      } else {
        this.alert.showError('Record already exists');
      }
    } else {
      this.alert.showError('Plesae fill all mandatory fields');
    }
  }

  editLicensePreReq(preCntrl, i) {
    console.log(this.licPreReq);
    const selCntrlVal = preCntrl.value;
    this.licPreReq = {
      editRow: i.toString(),
      entityCode: selCntrlVal.entityCode,
      entityDesc: selCntrlVal.entityDesc,
      licenseTypeCode: selCntrlVal.licenseTypeCode,
      licenseTypeDesc: selCntrlVal.licenseTypeDesc
    };
    this.onEntityLicPreReqChange(selCntrlVal.entityCode);
    console.log(this.licPreReq);
  }

  deleteLicensePreReq(preCntrl, i) {
    (this.getLicPreReqFormCntr() as FormArray).removeAt(i);
    this.createEmptyLicPreReq();
  }

  // Product Details
  getGoodsMaterial() {
    this.dropdownConfigSer.findDropDownMaster('GOODS_MATERIAL').subscribe(
      (res) => this.goodsMaterialList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getGoodsType() {
    this.dropdownConfigSer.findDropDownMaster('GOODS_TYPE').subscribe(
      (res) => this.goodsTypeList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getGoodsCtegory() {
    this.dropdownConfigSer.findDropDownMaster('GOODS_CATEGORY').subscribe(
      (res) => this.goodsCtegoryList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getGoodsItem() {
    this.dropdownConfigSer.findDropDownMaster('GOODS_ITEM').subscribe(
      (res) => this.goodsItemList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  getQutaTimeline() {
    this.dropdownConfigSer.findDropDownMaster('QUOTA_TIMELINE').subscribe(
      (res) => this.qutaTimelineList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  createEmptyProdDet() {
    this.prodDet = {
      editRow: '',
      materialTypeCode: '',
      materialTypeDesc: '',
      goodTypeCode: '',
      goodTypeDesc: '',
      subCategoryCode: '',
      subCategoryDesc: '',
      itemCode: '',
      itemDesc: '',
      isQuotaApplicable: '',
      quotaQuantity: '',
      quotaTimeLineCode: '',
      quotaTimeLineDesc: '',
    };
  }

  onMaterialTypeChange(materialTypeCode) {
    const materialTypeObj = this.goodsMaterialList.find((resp: any) => resp.paramKey === materialTypeCode);
    this.prodDet.materialTypeDesc = materialTypeObj.paramValue;
  }

  onGoodTypeChange(goodTypeCode) {
    const goodTypeObj = this.goodsTypeList.find((resp: any) => resp.paramKey === goodTypeCode);
    this.prodDet.goodTypeDesc = goodTypeObj.paramValue;
  }

  onSubCategoryChange(subCategoryCode) {
    const subCategoryObj = this.goodsCtegoryList.find((resp: any) => resp.paramKey === subCategoryCode);
    this.prodDet.subCategoryDesc = subCategoryObj.paramValue;
  }

  onItemChange(itemCode) {
    const itemObj = this.goodsItemList.find((resp: any) => resp.paramKey === itemCode);
    this.prodDet.itemDesc = itemObj.paramValue;
  }

  onQuotaTimeLineChange(quotaTimeLineCode) {
    const quotaTimeLineObj = this.qutaTimelineList.find((resp: any) => resp.paramKey === quotaTimeLineCode);
    this.prodDet.quotaTimeLineDesc = quotaTimeLineObj.paramValue;
  }

  addProductDeatils() {
    if (
      this.prodDet.materialTypeCode &&
      this.prodDet.goodTypeCode &&
      this.prodDet.subCategoryCode &&
      this.prodDet.itemCode &&
      this.prodDet.quotaQuantity &&
      this.prodDet.quotaTimeLineCode &&
      this.prodDet.isQuotaApplicable
    ) {
      const cntr = this.getProDetFormCntr() as FormArray;
      let test = cntr['controls'].filter(data =>
        data.value.materialTypeCode == this.prodDet.materialTypeCode &&
        data.value.goodTypeCode == this.prodDet.goodTypeCode &&
        data.value.subCategoryCode == this.prodDet.subCategoryCode &&
        data.value.itemCode == this.prodDet.itemCode
      );
      if (test.length === 0 || this.prodDet.editRow.length > 0) {
        if (this.prodDet.editRow.length > 0) {
          cntr.controls[parseInt(this.prodDet.editRow, 10)].patchValue(this.prodDet);
        } else {
          cntr.push(this.buildProductDetailsFormGroup(this.prodDet));
        }
        this.createEmptyProdDet();
        console.log(this.LicenseConfigForm.value);
      } else {
        this.alert.showError('Record already exists');
      }
    } else {
      this.alert.showError('Plesae fill all mandatory fields');
    }
  }

  editProductDeatils(preCntrl, i) {
    console.log(this.prodDet);
    const selCntrlVal = preCntrl.value;
    this.prodDet = {
      editRow: i.toString(),
      materialTypeCode: selCntrlVal.materialTypeCode,
      materialTypeDesc: selCntrlVal.materialTypeDesc,
      goodTypeCode: selCntrlVal.goodTypeCode,
      goodTypeDesc: selCntrlVal.goodTypeDesc,
      subCategoryCode: selCntrlVal.subCategoryCode,
      subCategoryDesc: selCntrlVal.subCategoryDesc,
      itemCode: selCntrlVal.itemCode,
      itemDesc: selCntrlVal.itemDesc,
      isQuotaApplicable: selCntrlVal.isQuotaApplicable,
      quotaQuantity: selCntrlVal.quotaQuantity,
      quotaTimeLineCode: selCntrlVal.quotaTimeLineCode,
      quotaTimeLineDesc: selCntrlVal.quotaTimeLineDesc
    };
    console.log(this.prodDet);
  }

  deleteProductDeatils(preCntrl, i) {
    (this.getProDetFormCntr() as FormArray).removeAt(i);
    this.createEmptyProdDet();
  }

  checkProductTypeExists(key) {
    const cntr = this.getProDetFormCntr() as FormArray;
    return cntr['controls'].filter(data => data.value.materialTypeCode == key).length;
  }

  // Fees Details
  getFeeType() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_FEE_TYPE').subscribe(
      (res) => this.feeTypeList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  onFeeTypeChange(feeTypeCode) {
    const feeTypeObj = this.feeTypeList.find((resp: any) => resp.paramKey === feeTypeCode);
    this.feesDet.feeTypeDesc = feeTypeObj.paramValue;
  }

  createEmptyFeesDet() {
    this.feesDet = { editRow: '', feeTypeCode: '', feeTypeDesc: '', amount: '' };
  }

  addFeeDeatils() {
    if (this.feesDet.feeTypeCode && this.feesDet.amount) {
      const cntr = this.getFeeDetFormCntr() as FormArray;
      let test = cntr['controls'].filter(data => data.value.feeTypeCode == this.feesDet.feeTypeCode);
      if (test.length === 0 || this.feesDet.editRow.length > 0) {
        this.feesDet.amount = '₹ ' + parseFloat(this.feesDet.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        console.log(this.feesDet.amount);
        if (this.feesDet.editRow.length > 0) {
          cntr.controls[parseInt(this.feesDet.editRow, 10)].patchValue(this.feesDet);
        } else {
          cntr.push(this.buildFeeDetailsFormGroup(this.feesDet));
        }
        // this.feesCalculation();
        this.createEmptyFeesDet();
        console.log(this.LicenseConfigForm.value);
      } else {
        this.alert.showError('Record already exists');
      }
    } else {
      this.alert.showError('Plesae fill all mandatory fields');
    }
  }

  editFeeDeatils(preCntrl, i) {
    console.log(this.feesDet);
    const selCntrlVal = preCntrl.value;
    this.feesDet = {
      editRow: i.toString(),
      feeTypeCode: selCntrlVal.feeTypeCode,
      feeTypeDesc: selCntrlVal.feeTypeDesc,
      amount: Number(selCntrlVal.amount.replace(/[^0-9.-]+/g, ""))
    };
    // this.feesCalculation();
    console.log(this.feesDet);
  }

  deleteFeeDeatils(preCntrl, i) {
    (this.getFeeDetFormCntr() as FormArray).removeAt(i);
    // this.feesCalculation();
    this.createEmptyFeesDet();
  }

  // Fees Deatils
  getTankType() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_TANK_TYPE').subscribe(
      (res) => this.tankTypeList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  onTankTypeChange(tankTypeCode) {
    const tankTypeObj = this.tankTypeList.find((resp: any) => resp.paramKey === tankTypeCode);
    this.tankDet.tankTypeDesc = tankTypeObj.paramValue;
  }

  createEmptyTankDet() {
    this.tankDet = {
      editRow: '', tankTypeCode: '', tankTypeDesc: '',
      maxCapacity: '', tankLength: '', tankBreadth: '', tankHeight: ''
    };
  }

  addTankDeatils() {
    if (
      this.tankDet.tankTypeCode &&
      this.tankDet.maxCapacity &&
      this.tankDet.tankLength &&
      this.tankDet.tankBreadth &&
      this.tankDet.tankHeight
    ) {
      const cntr = this.getTankDetFormCntr() as FormArray;
      let test = cntr['controls'].filter(data =>
        data.value.tankTypeCode == this.tankDet.tankTypeCode &&
        data.value.maxCapacity == this.tankDet.maxCapacity &&
        data.value.tankLength == this.tankDet.tankLength &&
        data.value.tankBreadth == this.tankDet.tankBreadth &&
        data.value.tankHeight == this.tankDet.tankHeight
      );
      if (test.length === 0 || this.tankDet.editRow.length > 0) {
        if (this.tankDet.editRow.length > 0) {
          cntr.controls[parseInt(this.tankDet.editRow, 10)].patchValue(this.tankDet);
        } else {
          cntr.push(this.buildTankDetailsFormGroup(this.tankDet));
        }
        this.createEmptyTankDet();
        console.log(this.LicenseConfigForm.value);
      } else {
        this.alert.showError('Record already exists');
      }
    } else {
      this.alert.showError('Plesae fill all mandatory fields');
    }
  }

  editTankDeatils(preCntrl, i) {
    console.log(this.tankDet);
    const selCntrlVal = preCntrl.value;
    this.tankDet = {
      editRow: i.toString(),
      tankTypeCode: selCntrlVal.tankTypeCode,
      tankTypeDesc: selCntrlVal.tankTypeDesc,
      maxCapacity: selCntrlVal.maxCapacity,
      tankLength: selCntrlVal.tankLength,
      tankBreadth: selCntrlVal.tankBreadth,
      tankHeight: selCntrlVal.tankHeight,
    };
    console.log(this.tankDet);
  }

  deleteTankDeatils(preCntrl, i) {
    (this.getTankDetFormCntr() as FormArray).removeAt(i);
    this.createEmptyTankDet();
  }

  // Checklist
  getChecklist() {
    this.dropdownConfigSer.findDropDownMaster('LICENSE_CHECKLIST').subscribe(
      (res) => this.checkList = res.data ? res.data.downDropDownMasterValueList : []
    );
  }

  onChecklistChange(checkListCode) {
    const checklistObj = this.checkList.find((resp: any) => resp.paramKey === checkListCode);
    this.checklist.checkListDesc = checklistObj.paramValue;
  }

  createEmptyChecklist() {
    this.checklist = { editRow: '', checkListCode: '', checkListDesc: '', description: '' };
  }

  addChecklist() {
    if (this.checklist.checkListCode && this.checklist.description) {
      const cntr = this.getChecklistFormCntr() as FormArray;
      let test = cntr['controls'].filter(data => data.value.checkListCode == this.checklist.checkListCode &&
        data.value.description == this.checklist.description);
      if (test.length === 0 || this.checklist.editRow.length > 0) {
        if (this.checklist.editRow.length > 0) {
          cntr.controls[parseInt(this.checklist.editRow, 10)].patchValue(this.checklist);
        } else {
          cntr.push(this.buildChecklistFormGroup(this.checklist));
        }
        this.createEmptyChecklist();
        console.log(this.LicenseConfigForm.value);
      } else {
        this.alert.showError('Record already exists');
      }
    } else {
      this.alert.showError('Plesae fill all mandatory fields');
    }
  }

  editChecklist(preCntrl, i) {
    console.log(this.checklist);
    const selCntrlVal = preCntrl.value;
    this.checklist = {
      editRow: i.toString(),
      checkListCode: selCntrlVal.checkListCode,
      checkListDesc: selCntrlVal.checkListDesc,
      description: selCntrlVal.description
    };
    console.log(this.checklist);
  }

  deleteChecklist(preCntrl, i) {
    (this.getChecklistFormCntr() as FormArray).removeAt(i);
    this.createEmptyChecklist();
  }

  // License Mapping
  panelShadow($event: NgbPanelChangeEvent, shadow) {
    const activePanelId = $event.panelId;
    const activePanelElem = document.getElementById(activePanelId);

    // entityTypeList: any;
    // indentAcceptList: any;
    // indentRequestList: any;

  }

  checkAll(activePanelId, checkedStatus, data, i) {
    console.log(checkedStatus);
    console.log(activePanelId);
    console.log(data);
    // data.licenseList = data.licenseList.filter(obj => obj.checked = true);
    data.licenseList = data.licenseList.map((ele, i) => {
      return {
        id: ele.id,
        isActive: ele.isActive,
        licenseTypeCode: ele.licenseTypeCode,
        licenseTypeDesc: ele.licenseTypeDesc,
        checked: checkedStatus
      }
    });
    console.log(data.licenseList);
  }

  checkSingle(activePanelId, checkedStatus, data, i) {
    console.log(checkedStatus);
    console.log(activePanelId);
    console.log(data);
    if (checkedStatus) {
      data.licenseList[i].checked = true;
    } else {
      data.licenseList[i].checked = false;
    }
    let checkedCount = data.licenseList.filter(x => x.checked === true).length;
    //  var checkedboxes = document.querySelectorAll('input.items')
    // var checkall = document.getElementById(data.id)
    // console.log("id name--",checkall)
    // console.log('new vlu==',checkedboxes)
    
     const activePanelElem = document.getElementById(data.id) as HTMLInputElement;
    
    // for(let i=0;i<checkedCount.length;i++){
    //   checkedCount[i].onclick = function(){
    //     let checkedcounts = document.querySelectorAll('input.items:checked').length
    //     activePanelElem.checked = checkedcounts > 0
    //     activePanelElem.indeterminate = checkedcounts > 0 && checkedcounts < checkedCount.length
    //   }
    // }
    // checkall.onclick = function(){
    //   for(let i=0;i<checkedCount.length;i++){
    //     checkedCount[i].checked =  this.checked
    //   }
    // }
    if (checkedCount == data.licenseList.length) {
      activePanelElem.checked = true;
    } else {
      activePanelElem.checked = false;
    }
  }

  moveObj(fromList, toList) {
    for (let entityType in fromList) {
      let flag = false;
      for (let licenseType in fromList[entityType].licenseList) {
        if (fromList[entityType].licenseList[licenseType].checked) {
          flag = true;
          break;
        }
      }
      if (flag) {
        toList.push(fromList[entityType]);
        fromList.splice(entityType, 1);
        break;
      }
    }
  }

  moveEntityToAcceptSingle() {
    this.moveObj(this.entityTypeList, this.indentAcceptList);
  }

  moveAcceptToEntitySingle() {
    this.moveObj(this.indentAcceptList, this.entityTypeList);
  }

  moveEntityToAcceptAll() {
    if (this.entityTypeList.length) {
      this.indentAcceptList = (this.indentAcceptList.length) ? this.indentAcceptList.concat(this.entityTypeList) : this.entityTypeList;
      this.entityTypeList = [];
    }
  }

  moveAcceptToEntityAll() {
    if (this.indentAcceptList.length) {
      this.entityTypeList = (this.entityTypeList.length) ? this.entityTypeList.concat(this.indentAcceptList) : this.indentAcceptList;
      this.indentAcceptList = [];
    }
  }

  moveEntityToRequestSingle() {
    this.moveObj(this.entityTypeList, this.indentRequestList);
  }

  moveRequestToEntitySingle() {
    this.moveObj(this.indentRequestList, this.entityTypeList);
  }

  moveEntityToRequestAll() {
    if (this.entityTypeList.length) {
      this.indentRequestList = (this.indentRequestList.length) ? this.indentRequestList.concat(this.entityTypeList) : this.entityTypeList;
      this.entityTypeList = [];
    }
  }

  moveRequestToEntityAll() {
    if (this.indentRequestList.length) {
      this.entityTypeList = (this.entityTypeList.length) ? this.entityTypeList.concat(this.indentRequestList) : this.indentRequestList;
      this.indentRequestList = [];
    }
  }

  // common
  beforeChange($event: NgbTabChangeEvent) {
    // console.log($event.activeId);
    // console.log($event.nextId);
    // this.formSubmitted = false;
    // if (this.getFormCntr($event.activeId).valid === false) {
    //   // if ($event.nextId === 'tab-4') {
    //   // $event.preventDefault();
    //   // }
    //   this.formSubmitted = true;
    //   $event.preventDefault();
    // }
  }

  submit() {
    const form = this.LicenseConfigForm;
    console.log('this.LicenseConfigForm.valid::', form.valid);
    const formValue = form.value;
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const {
        entityCode, entityDesc, licenseTypeCode, licenseTypeDesc, status,
        licenseConfiguration: formValueLicenseConfiguration,
        licensePreRequisiteConfigurationList: formValueLicensePreRequisiteConfigurationList,
        applicationProductList: formValueApplicationProductList,
        feeList: formValueFeeList,
        tankList: formValueTankList,
        checkListConfigurationList: formValueCheckListConfigurationList
      } = formValue;

      let licenseMappingEntityList = [];
      if (this.indentAcceptList.length > 0 || this.indentRequestList.length > 0) {
        if (this.indentAcceptList.length > 0 && this.indentRequestList.length == 0) {
          licenseMappingEntityList = this.getMappingList(this.indentAcceptList, 'ACCEPT');
          console.log(licenseMappingEntityList);
        } else if (this.indentRequestList.length > 0 && this.indentAcceptList.length == 0) {
          licenseMappingEntityList = this.getMappingList(this.indentRequestList, 'INITIATE');
          console.log(licenseMappingEntityList);
        } else {
          let indentAcceptarray, indentRequestArray = [];
          indentAcceptarray = this.getMappingList(this.indentAcceptList, 'ACCEPT');
          console.log(indentAcceptarray);
          indentRequestArray = this.getMappingList(this.indentRequestList, 'INITIATE');
          console.log(indentRequestArray);
          licenseMappingEntityList = indentAcceptarray.concat(indentRequestArray);
        }
        console.log(licenseMappingEntityList);
      }

      const payload: any = {
        entityCode, entityDesc, licenseTypeCode, licenseTypeDesc, status,
        licenseConfiguration: formValueLicenseConfiguration,
        licensePreRequisiteConfigurationList: formValueLicensePreRequisiteConfigurationList,
        applicationProductList: formValueApplicationProductList,
        feeList: formValueFeeList,
        tankList: formValueTankList,
        checkListConfigurationList: formValueCheckListConfigurationList,
        licenseMappingEntityList: licenseMappingEntityList
      };

      if (this.id) {
        payload.id = this.id;
      }
      console.log('payload::', payload);

      this.service.createUpdateApplicationConfiguration(payload).subscribe((resp: any) => {
        console.log(resp);
        const { errorCode: respCode, userDisplayMesg: respMsg, data: respCont } = resp;
        if (respCode === 200 || respCode === 201) {
          console.log(respCont);
          this.alert.showSuccess(respMsg);
          this.router.navigate(['/licencemgnt/configuration/list']);
        } else {
          this.alert.showError(respMsg);
        }
      });
    }
  }

  getMappingList(arrayLst, str) {
    return arrayLst.map((ele, i) => {
      return {
        entityCode: ele.code,
        entityDesc: ele.name,
        mappingType: str,
        entitySubTypeList: ele.licenseList.map((el, j) => {
          if (el.checked) {
            return {
              entitySubTypeCode: el.licenseTypeCode,
              entitySubTypeDesc: el.licenseTypeDesc
            }
          }
        }).filter(item => item !== undefined)
      }
    });
  }

  getLicenseConfig() {
    this.service.findApplicationConfigurationByKey(this.entityCode, this.licenseTypeCode)
      .subscribe((resp: any) => {
        console.log(resp);
        const { errorCode: respCode, userDisplayMesg: respMsg, data: respCont } = resp;
        if (respCode === 200) {
          this.alert.showSuccess(respMsg);
          this.list = respCont;
          this.id = this.list.id;
          setTimeout(() => {
            this.patchValue();
          }, 1000);
        } else {
          this.alert.showError(respMsg);
        }
      });
  }

  patchValue() {
    console.log('---->0');
    this.onEntityChange(this.list.entityCode);
    this.onLicenseFirstChange(this.list.licenseConfiguration.licenseFirstCode);
    this.onDomainChange(this.list.licenseConfiguration.domainCode);
    this.onEntityTypeChange(this.list.licenseConfiguration.entityTypeCode);
    this.onLicenseTenureChange(this.list.licenseConfiguration.licenseTenureCode);
    this.onLicenseFinancialYearChange(this.list.licenseConfiguration.licenseFinancialYearCode);
    this.onRenewalTimeChange(this.list.licenseConfiguration.renewalTimeCode);
    this.LicenseConfigForm.patchValue({
      dateTime: formatDate(this.list.dateTime, 'yyyy-MM-dd', 'en'),
      entityCode: this.list.entityCode,
      entityDesc: this.list.entityDesc,
      licenseTypeCode: this.list.licenseTypeCode,
      licenseTypeDesc: this.list.licenseTypeDesc,
      status: (this.list.isActive ? 'true' : 'false'),
      licenseConfiguration: this.list.licenseConfiguration
    });
    this.patchLicensePreRequisiteConfiguration();
    this.patchApplicationProduct();
    this.patchFee();
    this.patchTank();
    this.patchCheckListConfiguration();
    this.patchLicenseMapping();
    console.log(this.LicenseConfigForm.value);
  }

  patchLicensePreRequisiteConfiguration() {
    const licPreReqArray = this.getLicPreReqFormCntr() as FormArray;
    this.list.licensePreRequisiteConfigurationList.forEach(x => {
      licPreReqArray.push(this.buildLicensePreReqConfigFormGroup(x));
    });
  }

  patchApplicationProduct() {
    const prodDetArray = this.getProDetFormCntr() as FormArray;
    this.list.applicationProductList.forEach(x => {
      prodDetArray.push(this.buildProductDetailsFormGroup(x));
    });
  }

  patchFee() {
    const feesDetArray = this.getFeeDetFormCntr() as FormArray;
    this.list.feeList.forEach(x => {
      feesDetArray.push(this.buildFeeDetailsFormGroup(x));
    });
    // this.feesCalculation();
  }

  patchTank() {
    const tankDetArray = this.getTankDetFormCntr() as FormArray;
    this.list.tankList.forEach(x => {
      tankDetArray.push(this.buildTankDetailsFormGroup(x));
    });
  }

  patchCheckListConfiguration() {
    const checklistArray = this.getChecklistFormCntr() as FormArray;
    this.list.checkListConfigurationList.forEach(x => {
      checklistArray.push(this.buildChecklistFormGroup(x));
    });
  }

  patchLicenseMapping() {
    if (this.list.licenseMappingEntityList.length > 0) {
      const arrList = this.list.licenseMappingEntityList;
      let removeIndex = [];
      let index = 0;
      for (let { id, code, name, licenseList } of this.entityTypeList) {
        let entitcCount = licenseList.length;
        console.log('entitcCount::', entitcCount);
        let obj = arrList.find(x => x.entityCode == code);
        if (obj) {
          let selEntityCount = obj.entitySubTypeList.length;
          console.log('selEntityCount::', selEntityCount);
          
          let selAllFlag = (entitcCount == selEntityCount) ? true : false;
          console.log('selAllFlag::', selAllFlag);
          let indentObject = {
            code: code,
            id: id,
            name: name,
            checked: selAllFlag,
            licenseList: licenseList.map((ele, n) => {
              let flag = (obj.entitySubTypeList).some(e => e.entitySubTypeCode == ele.licenseTypeCode);
              return {
                id: ele.id,
                isActive: ele.isActive,
                licenseTypeCode: ele.licenseTypeCode,
                licenseTypeDesc: ele.licenseTypeDesc,
                checked: flag,
              }
            })
          }
          let checkedCount = licenseList.filter(x => x.checked === true).length;
          indentObject.checked = (licenseList.length == checkedCount) ? true : false;
          if (obj.mappingType == 'ACCEPT') {
            this.indentAcceptList.push(indentObject);
          } else {
            this.indentRequestList.push(indentObject);
          }
          removeIndex.push(index);
          index = index + 1;
        }
      }
      for (const x of removeIndex) { this.entityTypeList.splice(x, 1); }
    }
  }

  cancel() {
    this.router.navigate(['/licencemgnt/configuration/list']);
  }

  loadData() {
    const test = {
      entityCode: "WHOLESALE",
      entityDesc: "Wholesale",
      licenseTypeCode: "CL2",
      licenseTypeDesc: "CL-2",
      status: "true",
      licenseConfiguration: {
        licenseFirstCode: "FIRST_LICENSE",
        domainCode: "OUTSIDE_UP",
        entityTypeCode: "BOTH",
        licenseTenureCode: "1",
        licenseTenureDesc: '1',
        licenseFinancialYearCode: "CALENDAR_YEAR",
        renewalTimeCode: "1",
        renewalTimeDesc: "1"
      },
      licensePreRequisiteConfigurationList: [],
      applicationProductList: [],
      feeList: [],
      tankList: [],
      checkListConfigurationList: []
    };

    this.getForm().patchValue(test);
    const licPreReqArray = this.getLicPreReqFormCntr() as FormArray;
    licPreReqArray.push(this.buildLicensePreReqConfigFormGroup({
      entityCode: "WHOLESALE",
      entityDesc: "Wholesale",
      licenseTypeCode: "CL2",
      licenseTypeDesc: "CL-2"
    }));
    const prodDetArray = this.getProDetFormCntr() as FormArray;
    prodDetArray.push(this.buildProductDetailsFormGroup({
      goodTypeCode: "MOLASSESS_TYPE",
      goodTypeDesc: "Molasses Type\t",
      isQuotaApplicable: "true",
      itemCode: "ITEM_A",
      itemDesc: "Item 1",
      materialTypeCode: "FINISH_GOODS",
      materialTypeDesc: "Finished Goods",
      quotaQuantity: "5",
      quotaTimeLineCode: "MONTHLY",
      quotaTimeLineDesc: "Monthly",
      subCategoryCode: "CATEGORY_B",
      subCategoryDesc: "Category B"
    }));
    const feesDetArray = this.getFeeDetFormCntr() as FormArray;
    feesDetArray.push(this.buildFeeDetailsFormGroup({
      feeTypeCode: "LICENSE_FEE",
      feeTypeDesc: "License Fee",
      amount: "55"
    }));
    const tankDetArray = this.getTankDetFormCntr() as FormArray;
    tankDetArray.push(this.buildTankDetailsFormGroup({
      tankTypeCode: "TT001",
      tankTypeDesc: "Pakka Pit",
      maxCapacity: "50",
      tankLength: "5 L",
      tankBreadth: "6 B",
      tankHeight: "7 H"
    }));
    const checklistArray = this.getChecklistFormCntr() as FormArray;
    checklistArray.push(this.buildChecklistFormGroup({
      checkListCode: "AADHAR_CARD",
      checkListDesc: "Aadhar Card Verification",
      description: "Aadhar"
    }));
    // console.log(this.LicenseConfigForm.value);
    // this.getProDetFormCntr().patchValue(test.applicationProductList);
    console.log(this.LicenseConfigForm.value);
  }

}