import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService} from '@app/services'
import{Pd17Service} from '@app/services/distillery'

@Component({
  selector: 'app-add-pd17',
  templateUrl: './add-pd17.component.html',
  styleUrls: ['./add-pd17.component.scss']
})
export class AddPd17Component implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  // isdisabled=false;
  formSubmitted = false;
  addedit: any;
  Pd17Obj:any={}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd17Service: Pd17Service,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.Pd17Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd17requestById(params.id);
        this.Pd17Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getPd17requestById(id) {
    const url = 'Pd17list'+'/'+id
    this.Pd17Service.get(url).then((responceData: any) => {
      this.Pd17Obj = responceData;
      console.log(this.Pd17Obj);
    })
  }
  addPd17Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          NameOfDistiller: this.Pd17Obj.NameOfDistiller,
          DatePeriodOfBond:this.Pd17Obj.DatePeriodOfBond,
          AmountOfBond: this.Pd17Obj.AmountOfBond,
          PlaceOfConsignee: 'chennai',
          QualityOfSpiritInAlcohol:this.Pd17Obj.QualityOfSpiritInAlcohol,
          AmountOfDuty:this.Pd17Obj.AmountOfDuty,
          NoofPass:this.Pd17Obj.NoofPass,
          DateofPass:this.Pd17Obj.DateofPass,
          DateofArrival:this.Pd17Obj.DateofArrival,
          status
        };
        const url = 'Pd17list/'+this.editId
        paramdpd['id'] = this.editId;
        this.Pd17Service.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd17-registerof-bonds/list']);
          
        })
      } else {
        const paramdpd = {
          NameOfDistiller: this.Pd17Obj.NameOfDistiller,
          DatePeriodOfBond:this.Pd17Obj.DatePeriodOfBond,
          AmountOfBond: this.Pd17Obj.AmountOfBond,
          PlaceOfConsignee:'chennai',
          QualityOfSpiritInAlcohol:this.Pd17Obj.QualityOfSpiritInAlcohol,
          AmountOfDuty:this.Pd17Obj.AmountOfDuty,
          NoofPass:this.Pd17Obj.NoofPass,
          DateofPass:this.Pd17Obj.DateofPass,
          DateofArrival:this.Pd17Obj.DateofArrival,
          status
        };
        const url = 'Pd17list';

          this.Pd17Service.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/pd17-registerof-bonds/list']);
        })
      }
    }
  }
  previewpd17(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd17Obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd17-registerof-bonds/preview']);
  }
}
