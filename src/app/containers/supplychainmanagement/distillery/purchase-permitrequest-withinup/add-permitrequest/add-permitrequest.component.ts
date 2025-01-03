import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService} from '@app/services';
import { PurchaseprmtreqwtinupService } from '@app/services';

@Component({
  selector: 'app-add-permitrequest',
  templateUrl: './add-permitrequest.component.html',
  styleUrls: ['./add-permitrequest.component.scss']
})
export class AddPermitrequestComponent implements OnInit {
  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  addpermitreqForm: any;
  editId: any;
  addpermitreqobj: any = {
    spiritType: '',
    unitName: '',
  };
  formSubmitted = false;
  addedit: any;
  popupFlag: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private purchasepmtwtinup: PurchaseprmtreqwtinupService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getipurchasepermitRequestById(params.id);
        this.addpermitreqobj.id = params.id;
        this.editId = params.id;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getipurchasepermitRequestById(id) {
    console.log(id)
    this.purchasepmtwtinup.getpurmitreq(id).subscribe(responceData => {
      if(responceData.status === 's'){
        this.addpermitreqobj = responceData['data'];
        console.log( this.addpermitreqobj)
      }
    });
  }
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;
  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === true) {
      this.formSubmitted = true;
    } else {
      console.log("test test")
      this.popupFlag = true;
      let el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }
  addapi( form, status ) {
    const paramdpd = {
      unitName: this.addpermitreqobj.unitName,
      requestedSpiritBl: this.addpermitreqobj.requestedSpiritBl,
      spiritType: this.addpermitreqobj.spiritType,
      purpose: this.addpermitreqobj.purpose,
      insCtyOfDistInBLPortable: this.addpermitreqobj.insCtyOfDistInBLPortable,
      insCtyOfDistInBLIndustrial: this.addpermitreqobj.insCtyOfDistInBLIndustrial,
      prodQtyInBLPortable: this.addpermitreqobj.prodQtyInBLPortable,
      prodQtyInBLIndustrial: this.addpermitreqobj.prodQtyInBLIndustrial,
      purhOrImpQtyInBLPortable: this.addpermitreqobj.purhOrImpQtyInBLPortable,
      purhOrImpQtyInBLIndustrial: this.addpermitreqobj.purhOrImpQtyInBLIndustrial,
      // reqdate:2020-12-20,
      // reqid:722,
     status
    };

    this.formSubmitted = false;
    if (form.valid === false && status === true) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        paramdpd['id'] = this.editId
        this.purchasepmtwtinup.updatepurmitdata(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/purchase-permitrequest-withinup/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        this.purchasepmtwtinup.addpermitreqdata(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/purchase-permitrequest-withinup/list']);
              } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addpermitreqobj));
    this.router.navigate(['/supplychainmanagement/distillery/purchase-permitrequest-withinup/preview']);
  }

}
