import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl5Service } from '@app/services/ware-house';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-addbwfl5',
  templateUrl: './addbwfl5.component.html',
  styleUrls: ['./addbwfl5.component.scss']
})
export class Addbwfl5Component implements OnInit {
  Bwfl5Obj:any={}
  formSubmitted = false;
  editId:any;
  addedit:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl5Service: WarehouseBwfl5Service,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.Bwfl5Obj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.Bwfl5Obj.bwfl5Date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  }

  resetForm(){
    this.Bwfl5Obj.reset();
  }

  getById(id) {
    this.warehouseBwfl5Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl5Obj = response.data
        this.Bwfl5Obj.bwfl5Date = this.datepipe.transform(this.Bwfl5Obj.bwfl5Date, 'yyyy-MM-dd');
      }
    })
  }
  addBwfl5Details(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          bwfl5Date: this.Bwfl5Obj.bwfl5Date,
          treasuryChallanNo: this.Bwfl5Obj.treasuryChallanNo,
          wholesaleVendor: this.Bwfl5Obj.wholesaleVendor,
          consigneeName: this.Bwfl5Obj.consigneeName,
          foreignLiquorDescription: this.Bwfl5Obj.foreignLiquorDescription,
          quantityInBl:this.Bwfl5Obj.quantityInBl,
          quantityInAl:this.Bwfl5Obj.quantityInAl,
          dutyFee:this.Bwfl5Obj.dutyFee,
          createdBy:"ram",
          modifiedBy:"ram",
          entityId: 0,
          id:0,
          is_active: true,
          status
        }

      
        // const url = 'IndentList/'+this.editId
        paramdpd['id'] = this.editId;
        // this.warehouseNewbrandService.patch(url, paramdpd).then((responceData: any) => {
        //   this.alert.showSuccess('Record Updated successfully', 'Success');
        //   this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/list']);
          
        // })
        this.warehouseBwfl5Service.updateBfwfl5(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl5/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {
        
          bwfl5Date: this.Bwfl5Obj.bwfl5Date,
          treasuryChallanNo: this.Bwfl5Obj.treasuryChallanNo,
          wholesaleVendor: this.Bwfl5Obj.wholesaleVendor,
          consigneeName: this.Bwfl5Obj.consigneeName,
          foreignLiquorDescription: this.Bwfl5Obj.foreignLiquorDescription,
            quantityInBl:this.Bwfl5Obj.quantityInBl,
            quantityInAl:this.Bwfl5Obj.quantityInAl,
            dutyFee:this.Bwfl5Obj.dutyFee,
            createdBy:"ram",
            modifiedBy:"ram",
            entityId: 0,
            id:0,
            is_active: true,
            status
          }
       
        this.warehouseBwfl5Service.addBfwfl5(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/bwfl5/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
}
