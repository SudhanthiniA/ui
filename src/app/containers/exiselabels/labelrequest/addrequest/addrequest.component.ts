import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-addrequest',
  templateUrl: './addrequest.component.html',
  styleUrls: ['./addrequest.component.scss']
})
export class AddrequestComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  categoryList: Array<any> = [];
  categoryObj: any = {
    sizes : '',
    quantity: '',
    packsize: '',
    brandname: '',
    status : true
  };
  date: any;
  brands = [{name: 'Brand1'}, {name: 'Brand2'}, {name: 'Brand3'}, {name: 'Brand4'}];
  sizess = [{size: '1000'}, {size: '2000'}, {size: '3000'}, {size: '4000'}, {size: '5000'}, {size: '6000'}];
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
    this.apiService.get('labelrequest/' + id).then(responceData => {
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
          sizes: this.categoryObj.sizes,
          quantity: this.categoryObj.quantity,
          packsize: this.categoryObj.packsize,
          brandname: this.categoryObj.brandname,
          created_by: 'Admin',
          modified_by: 'Admin',
          status: this.categoryObj.status
        };

        console.log(postParam);
        const url = 'labelrequest/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/exiselabel/labelrequest/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          sizes: this.categoryObj.sizes,
          quantity: this.categoryObj.quantity,
          packsize: this.categoryObj.packsize,
          brandname: this.categoryObj.brandname,
          created_by: 'Admin',
          modified_by: 'Admin',
          status: this.categoryObj.status
        };

        console.log(postParam);

        this.apiService.post('labelrequest', postParam).then(responceData => {
          this.router.navigate(['/exiselabel/labelrequest/list']);
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
