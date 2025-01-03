import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-add-edit-pd26',
  templateUrl: './add-edit-pd26.component.html',
  styleUrls: ['./add-edit-pd26.component.scss']
})
export class AddEditPd26Component implements OnInit {

  date: any;
  curDate = new Date();
  name: any;
  Pd26Form: any;
  editId: any;
  addpd26obj: any = {
    // distname:"",
    validity: '',
  };
  formSubmitted = false;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd26RequestById(params.id);
        this.addpd26obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getPd26RequestById(id) {
    this.distileryService.getPd26ById(id).subscribe((responceData: any) => {
      this.addpd26obj = responceData.data;
    });
  }

  addPd26Record(form, status) {
    const paramdpd = {
      date: this.addpd26obj.date,
      validity: this.addpd26obj.validity,
      temparature: this.addpd26obj.temparature,
      indication: this.addpd26obj.indication,
      strength: this.addpd26obj.strength,
      vehicleNo: this.addpd26obj.vehicleNo,
      bondValue: this.addpd26obj.bondValue,
      serialNo: this.addpd26obj.serialNo,
      chamberNo: this.addpd26obj.chamberNo,
      dip: this.addpd26obj.dip,
      bl: this.addpd26obj.bl,
      al: this.addpd26obj.al,
      inspectorName: this.addpd26obj.inspectorName,
      verifiedOn: this.addpd26obj.verifiedOn,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        paramdpd['id'] = this.editId;
        this.distileryService.updatePd26(paramdpd).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            sessionStorage.removeItem('formdata');
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd26-accompanypass/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      } else {
        this.distileryService.addPd26(paramdpd).subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            sessionStorage.removeItem('formdata');
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd26-accompanypass/list']);
          } else {
            this.alert.showError(responceData.userDisplayMesg, 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addpd26obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd26-accompanypass/preview']);
  }
  
}
