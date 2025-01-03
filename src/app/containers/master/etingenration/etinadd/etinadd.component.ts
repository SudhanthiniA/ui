import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AlertService,
  UserManagmentService,
  WarehouseNewbrandService
} from '@app/services';

@Component({
  selector: 'app-etinadd',
  templateUrl: './etinadd.component.html',
  styleUrls: ['./etinadd.component.scss']
})
export class EtinaddComponent implements OnInit {

  editid; 
  actstatus;
  formSubmitted = false;
  productArry = [];
  isShow = false;
  public productForm: FormGroup;
  liquorType: any;
  productList: any;
  productName: any;
  brandSizes: any;
  totalAmount = 0;
  productDetailList: any = [];
  seelctedarray: any = [];
  subModules: any = []; moduleName: any;

  designationData: any;
  roles: any;
  submenus: this;
  moduleArr: any;
  domainlist: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alert: AlertService,
    private userManageService: UserManagmentService,
    private warehouseNewbrandService: WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.buildProductFormGrp();
    this.route.params.subscribe(params => {
      this.editid = params.id;
      // this.getLiquorType(params.id);
    });

    this.getEntityType();
  }

  buildProductFormGrp() {
    this.productForm = this.fb.group({
      module: ['', Validators.required],
      submodule: ['', Validators.required],
      liquortype: ['', Validators.required],
      status: ['', Validators.required],
      discription: ['', Validators.required],
      qrcode: [''],
      barcode: [''],
      rows: this.fb.array([
        this.addProducts()
      ])
    });
  }

  get f() { return this.productForm.controls; }

  get productArr() {
    return this.productForm.get("rows") as FormArray;
  }

  submodbas($event) {
    console.log($event.target.value);
    const rest = this.subModules.filter(x => x.id == $event.target.value)[0];
    console.log(rest);
    this.productForm.controls['submodule'].setValue(rest.name ? rest.name : '');
  }

  getEntityType() {
    this.userManageService.getActiveEntities()
      .subscribe((resp: any) => {
        this.moduleArr = resp.data;
      });

    this.warehouseNewbrandService.getAllDomain().subscribe((responceData: any) => {
      console.log(responceData);
      this.domainlist = responceData.data;
    });
  }

  changerole(i, value) {
    console.log(i, value);
    this.seelctedarray.push(value);
    const existItem = this.seelctedarray.filter(item => item === value);
    if (existItem.length > 1) {

      const lastItem = this.seelctedarray[this.seelctedarray.length - 1]

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

  getDesignation(id) {
    this.userManageService.getDesignationByEntityTypeId(id).subscribe((resp: any) => {
      this.designationData = resp.data;
    });
    this.subModules = this.roles.filter(a => a.pid === id);
  }

  addProduct(productForm) {
    this.formSubmitted = false;
    // if (productForm.valid === false) {
    //   this.formSubmitted = true;
    // } else {
    console.log(this.productForm.value.rows);
    const obj = {
      productName: this.productForm.value.rows.length === 0 ? 'Level 1' : 'Level' + ' ' + (this.productForm.value.rows.length + 1),
    };
    // this.productArr.push(this.addProducts());
    const control = this.productForm.get('rows') as FormArray;
    control.push(this.addProducts(obj));
    // }
  }

  addProducts(data?: any): FormGroup {
    return this.fb.group({
      productName: data && data.productName || 'Level 1',
      assignedto: data && data.size || [false, Validators.required],
      isreject: data && data.avlQty || false,
      is_sendback: data && data.price || false,
      isactive: data && data.reqQty || false,
      isfinished: data && data.amount || false
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

  totalPrice(event, i) {
    const selectedCtrl = this.productForm.get('rows')['controls'][i];
    const totAmount = (event.target.value) * (selectedCtrl.value.price);
    selectedCtrl.patchValue({
      amount: totAmount
    });
    this.RefundableAmount();
  }

  RefundableAmount() {
    this.totalAmount = 0;
    this.productForm.get('rows')['controls'].forEach((ele, i) => {
      this.totalAmount = this.totalAmount + ele.value.amount;
    },
      this.isShow = true);
  }

  save(form, method) {
    console.log(form)
    this.productDetailList = [];
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const lastItem = this.productForm.value.rows[this.productForm.value.rows.length - 1]
      console.log(lastItem);
      if (lastItem.amount === '' || lastItem.amount === false) {
        this.formSubmitted = true;
        this.alert.showError('Please select isfinished', '');
      }
    }
  }

}
