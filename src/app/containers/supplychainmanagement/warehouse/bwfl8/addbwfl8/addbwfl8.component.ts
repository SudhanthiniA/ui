import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseNewbrandService } from '@app/services/ware-house';
import { WarehouseBwfl8Service } from '@app/services/ware-house/warehouse-bwfl8.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addbwfl8',
  templateUrl: './addbwfl8.component.html',
  styleUrls: ['./addbwfl8.component.scss']
})
export class Addbwfl8Component implements OnInit {

  editId:any;
  addedit:any;
  formSubmitted = false;
  allbrands:any;
  bwfl8form:any;
  bwfl8Obj:any= {}

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl8Service: WarehouseBwfl8Service,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private warehouseservice:WarehouseNewbrandService
  ) { }
  BrandNewObj: any;

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.bwfl8Obj.id = params.id;
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
    this.warehouseBwfl8Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.bwfl8Obj = response.data
        this.bwfl8Obj.nips=response.data.nips
        this.bwfl8Obj.appointmentDate = this.datepipe.transform(this.bwfl8Obj.appointmentDate, 'yyyy-MM-dd');
      }
    })
  }
  

  resetForm(){
    this.bwfl8Obj.reset();
  }

  addbwfl8Details(form, status) {
    this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {

    if (this.editId) {
      const paramdpd = {
        "id": 0,
        "employeeName": this.bwfl8Obj.employeeName,
        "employeeDesignation": this.bwfl8Obj.employeeDesignation,
        "employeeAddress": this.bwfl8Obj.employeeAddress,
        "appointmentDate": this.bwfl8Obj.appointmentDate,
        "referenceDeputy": this.bwfl8Obj.referenceDeputy,
        "remarks": this.bwfl8Obj.remarks,
        "status": "INITIATE",
        "entityId": 7,
        "is_active": false
    }
    paramdpd['id'] = this.editId;
      this.warehouseBwfl8Service.updateBfwfl8(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bwfl8/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    } else {
      const paramdpd = {
        "id": 0,
        "employeeName": this.bwfl8Obj.employeeName,
        "employeeDesignation": this.bwfl8Obj.employeeDesignation,
        "employeeAddress": this.bwfl8Obj.employeeAddress,
        "appointmentDate": this.bwfl8Obj.appointmentDate,
        "referenceDeputy": this.bwfl8Obj.referenceDeputy,
        "remarks": this.bwfl8Obj.remarks,
        "status": "INITIATE",
        "entityId": 7,
        "is_active": false
      }
      this.warehouseBwfl8Service.addBfwfl8(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bwfl8/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    }
  }
 }
}
