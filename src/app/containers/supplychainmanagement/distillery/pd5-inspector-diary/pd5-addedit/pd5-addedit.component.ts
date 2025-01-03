import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService} from '@app/services'
import{Pd5Service} from '@app/services/distillery'

@Component({
  selector: 'app-pd5-addedit',
  templateUrl: './pd5-addedit.component.html',
  styleUrls: ['./pd5-addedit.component.scss']
})
export class Pd5AddeditComponent implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
  Pd5Obj:any={}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd5Service: Pd5Service,
    private alert: AlertService,
    private apiservice:ApiService
  ) { }

  ngOnInit() {
    this.Pd5Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd5requestById(params.id);
        this.Pd5Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getPd5requestById(id) {
    const url = 'Pd5List'+'/'+id
    this.Pd5Service.get(url).then((responceData: any) => {
      this.Pd5Obj = responceData;
      console.log(this.Pd5Obj);
    })
  }
  addPd5Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          SNo: this.Pd5Obj.SNo,
          Date: this.Pd5Obj.Date,
          Brand: this.Pd5Obj.Brand,
          BatchNo: this.Pd5Obj.BatchNo,
          TankNo: this.Pd5Obj.TankNo,
          DIP: this.Pd5Obj.DIP,
          Temperature: this.Pd5Obj.Temperature,
          Indication: this.Pd5Obj.Indication,
          Strength: this.Pd5Obj.Strength,
          BulkLitre: this.Pd5Obj.BulkLitre,
          AlcoholLitre: this.Pd5Obj.AlcoholLitre,
          Remarks: this.Pd5Obj.Remarks,
          status
        };
        const url = 'Pd5List/'+this.editId
        paramdpd['id'] = this.editId;
        this.Pd5Service.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd5-InspectorDiary/list']);
          
        })
      } else {
        const paramdpd = {
          SNo: this.Pd5Obj.SNo,
          Date: this.Pd5Obj.Date,
          Brand: this.Pd5Obj.Brand,
          BatchNo: this.Pd5Obj.BatchNo,
          TankNo: this.Pd5Obj.TankNo,
          DIP: this.Pd5Obj.DIP,
          Temperature: this.Pd5Obj.Temperature,
          Indication: this.Pd5Obj.Indication,
          Strength: this.Pd5Obj.Strength,
          BulkLitre: this.Pd5Obj.BulkLitre,
          AlcoholLitre: this.Pd5Obj.AlcoholLitre,
          Remarks: this.Pd5Obj.Remarks,
          status
        };
        const url = 'Pd5List';

          this.Pd5Service.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement//distillery/pd5-InspectorDiary/list']);
        })
      }
    }
  }
  previewpd6(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd5Obj));
    this.router.navigate(['/supplychainmanagement//distillery/pd20-form/preview']);
  }
}
