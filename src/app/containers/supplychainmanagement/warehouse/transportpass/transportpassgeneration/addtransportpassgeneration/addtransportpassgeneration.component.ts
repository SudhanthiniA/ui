import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseTrnsportPassGenService, WarehouseNewbrandService } from '@app/services/ware-house';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-addtransportpassgeneration',
  templateUrl: './addtransportpassgeneration.component.html',
  styleUrls: ['./addtransportpassgeneration.component.scss']
})
export class AddtransportpassgenerationComponent implements OnInit {
  TransportObj:any={
    routeId:'',
    majorDistrictsRnRoutes1Id:''
  }
  registrationobj:any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  editId: any;
  date: any;
  curDate = new Date();
  transportpass: FormGroup;

  addedit: any;
  sizelist: any;
  allbrands: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private alert: AlertService,
    private apiservice:ApiService,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.commoncontrol()
    if (this.registrationobj) {
      this.setData();
    }
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
         this.transportpass.value.id = params.id;
        this.editId = params.id;
         this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  buildPrescriptionFormGrp() {
    this.transportpass = this.formbuilder.group({
      "advanceConsiderationFee":["5432", Validators.required],
      "advanceScanningFee":["4536", Validators.required],
      "advanceDuty":["1456", Validators.required],
      "passGenerationDate":[ this.datepipe.transform(new Date(), 'yyyy-MM-dd'), Validators.required],
      "fromBwfl2":[ localStorage.getItem('USER_NAME'), Validators.required],
      "to":['', Validators.required],
      "licenseeNo":['BWFL-7-1614609678145', Validators.required],
      "licenseeAddress":['Plot:43,Sanathnager', Validators.required],
      "licenseeDistrict":['Hyderabad-64', Validators.required],
      "routeId":['', Validators.required],
      "vehicleRegistrationNo":['', Validators.required],
      "vehicleDriverName":['', Validators.required],
      "vehicleAgentNameAddress":['', Validators.required],
      "majorDistrictsRnRoutes1Id":['', Validators.required],
      "grossWeight":['', Validators.required],
      "tierWeight":['', Validators.required],
      "netWeight":['', Validators.required],
      "transportPassGenDetailList": this.formbuilder.array([
        this.buildformgroup()
      ])
      // "status": status,
      // stockInDetail: this.formBuilder.array([
      //   this.addFormGroupTable()
      // ])
    });
    console.log(this.transportpass);
    
  }
  getById(id) {
    this.warehouseTrnsportPassGenService.getransportdetailstbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.TransportObj = response.data;
       
      }
    })
  }
  buildformgroup(data?: any){

    return this.formbuilder.group({
      id:0,
      brandRegistrationId:'',
      size:'',
      availableBottles:'',
      availableBox:'',
      breakage:'',
      balanceBottles:'',
      batchNo:'',
      dispatchBox:'',
      dispatchBottles:'',
      duty:'',
      addDuty:'',
      specialAdditionalDuty: '',
      calculatedDuty:  '',
      calculatedAddDuty:'',
      calculatedSpecialAddiDuty: ''
    });
  }

  commoncontrol(){
    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log('sizes', responceData);
      this.sizelist = responceData.data;
    });

    this.warehouseNewbrandService.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    })
  }
  addTransportGenDetails(form, status) {
   
   
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
         "advanceConsiderationFee":this.transportpass.value.advanceConsiderationFee,
         "advanceScanningFee":this.transportpass.value.advanceScanningFee,
         "advanceDuty":this.transportpass.value.advanceDuty,
         "passGenerationDate":this.transportpass.value.passGenerationDate,
         "fromBwfl2":this.transportpass.value.fromBwfl2,
         "to":this.transportpass.value.to,
         "licenseeNo":this.transportpass.value.licenseeNo,
         "licenseeAddress":this.transportpass.value.licenseeAddress,
         "licenseeDistrict":this.transportpass.value.licenseeDistrict,
         "routeId":parseInt(this.transportpass.value.routeId),
         "vehicleRegistrationNo":this.transportpass.value.vehicleRegistrationNo,
         "vehicleDriverName":this.transportpass.value.vehicleDriverName,
         "vehicleAgentNameAddress":this.transportpass.value.vehicleAgentNameAddress,
         "majorDistrictsRnRoutes1Id":parseInt(this.transportpass.value.majorDistrictsRnRoutes1Id),
         "grossWeight":this.transportpass.value.grossWeight,
         "tierWeight":this.transportpass.value.tierWeight,
         "netWeight":this.transportpass.value.netWeight,
         "status": status,
       }

        paramdpd['id'] = this.editId;
       
        this.warehouseTrnsportPassGenService.updatetransportdetails(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {
          "advanceConsiderationFee":this.transportpass.value.advanceConsiderationFee,
          "advanceScanningFee":this.transportpass.value.advanceScanningFee,
          "advanceDuty":this.transportpass.value.advanceDuty,
          "passGenerationDate":this.transportpass.value.passGenerationDate,
          "fromBwfl2":this.transportpass.value.fromBwfl2,
          "to":this.transportpass.value.to,
          "licenseeNo":this.transportpass.value.licenseeNo,
          "licenseeAddress":this.transportpass.value.licenseeAddress,
          "licenseeDistrict":this.transportpass.value.licenseeDistrict,
          "routeId":parseInt(this.transportpass.value.routeId),
          "vehicleRegistrationNo":this.transportpass.value.vehicleRegistrationNo,
          "vehicleDriverName":this.transportpass.value.vehicleDriverName,
          "vehicleAgentNameAddress":this.transportpass.value.vehicleAgentNameAddress,
          "majorDistrictsRnRoutes1Id":parseInt(this.transportpass.value.majorDistrictsRnRoutes1Id),
          "grossWeight":this.transportpass.value.grossWeight,
          "tierWeight":this.transportpass.value.tierWeight,
          "netWeight":this.transportpass.value.netWeight,
          "transportPassGenDetailList":this.transportpass.value.transportPassGenDetailList,
         "status": status,
         indentRquestId:'INR1613633473614',
         "id":0
         }
       
        this.warehouseTrnsportPassGenService.addtransportdetails(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
  addrow() {
    (this.transportpass.get('transportPassGenDetailList') as FormArray).push(this.buildformgroup());
    console.log(this.transportpass.get('transportPassGenDetailList') );
    
   }
  preview(form){
    sessionStorage.setItem('formdata', JSON.stringify(form.value));
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/preview'])
  }
  setData() {
    this.transportpass.patchValue(this.registrationobj);
  }
  back(){
    sessionStorage.removeItem('formdata')
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration'])
  }
  deleteRow(index) {
    this.transportpass.value.passdetails.splice(index, 1);
  }

  getnetweight(){
    if(this.transportpass.get('grossWeight').value && this.transportpass.get('tierWeight').value) {
      this.transportpass.patchValue({
        netWeight: this.transportpass.get('grossWeight').value + this.transportpass.get('tierWeight').value
      })
    } else {
      this.transportpass.patchValue({
        netWeight: this.transportpass.get('grossWeight').value + this.transportpass.get('tierWeight').value
      })
    }
  }

  
}
