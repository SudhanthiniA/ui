import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { DropdownConfigService } from '@app/services';
import { Subject, merge } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import * as _ from 'lodash';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-relation',
  templateUrl: './add-relation.component.html',
  styleUrls: ['./add-relation.component.scss']
})
export class AddRelationComponent implements OnInit {
  isEdit = false;
  formSubmitted = false;
  mappingForm: FormGroup;
  seelctedarray: any = [];
  data: any = [];
  isReadonly = false;
  commentList: any;
  isComment: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  firstDropDownMasterDatas: any = [];
  secondDropDownMasterDatas: any = [];
  filterCode: string;
  filterSubCode: string;
  dependMasterData: any;
  dropdownSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'paramKey',
    textField: 'paramValue',
    itemsShowLimit: 10,
    allowSearchFilter: true,
    closeDropDownOnSelection: true,
  };
  parentSelectedItems = [];
  childSelectedItems = [];
  parentRequired = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alert: AlertService,
    private dropDownService: DropdownConfigService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      // code,subCode
      if (params.code && params.subCode) {
        this.isEdit = true;
        this.filterCode =  params.code;
        this.filterSubCode =  params.subCode;
        this.isReadonly = true;
        this.isComment = true;
        this.getMappingDropDownData();
      }
    });
    this.buildMappingFormGrp();
    this.loadInitialData();
  }

  getForm() { return this.mappingForm; }
  getFormCntr(element) { return this.getForm().get(element); }
  getFormCntrl(formCntrl, element) { return formCntrl.get(element); }

  getKeyValRowFormCntr() { return this.getFormCntr('rows') as FormArray; }
  // addFirmCompanyDetRow() { (this.getFirmCompanyDetFormCntr() as FormArray).push(this.buildCompanyMembersFormGroup()); }
  remRowDet(idx: number) { this.getKeyValRowFormCntr().removeAt(idx); }
  // getFirmCompanyDetLen(): number { return (this.getFirmCompanyDetFormCntr() as FormArray).length; }
  getRowFrmCntIdxIns(idx) { return this.getKeyValRowFormCntr().at(idx); }
  getRowFrmCntrIdx(idx, element = '') { return (element) ? this.getRowFrmCntIdxIns(idx).get(element) : this.getRowFrmCntIdxIns(idx); }

  addValueRow() {
    this.formSubmitted = false;
    this.getKeyValRowFormCntr().push(this.addKeyValFormGroup());
  }

  addKeyValFormGroup(data?: any): FormGroup {
    return this.fb.group({
      id: data && data.id || '',
      paramKey: data && data.paramKey || ['', Validators.required],
      paramValue: data && data.paramValue || ['', Validators.required],
      additionalValue1: data && data.additionalValue1 || [''],
      additionalValue2: data && data.additionalValue2 || [''],
      isActive: data && !data.isActive ? false : true || true
    });
  }

  buildMappingFormGrp() {
    this.mappingForm = this.fb.group({
      filterCode: ['', Validators.required],
      filterValue: ['', Validators.required],
      subFilterCode: ['', Validators.required],
      subFilterValue: ['', Validators.required],
      rows: this.fb.array([])
    });
  }

  onItemSelect(item: any, dropdownFor) {
    console.log('item::', item);
    switch (dropdownFor) {
      case 'Parent':
        this.getForm().patchValue({ filterCode: item.paramKey, filterValue: item.paramValue });
        this.findActiveDropDownChildList(item.paramKey);
        break;
      case 'Child':
        this.getForm().patchValue({ subFilterCode: item.paramKey, subFilterValue: item.paramValue });
        break;
    }
  }

  onItemDeselect(item: any, dropdownFor) {
    console.log('item::', item);
    switch (dropdownFor) {
      case 'Parent':
        this.getForm().patchValue({ filterCode: '', filterValue: '' });
        break;
      case 'Child':
        this.getForm().patchValue({ subFilterCode: '', subFilterValue: '' });
        break;
    }
  }

  loadInitialData() {
    this.findActiveDropDownList();
  }

  findActiveDropDownList() {
    this.dropDownService.findActiveDropDownList().subscribe((resp: any) => {
      this.firstDropDownMasterDatas = resp.data;
    });
  }

  findActiveDropDownChildList(dropDownKey) {
    this.dropDownService.findActiveDropDownChildList(dropDownKey).subscribe((resp: any) => {
      this.secondDropDownMasterDatas = resp.data;
    });
  }

  patchMasVal(list, code, formCntl, key) {
    const obj = list.find((resp: any) => resp.paramKey === code);
    formCntl.patchValue({ [key]: obj.paramValue });
  }

  onFirstDropDownChange($event) {
    const { value: firstDropDownKey } = $event.target;
    console.log('firstDropDownKey::', firstDropDownKey);
    this.patchMasVal(this.firstDropDownMasterDatas, firstDropDownKey, this.getForm(), 'filterValue');
    this.findActiveDropDownChildList(firstDropDownKey);
  }

  onSecondDropDownChange($event) {
    const { value: secondDropDownKey } = $event.target;
    console.log('secondDropDownKey::', secondDropDownKey);
    this.patchMasVal(this.secondDropDownMasterDatas, secondDropDownKey, this.getForm(), 'subFilterValue');
  }

  getMappingDropDownData(){
    this.dropDownService.findDependentValuesMasterOnMaster(this.filterCode, this.filterSubCode).subscribe((resp: any) => {
      console.log('resp.data::', resp.data);
      const respData = resp.data;
      this.dependMasterData = respData[0];
      const { filterCode, filterValue, subFilterCode, subFilterValue } = this.dependMasterData;

      this.parentSelectedItems = [{
        paramKey: filterCode,
        paramValue: filterValue
      }];

      this.childSelectedItems = [{
        paramKey: subFilterCode,
        paramValue: subFilterValue
      }];

      this.mappingForm.patchValue({ filterCode, filterValue, subFilterCode, subFilterValue });

      this.findActiveDropDownChildList(this.dependMasterData.filterCode);

      const keyValueRowCntrl = this.getKeyValRowFormCntr();
      respData.forEach((ele) => {
        const { id, paramKey, paramValue, additionalValue1, additionalValue2, isActive } = ele;
        keyValueRowCntrl.push(this.addKeyValFormGroup({ id, paramKey, paramValue, additionalValue1, additionalValue2, isActive }));
      });

      this.getFormCntr('filterCode').disable();
      this.getFormCntr('subFilterCode').disable();

    });
  }

  getDropDownById(key) {
    this.dropDownService.getDropdownByKey(key).subscribe((resp: any) => {
      this.commentList = resp.data.commentList;
      this.mappingForm.patchValue({
        code: resp.data.paramKey,
        description: resp.data.description,
        comments: resp.data.commentList[0].comments,
      });

      const control = this.mappingForm.get('rows') as FormArray;
      this.data = resp.data.downDropDownMasterValueList;
      this.data.forEach((ele, i) => {
        const obj = {
          id: ele.id,
          paramKey: ele.paramKey,
          value: ele.paramValue,
          isActive: ele.isActive
        };
        control.push(this.addKeyValFormGroup(obj));
        console.log('getDropDownById-obj::', obj);
        console.log(this.mappingForm.value);
      });

      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  checkRowCode(value, selectedCtrl, index) {
    let checkFlag = false;
    console.log('checkRowCode');
    const arr = this.mappingForm.get('rows')['controls'];
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (index !== i) {
          if (arr[i].value.paramKey === value) {
            checkFlag = true;
          }
        }
      }
    }
    if (checkFlag === true) {
      this.alert.showError('Code is already existed');
      selectedCtrl.patchValue({ paramKey: '' });
    }
  }

  async saveMapping() {
    console.log('form-data::');
    console.log('sadf::', this.parentSelectedItems);
    const form = this.getForm();
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required fields');
      return false;
    }

    const data = form.value;
    console.log('form-data::', data);

    if (data.rows.length <= 0) {
      this.alert.showError('Please add one dependent value row ');
      return false;
    }

    let { filterCode, subFilterCode } = data;
    const { filterValue, subFilterValue } = data;

    const isFilterKeyExist = (!this.isEdit) ? await this.dropDownService.isFilterKeyExistPromise(filterCode, subFilterCode) : {data: false};
    console.log('isFilterKeyExist::', isFilterKeyExist);
    if (isFilterKeyExist.data) {
      this.alert.showError('Parent and Child data record already exists.Please use update.');
      return false;
    }

    if (this.isEdit) {
      filterCode = this.dependMasterData.filterCode;
      subFilterCode = this.dependMasterData.subFilterCode;
    }

    data.rows.forEach(ele => _.merge(ele, { filterCode, filterValue, subFilterCode, subFilterValue }) );

    console.log('form-data-after::', data);

    this.dropDownService.createUpdateDependentValues(data.rows)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.alert.showSuccess(resp.userDisplayMesg);
          this.router.navigate(['/master/mappingconfiguration']);
        } else {
          this.alert.showError(resp.userDisplayMesg);
        }
      });

    return true;
  }

  getlength() {
    const control = this.mappingForm.get('rows') as FormArray;
    return control.length;
  }

  codeChecking(event) {
    console.log(event);
    this.dropDownService.checkdropdownkey(event).subscribe((res) => {
      if (res.status !== 'f') {
        this.alert.showError('Code is already existed', 'Error');
        this.mappingForm.patchValue({ code: '' });
      } else {
        console.log('console properly...');
      }
    });
  }
}
