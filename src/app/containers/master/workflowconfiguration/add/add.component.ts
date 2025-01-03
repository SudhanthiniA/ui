import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertService,
  UserManagmentService,
  WorkflowcofigService
} from '@app/services';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  moduleNameCode: any;
  subModuleNameCode: any;
  formSubmitted = false;
  productArry = [];
  isShow = false;
  productForm: FormGroup;
  liquorType: any;
  productList: any;
  productName: any;
  brandSizes: any;
  totalAmount = 0;
  productDetailList: any = [];
  seelctedarray: any = [];
  subModules: any = []; moduleName: any;
  moduleArr: any;
  screenArr: any;
  designationData: any = [{ name: 'Customer', code: 'customer' }];
  upDesignationData: any;
  roles: any;
  submenus: this;
  findnumberofdesignations: any[];
  list: any;
  digitalsign = false;
  siteVisitSectionFlag = false;
  siteVisitFlag = false;
  addEdit="workflowconfig.common.edit"

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private userManageService: UserManagmentService,
    private workflowconfig: WorkflowcofigService
  ) { }

  ngOnInit() {
    this.buildProductFormGrp();
    this.getEntityType();
    this.route.params.subscribe(params => {
      this.moduleNameCode = params.moduleNameCode;
      this.subModuleNameCode = params.subModuleNameCode;
      if(this.moduleNameCode==undefined){
        this.addEdit="workflowconfig.common.add"
      }
    });
    setTimeout(() => {
      if (!this.moduleNameCode) {
        this.addProduct(this.productForm);
      }
    }, 500);
  }

  buildProductFormGrp() {
    this.productForm = this.fb.group({
      module: ['', Validators.required],
      isSendBackSeq: false,
      submodule: ['', Validators.required],
      liquortype: ['', Validators.required],
      status: ['true', Validators.required],
      discription: ['', Validators.required],
      modulecode: [''],
      moduleNameDesc: [''],
      submodulecode: [''],
      id: 0,
      isProcessingFeeRequired: ['false'],
      isLicenseFeeRequired: ['false'],
      isSiteVisitNeeded: ['false'],
      isSiteVisitBeforeApplicationApproval: ['false'],
      isCustomerSiteInformationRequired: ['false'],
      isDeptSiteVisitRequired: ['false'],
      siteVisitAssignerDesignationCode: [''],
      siteVisitAssignerDesignationDesc: [''],
      createdBy: [''],
      createdDate: [''],
      rows: this.fb.array([
        this.addProducts()
      ])
    });
  }

  get f() { return this.productForm.controls; }
  get productArr() { return this.productForm.get('rows') as FormArray; }

  submodbas($event) {
    console.log($event.target.value);
    this.productForm.get('liquortype').setValue('');
    const rest = this.subModules.filter(x => x.screenName == $event.target.value)[0];
    this.productForm.get('submodulecode').setValue(rest.screenCode);
    this.productForm.controls['liquortype'].setValue(rest.screenName ? rest.screenName : '');
  }

  getEntityType() {
    const param = {
      page: 0,
      pageSize: 100
    };
    this.userManageService.getAllEntityType(param)
      .subscribe((resp: any) => {
        this.moduleArr = resp.content.content;
        if (this.moduleNameCode && this.subModuleNameCode) {
          this.getall();
        }
      });
  }

  changerole(i, value) {
    console.log(i, value);
    this.seelctedarray.push(value);
    const existItem = this.seelctedarray.filter(item => item === value);
    if (existItem.length > 1) {
      const lastItem = this.seelctedarray[this.seelctedarray.length - 1];
      const index = this.seelctedarray.indexOf(lastItem);
      if (index > -1) {
        this.seelctedarray.splice(index, 1);
      }
      console.log(this.seelctedarray);

      this.productForm.value.rows[i].size = '';
      console.log(this.productForm.value.rows);
      this.productForm.value.rows.forEach((element: any, idx: number) => {
        if (element) {
          (this.productForm.get('rows') as FormArray).removeAt(element.size);
          (this.productForm.get('rows') as FormArray).push(this.addProducts(element));

        }
      });
    }
  }

  onChangeModule(code) {
    if (code === 'LICENSE_MANAGEMENT') {
      this.siteVisitSectionFlag = true;
      this.validateEnableDisable('isProcessingFeeRequired', [Validators.required]);
      this.validateEnableDisable('isLicenseFeeRequired', [Validators.required]);
      this.validateEnableDisable('isSiteVisitNeeded', [Validators.required]);
    } else {
      this.siteVisitSectionFlag = false;
      this.validateEnableDisable('isProcessingFeeRequired', []);
      this.validateEnableDisable('isLicenseFeeRequired', []);
      this.validateEnableDisable('isSiteVisitNeeded', []);
    }
    this.getDesignation(code);

    const moduleobj = this.moduleArr.find((resp: any) => resp.code === code);
    this.productForm.patchValue({ moduleNameDesc: moduleobj.name });
  }

  validateEnableDisable(element, validators) {
    this.productForm.controls[element].setValidators(validators);
    this.productForm.controls[element].updateValueAndValidity();
  }

  getDesignation(id) {
    console.log(id);
    console.log(this.moduleArr);
    const ids = this.moduleArr.find(x => x.code == id);
    this.productForm.get('submodule').setValue('');
    this.productForm.get('liquortype').setValue('');
    this.productForm.get('modulecode').setValue(ids.code);
    this.userManageService.getworkflowbyentityid(ids.id).subscribe((resp: any) => {
      if (resp.responseCode == 200) {
        this.subModules = resp.content;
      }
    });
    this.userManageService.getDesignation().subscribe((resp: any) => {
      this.upDesignationData = resp.content;
    });
  }

  onChangeSiteVisit(siteVisit) {
    if (siteVisit == 'true') {
      this.siteVisitFlag = true;
    } else {
      this.siteVisitFlag = false;
    }
  }

  onSiteVisitAssignerChange(siteVisitAssignerDesignationCode) {
    console.log('siteVisitAssignerDesignationCode::', siteVisitAssignerDesignationCode);
    if (this.upDesignationData && siteVisitAssignerDesignationCode) {
      const entityObj = this.upDesignationData.find((resp: any) => resp.code === siteVisitAssignerDesignationCode);
      this.productForm.patchValue({ siteVisitAssignerDesignationDesc: entityObj.name });
    }
  }

  addProduct(productForm) {
    this.formSubmitted = false;
    const control = this.productForm.get('rows') as FormArray;
    control.push(this.addProducts());
    this.checkAddOrDeleteRow();
  }

  addProducts(data?: any): FormGroup {
    return this.fb.group({
      productName: data && data.level || 'Level 1',
      assignedto: data && data.assignedDesc || ['', Validators.required],
      isreject: data && data.isRejected || false,
      is_sendback: data && data.isSendBack || false,
      isactive: data && data.isActive || false,
      isfinished: data && data.isFinished || false,
      assignedtocode: data && data.assignedTo || '',
      isDigitalSignature: data && data.isDigitalSignature || false,
      isForwardWithOutApproval: data && data.isForwardWithOutApproval || false,
      isSiteVisitOfficer: data && data.isSiteVisitOfficer || false,
      id: data && data.id || 0,
      createdBy: data && data.createdBy || '',
      createdDate: data && data.createdDate || '',
    });
  }

  checkAddOrDeleteRow() {
    (this.productForm.get('rows') as FormArray).controls.forEach((x: any, i: number) => {
      if (i === 0) {
        x.get('isactive').setValue(true);
        x.get('isfinished').setValue(false);
      } else if (i == (this.getlength() - 1)) {
        x.get('isactive').setValue(true);
        x.get('isfinished').setValue(true);
      } else {
        if (this.moduleNameCode) {
          console.log(i + 'isactive::', x.value.isactive);
          if (i == (this.getlength() - 2)) {
            x.get('isactive').setValue(false);
          }
          x.get('isfinished').setValue(false);
        } else {
          x.get('isactive').setValue(false);
          x.get('isfinished').setValue(false);
        }
      }
    });
  }

  deleteRow(idx: number, element) {
    const index = this.seelctedarray.indexOf(element.value.size);
    if (index > -1) {
      this.seelctedarray.splice(index, 1);
    }
    console.log(this.seelctedarray);
    (this.productForm.get('rows') as FormArray).removeAt(idx);
    console.log(this.productForm);
    this.checkAddOrDeleteRow();
  }

  saveWorkFlow() {
    const form = this.productForm;
    console.log('form::', form);
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please Fill All Required Fields');
      return false;
    }

    const data = form.value;
    const postarray = data.rows.map((x: any, idx: number) => {
      const postingRowData = {
        assignedTo: x.assignedtocode,
        assignedDesc: x.assignedto,
        description: 'string',
        id: x.id,
        isActive: x.isactive,
        isFinished: x.isfinished,
        isDigitalSignature: x.isDigitalSignature,
        isForwardWithOutApproval: x.isForwardWithOutApproval,
        isSiteVisitOfficer: x.isSiteVisitOfficer,
        isRejected: x.isreject,
        isSendBack: x.is_sendback,
        level: 'Level' + ' ' + (idx + 1)
      };
      (x.createdBy) ? postingRowData['createdBy'] = x.createdBy : '';
      (x.createdDate) ? postingRowData['createdDate'] = x.createdDate : '';
      return postingRowData;
    });
    const postingData = {
      id: data.id,
      isActive: data.status,
      moduleNameCode: data.modulecode,
      moduleNameDesc: data.moduleNameDesc,
      isSendBackSeq: data.isSendBackSeq,
      subModuleNameCode: data.submodulecode,
      subModuleNameDesc: data.submodule,
      workFlowDetails: postarray,
      workflowDescription: data.discription,
      workflowName: data.liquortype,
      isProcessingFeeRequired: data.isProcessingFeeRequired,
      isLicenseFeeRequired: data.isLicenseFeeRequired,
      isSiteVisitNeeded: data.isSiteVisitNeeded,
      isSiteVisitBeforeApplicationApproval: data.isSiteVisitBeforeApplicationApproval,
      isCustomerSiteInformationRequired: data.isCustomerSiteInformationRequired,
      isDeptSiteVisitRequired: data.isDeptSiteVisitRequired,
      siteVisitAssignerDesignationCode: data.siteVisitAssignerDesignationCode,
      siteVisitAssignerDesignationDesc: data.siteVisitAssignerDesignationDesc
    };
    (data.createdBy) ? postingData['createdBy'] = data.createdBy : '';
    (data.createdDate) ? postingData['createdDate'] = data.createdDate : '';
    console.log(postingData);
    if (this.moduleNameCode) {
      this.workflowconfig.addworkflow(postingData)
        .subscribe((resp: any) => {
          if (resp.responseCode === 200) {
            this.alert.showSuccess(resp.responseMessage);
            this.router.navigate(['/master/workflowconfig/list'])
          }
        });
    } else {
      if (postarray.length > 1) {
        this.workflowconfig.checkworkflow(data.modulecode, data.submodulecode)
          .subscribe((resp: any) => {
            if (!resp) {
              this.workflowconfig.addworkflow(postingData)
                .subscribe((resp: any) => {
                  if (resp.responseCode === 200) {
                    this.alert.showSuccess(resp.responseMessage);
                    this.router.navigate(['/master/workflowconfig/list'])
                  }
                });
            } else {
              this.alert.showError('WorkFlow Already Exists');
            }
          })
      } else {
        this.alert.showError('Only One Level Not allowed');
      }
    }
  }

  getlength() {
    const control = this.productForm.get('rows') as FormArray;
    return control.length;
  }

  checkduplicate(val, formdata, i) {
    this.findnumberofdesignations = [];
    (this.productForm.get('rows') as FormArray).controls.forEach((x: any) => {
      if (x.value.assignedto == val) {
        this.findnumberofdesignations.push(x.value);
        const data = (i === 0) ? this.designationData.find(y => y.name == val) : this.upDesignationData.find(y => y.name == val);
        formdata.get('assignedtocode').setValue(data.code);
      }
      if (this.findnumberofdesignations.length == 2) {
        this.alert.showError('This Designation already Exists', 'error');
        formdata.get('assignedto').setValue('');
      }
    });
  }

  getall() {
    this.workflowconfig.getworkflowbysubmodule(this.moduleNameCode, this.subModuleNameCode)
      .subscribe((resp: any) => {
        this.list = resp.content;
        console.log('moduleNameCode ++ ', this.list.moduleNameCode);
        this.onChangeModule(this.list.moduleNameCode);
        this.productForm.patchValue({
          id: this.list.id,
          createdBy: this.list.createdBy,
          createdDate: this.list.createdDate,
          module: this.list.moduleNameCode,
          submodule: this.list.subModuleNameDesc,
          liquortype: this.list.workflowName,
          status: (this.list.isActive ? 'true' : 'false'),
          discription: this.list.workflowDescription,
          modulecode: this.list.moduleNameCode,
          moduleNameDesc: this.list.moduleNameDesc,
          submodulecode: this.list.subModuleNameCode,
          isSendBackSeq: this.list.isSendBackSeq,
          isProcessingFeeRequired: (this.list.isProcessingFeeRequired ? 'true' : 'false'),
          isLicenseFeeRequired: (this.list.isLicenseFeeRequired ? 'true' : 'false'),
          isSiteVisitNeeded: (this.list.isSiteVisitNeeded ? 'true' : 'false'),
          isSiteVisitBeforeApplicationApproval: (this.list.isSiteVisitBeforeApplicationApproval ? 'true' : 'false'),
          isCustomerSiteInformationRequired: (this.list.isCustomerSiteInformationRequired ? 'true' : 'false'),
          isDeptSiteVisitRequired: (this.list.isDeptSiteVisitRequired ? 'true' : 'false'),
          siteVisitAssignerDesignationCode: this.list.siteVisitAssignerDesignationCode,
          siteVisitAssignerDesignationDesc: this.list.siteVisitAssignerDesignationDesc
        });
        this.list.workFlowDetails.forEach((x: any, idx: number) => {
          if (idx === 0) {
            (this.productForm.get('rows') as FormArray).removeAt(0);
          }
          if (idx == (this.list.workFlowDetails.length - 1)) {
            x.isFinished = true;
          }
          console.log(x);
          (this.productForm.get('rows') as FormArray).push(this.addProducts(x));
        });
        this.onChangeSiteVisit(this.productForm.value.isSiteVisitNeeded);
      });
  }

  checkdisable(idx, key) {
    (this.productForm.get('rows') as FormArray).controls.forEach((x: any, ind: number) => {
      if (idx != ind) {
        x.get(key).setValue(false);
      }
    });
  }

}