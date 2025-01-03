import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService} from '@app/services'
import{Pd2Service} from '@app/services/distillery'

@Component({
  selector: 'app-addpd2',
  templateUrl: './addpd2.component.html',
  styleUrls: ['./addpd2.component.scss']
})
export class Addpd2Component implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  formSubmitted = false;
  addedit: any;
  Pd2Obj:any={}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd2Service: Pd2Service,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.Pd2Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd2requestById(params.id);
        this.Pd2Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getPd2requestById(id) {
    const url = 'Pd2List'+'/'+id
    this.Pd2Service.get(url).then((responceData: any) => {
      this.Pd2Obj = responceData;
      console.log(this.Pd2Obj);
    })
  }
  addPd2Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          TrxNo: "TR1122",
          Date:"20/12/2021",
          OpeningBalance: this.Pd2Obj.OpeningBalance,
          BulkInltrOsi: this.Pd2Obj.BulkInltrOsi,
          AlocohalInLtrOsi: this.Pd2Obj.AlocohalInLtrOsi,
          BalanceAmount: this.Pd2Obj.BalanceAmount,
          RateOfAssertion: this.Pd2Obj.RateOfAssertion,
          AlcohalInLtr: this.Pd2Obj.AlcohalInLtr,
          BulkLtr: this.Pd2Obj.BulkLtr,
          PD25Date: this.Pd2Obj.PD25Date,
          PD25PassNo: this.Pd2Obj.PD25PassNo,
          ChallanDate: this.Pd2Obj.ChallanDate,
          TreasuryChallan: this.Pd2Obj.TreasuryChallan,
          DepositFund: this.Pd2Obj.DepositFund,
          status
        };
        const url = 'Pd2List/'+this.editId
        paramdpd['id'] = this.editId;
        this.Pd2Service.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd2/list']);
          
        })
      } else {
        const paramdpd = {
          TrxNo: "TR1122",
          Date:"20/12/2021",
          OpeningBalance: this.Pd2Obj.OpeningBalance,
          BulkInltrOsi: this.Pd2Obj.BulkInltrOsi,
          AlocohalInLtrOsi: this.Pd2Obj.AlocohalInLtrOsi,
          BalanceAmount: this.Pd2Obj.BalanceAmount,
          RateOfAssertion: this.Pd2Obj.RateOfAssertion,
          AlcohalInLtr: this.Pd2Obj.AlcohalInLtr,
          BulkLtr: this.Pd2Obj.BulkLtr,
          PD25Date: this.Pd2Obj.PD25Date,
          PD25PassNo: this.Pd2Obj.PD25PassNo,
          ChallanDate: this.Pd2Obj.ChallanDate,
          TreasuryChallan: this.Pd2Obj.TreasuryChallan,
          DepositFund: this.Pd2Obj.DepositFund,
          status
        };
        const url = 'Pd2List';

          this.Pd2Service.post(url, paramdpd).then((responceData: any) => {
            this.alert.showSuccess('Record created successfully', 'Success');
            this.router.navigate(['/supplychainmanagement//distillery/pd2/list']);
        })
      }
    }
  }
  previewpd6(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd2Obj));
    this.router.navigate(['/supplychainmanagement//distillery/pd20-form/preview']);
  }
}
