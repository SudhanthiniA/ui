import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterapiService } from '@app/services';
import { DatePipe } from '@angular/common';

import { PurchagerequestService} from '@app/services';
import { apiUrls } from '../../../../../../environments/apiurls';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-addeditpurchaserequest',
  templateUrl: './addeditpurchaserequest.component.html',
  styleUrls: ['./addeditpurchaserequest.component.scss']
})
export class AddeditpurchaserequestComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private PurchagerequestSrv: PurchagerequestService
  ) { }
  popupFlag: boolean;
  countrylist: any[] = [];
  districtList: any[] = [];
  tanklist: any[] = [];
  purchaserequestObj: any = {
    date: '',
    distilleryName: 'Awadh Sugar and Energy LTD',
    distilleryAddress: 'Hargaon',
    district: '',
    purchaseFrom: 'Other State',
    unitAddress: 'Rampur',
    spiritType: 'Spirit VAT',
    spiritVat: 'R-10',
    bl: 4000,
    al: 171200,
    strength: 25,
    recivebl: '',
    reciveal: '',
    duty: '',
    permitNo: '',
    permitDate: '',
    reciveStrength: 25,
    wastageBl: '',
    wastageAl: 107,
    netAl: 497.5,
    netBl: 21293,
    molassesType: ''
  };
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  consumptiontypelist: any = [];
  importfromList = [{id:1, 'name':'Other State'},{id:2,'name':'Other Country'}]
  domainlist: any = [];
  typelist = [{id:1,'name':'Spirit VAT'},{id:2,'name':'Denatured VAT'}];
  molassestypelist = [{id:1,'name':'B-Heavy'},{id:2, 'name':'C-Heavy'}];
  addedit: any;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  ngOnInit() {
    this.purchaserequestObj.molassestype = 'B-Heavy';
    this.purchaserequestObj.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd'),

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpurchaserequestById(params.id);
        this.purchaserequestObj.id = params.id;
        this.editId = params.id;
      }
    });
    this.getDistrict();
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    // this.buildPrescriptionFormGrp();
  }
  ShowPOpUp(form, status) {
   
      this.formSubmitted = false;
      if (form.valid === false && status === 2) {
        this.formSubmitted = true;
      } else {
        console.log('test test')
        this.popupFlag = true;
        let el: HTMLElement = this.myDiv.nativeElement;
        el.click();
      }
  }
  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 2) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        if (status === 1) {
          this.purchaserequestObj[`status`] = false;
        } else {
          this.purchaserequestObj[`status`] = true;
        }
        this.purchaserequestObj['id'] = this.editId;
 
        this.PurchagerequestSrv.updatepurchange(this.purchaserequestObj).subscribe((response:any)=>{
          if (response.status ==='s'){
            this.alert.showSuccess(response.userDisplayMesg, 'Success')
            this.router.navigate(['/supplychainmanagement/distillery/purchaserequest/list']);
          } else {
            this.alert.showError(response.userDisplayMesg, 'error');
          }
        })
      } else {
        if (status === 2) {
          this.purchaserequestObj[`status`] = true;
        } else {
          this.purchaserequestObj[`status`] = false;
        }
        this.PurchagerequestSrv.addpurchange(this.purchaserequestObj).subscribe((response:any)=>{
          if (response.status === 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/purchaserequest/list']);
          } else {
            this.alert.showError(response.userDisplayMesg, 'error')
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.purchaserequestObj));
    this.router.navigate(['/supplychainmanagement/distillery/purchaserequest/preview']);
  }

  caltotal() {

  }

  calnetbl() {
    this.purchaserequestObj.netbl = this.purchaserequestObj.quantitybl - this.purchaserequestObj.wastagebl;
  }

  getpurchaserequestById(id?){
    if ( id ) {
      this.PurchagerequestSrv.getpurchagebyid(id).subscribe( ( response: any ) => {
        if (response.status === 's'){
          this.purchaserequestObj = response.data;
        }
      });
    }
  }

  getDistrict() {
    this.masterapiService.get(apiUrls.getAllDistrict).then((responceData: any) => {
      this.districtList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
