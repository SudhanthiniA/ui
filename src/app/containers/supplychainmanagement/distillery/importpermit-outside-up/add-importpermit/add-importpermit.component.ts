import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-add-importpermit',
  templateUrl: './add-importpermit.component.html',
  styleUrls: ['./add-importpermit.component.scss']
})
export class AddImportpermitComponent implements OnInit {
  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  addimportForm: any;
  editId: any;
  addimportobj: any = {
    stateName: '',
    spiritType: '',
  };
  formSubmitted = false;
  addedit: any;
  popupFlag: boolean;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getimportpermitRequestById(params.id);
        this.addimportobj.id = params.id;
        this.editId = params.id;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getimportpermitRequestById(id?) {
    this.distileryService.getimportprtbyid(id).subscribe((response: any) => {
      if (response.status === 's') {
        this.addimportobj = response.data;
        this.addimportobj.date = this.datePipe.transform(this.addimportobj.date, 'yyyy-MM-dd');
      }
    });
  }

  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {
      this.popupFlag = true;
      const el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }

  addapi(form, status) {
    const paramdpd = {
      exportType: this.addimportobj.exportType,
      stateName: this.addimportobj.stateName,
      nameOfExpDistillery: this.addimportobj.nameOfExpDistillery,
      addrOfExpDistillery: this.addimportobj.addrOfExpDistillery,
      expDistCapacity: this.addimportobj.expDistCapacity,
      reqSpirit: this.addimportobj.reqSpirit,
      spiritType: this.addimportobj.spiritType,
      purpose: this.addimportobj.purpose,
      insCtyOfDistInBLPortable: this.addimportobj.insCtyOfDistInBLPortable,
      insCtyOfDistInBLIndustrial: this.addimportobj.insCtyOfDistInBLIndustrial,
      prodQtyInBLPortable: this.addimportobj.prodQtyInBLPortable,
      prodQtyInBLIndustrial: this.addimportobj.prodQtyInBLIndustrial,
      purhOrImpQtyInBLPortable: this.addimportobj.purhOrImpQtyInBLPortable,
      purhOrImpQtyInBLIndustrial: this.addimportobj.purhOrImpQtyInBLIndustrial,
      date: this.addimportobj.date,
      conLetterOfExpDistillery: this.addimportobj.conLetterOfExpDistillery,
      uploadconsent: this.addimportobj.uploadconsent,
      status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        paramdpd['id'] = this.editId;
        this.distileryService.updateimportprmtreq(paramdpd).subscribe(responceData => {
          console.log(responceData);
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/importpermit-outside-up/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        this.distileryService.addimportprtreq(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/importpermit-outside-up/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }
  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.addimportobj));
    this.router.navigate(['/supplychainmanagement/distillery/importpermit-outside-up/preview']);
  }

}
