import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-addlabeldesign',
  templateUrl: './addlabeldesign.component.html',
  styleUrls: ['./addlabeldesign.component.scss']
})
export class AddlabeldesignComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  categoryList: Array<any> = [];
  categoryObj: any = {
    labelname: '',
    breweryname: '',
    brandname: '',
    product: '',
    type: '',
    quantity: '',
    establish: '',
    hight: '',
    width: '',
    color: '',
    logo: '',
    custom: '',
    qrcode: '',
    status: true
  };
  date: any;
  brands = [{ name: 'Brand1' }, { name: 'Brand2' }, { name: 'Brand3' }, { name: 'Brand4' }];
  sizess = [{ size: 'Product1' }, { size: 'product2' }, { size: 'product3' }, { size: 'product4' }, { size: 'product5' }];
  typess = [{ size: 'Type1' }, { size: 'type2' }, { size: 'type3' }];
  colors = [{ name: 'color1' }, { name: 'color2' }, { name: 'color3' }];
  editId: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.categoryObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  setData(id) {
    this.apiService.get('labeldesign/' + id).then(responceData => {
      console.log(responceData);
      this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addcategory(categoryForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (categoryForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          labelname: this.categoryObj.labelname,
          breweryname: this.categoryObj.breweryname,
          brandname: this.categoryObj.brandname,
          product: this.categoryObj.product,
          type: this.categoryObj.type,
          quantity: this.categoryObj.quantity,
          establish: this.categoryObj.establish,
          hight: this.categoryObj.hight,
          width: this.categoryObj.width,
          color: this.categoryObj.color,
          logo: this.categoryObj.logo,
          custom: this.categoryObj.custom,
          qrcode: this.categoryObj.qrcode,
          created_by: 'Admin',
          modified_by: 'Admin',
          status: this.categoryObj.status
        };

        console.log(postParam);
        const url = 'labeldesign/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/exiselabel/labeldesign/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          labelname: this.categoryObj.labelname,
          breweryname: this.categoryObj.breweryname,
          brandname: this.categoryObj.brandname,
          product: this.categoryObj.product,
          type: this.categoryObj.type,
          quantity: this.categoryObj.quantity,
          establish: this.categoryObj.establish,
          hight: this.categoryObj.hight,
          width: this.categoryObj.width,
          color: this.categoryObj.color,
          logo: this.categoryObj.logo,
          custom: this.categoryObj.custom,
          qrcode: this.categoryObj.qrcode,
          created_by: 'Admin',
          modified_by: 'Admin',
          status: this.categoryObj.status
        };

        console.log(postParam);

        this.apiService.post('labeldesign', postParam).then(responceData => {
          this.router.navigate(['/exiselabel/labeldesign/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['exiselabel/labelrequest/list']);
  }

}
