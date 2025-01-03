import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService} from '@app/services'
import{Pd20Service} from '@app/services/distillery'

@Component({
  selector: 'app-addpd20-form',
  templateUrl: './addpd20-form.component.html',
  styleUrls: ['./addpd20-form.component.scss']
})
export class Addpd20FormComponent implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
  Pd20Obj:any={}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd20Service: Pd20Service,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.Pd20Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd20requestById(params.id);
        this.Pd20Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getPd20requestById(id) {
    const url = 'Pd20LIst'+'/'+id
    this.Pd20Service.get(url).then((responceData: any) => {
      this.Pd20Obj = responceData;
      console.log(this.Pd20Obj);
    })
  }
  addPd20Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          date: this.Pd20Obj.date,
          IndentNo:this.Pd20Obj.IndentNo,
          DrumNo: this.Pd20Obj.DrumNo,
          VatNo: this.Pd20Obj.VatNo,
          ConsigneeName: this.Pd20Obj.ConsigneeName,
          DescriptionSpirit: this.Pd20Obj.DescriptionSpirit,
          NumberOfCase: this.Pd20Obj.NumberOfCase,
          NoOfBottles: this.Pd20Obj.NoOfBottles,
          Quantity: this.Pd20Obj.Quantity,
          status
        };
        const url = 'Pd20LIst/'+this.editId
        paramdpd['id'] = this.editId;
        this.Pd20Service.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd20-form/list']);
          
        })
      } else {
        const paramdpd = {
          date: this.Pd20Obj.date,
          IndentNo:this.Pd20Obj.IndentNo,
          DrumNo: this.Pd20Obj.DrumNo,
          VatNo: this.Pd20Obj.VatNo,
          ConsigneeName: this.Pd20Obj.ConsigneeName,
          DescriptionSpirit: this.Pd20Obj.DescriptionSpirit,
          NumberOfCase: this.Pd20Obj.NumberOfCase,
          NoOfBottles: this.Pd20Obj.NoOfBottles,
          Quantity: this.Pd20Obj.Quantity,
          status
        };
        const url = 'Pd20LIst';

          this.Pd20Service.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement//distillery/pd20-form/list']);
        })
      }
    }
  }
  previewpd6(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd20Obj));
    this.router.navigate(['/supplychainmanagement//distillery/pd20-form/preview']);
  }
}
