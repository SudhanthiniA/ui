import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService,WarehouseNewbrandService } from '@app/services';
import { WarehouseBwfl9Service } from '@app/services/ware-house/warehouse-befl9.service';

@Component({
  selector: 'app-addbwfl9',
  templateUrl: './addbwfl9.component.html',
  styleUrls: ['./addbwfl9.component.scss']
})
export class Addbwfl9Component implements OnInit {

  Bwfl9Obj: any = {}
  bwfl9form:any;
  formSubmitted = false;
  editId: any;
  addedit: any;
  allbrands: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl9Service: WarehouseBwfl9Service,
    private alert: AlertService,
    private warehouseservice:WarehouseNewbrandService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.Bwfl9Obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    // this.Bwfl9Obj.bwfl5Date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  getById(id) {
    this.warehouseBwfl9Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl9Obj = response.data
        this.Bwfl9Obj.bwfl5Date = response.data.bwfl5Date
      }
    })
  }

  resetForm(){
    this.Bwfl9Obj.reset();
  }

  addBwfl9Details(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          "id": 0,
          "brandRegistrationId": this.Bwfl9Obj.brandRegistrationId,
          "liquorDescription": this.Bwfl9Obj.liquorDescription,
          "ml180": this.Bwfl9Obj.ml180,
          "ml375": this.Bwfl9Obj.ml375,
          "ml750": this.Bwfl9Obj.ml750,
          "beer": this.Bwfl9Obj.beer,
          "quantityInBulkLitres": this.Bwfl9Obj.quantityInBulkLitres,
          "alcohol": this.Bwfl9Obj.alcohol,
          "total": this.Bwfl9Obj.total,
          "remarks": this.Bwfl9Obj.remarks,
          "status": "INITIATE",
          "entityId": 7,
          "_active": "false",
        }


        // const url = 'IndentList/'+this.editId
        paramdpd['id'] = this.editId;
        // this.warehouseNewbrandService.patch(url, paramdpd).then((responceData: any) => {
        //   this.alert.showSuccess('Record Updated successfully', 'Success');
        //   this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/list']);

        // })
        this.warehouseBwfl9Service.updateBwfl9(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl9/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {

          "id": 0,
          "brandRegistrationId": this.Bwfl9Obj.brandRegistrationId,
          "liquorDescription": this.Bwfl9Obj.liquorDescription,
          "ml180": this.Bwfl9Obj.ml180,
          "ml375": this.Bwfl9Obj.ml375,
          "ml750": this.Bwfl9Obj.ml750,
          "beer": this.Bwfl9Obj.beer,
          "quantityInBulkLitres": this.Bwfl9Obj.quantityInBulkLitres,
          "alcohol": this.Bwfl9Obj.alcohol,
          "total": this.Bwfl9Obj.total,
          "remarks": this.Bwfl9Obj.remarks,
          "status": "INITIATE",
          "entityId": 7,
          "_active": "false",
        }

        this.warehouseBwfl9Service.addBwfl9(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl9/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }

}
