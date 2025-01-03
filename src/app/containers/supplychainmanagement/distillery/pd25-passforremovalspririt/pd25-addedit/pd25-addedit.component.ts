import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DistileryService } from '@app/services';
@Component({
  selector: 'app-pd25-addedit',
  templateUrl: './pd25-addedit.component.html',
  styleUrls: ['./pd25-addedit.component.scss']
})
export class Pd25AddeditComponent implements OnInit {

  date: any;
  curDate = new Date();
  name: any;
  Pd25Form: any;
  editId: any;
  addpd25obj: any = {
    descriptionOfSpirit: '',
    nameOfConsignee: '',
    inBond: ''
  };
  formSubmitted = false;
  addedit: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private distileryService: DistileryService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd25RequestById(params.id);
        this.addpd25obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getPd25RequestById(id) {
    this.distileryService.getPd25ById(id).subscribe(responceData => {
      this.addpd25obj = responceData['data'];
    });
  }

  addapi(form, status) {
    const paramdpd = {
      date: this.addpd25obj.date,
      validity: this.addpd25obj.validity,
      nameOfConsignee: this.addpd25obj.nameOfConsignee,
      nameOfPlace: this.addpd25obj.nameOfPlace,
      permitNo: this.addpd25obj.permitNo,
      permitDate: this.addpd25obj.permitDate,
      gatePassNo: this.addpd25obj.gatePassNo,
      nameOfConsignor: this.addpd25obj.nameOfConsignor,
      descriptionOfSpirit: this.addpd25obj.descriptionOfSpirit,
      dutyPaid: this.addpd25obj.dutyPaid,
      denautringFee: this.addpd25obj.denautringFee,
      inBond: this.addpd25obj.inBond,
      vehicleNo: this.addpd25obj.vehicleNo,
      routeDetail: this.addpd25obj.routeDetail,
      serialNo: this.addpd25obj.serialNo,
      chamberNoOrCasks: this.addpd25obj.chamberNoOrCasks,
      dip: this.addpd25obj.dip,
      bl: this.addpd25obj.bl,
      al: this.addpd25obj.al,
      strength: this.addpd25obj.strength,
      temparature: this.addpd25obj.temparature,
      indicator: this.addpd25obj.indicator,
      grossWeight: this.addpd25obj.grossWeight,
      tareWeight: this.addpd25obj.tareWeight,
      netWeight: this.addpd25obj.netWeight,
      bl2: this.addpd25obj.bl2,
      al2: this.addpd25obj.al2,
      bl3: this.addpd25obj.bl3,
      al3: this.addpd25obj.al3,
      inspectorName: this.addpd25obj.inspectorName,
      verifiedOn: this.addpd25obj.verifiedOn,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        paramdpd['id'] = this.editId
        this.distileryService.updatePd25(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd25-passforremovalspirit/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        this.distileryService.addPd25(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd25-passforremovalspirit/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addpd25obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd25-passforremovalspirit/preview']);
  }

}
