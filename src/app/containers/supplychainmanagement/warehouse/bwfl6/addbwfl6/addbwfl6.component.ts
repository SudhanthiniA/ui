import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService, WarehouseNewbrandService } from '@app/services';
import { FormBuilder, FormArray } from '@angular/forms';
import { WarehouseBwfl6Service } from '@app/services/ware-house/warehouse-bwfl6.service';

// @app/config/table-config/tankregestration-config
@Component({
  selector: 'app-addbwfl6',
  templateUrl: './addbwfl6.component.html',
  styleUrls: ['./addbwfl6.component.scss']
})
export class Addbwfl6Component implements OnInit {
  Bwfl6Obj:any={}
  formSubmitted = false;
  bwfl6form: any;
  editId:any;
  addedit:any;
  // bwfl6form: any;
  // formSubmitted = false;
  // Bwfl6Obj = {
  //   addressOfConsigner: '',
  //   brandRegistrationId: '',
  //   entityId: '',
  //   id: '',
  //   inBulk: '',
  //   issuedPassDate: '',
  //   issuedPassNumber: '',
  //   ml180: '',
  //   ml325: '',
  //   ml375: '',
  //   ml650: '',
  //   ml750: '',
  //   numberOfCases: '',
  //   remarks: '',
  //   status: '',
  //   strengthAL: '',
  //   strengthId: ''
  // };
  allbrands: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private warehouseBwfl6Service: WarehouseBwfl6Service,
    private alert: AlertService,
    private warehouseservice: WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.Bwfl6Obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
   
     //this.tankreqObj.requestDate = this.datepipe.transform(this.tankreqObj.requestDate, 'yyyy-MM-dd');
    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  
  getById(id) {
    this.warehouseBwfl6Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl6Obj = response.data;
        this.Bwfl6Obj.inBulk = response.data.inBulk;
        this.Bwfl6Obj.issuedPassDate = this.datepipe.transform(this.Bwfl6Obj.issuedPassDate, 'yyyy-MM-dd');
      }
    });
  }

  addbwfl6Details(form, status) {
    this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          _active: true,
          addressOfConsigner: this.Bwfl6Obj.addressOfConsigner,
          brandRegistrationId: this.Bwfl6Obj.brandRegistrationId,
          entityId: '7',
          id: 0,
          inBulk: this.Bwfl6Obj.inBulk,
          issuedPassDate: this.Bwfl6Obj.issuedPassDate,
          issuedPassNumber: this.Bwfl6Obj.issuedPassNumber,
          ml180: this.Bwfl6Obj.ml180,
          ml325: this.Bwfl6Obj.ml325,
          ml375: this.Bwfl6Obj.ml375,
          ml650: this.Bwfl6Obj.ml650,
          ml750: this.Bwfl6Obj.ml750,
          numberOfCases: this.Bwfl6Obj.numberOfCases,
          remarks: this.Bwfl6Obj.remarks,
          strengthId: this.Bwfl6Obj.strengthId,
          status:"INITIATE"
        };

        paramdpd['id'] = this.editId;
        this.warehouseBwfl6Service.updateBfwfl6(paramdpd).subscribe((response: any) => {
          if (response.status == 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl6/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error');
          }
        });
      } else {
        const paramdpd = {
          _active: true,
          addressOfConsigner: this.Bwfl6Obj.addressOfConsigner,
          brandRegistrationId: this.Bwfl6Obj.brandRegistrationId,
          entityId: '7',
          id: 0,
          inBulk: this.Bwfl6Obj.inBulk,
          issuedPassDate: this.Bwfl6Obj.issuedPassDate,
          issuedPassNumber: this.Bwfl6Obj.issuedPassNumber,
          ml180: this.Bwfl6Obj.ml180,
          ml325: this.Bwfl6Obj.ml325,
          ml375: this.Bwfl6Obj.ml375,
          ml650: this.Bwfl6Obj.ml650,
          ml750: this.Bwfl6Obj.ml750,
          numberOfCases: this.Bwfl6Obj.numberOfCases,
          remarks: this.Bwfl6Obj.remarks,
          strengthId: this.Bwfl6Obj.strengthId,
          status:"INITIATE"
        };
        this.warehouseBwfl6Service.addBfwfl6(paramdpd).subscribe((response: any) => {
          if (response.status == 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl6/list']);
          } else {
            this.alert.showError(response['userDisplayMesg'], 'error');
          }
        });
      }
    }
  }

  resetForm(){
    this.Bwfl6Obj.reset();
  }
  // addbwfl6Details(form,method){
  //   console.log(form.valid);
  // }
}
