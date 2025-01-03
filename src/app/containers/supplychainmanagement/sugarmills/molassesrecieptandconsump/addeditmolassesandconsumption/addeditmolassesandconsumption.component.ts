import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  MasterapiService,
  AlertService,
  MolassesReceiptService,
  PreviewService,
  CommonService
} from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-addeditmolassesandconsumption',
  templateUrl: './addeditmolassesandconsumption.component.html',
  styleUrls: ['./addeditmolassesandconsumption.component.scss']
})
export class AddeditmolassesandconsumptionComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  licencetypeList: Array<any> = [];
  molassisrecieptobj: any = {
    actualBalance: '',
    bookBalance: '',
    consumption: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    openingBalance: '',
    reciptBalance: '',
    status: '',
    tankId: ''
  };
  date: any;
  tanklist = [];
  editId: any;
  addedithead: any;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private router: Router,
    private molassesReceiptService: MolassesReceiptService,
    private alert: AlertService,
    private preview: PreviewService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.gettank();
    this.molassisrecieptobj.status = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.molassisrecieptobj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') == true ?
      'Enter Molasses Receipt & Consumption Details' : 'Enter Molasses Receipt & Consumption Details';
  }

  setData(id) {
    this.molassesReceiptService.getMolassesReceiptById(id).subscribe((responceData: any) => {
      this.molassisrecieptobj = responceData.data;
    });
  }

  gettank() {
    this.masterapiService.get(apiUrls.getAllTank).then((responceData: any) => {
      this.tanklist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  addlicencetype(licencetypeForm, method) {
    this.formSubmitted = false;
    if (licencetypeForm.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      if (this.editId) {
        const postParam = {
          id: parseInt(this.editId),
          tankId: this.molassisrecieptobj.tankId,
          openingBalance: this.molassisrecieptobj.openingBalance,
          reciptBalance: this.molassisrecieptobj.reciptBalance,
          consumption: this.molassisrecieptobj.consumption,
          bookBalance: this.molassisrecieptobj.bookBalance,
          actualBalance: this.molassisrecieptobj.actualBalance,
          method,
          status: '1',
          modifiedBy: 'Admin'
        };
        this.molassesReceiptService.addMolassesReceipt(postParam).subscribe((responceData: any) => {
          this.handleResponse(responceData);
        });
      } else {
        const postParam = {
          tankId: this.molassisrecieptobj.tankId,
          openingBalance: this.molassisrecieptobj.openingBalance,
          reciptBalance: this.molassisrecieptobj.reciptBalance,
          consumption: this.molassisrecieptobj.consumption,
          bookBalance: this.molassisrecieptobj.bookBalance,
          actualBalance: this.molassisrecieptobj.actualBalance,
          method,
          status: 1,
          createdBy: 'Admin',
        };
        this.molassesReceiptService.updateMolassesReceipt(postParam).subscribe((responceData: any) => {
          this.handleResponse(responceData);
        });
      }
    }
  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/molassesrecieptandconsumption/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  navigateLicenceTypeList() {
    this.router.navigate(['/supplychainmanagement/sugarmills/molassesrecieptandconsumption/list']);
  }

  previewlicencetype(form) {
    this.preview.setData = form.value;
    this.router.navigate(['/supplychainmanagement/sugarmills/molassesrecieptandconsumption/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
