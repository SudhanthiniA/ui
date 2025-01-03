import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { DatePipe } from '@angular/common';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { WarehouseStockInService } from '@app/services/ware-house/warehouse-stockin.service'
import { 
  AlertService,
  TankRegistrationService,
  MasterapiService,
  PreviewService,
  WorkflowcofigService,
  CommonService
} from '@app/services';

@Component({
  selector: 'app-addwarehousestockin',
  templateUrl: './addwarehousestockin.component.html',
  styleUrls: ['./addwarehousestockin.component.scss']
})
export class AddwarehousestockinComponent implements OnInit {
  WarehouseStockObj:any = {
    Transportpassno: '',
    Transportpassdate: '',
  }
  stockingetObj:any={
    brandid:'',
    serialNo:'',
    sizeid:'',
    batchno:'',
    receivebox:'',
    bottles:'',
    breakagetype:'',
    breakage:'',
    totalbottlesrec:'',
    receivedby:'',
    Remarks:'',

  }
  stockindetails: any;
  editId: any;
  addedit: string;
  formSubmitted = false;
  constructor(
    public alert:AlertService,
    private router: Router,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
    public WStockInService:WarehouseStockInService) { }

  ngOnInit() {
    this.WarehouseStockObj = this.formbuilder.group({

    })
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.WarehouseStockObj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  addstockin(form, status) {
   
    this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {

    if (this.editId) {
      const paramdpd = {
        "batchNo": form.value.batchNo,
        "brandName": form.value.brandName,
        "breakage":form.value.breakage,
        "breakageType": form.value.breakageType,
        "breakageTypeId": form.value.breakageTypeId,
        "entityId": 7,
        "entityTypeId": 7,
        "etin": "string",
        "id": 0,
        "importPermitRequestid": 0,
        "indentNumber": 0,
        "isactive": true,
        "issueTransportPassDate": form.value.issueTransportPassDate,
        "parentCode":'string' ,
        "plannedbottles":form.value.plannedbottles,
        "receivedBox": form.value.receivedBox,
        "receivedBy": form.value.receivedBy,
        "remarks": form.value.remarks,
        "size": form.value.size,
        "stackinEntityId": 0,
        "stackoutEntityId": 7,
        "status": "INITIATE",
        "totalRecievedBottels":form.value.totalRecievedBottels,
        "transportPassNo": form.value.transportPassNo,
    }
    paramdpd['id'] = this.editId;
      this.WStockInService.updateStockIndetails(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/warehousestockin/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    } else {
      const paramdpd = {
        "batchNo": form.value.batchNo,
        "brandName": form.value.brandName,
        "breakage":form.value.breakage,
        "breakageType": form.value.breakageType,
        "breakageTypeId": form.value.breakageTypeId,
        "entityId": 7,
        "entityTypeId": 7,
        "etin": "string",
        "id": 0,
        "importPermitRequestid": 0,
        "indentNumber": 0,
        "isactive": true,
        "issueTransportPassDate": form.value.issueTransportPassDate,
        "parentCode":'string' ,
        "plannedbottles":form.value.plannedbottles,
        "receivedBox": form.value.receivedBox,
        "receivedBy": form.value.receivedBy,
        "remarks": form.value.remarks,
        "size": form.value.size,
        "stackinEntityId": 0,
        "stackoutEntityId": 7,
        "status": "INITIATE",
        "totalRecievedBottels":form.value.totalRecievedBottels,
        "transportPassNo": form.value.transportPassNo,
      }
      this.WStockInService.addStockIndetails(paramdpd).subscribe((response: any) => {
        if (response.status == "s") {
          this.alert.showSuccess(response.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/warehousestockin/list']);
        }
        else {
          this.alert.showError(response['userDisplayMesg'], 'error')
        }
      })
    }
  }
  }
  
  // getbyid
  getById(id) {
    this.WStockInService.getStockdetailstbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.WarehouseStockObj = response.data
        this.WarehouseStockObj.bwfl7Date = this.datepipe.transform(this.WarehouseStockObj.issueTransportPassDate, 'yyyy-MM-dd');
      }
    })
  }
}
