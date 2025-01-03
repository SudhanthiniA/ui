import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  DistileryService,
  PreviewService,
  CommonService
} from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  senttostillForm: FormGroup;
  otnumberlist: any[] = [];
  fermentrefnumberlist: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  editId:any;
  addedit:any;
  otflag:boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private distileryService: DistileryService,
    private commonService: CommonService,
    private preview: PreviewService,
    private modalService:NgbModal,
    private datepipe:DatePipe

  ) { }

  async ngOnInit() {
    this.senttostillFormGrp();
   await this.getotnumbers();
    this.route.params.subscribe(params => {
      if (params.id) {
         this.editId = params.id;
         this.otflag = true;
         this.getsenttostillbyId(this.editId);
       }else if (this.preview.setData) {
         this.senttostillForm.patchValue(this.preview.setData);
         if(this.preview.setData.otstartdate){
           this.senttostillForm.patchValue({
             otstartdate: this.datepipe.transform(this.preview.setData.otstartdate,'yyyy-MM-ddThh:mm')
           })
         } 
         if(this.preview.setData.id){
           this.otflag = true;
         }
        //  this.getfermentveeselrefNo(this.preview.setData.otProductionPlanId);
         this.getfermentdetails(this.preview.setData.otFermentationId); 
       
       }
         
     });
     this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';

  }

  senttostillFormGrp() {
    this.senttostillForm = this.formBuilder.group({
      otProductionPlanId: ['', Validators.required],
      otFermentationId: ['', Validators.required],
      bulkLitres: ['',Validators.required],
      dip: ['',Validators.required],
      indication: ['',Validators.required],
      strength: ['', Validators.required],
      temperature: ['', Validators.required],

      completionDateTime: ['', Validators.required],
      otstartdate :[''],
      otstarttime: [''],
      finalGravity :[''],
      washQty:[''],
      fermentvessalname:[''],
      otname:[''],
      fermentrefname:['']


    });
  }
 async getotnumbers(){
  await  this.distileryService.getsenttostillOtnumber().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumberlist = responceData.data;

      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getfermentveeselrefNo(id){

    if(id != ''){
      this.senttostillForm.patchValue({
        otFermentationId:'',
        fermentvessalname:'',
        washQty:'',
        finalGravity:'',
        otstartdate:''
  
      })
      this.getfermentrefnumber(id);
      if(this.otnumberlist.length > 0){
        var obj =this.otnumberlist.find(item =>item.id == id);
        this.senttostillForm.patchValue({
          otstartdate:this.datepipe.transform(obj['estimatedStartDate'],'yyyy-MM-ddThh:mm'),
          // otstarttime: this.datepipe.transform(obj['estimatedStartDate'],'Thh:mm')
  
        })

      }
    
   

    }else{
      this.senttostillForm.patchValue({
        otFermentationId:'',
        fermentvessalname:'',
        washQty:'',
        finalGravity:'',
        otstartdate:''
  
      })
    }
    

  }

  getfermentrefnumber(id){
    let data ='?otPlanId='+id;
   this.distileryService.getsenttostillfermentrenceno(data).subscribe((responceData: any) => {
     if (responceData.status === 's') {
       this.fermentrefnumberlist = responceData.data;
     } else {
       this.alert.showError(responceData.userDisplayMesg, 'error');
     }
   });
  }
  getfermentdetails(id){
    if(id !=''){
      let data ='?id='+id; 
      this.distileryService.getrevautopopulate(data).subscribe((responceData: any) => {
       if (responceData.status === 's') {
         this.senttostillForm.patchValue({
           finalGravity : responceData.data.finalGravity,
           washQty: responceData.data.washQuantity,
           fermentvessalname:responceData.data.tankRegistration.tankName
         })
 
       } else {
         this.alert.showError(responceData.userDisplayMesg, 'error');
       }
     }); 

    }


  }


  saveSentToStill(form, method) {    
    this.formSubmitted = false;
    const payload = {

      bulkLitres:form.value.bulkLitres,
      completionDateTime:form.value.completionDateTime,
      dip:form.value.dip,
      // estimatedStartDate:form.value.estimatedStartDate,
      indication:form.value.indication,
      otFermentationId:form.value.otFermentationId,
      otProductionPlanId:form.value.otProductionPlanId,
      strength: form.value.strength,
      temperature:form.value.temperature    
    };

    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            payload[`status`] = method;
            payload['id'] = this.editId;
          } else {
            payload[`status`] = method;
          }
          ((this.editId) ? this.distileryService.updateSentToStill(payload) :
            this.distileryService.createSentToStill(payload)
          ).subscribe((responceData: any) => {
            this.handleResponse(responceData, form);
          });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  handleResponse(responceData: any, form) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
   
      this.router.navigate(['/supplychainmanagement/distillery/sendtostill/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  setPreview(form){
    this.formSubmitted = false;
    if (this.senttostillForm.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = form;
      if(this.editId != ''){
        this.preview.setData.id = this.editId
      }
      this.router.navigate(['/supplychainmanagement/distillery/sendtostill/preview']);
    }

  }

  inWords(num, data?: any) {

    return this.commonService.convertToWords(num, data);
  }

  getsenttostillbyId(id){
  
    this.distileryService.getsenttostillbyid(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        let senttostillObj = responceData.data;
        this.getfermentveeselrefNo(senttostillObj.otProductionPlan.id);
       
        this.senttostillForm.patchValue({
          otProductionPlanId: responceData.data.otProductionPlan.id,
          otFermentationId: responceData.data.otFermentation.id,
          bulkLitres: responceData.data.bulkLitres,
          dip: responceData.data.dip,
          indication: responceData.data.indication,
          strength: responceData.data.strength,
          temperature: responceData.data.temperature,
          completionDateTime: this.datepipe.transform(responceData.data.completionDateTime,'yyyy-MM-ddThh:mm'),
          otname:responceData.data.otProductionPlan.otNumber,
          fermentrefname: responceData.data.otFermentation.referenceNumber

        });

        
        this.getfermentdetails(senttostillObj.otFermentation.id);
     
      }
    });

  }

}
