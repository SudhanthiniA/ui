import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {
  DistileryService,
  AlertService,
  MasterapiService
} from '@app/services';
import { ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  fermentationForm: FormGroup;
  formSubmitted = false;
  otfieldflag:boolean = false;
  gradelist: any = [];
  tankList: any = [];
  otnumberlist: any;
  prefermeterno: any;
  fermetetorfillingsno: any;
  fermentationvessels: any;
  fermentationtable: any = [];
  editId: any;
  prefermentavailabulequantity: any;
  availableopenbalance: any;
  availblevessalcapacity: any;
  fieldvalidation = 'this.value = Math.abs(this.value)';

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private distileryService: DistileryService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getAllTankGrades();
    this.getotnumber();
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
      } else {
      }
    });
  }

  buildPrescriptionFormGrp() {
    this.fermentationForm = this.formBuilder.group({
      OTnumber: ['', Validators.required],
      prefermentervesalno: [''],
      prefermenteravailablequantity: [''],
      nooffermenterrequire: [''],
      // noofprefermenter: [''],
      prefrementerfillingserialno:['', Validators.required],
      fermentationdateandtime:['',Validators.required],
      fermenterfillingserialno:['',Validators.required],
      starttime:['',Validators.required],
      wortquanityrecid:['', Validators.required],
      initialgravity:['',Validators.required],
      rawmetirialtype:['' ,Validators.required],
      rawmetirialtank:['', Validators.required],
      availablequantity:[''],
      quantity:['', Validators.required],
      dip:['',Validators.required],
      finalwashquantity:['',Validators.required],
      finalgravity:['',Validators.required],
      endtime:['',Validators.required],
      // prefermeterserialno:[''],
      phofwash:['',Validators.required],
      alcoholpercentageinwash:['',Validators.required],
      aldehydepercentageinwash:['',Validators.required],
      percentunfermentedsugarwash:['',Validators.required],
      theoraticalfermentationinwash:['',Validators.required],
      theoraticalfermentationinalcohol:['',Validators.required],
      sludgediscarded:['',Validators.required],
      alcoholpercentagelossinsludge:['',Validators.required],
      prefermentervesalcapacity:['']
    });
  }

  

  public removeSelectedRow(idx: number) {
    (this.fermentationForm.get('fermentationFormdata') as FormArray).removeAt(idx);
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.gradelist = responceData.data;
      }
    });
  }

  getprefermetor(data) {
    let id = data;
    this.distileryService.getprefermetor(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.prefermeterno = responceData.data;
      }
    });
  }

  getotnumber() {
    this.distileryService.getotnumber().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumberlist = responceData.data;
      }
    });
  }

  getfermenterdetails(otid) {
    const queryParam = '?otplanid=' + otid;
    this.distileryService.fermenterdetails(queryParam).subscribe((responceData: any) => {

      if (responceData.status === 's') {
        this.fermetetorfillingsno = responceData.data;
      }
    });
  }

  molassesTypes(data) {
    console.log('id of dropdown-->>', data);
    if(data.target.value !=""){
      const id = data.target.value;

      this.distileryService.gettanksbyid(id).subscribe((resp: any) => {
        if (resp.status == 's') {
          console.log(resp.data);
          if (resp.data) {
            this.tankList = resp.data;
          } else {
            this.tankList = [];
          }
        }
      });
    }
  
  }

  getotdetails(id) {

    if(id !=""){
      const otobj = this.otnumberlist.find(item => item.id == id);
      const otnum = '?id=' + otobj.id;
      const otid = '?otNumer=' + otobj.otNumber;
      const otNumer = otobj.id
      console.log('otobject -->>', otobj);
  
      this.getprefermetor(otid);
      this.getfermenterdetails(otNumer);
  
      this.fermentationForm.patchValue({
        nooffermenterrequire: this.otnumberlist[0].fermenterCount
      });
          this.onclickformclear();
    }
  

  }

  getTankDetails(data) {
    this.distileryService.getcurrentStockBytankid(data).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.availableopenbalance = responceData.data.openingBalance;
        this.fermentationForm.patchValue({
          availablequantity: responceData.data.openingBalance
        });
      }
    });
  }

  fermentervessalcapacity(data) {
    console.log('data of fermenter -->>', data.target.value);
    if(data.target.value !=""){
      const id = '?vesselid=' + data.target.value;
      this.distileryService.getvessaldata(id).subscribe((responceData: any) => {
        this.availblevessalcapacity = responceData.data.availableCapacity
        if (responceData.status === 's') {
          this.fermentationForm.patchValue({
            prefermentervesalcapacity: responceData.data.availableCapacity
          });
        }
      });
    }
  
  }

  vessalcapacity(data) {
    const id = '?vesselid=' + data;
    this.distileryService.getvessaldata(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.prefermentavailabulequantity = responceData.data.openingBalance;
        this.fermentationForm.patchValue({
          prefermenteravailablequantity: responceData.data.openingBalance
        });
      }
    });
  }

  getvessaldata(data) {
    
    if(data.target.value !=""){
      console.log('data of fermenter -->>', data);
      const id = '?id=' + data.target.value;
      this.distileryService.getvessalnodata(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          const vessalno = responceData.data.tankRegistration.id;
          this.fermentationForm.patchValue({
            prefermentervesalno: responceData.data.tankRegistration.tankName
  
          });
          this.vessalcapacity(vessalno);
        }
      });
    }
   
  }

  savedata(data, status) {
    console.log('form data of fermentaiton -->>',data.value);
    console.log('fermenation validation -->>',data.valid);
    
    let paylaod = {
      otProductionPlanId: data.value.OTnumber,
      otPrefermentationProcessId: data.value.prefrementerfillingserialno,
      dateTime: data.value.fermentationdateandtime,
      fermentationTankId: data.value.fermenterfillingserialno,  // need clearity
      processStartTime: data.value.starttime,
      processEndTime: data.value.endtime,
      brothQtyRec: data.value.wortquanityrecid,
      initialGravity: data.value.initialgravity,
      dip: data.value.dip,
      finalGravity: data.value.finalgravity,
      molassesTankId: data.value.rawmetirialtank,
      molassesTypeId: data.value.rawmetirialtype,
      molassesQty: data.value.quantity,
      finalWashQty: data.value.finalwashquantity,
      alcoholLossSludgePercentage: data.value.alcoholpercentagelossinsludge,
      alcoholTheoraticalFermentationYield: data.value.theoraticalfermentationinalcohol,
      sludgeDiscarded: data.value.sludgediscarded,
      washAlcoholPercentage: data.value.alcoholpercentageinwash,
      washAldehydePercentage: data.value.aldehydepercentageinwash,
      washPh: data.value.phofwash,
      washTheoraticalFermentationYield: data.value.theoraticalfermentationinwash,
      washUnfermentedPercent: data.value.percentunfermentedsugarwash,
      status,
      isActive: true,
    }
    let total = parseInt(data.value.wortquanityrecid)+parseInt(data.value.quantity)
    if(total > data.value.prefermentervesalcapacity){
      this.alert.showError('(Broth + molasses) quantity should be less than or equal to the Fermentor Vessel Capacity', 'error');
      return
    }
     if (data.valid === false ) {
      this.formSubmitted = true;
    }else{
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
      if(this.editId){
        paylaod['id']=this.editId;
       this.distileryService.updatefermentation(paylaod).subscribe((response) =>{
         if(response.status == 's'){
           this.fermentationtable.push(paylaod);
           this.alert.showSuccess(response.userDisplayMesg, 'Success');
         }else{
           this.alert.showError(response.userDisplayMesg, 'error');
         }
       });
      }else{
       this.distileryService.createfermentation(paylaod).subscribe((response) =>{
         if(response.status == 's'){
          this.fermentationForm.reset();
          if (response.data.id != '') {
            this.fermentationForm.patchValue({
              OTnumber:response.data.otProductionPlan.id
            })
            let otid = response.data.otProductionPlan.id;
            this.getotdetails(otid);
            this.otfieldflag = true;
          }
           this.fermentationtable.push(response.data);
           this.alert.showSuccess(response.userDisplayMesg, 'Success');
         }else{
           this.alert.showError(response.userDisplayMesg, 'error');
         }
       });
      }
    }}).catch(err => {
      console.log('\n err...', err);
    });
    }
     
     
    }

  getavailablequantity(data) {
    console.log('data of available quantity -->>', data);
    const brothvalue = data;
    if (brothvalue > this.prefermentavailabulequantity) {
      this.alert.showError('Please Enter less than or equal to Pre-Fermenter Available Quantity', 'error');
      this.fermentationForm.patchValue({
        wortquanityrecid: ''
      });
    }
  }

  validation(data) {
    const quanity = data;
    if (quanity > this.availableopenbalance) {
      this.alert.showError('Please Enter less than or equal to Available Quantity', 'error');
      this.fermentationForm.patchValue({
        quantity: ''
      });
    }
  }

  washquantityvalidation(data) {
    const washavailabequantity = data;
    if (washavailabequantity > this.availblevessalcapacity) {
      this.alert.showError('Please Enter less than or equal to Fermenter Vessal Capacity', 'error');
      this.fermentationForm.patchValue({
        finalwashquantity: ''
      });
    }
  }

  clear(data) {
    data.reset();
  }

  onclickformclear(){
    this.fermentationForm.patchValue({
      prefrementerfillingserialno: '',
      prefermentervesalno:'',
      prefermenteravailablequantity:'',
      fermenterfillingserialno:'',
      prefermentervesalcapacity:'',
    });
  }
}
