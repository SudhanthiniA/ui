import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseNewbrandService } from '@app/services/ware-house';
import { WarehouseBwfl7Service } from '@app/services/ware-house/warehouse-bwfl7.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addbwfl7',
  templateUrl: './addbwfl7.component.html',
  styleUrls: ['./addbwfl7.component.scss']
})
export class Addbwfl7Component implements OnInit {
  boxingForm:any;
  editId:any;
  addedit:any;
  bwfl7form:any
  formSubmitted = false;
  allbrands:any;
  bwfl7obj:any= {}
  //   "_active": '',
  //   "batchNumber": '',
  //   "brandRegistrationId": '',
  //   "bwfl7Date": "",
  //   "dateOfPermit": "",
  //   "descriptionOfFL": "",
  //   "dispatched": '',
  //   "entityId": '',
  //   "id": '',
  //   "nameOfConsignee": "",
  //   "nameOfConsigner": "",
  //   "nips": '',
  //   "officerIncharge": "",
  //   "passCoveringIssue": "",
  //   "passNumber": "",
  //   "permitNumber": '', 
  //   "pint": '',
  //   "quart": '',
  //   "remarks": "",
  //   "status": "",
  //   "totalBulkLtr": ''
  // }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl7Service: WarehouseBwfl7Service,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private warehouseservice:WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.bwfl7obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';

    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    })
  }

  getById(id) {
    this.warehouseBwfl7Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.bwfl7obj = response.data
        this.bwfl7obj.nips=response.data.nips
        this.bwfl7obj.bwfl7Date = this.datepipe.transform(this.bwfl7obj.bwfl7Date, 'yyyy-MM-dd');
      }
    })
  }

  resetForm(){
    this.bwfl7obj.reset();
  }
  addbwfl7Details(form, status) {
    this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {

    if (this.editId) {
      const paramdpd = {
      "_active": true,
      "batchNumber": this.bwfl7obj.batchNumber,
      "brandRegistrationId": this.bwfl7obj.brandRegistrationId,
      "bwfl7Date": this.bwfl7obj.bwfl7Date,
      "dateOfPermit": this.bwfl7obj.dateOfPermit,
      "descriptionOfFL": this.bwfl7obj.descriptionOfFL,
      "dispatched": this.bwfl7obj.dispatched,
      "entityId": 7,
      "id": 0,
      "nameOfConsignee": this.bwfl7obj.nameOfConsignee,
      "nameOfConsigner": this.bwfl7obj.nameOfConsigner,
      "nips": this.bwfl7obj.nips,
      "officerIncharge": this.bwfl7obj.officerIncharge,
      "passCoveringIssue": this.bwfl7obj.passCoveringIssue,
      "passNumber": this.bwfl7obj.passNumber,
      "permitNumber": this.bwfl7obj.permitNumber,
      "pint": this.bwfl7obj.pint,
      "quart": this.bwfl7obj.quart,
      "remarks": this.bwfl7obj.remarks,
      "status": "INITIATE",
      "totalBulkLtr": this.bwfl7obj.totalBulkLtr
    }
    paramdpd['id'] = this.editId;
      this.warehouseBwfl7Service.updateBfwfl7(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bwfl7/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    } else {
      const paramdpd = {
        "_active": true,
      "batchNumber": this.bwfl7obj.batchNumber,
      "brandRegistrationId": this.bwfl7obj.brandRegistrationId,
      "bwfl7Date": this.bwfl7obj.bwfl7Date,
      "dateOfPermit": this.bwfl7obj.dateOfPermit,
      "descriptionOfFL": this.bwfl7obj.descriptionOfFL,
      "dispatched": this.bwfl7obj.dispatched,
      "entityId": 7,
      "id": 0,
      "nameOfConsignee": this.bwfl7obj.nameOfConsignee,
      "nameOfConsigner": this.bwfl7obj.nameOfConsigner,
      "nips": this.bwfl7obj.nips,
      "officerIncharge": this.bwfl7obj.officerIncharge,
      "passCoveringIssue": this.bwfl7obj.passCoveringIssue,
      "passNumber": this.bwfl7obj.passNumber,
      "permitNumber": this.bwfl7obj.permitNumber,
      "pint": this.bwfl7obj.pint,
      "quart": this.bwfl7obj.quart,
      "remarks": this.bwfl7obj.remarks,
      "status": "INITIATE",
      "totalBulkLtr": this.bwfl7obj.totalBulkLtr
      }
      this.warehouseBwfl7Service.addBfwfl7(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bwfl7/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    }
  }
 }
}
