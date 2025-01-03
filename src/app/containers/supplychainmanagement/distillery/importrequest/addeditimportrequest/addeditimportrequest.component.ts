import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterapiService, AlertService, DistileryService } from '@app/services';
import { DatePipe } from '@angular/common';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-addeditimportrequest',
  templateUrl: './addeditimportrequest.component.html',
  styleUrls: ['./addeditimportrequest.component.scss']
})
export class AddeditimportrequestComponent implements OnInit {

  countrylist: any[] = [];
  statelist: any[] = [];
  // tanklist:any[] = [];
  importrequestObj: any = {
    date: '',
    distilleryName: 'Awadh Sugar and Energy LTD',
    distilleryAddress: 'Hargaon, Sitapur',
    permitNo: '',
    name: '',
    address: '',
    importFrom: '',
    country: '',
    state: '',
    type: '',
    tank: '',
    strength: 25,
    importQuantityBl: 2000,
    importQuantityAl: 85600,
    duty: 1000,
    wastageBl: 10,
    wastageAl: 428,
    netAl: 1990,
    netBl: 85172,
    status: false,
    molassesType: ''
  };

  formSubmitted = false;
  curDate = new Date();
  editId: any;

  // importfromList:any = []
  consumptiontypelist: any = [];
  importfromList = [{ id: 1, name: 'Other State' }, { id: 2, name: 'Other Country' }];
  domainlist: any = [];
  typelist = [{ id: 1, name: 'Spirit VAT' }, { id: 2, name: 'Denatured VAT' }];
  molassestypelist = [{ id: 1, name: 'B-Heavy' }, { id: 2, name: 'C-Heavy' }];
  tanklist = [{ id: 1, name: 'sample1' }];
  addedit: any;
  popupFlag: boolean;
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.importrequestObj.molassesType = 'B-Heavy';
    this.importrequestObj.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd'),

      this.route.params.subscribe(params => {
        if (params.id) {
          this.getimportrequestById(params.id);
          this.importrequestObj.id = params.id;
          this.editId = params.id;
        }
      });
    this.getCountry();
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  
  caltotal() {}

  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status === 2) {
      this.formSubmitted = true;

    } else {
      console.log('test test');
      this.popupFlag = true;
      const el: HTMLElement = this.myDiv.nativeElement;
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
          this.importrequestObj[`status`] = false;
        } else {
          this.importrequestObj[`status`] = true;
        }
        this.importrequestObj.id = this.editId;
        this.distileryService.updateImportreq(this.importrequestObj).subscribe((response: any) => {
          if (response.status === 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/importrequest/list']);
          } else {
            this.alert.showError(response['userDisplayMesg'], 'error');
          }
        });
      } else {
        if (status === 2) {
          this.importrequestObj[`status`] = true;
        } else {
          this.importrequestObj[`status`] = false;
        }
        this.distileryService.addImportreq(this.importrequestObj).subscribe((response: any) => {
          if (response.status === 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/importrequest/list']);
          } else {
            this.alert.showError(response.userDisplayMesg, 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.importrequestObj));
    this.router.navigate(['/supplychainmanagement/distillery/importrequest/preview']);
  }

  calnetbl() {
    this.importrequestObj.netbl = this.importrequestObj.importQuantityBl - this.importrequestObj.wastageBl;
  }

  getimportrequestById(id) {
    this.distileryService.getImportreqbyid(id).subscribe((response: any) => {
      if (response.status === 's') {
        this.importrequestObj = response.data;
      }
    });
  }

  getCountry() {
    this.masterapiService.get(apiUrls.getAllCountry).then((responceData: any) => {
      this.countrylist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getState(id) {
    this.masterapiService.get(apiUrls.getAllState).then((responceData: any) => {
      this.statelist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
