import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { MasterapiService } from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addeditstockout',
  templateUrl: './addeditstockout.component.html',
  styleUrls: ['./addeditstockout.component.scss']
})
export class AddeditstockoutComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  tanktypes: any;
  categoryList: Array<any> = [];
  categoryObj: any = {
    date: '',
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
  distillerylist = [{ name: 'Distillery1' }, { name: 'Distillery2' }];
  modelist = [{ name: 'PipeLine' }, { name: 'Tanker' }];
  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];
  tankList = [{ id: 1, name: 'Tank 1' }, { id: 2, name: 'Tank 2'}];
  totalTankList = [{ id: 1, name: 'Tank 1' }, { id: 2, name: 'Tank 2' }, { id: 3, name: 'Tank 3' }];


  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,    private MasterapiService: MasterapiService,
              private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.tanktype();
    this.categoryObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }
  tanktype() {
    this.MasterapiService.get('tankType/getAllTankType').then((responceData: any) => {
      console.log(responceData);
      this.tanktypes = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  setData(id) {
    this.apiService.get('stockoutList/' + id).then(responceData => {
      console.log(responceData);
      this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addcategory(categoryForm, method) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (categoryForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          date: this.categoryObj.date,
          gatepassno: this.categoryObj.gatepassno,
          tank: this.categoryObj.tank,
          availableqty: this.categoryObj.availableqty,
          dispatchedqty: this.categoryObj.dispatchedqty,
          dispatchmode: this.categoryObj.dispatchmode,
          distilleryname: this.categoryObj.distilleryname,
          method,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);
        const url = 'stockoutList/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockout/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          date: this.categoryObj.date,
          gatepassno: this.categoryObj.gatepassno,
          tank: this.categoryObj.tank,
          availableqty: this.categoryObj.availableqty,
          dispatchedqty: this.categoryObj.dispatchedqty,
          dispatchmode: this.categoryObj.dispatchmode,
          distilleryname: this.categoryObj.distilleryname,
          method,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
        };

        console.log(postParam);

        this.apiService.post('stockoutList', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockout/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['supplychainmanagement/sugarmills/stockout/list']);
  }
  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['supplychainmanagement/sugarmills/stockout/preview']);
  }
}
