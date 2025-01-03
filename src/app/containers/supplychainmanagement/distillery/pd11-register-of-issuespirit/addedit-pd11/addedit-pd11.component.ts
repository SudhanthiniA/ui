import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService,Pd11IssuesService } from '@app/services';

@Component({
  selector: 'app-addedit-pd11',
  templateUrl: './addedit-pd11.component.html',
  styleUrls: ['./addedit-pd11.component.scss']
})
export class AddeditPd11Component implements OnInit {
  date: any;
  curDate = new Date();
 
  editId: any;
  // isdisabled=false;
  formSubmitted = false;
  addedit: any;
  Pd11Obj: any = {

  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private pd11service: Pd11IssuesService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getmf4RequestById(params.id);
        this.Pd11Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getmf4RequestById(id) {
   
    this.pd11service.getPd11issuesById(id).subscribe((responceData: any)  => {
      this.Pd11Obj = responceData.data;
      console.log(this.Pd11Obj);
    })
  }
  addPd11Deatils(form, status) {
    const paramdpd = {
      issuedDate: this.Pd11Obj.issuedDate,
      issuedPassNumber: this.Pd11Obj.issuedPassNumber,
      consignerName: this.Pd11Obj.consignerName,
      numberVesselMade: this.Pd11Obj.numberVesselMade,
      plainSpirit: this.Pd11Obj.plainSpirit,
      denaturedSpirit: this.Pd11Obj.denaturedSpirit,
      sophisticatedSpirit: this.Pd11Obj.sophisticatedSpirit,
      temperature: parseInt(this.Pd11Obj.temperature),
      indication: parseInt(this.Pd11Obj.indication),
      plainAndRectifiedSpirit:this.Pd11Obj.plainAndRectifiedSpirit,
      strength: this.Pd11Obj.strength,
      amountDutyRealised: this.Pd11Obj.amountDutyRealised,
      rateDuty: this.Pd11Obj.rateDuty,
      numberDateTreasury: this.Pd11Obj.numberDateTreasury,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status === true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
      
        paramdpd['id'] = this.editId;
        this.pd11service.updatePd11issues(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            
            this.router.navigate(['/supplychainmanagement/distillery/pd11-register-of-issuespirit/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        
          
        })
      } else {
        this.pd11service.addPd11issues(paramdpd).subscribe(responceData => {

          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            
            this.router.navigate(['/supplychainmanagement/distillery/pd11-register-of-issuespirit/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
  previewcategory(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.Pd11Obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd11-register-of-issuespirit/preview']);
  }
}
