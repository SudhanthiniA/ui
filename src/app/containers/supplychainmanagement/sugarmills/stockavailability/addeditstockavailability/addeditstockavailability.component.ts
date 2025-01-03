import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-addeditstockavailability',
  templateUrl: './addeditstockavailability.component.html',
  styleUrls: ['./addeditstockavailability.component.scss']
})
export class AddeditstockavailabilityComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;

  stockavailabilityObj: any = {
  stockname : '',
  quantity : '',
  messurement: '',
  location: '',
  tank: '',
  status : true
  };
  date: any;
  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];
  messurementlist = [{id: 1, name: 'ltr'}, {id: 2, name: 'mltr'}];

  editId: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) {
    // this.date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy')
  }

  ngOnInit() {
    this.stockavailabilityObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  setData(id) {
    this.apiService.get('stockavailability/' + id).then(responceData => {
      console.log(responceData);
      this.stockavailabilityObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addstock(stockForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (stockForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {
          stockname: this.stockavailabilityObj.stockname,
          quantity: this.stockavailabilityObj.quantity,
          messurement: this.stockavailabilityObj.messurement,
          location: this.stockavailabilityObj.location,
          tank: this.stockavailabilityObj.tank,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.stockavailabilityObj.status
        };

        console.log(postParam);
        const url = 'stockavailability/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {
          stockname: this.stockavailabilityObj.stockname,
          quantity: this.stockavailabilityObj.quantity,
          messurement: this.stockavailabilityObj.messurement,
          location: this.stockavailabilityObj.location,
          tank: this.stockavailabilityObj.tank,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.stockavailabilityObj.status
        };

        console.log(postParam);

        this.apiService.post('stockavailability', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  navigateCategoryList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/list']);
  }

}
