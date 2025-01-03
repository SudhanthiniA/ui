import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { ProductTypeService } from '@app/services';
@Component({
  selector: 'app-add-edit-product-type',
  templateUrl: './add-edit-product-type.component.html',
  styleUrls: ['./add-edit-product-type.component.scss']
})
export class AddEditProductTypeComponent implements OnInit {

  producttypeObject: any = {};
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductTypeService,
    private datePipe: DatePipe,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.producttypeObject.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getProductTypeById(params.id);
        this.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addproducttype(producttypeForm) {
    this.formSubmitted = false;
    console.log(producttypeForm.valid);
    if (producttypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      console.log(this.producttypeObject);
      if (this.producttypeObject.id) {
        const postParam = {
          id: this.id,
          productCode: this.producttypeObject.productCode,
          name: this.producttypeObject.name,
          percentage: this.producttypeObject.percentage,
          active: this.producttypeObject.active
        };
        this.productService.updateProductType(postParam).subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/product-type/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      } else {
        const postParam = {
          productCode: this.producttypeObject.productCode,
          name: this.producttypeObject.name,
          percentage: this.producttypeObject.percentage,
          active: this.producttypeObject.active
        };
        this.productService.addProductType(postParam).subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/product-type/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      }
    }
  }

  getProductTypeById(id) {
    this.productService.getProductById(id).subscribe((responceData: any) => {
      this.producttypeObject = responceData.data;
      this.producttypeObject.active = responceData.data.isActive;
    });
  }

}
