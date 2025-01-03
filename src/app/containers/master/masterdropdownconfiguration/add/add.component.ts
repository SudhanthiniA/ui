import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { DropdownConfigService } from '@app/services';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  editid; actstatus;
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
  designationData: any;
  upDesignationData: any;
  roles: any;
  submenus: this;
  findnumberofdesignations: any[];
  list: any;
  digitalsign = false;
  dropdownArry: any = [];
  data: any = [];
  isReadonly = false;
  isReadOny = false;
  commentList: any;
  isComment: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alert: AlertService,
    private router: Router,
    private dropDownService: DropdownConfigService
  ) { }

  ngOnInit() {
    this.buildProductFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editid = params.id;
        console.log(params);
        this.getDropDownById(params.key);
        this.isReadonly = true;
        this.isComment = true;
      }
    });
  }
  getDropDownById(key) {
    this.dropDownService.findDropDownMasterOnMaster(key).subscribe((resp: any) => {
      this.commentList = resp.data.commentList;
      this.productForm.patchValue({
        code: resp.data.paramKey,
        paramValue: resp.data.paramValue,
        description: resp.data.description,
        comments: resp.data.commentList[0].comments,
      });
      const control = this.productForm.get('rows') as FormArray;
      this.data = resp.data.downDropDownMasterValueList;
      this.data.forEach((ele, i) => {
        const obj = {
          id: ele.id,
          paramKey: ele.paramKey,
          value: ele.paramValue,
          additionalValue1: ele.additionalValue1,
          additionalValue2: ele.additionalValue2,
          isActive: ele.isActive
        };
        control.push(this.addProducts(obj));
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
  buildProductFormGrp() {
    this.productForm = this.fb.group({
      code: ['', Validators.required],
      paramValue: ['', Validators.required],
      description: ['', Validators.required],
      comments: ['', Validators.required],
      rows: this.fb.array([
      ])
    });
  }

  get f() { return this.productForm.controls; }

  get productArr() {
    return this.productForm.get('rows') as FormArray;
  }
  checkRowCode(value, selectedCtrl, index) {
    let checkFlag = false;
    const arr = this.productForm.get('rows')['controls'];
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        if (index !== i) {
          if (arr[i].value.code === value) {
            checkFlag = true;
          }
        }
      }
    }
    if (checkFlag === true) {
      this.alert.showError('Code is already existed', 'Error');
      selectedCtrl.patchValue({ code: '' });
    }
  }
  addProduct(productForm) {
    this.formSubmitted = false;
    const obj = {
      // productName: this.productForm.value.rows.length === 0 ? 'Level 1' : 'Level' + ' ' + (this.productForm.value.rows.length + 1),
    };
    const control = this.productForm.get('rows') as FormArray;
    control.push(this.addProducts());
    (this.productForm.get('rows') as FormArray).controls.forEach((x: any, i: number) => {

      // if(i == this.getlength()-1) {
      //   x.get('isfinished').setValue(true)
      // } else {
      //   x.get('isfinished').setValue(false)
      // }
    });
  }

  addProducts(data?: any): FormGroup {
    return this.fb.group({
      id: data && data.id || '',
      code: data && data.paramKey || ['', Validators.required],
      value: data && data.value || ['', Validators.required],
      additionalValue1: data && data.additionalValue1 || [''],
      additionalValue2: data && data.additionalValue2 || [''],
      isActive: data && !data.isActive ? false : true || true
    });
  }

  public deleteRow(idx: number, element) {
    const index = this.seelctedarray.indexOf(element.value.size);
    if (index > -1) {
      this.seelctedarray.splice(index, 1);
    }
    console.log(this.seelctedarray);
    (this.productForm.get('rows') as FormArray).removeAt(idx);
    console.log(this.productForm);
  }

  save(form, method) {
    if (form.valid === false) {
      this.formSubmitted = true;
      //this.alert.showError('Please Fill All Required Fields', 'Error');
    } else {
      const data = form.value;
      const postarray = data.rows.map((x: any, idx: number) => {
        return {
          isActive: JSON.parse(x.isActive),
          paramKey: x.code,
          paramValue: x.value,
          additionalValue1: x.additionalValue1,
          additionalValue2: x.additionalValue2,
          id: x.id
        };
      });
      const postingData = {
        paramKey: data.code,
        paramValue: data.paramValue,
        comments: data.comments,
        description: data.description,
        downDropDownMasterValueList: postarray,
      };
      console.log(postingData);
      if (this.editid) {
        postingData['id'] = this.editid;
        this.dropDownService.addmastervalues(postingData)
          .subscribe((resp: any) => {
            if (resp.errorCode === 200) {
              this.alert.showSuccess(resp.userDisplayMesg);
              this.router.navigate(['/master/dropdownconfiguration/list']);
            }
          })
      } else {
        if (postarray.length > 0) {
          this.dropDownService.addmastervalues(postingData)
            .subscribe((resp: any) => {
              if (resp.errorCode === 200) {
                this.alert.showSuccess(resp.userDisplayMesg, 'Success');
                this.router.navigate(['/master/dropdownconfiguration/list']);
              } else {
                this.alert.showError(resp.userDisplayMesg);
              }
            });
        } else {
          this.alert.showError('Please add one row');
        }
      }
    }
  }

  getlength() {
    const control = this.productForm.get('rows') as FormArray;
    return control.length;
  }

  codeChecking(event) {
    console.log(event);
    this.dropDownService.checkdropdownkey(event).subscribe((res) => {
      if (res.status === 'f') {
      } else {
        this.alert.showError('Code is already existed');
        this.productForm.patchValue({ code: '' });
      }
    });
  }

}