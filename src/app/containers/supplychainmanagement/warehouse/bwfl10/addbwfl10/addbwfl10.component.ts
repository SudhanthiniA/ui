import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService, WarehouseNewbrandService } from '@app/services';
import { WarehouseBwfl10Service } from '@app/services/ware-house/warehouse-bwfl10.service';

@Component({
  selector: 'app-addbwfl10',
  templateUrl: './addbwfl10.component.html',
  styleUrls: ['./addbwfl10.component.scss']
})
export class Addbwfl10Component implements OnInit {

  Bwfl10Obj: any = {}
  formSubmitted = false;
  editId: any;
  Bwfl10Form:any;
  addedit: any;
  allbrands: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl10Service: WarehouseBwfl10Service,
    private alert: AlertService,
    private warehouseservice:WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.Bwfl10Obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.Bwfl10Obj.bwfl10Date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

     // brand calling
     this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  getById(id) {
    this.warehouseBwfl10Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl10Obj = response.data
        this.Bwfl10Obj.bwfl10Date = this.datepipe.transform(this.Bwfl10Obj.bwfl10Date, 'yyyy-MM-dd');
      }
    })
  }

  resetForm(){
    this.Bwfl10Obj.reset();
  }
  addBwfl10Details(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          id: 0,
          brandRegistrationId: this.Bwfl10Obj.brandRegistrationId,
          bwfl10Name: this.Bwfl10Obj.bwfl10Name,
          bwfl10Date: this.Bwfl10Obj.bwfl10Date,
          liquorDescription: this.Bwfl10Obj.liquorDescription,
          stockRemaining: this.Bwfl10Obj.stockRemaining,
          consignerAddress: this.Bwfl10Obj.consignerAddress,
          remarks: this.Bwfl10Obj.remarks,
          status: "INITIATE",
          entityId: 7,
          _active: true
          // id: 0,
          // brandRegistrationId: this.Bwfl10Obj.brandRegistrationId,
          // bwfl10Name: this.Bwfl10Obj.bwfl10Name,
          // bwfl10Date: this.Bwfl10Obj.bwfl10Date,
          // liquorDescription: this.Bwfl10Obj.liquorDescription,
          // stockRemaining: this.Bwfl10Obj.stockRemaining,
          // consignerAddress: this.Bwfl10Obj.consignerAddress,
          // remarks: this.Bwfl10Obj.remarks,
          // entityId: 7,
          // _active: true,
          // status
        }
        paramdpd['id'] = this.editId;
        this.warehouseBwfl10Service.updateBfwfl10(paramdpd).subscribe((response: any) => {
          if (response.status == 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl10/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {
          id: 0,
          brandRegistrationId: this.Bwfl10Obj.brandRegistrationId,
          bwfl10Name: this.Bwfl10Obj.bwfl10Name,
          bwfl10Date: this.Bwfl10Obj.bwfl10Date,
          liquorDescription: this.Bwfl10Obj.liquorDescription,
          stockRemaining: this.Bwfl10Obj.stockRemaining,
          consignerAddress: this.Bwfl10Obj.consignerAddress,
          remarks: this.Bwfl10Obj.remarks,
          status: "INITIATE",
          entityId: 7,
          _active: true
          // id: 0,
          // brandRegistrationId: this.Bwfl10Obj.brandRegistrationId,
          // bwfl10Name: this.Bwfl10Obj.bwfl10Name,
          // bwfl10Date: this.Bwfl10Obj.bwfl10Date,
          // liquorDescription: this.Bwfl10Obj.liquorDescription,
          // stockRemaining: this.Bwfl10Obj.stockRemaining,
          // consignerAddress: this.Bwfl10Obj.consignerAddress,
          // remarks: this.Bwfl10Obj.remarks,
          // entityId: 7,
          // _active: true,
          // status
        };

        this.warehouseBwfl10Service.addBfwfl10(paramdpd).subscribe((response: any) => {
          if (response.status == 's') {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl10/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
}
