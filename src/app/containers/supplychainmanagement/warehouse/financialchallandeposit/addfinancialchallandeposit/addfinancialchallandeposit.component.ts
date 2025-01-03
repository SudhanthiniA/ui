import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, StatemasterService, CountrymasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';
import { FormBuilder, FormArray } from '@angular/forms';
import { WarehouseFinancialChallanaDepositService } from '@app/services/ware-house/warehouse-financialChallana-deposit.service';

@Component({
  selector: 'app-addfinancialchallandeposit',
  templateUrl: './addfinancialchallandeposit.component.html',
  styleUrls: ['./addfinancialchallandeposit.component.scss']
})
export class AddfinancialchallandepositComponent implements OnInit {

  fChalanaDepositData: any;
  devesionData: any;
  feeTypeData: any;
  hashcodeData:any;
  treasury:any;
  treasuryData: any;
  descrptionData: any;
  alltreasuryData: any;
  treasuryDataone: any;
  feeid: any;
  editId: any;
  addedit: string;
  formSubmitted: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private datepipe: DatePipe,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private Service:WarehouseFinancialChallanaDepositService,

  ) { }

  fChalanaDepositObj = {
    challanNumber: '',
    headCode: '',
    challanDate:'',
    name:'',
    divisionId:'',
    treasuryId:'',
    amount:'',
    purpose:'',
    feeTypeName:'',
    divisionName:'',
    treasuryName:'',
    descriptionId:'',
  };

  ngOnInit() {
    this.getDevesion()
    this.getFeetype()
    this.getallHeadCode()
    this.getallTreauryById()
    this.route.params.subscribe(params => {
      if (params.id) {
        //this.getById(params.id);
        //this.fChalanaDepositObj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  addChalanaForm(form, status) {
    this.formSubmitted = false;
     if (form.valid === false) {
       this.formSubmitted = true;
     } else {
       if (this.editId) {
         const paramdpd = {
          divisionId: this.fChalanaDepositObj.divisionName,
          treasuryId: this.fChalanaDepositObj.treasuryName,
          headCode: this.fChalanaDepositObj.headCode,
          amount: this.fChalanaDepositObj.amount,
          challanNumber: this.fChalanaDepositObj.challanNumber,
          challanDate:this.fChalanaDepositObj.challanDate,
          purpose:this.fChalanaDepositObj.purpose,
          typeId:this.fChalanaDepositObj.feeTypeName,
          name: this.fChalanaDepositObj.name,
          descriptionId: this.fChalanaDepositObj.name
          //status
         }
         paramdpd['id'] = this.editId;
        
         this.Service.addChallanaDeposit(paramdpd).subscribe((response: any) => {
           if (response.status == "s") {
             this.alert.showSuccess(response.userDisplayMesg, 'Success');
             this.router.navigate(['/supplychainmanagement/warehouse/financialchallandeposit/list']);
           }
           else {
             this.alert.showError(response['userDisplayMesg'], 'error')
           }
         })
       } else {
         const paramdpd = {
            divisionId: this.fChalanaDepositObj.divisionName,
            treasuryId: this.fChalanaDepositObj.treasuryName,
            headCode: this.fChalanaDepositObj.headCode,
            amount: this.fChalanaDepositObj.amount,
            challanNumber: this.fChalanaDepositObj.challanNumber,
            challanDate:this.fChalanaDepositObj.challanDate,
            purpose:this.fChalanaDepositObj.purpose,
            feeTypeName:this.fChalanaDepositObj.feeTypeName,
            name: this.fChalanaDepositObj.name,
            descriptionId: this.fChalanaDepositObj.name
            
           }
        
         this.Service.addChallanaDeposit(paramdpd).subscribe((response: any) => {
           if (response.status == "s") {
             this.alert.showSuccess(response.userDisplayMesg, 'Success');
             this.router.navigate(['/supplychainmanagement/warehouse/financialchallandeposit/list']);
           }
           else {
             this.alert.showError(response['userDisplayMesg'], 'error')
           }
         })
       }
     }
   }



  // get devision
  getDevesion() {
    this.Service.getAllDevision()
      .subscribe((resp: any) => {
        this.devesionData = resp.data;
        this.getTreasuryByDevisionId((resp.data.id))
      });
  }

  // feetype
  getFeetype() {
    this.Service.getAllFeetype()
      .subscribe((resp: any) => {
        this.feeTypeData = resp.data;
        this.getHeadCodeByTypeId((resp.data.id))
      });
  }

  // hash code
  getallHeadCode() {
    this.Service.getHeadCodeByFid()
      .subscribe((resp: any) => {
        this.hashcodeData = resp.data;
        
      });
  }

  // tresury
  getallTreauryById() {
    this.Service.getAllTrasuryById()
      .subscribe((resp: any) => {
        this.treasuryData = resp.data;
      });
  }

  //change event for devision pick list
  getTreasuryByDevisionId(id){
    this.Service. getTreasuryByDevisionId(id).subscribe((resp:any)=>{
      this.alltreasuryData=resp.data;
    })
  }

  // change method for head code pick list
  getHeadCodeByTypeId(id){
    this.feeid=id;
    this.Service.getHeadcodeByfeeType(id).subscribe((resp:any)=>{
      this.hashcodeData=resp.data;
    })
  }
  // change method code for description
  getDescrptionByTypeCodeById(id) {
    this.Service.getDescriptionByTypeCodeId(id, this.feeid)
      .subscribe((resp: any) => {
        this.descrptionData = resp.data;
      });
  }

  // change event
  // getDevisionTreasuryId(id) {
  //   if (id){
  //     this.Service.getTreasuryByDevisionId(id).subscribe((responceData: any) => {
  //       this.treasuryDataone = responceData.data;
  //     });
  //   } else {
  //     this.treasuryDataone = [];
  //   }
  // }
}
