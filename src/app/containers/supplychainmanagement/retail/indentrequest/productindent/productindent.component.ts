import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ProductService } from '@app/services/retails/product.service';
import { WholeSaleIndentService } from '@app/services/retails/wholesaleIndent.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-productindent',
  templateUrl: './productindent.component.html',
  styleUrls: ['./productindent.component.scss']
})
export class ProductindentComponent implements OnInit {
  formSubmitted = false;
  isShow = false;
  public productForm: FormGroup;
  liquorType: any;
  productList: any;
  productName: any;
  productCode: any;
  brandSizes: any;
  totalAmount = 0;
  productDetailList: any = [];
  productsArry: any = [];
  wholesaleData: any;
  liquorSubType: any = [{ id: 1, name: "Medium" }, { id: 2, name: "Strong" }, { id: 3, name: "Lager" }];
  packageTypeList: any = [{ id: 1, name: "Bottle" }, { id: 2, name: "Pet" }, { id: 3, name: "Can" }];
  wholesaleTypeList: any = [{ id: 1, name: "FL2" }, { id: 2, name: "BWFL2C" }, { id: 3, name: "BWFL2D" }];
  wholesaleList: any = [{ id: 1, name: "Open Door Liquor Store" }, { id: 2, name: "Streetlights Liquor Shop" }, { id: 3, name: "Cheers Wine and Spirits" }];
  productCodeList: [{ id: 1, name: "Bacardi", code: "123"},{ id: 2, name: "Golden Grape", code: "124"}];
  dropdownSettings: IDropdownSettings;
  dropdownSettingsLiquortype: IDropdownSettings;
  productCodeSettings: IDropdownSettings;
  constructor(
    private route: ActivatedRoute,
    private productSer: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private service: WholeSaleIndentService,
  ) { }

  ngOnInit() {
    this.buildProductFormGrp();
    this.route.params.subscribe(params => {
      this.getLiquorType(params.id);
    });
    this.indentWholesale();
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true
    };
    this.dropdownSettingsLiquortype = {
      singleSelection: true,
      idField: 'id',
      textField: 'type',
      allowSearchFilter: true
    };
    this.productCodeSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'code',
      allowSearchFilter: true
    };
  }
  buildProductFormGrp() {
    this.productForm = this.fb.group({
      liquortype: ['', Validators.required],
      // size: ['', Validators.required],
      name: ['', Validators.required],
      rows: this.fb.array([
      ])
    });
  }
  get f() { return this.productForm.controls; }
  get rows() {
    return this.productForm.get("rows") as FormArray;
  }
  indentWholesale() {
    this.service.get().subscribe((responceData: any) => {
      this.wholesaleData = responceData;
    });
  }
  getLiquorType(id) {
    this.productSer.getLiquorTypeById(id).subscribe((resp) => {
      this.liquorType = resp.liquor;
      this.productList = resp.product;
      console.log(this.productList);
      console.log('---------');
      
    });
  }

  getProductById(item: any) {
    const productId = item.id;
    this.productName = item.name;
    this.productCode = item.code;
    this.productSer.getBrandSize(productId).subscribe((resp) => {
      this.brandSizes = resp.sizes;
      this.productForm.patchValue({
        size: ''
      });
    });
  }

  addProduct(productForm) {
    this.formSubmitted = false;
    // if (productForm.valid === false) {
    //   this.formSubmitted = true;
    // } else {
    this.productsArry = this.productForm.get('rows').value;
    if (this.productsArry.length > 0) {
        let isFlag = 0;
        this.productsArry.filter((ele, ind) => {
          if (this.productName == ele.productName && this.productForm.value.size == ele.size) {
            isFlag = 1;
          }
        });
        if (isFlag === 1) {
          this.alert.showWarning('Product already added', 'warning');
        } else {
          this.addrows(this.productCode, this.productName, this.productForm.value.size);
        }
      } else {
        this.addrows(this.productCode, this.productName, this.productForm.value.size);
      }

    // }
  }
  addrows(prodcode, prodname, prodsize) {
    const obj = {
      productName: prodname,
      productCode: prodcode,
      size: prodsize,
      avlQty: '192/1920',
      price: 4500,
    };
    const control = this.productForm.get('rows') as FormArray;
    control.push(this.addProducts(obj));
  }
  addProducts(data): FormGroup {
    return this.fb.group({
      productName: data && data.productName || '',
      productCode: data && data.productCode || '',
      size: data && data.size || '',
      avlQty: data && data.avlQty || '',
      price: data && data.price || '',
      reqQty: data && data.reqQty || ['', Validators.required],
      amount: data && data.amount || ''
    });
  }
  // keypress(event: any) {
  //   if (event.target.value.length > 4) {
  //     event.preventDefault();
  //   }
  // }
  keypress(event: any) {
    const pattern = /^[\d]+$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar) || event.target.value.length > 4 ) {
      event.preventDefault();
    }
  }
  deleteRow(index) {
    const delValue = this.productForm.get('rows') as FormArray;
    this.totalAmount = this.totalAmount - delValue.value[index].amount;
    delValue.removeAt(index);
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
    this.productDetailList = [];
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.productForm.get('rows')['controls']);
      if (this.productForm.get('rows')['controls'].length === 0) {
        this.alert.showWarning('Please add at least one product', 'warning');
      } else {
        this.productForm.get('rows')['controls'].forEach((ele, i) => {
          const obj = {
            amount: ele.value.amount,
            productId: 1,
            productName: ele.value.productName,
            productCode: ele.value.productCode,
            quantity: 10,
            size: 90
          };
          this.productDetailList.push(obj);
        });
        sessionStorage.setItem('productDetails', JSON.stringify(this.productDetailList));
        sessionStorage.setItem('totalAmount', JSON.stringify(this.totalAmount));
        sessionStorage.setItem('methodType', method);
        this.router.navigate(['/supplychainmanagement/retail/indentrequest/payment']);
      }
    }

  }
}
