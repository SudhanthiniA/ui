import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-addeditregistrationrequest',
  templateUrl: './addeditregistrationrequest.component.html',
  styleUrls: ['./addeditregistrationrequest.component.scss']
})
export class AddeditregistrationrequestComponent implements OnInit {


  addedit: any;
  curDate = new Date();
  name: any;

  registrationObj: any = {
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
    this.registrationObj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  setData(id) {
    this.apiService.get('sugarmillsregistrationslist/' + id).then(responceData => {
      console.log(responceData);
      this.registrationObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addstock(registartionForm) {
    this.formSubmitted = false;
    // console.log(countryForm.valid);
    if (registartionForm.valid === false) {
      this.formSubmitted = true;
    } else {
      // console.log(this.countryObject);
      if (this.editId) {
        const postParam = {

          treasurydetails: this.registrationObj.treasurydetails,
          sugarmillname: this.registrationObj.sugarmillname,
          yearofestblishment: this.registrationObj.yearofestblishment,
          district: this.registrationObj.district,
          tonsperday: this.registrationObj.tonsperday,
          tonspersession: this.registrationObj.tonspersession,
          molasesquantity: this.registrationObj.molasesquantity,
          sugarquantity: this.registrationObj.sugarquantity,
          captivedisterilies: this.registrationObj.captivedisterilies,
          remarks: this.registrationObj.remarks,
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.registrationObj.status
        };

        console.log(postParam);
        const url = 'sugarmillsregistrationslist/' + this.editId;
        this.apiService.patch(url, postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/list']);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      } else {
        // console.log(this.countryObject);
        const postParam = {

          treasurydetails: this.registrationObj.treasurydetails,
          sugarmillname: this.registrationObj.sugarmillname,
          yearofestblishment: this.registrationObj.yearofestblishment,
          district: this.registrationObj.district,
          tonsperday: this.registrationObj.tonsperday,
          tonspersession: this.registrationObj.tonspersession,
          molasesquantity: this.registrationObj.molasesquantity,
          sugarquantity: this.registrationObj.sugarquantity,
          captivedisterilies: this.registrationObj.captivedisterilies,
          remarks: this.registrationObj.remarks,
          created_by: 'Admin',
          created_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          modified_by: 'Admin',
          modified_on: this.datepipe.transform(this.curDate, 'yyyy-MM-dd HH:mm:ss'),
          // status: this.registrationObj.status
        };

        console.log(postParam);

        this.apiService.post('sugarmillsregistrationslist', postParam).then(responceData => {
          this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/list']);
          console.log(responceData);
        }).catch((err: any) => {
          console.log('\n err...', err);
        });

      }
    }
  }
  // navigateCategoryList() {
  //   this.router.navigate(['/supplychainmanagement/sugarmills/stockin/list']);
  // }


}
