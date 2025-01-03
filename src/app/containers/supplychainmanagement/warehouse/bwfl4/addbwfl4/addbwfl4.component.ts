import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl4Service } from '@app/services/ware-house';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-addbwfl4',
  templateUrl: './addbwfl4.component.html',
  styleUrls: ['./addbwfl4.component.scss']
})
export class Addbwfl4Component implements OnInit {
  Bwfl4Obj: any={
    placeId:'',
    strength:''
  }
  bwfl4Obj: any;
  formSubmitted = false;
  editId:any;
  addedit:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl4Service: WarehouseBwfl4Service,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.Bwfl4Obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    // console.log(this.Bwfl4Obj)
  }
  getById(id) {
    this.warehouseBwfl4Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl4Obj = response.data
        this.Bwfl4Obj.placeId=response.data.placeId
        this.Bwfl4Obj.bwfl4date = this.datepipe.transform(this.Bwfl4Obj.bwfl4date, 'yyyy-MM-dd');
        this.Bwfl4Obj.liquorRecivedDate = this.datepipe.transform(this.Bwfl4Obj.liquorRecivedDate, 'yyyy-MM-dd');
      }
    })
  }

  resetForm() {
    this.Bwfl4Obj.reset();
  }
  
  addBwfl4Details(form, status) {
   this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const paramdpd = {
          "id": 0,
          "liquorDescription": this.Bwfl4Obj.liquorDescription,
          "bwfl4date": this.Bwfl4Obj.bwfl4date,
          "placeId": this.Bwfl4Obj.placeId,
          "passNo": this.Bwfl4Obj.passNo,
          "liquorRecivedDate": this.Bwfl4Obj.liquorRecivedDate,
          "noOfBottles": this.Bwfl4Obj.noOfBottles,
          "capacityInEachBottles": this.Bwfl4Obj.capacityInEachBottles,
          "totalBulkLitre": this.Bwfl4Obj.totalBulkLitre,
          "strength":this.Bwfl4Obj.strength,
          "status": "INITIATE",
          "entityId": 7,
          "is_active": true
        }

      
        // const url = 'IndentList/'+this.editId
        paramdpd['id'] = this.editId;
        // this.warehouseNewbrandService.patch(url, paramdpd).then((responceData: any) => {
        //   this.alert.showSuccess('Record Updated successfully', 'Success');
        //   this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/list']);
          
        // })
        this.warehouseBwfl4Service.UpdateBwfl4(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl4/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {
          "id": 0,
          "liquorDescription": this.Bwfl4Obj.liquorDescription,
          "bwfl4date": this.Bwfl4Obj.bwfl4date,
          "placeId": this.Bwfl4Obj.placeId,
          "passNo": this.Bwfl4Obj.passNo,
          "liquorRecivedDate": this.Bwfl4Obj.liquorRecivedDate,
          "noOfBottles": this.Bwfl4Obj.noOfBottles,
          "capacityInEachBottles": this.Bwfl4Obj.capacityInEachBottles,
          "totalBulkLitre": this.Bwfl4Obj.totalBulkLitre,
          "strength":this.Bwfl4Obj.strength,
          "status": "INITIATE",
          "entityId": 7,
          "is_active": true
         
          }
       
        this.warehouseBwfl4Service.AddBwfl4(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl4/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
}
