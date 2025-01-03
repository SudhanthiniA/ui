import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService} from '@app/services'
import{Pd18Service} from '@app/services/distillery'

@Component({
  selector: 'app-addpd18-form',
  templateUrl: './addpd18-form.component.html',
  styleUrls: ['./addpd18-form.component.scss']
})
export class Addpd18FormComponent implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
  Pd18Obj:any={
    TypeOfScript:'',
    EntityName:"",
    Brand:""
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd18Service: Pd18Service,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.Pd18Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd18requestById(params.id);
        this.Pd18Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getPd18requestById(id) {
    const url = 'Pd18List'+'/'+id
    this.Pd18Service.get(url).then((responceData: any) => {
      this.Pd18Obj = responceData;
      console.log(this.Pd18Obj);
    })
  }
  addPd18Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
        
          Date:this.Pd18Obj.Date,
          PermitNumber: this.Pd18Obj.PermitNumber,
          TruckNo: this.Pd18Obj.TruckNo,
          BL: this.Pd18Obj.BL,
          AL: this.Pd18Obj.AL,
          TypeOfScript: this.Pd18Obj.TypeOfScript,
          Strength: this.Pd18Obj.Strength,
          EntityName: this.Pd18Obj.EntityName,
          Amount: this.Pd18Obj.Amount,
          Brand: this.Pd18Obj.Brand,
          Case750: this.Pd18Obj.Case750,
          NoOfBottles750: this.Pd18Obj.NoOfBottles750,
          Case375: this.Pd18Obj.Case375,
          NoOfBottles375: this.Pd18Obj.NoOfBottles375,
          Case180: this.Pd18Obj.Case180,
          NoOfBottles180: this.Pd18Obj.NoOfBottles180,
          Case90: this.Pd18Obj.Case90,
          NoOfBottles90: this.Pd18Obj.NoOfBottles90,
          BL90: this.Pd18Obj.BL90,
          AL90: this.Pd18Obj.AL90,
          Total: this.Pd18Obj.Total,
          status
        };
        const url = 'Pd18List/'+this.editId
        paramdpd['id'] = this.editId;
        this.Pd18Service.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd18-form/list']);
          
        })
      } else {
        const paramdpd = {
        
          Date:this.Pd18Obj.Date,
          PermitNumber: this.Pd18Obj.PermitNumber,
          TruckNo: this.Pd18Obj.TruckNo,
          BL: this.Pd18Obj.BL,
          AL: this.Pd18Obj.AL,
          TypeOfScript: this.Pd18Obj.TypeOfScript,
          Strength: this.Pd18Obj.Strength,
          EntityName: this.Pd18Obj.EntityName,
          Amount: this.Pd18Obj.Amount,
          Brand: this.Pd18Obj.Brand,
          Case750: this.Pd18Obj.Case750,
          NoOfBottles750: this.Pd18Obj.NoOfBottles750,
          Case375: this.Pd18Obj.Case375,
          NoOfBottles375: this.Pd18Obj.NoOfBottles375,
          Case180: this.Pd18Obj.Case180,
          NoOfBottles180: this.Pd18Obj.NoOfBottles180,
          Case90: this.Pd18Obj.Case90,
          NoOfBottles90: this.Pd18Obj.NoOfBottles90,
          BL90: this.Pd18Obj.BL90,
          AL90: this.Pd18Obj.AL90,
          Total: this.Pd18Obj.Total,
          status
        };
        const url = 'Pd18List';

          this.Pd18Service.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement//distillery/pd18-form/list']);
        })
      }
    }
  }
  previewpd18(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd18Obj));
    this.router.navigate(['/supplychainmanagement//distillery/pd18-form/preview']);
  }
}
