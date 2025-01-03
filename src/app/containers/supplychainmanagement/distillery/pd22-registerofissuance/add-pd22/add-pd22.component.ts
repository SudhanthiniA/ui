import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService, DistileryService, AlertService } from '@app/services';

@Component({
  selector: 'app-add-pd22',
  templateUrl: './add-pd22.component.html',
  styleUrls: ['./add-pd22.component.scss']
})
export class AddPd22Component implements OnInit {
  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  districtlist: any[] = [];
  stockForm: any;
  editId: any;
  addpd22obj: any = {
    districtId: '',
    validity: '',
  };
  formSubmitted = false;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
    private masterapiService: MasterapiService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd22RequestById(params.id);
        this.addpd22obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
    this.getdistrict();
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getdistrict() {
    this.masterapiService.get(apiUrls.getAllDistrict).then((responceData: any) => {
      console.log(responceData);
      this.districtlist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getPd22RequestById(id) {
    this.distileryService.getPd22ById(id).subscribe(responceData => {
      this.addpd22obj = responceData['data'];
    });
  }

  SaveData(form, status) {
    const paramdpd = {
      date: this.addpd22obj.date,
      districtId: parseInt(this.addpd22obj.districtId),
      bl1: this.addpd22obj.bl1,
      bl2: this.addpd22obj.bl2,
      bl3: this.addpd22obj.bl3,
      bl4: this.addpd22obj.bl4,
      exciseDuty: this.addpd22obj.exciseDuty,
      exciseDutyDeposit: this.addpd22obj.exciseDutyDeposit,
      remainingAmount: this.addpd22obj.remainingAmount,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        paramdpd['id'] = this.editId;
        this.distileryService.updatePd22(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd22-registerofissuance/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        this.distileryService.addPd22(paramdpd).subscribe(responceData => {
          console.log(responceData);
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd22-registerofissuance/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addpd22obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd22-registerofissuance/preview']);
  }

}
