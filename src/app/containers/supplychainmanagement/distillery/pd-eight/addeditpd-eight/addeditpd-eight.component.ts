import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pd8aWashdetailService, AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditpd-eight',
  templateUrl: './addeditpd-eight.component.html',
  styleUrls: ['./addeditpd-eight.component.scss']
})
export class AddeditpdEightComponent implements OnInit {
  pd8areferenceObj: any = {
    productionPd8Id: ""

    // validity: '',
  };
  date: any;
  curDate = new Date();
  editId: any;
  addedit: any;
  formSubmitted = false;
  pd8referencelist: any[] = [];
  popupFlag: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private modelservice:NgbModal,
    private pd8aservice: Pd8aWashdetailService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getpd8reference();

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getIndentRequestById(params.id);
        this.pd8areferenceObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.getIndentRequestById()
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getIndentRequestById(id?) {
    if (id) {
      this.pd8aservice.getPd8AwashdetailById(id).subscribe(responceData => {
        this.pd8areferenceObj = responceData['data'];
        this.pd8areferenceObj.date = this.datepipe.transform(responceData.data.date,'yyyy-MM-dd');
        this.pd8areferenceObj.referenceNumber=responceData.data.productionPD8.referenceNumber;
        this.pd8areferenceObj.productionPd8Id = responceData.data.productionPD8.id;
        this.getbyidautodata(this.pd8areferenceObj);
       
      })
    } else {
      this.pd8areferenceObj = JSON.parse(sessionStorage.getItem('formdata'));
      if (this.pd8areferenceObj) {
        this.pd8areferenceObj = this.pd8areferenceObj
      } else {
        this.pd8areferenceObj = {}
      }
    }
  }

  getpd8reference(){
    this.pd8aservice.getallpd8approveddata().subscribe(responseData =>{
      this.pd8referencelist=responseData.data;

    })
  }
  getpd8autopopulatedata(id){
    this.getpd8reference();
    let data = id;
  
    if(data !== "" ){
      let autoObj = this.pd8referencelist.filter(item =>{
        return item.id == data
      })
      this.pd8areferenceObj.temparature = autoObj[0].temperature;
      this.pd8areferenceObj.finalGravity = autoObj[0].finalSpGravity;
      this.pd8areferenceObj.initialGravity = autoObj[0].initialSpGravity;
      this.pd8areferenceObj.setupWashNo = autoObj[0].washNumber;
      this.pd8areferenceObj.distilledWashNo = autoObj[0].washNumber;
      this.pd8areferenceObj.washInLtr = autoObj[0].washDistillery;
      this.pd8areferenceObj.molassesWeight = autoObj[0].molassesUsed;


    }else{
      this.pd8areferenceObj.temparature = "";
      this.pd8areferenceObj.finalGravity = "";
      this.pd8areferenceObj.initialGravity = "";
      this.pd8areferenceObj.setupWashNo = "";
      this.pd8areferenceObj.distilledWashNo = "";
      this.pd8areferenceObj.washInLtr = "";
      this.pd8areferenceObj.molassesWeight = "";

    }

  

  }
  getbyidautodata(data){
    if(data){
      this.pd8areferenceObj.temparature = data.productionPD8.temperature;
      this.pd8areferenceObj.finalGravity = data.productionPD8.finalSpGravity;
      this.pd8areferenceObj.initialGravity = data.productionPD8.initialSpGravity;
      this.pd8areferenceObj.setupWashNo = data.productionPD8.washNumber;
      this.pd8areferenceObj.distilledWashNo = data.productionPD8.washNumber;
      this.pd8areferenceObj.washInLtr = data.productionPD8.washDistillery;
      this.pd8areferenceObj.molassesWeight = data.productionPD8.molassesUsed;

    }else{
      this.pd8areferenceObj.temparature = "";
      this.pd8areferenceObj.finalGravity = "";
      this.pd8areferenceObj.initialGravity = "";
      this.pd8areferenceObj.setupWashNo = "";
      this.pd8areferenceObj.distilledWashNo = "";
      this.pd8areferenceObj.washInLtr = "";
      this.pd8areferenceObj.molassesWeight = "";

    }

  }
  
  @ViewChild('buttonForPop', { static: true }) myDiv: ElementRef<HTMLElement>;
  ShowPOpUp(form, status) {
    this.formSubmitted = false;
    if (form.valid === false && status == true) {
      this.formSubmitted = true;
    } else {
      console.log("test test")
      this.popupFlag = true;
      let el: HTMLElement = this.myDiv.nativeElement;
      el.click();
    }
  }
  addPd8aDeatils(form, status) {

 
    const paramdpd = {
      date: this.pd8areferenceObj.date,
      // temparature: this.pd8areferenceObj.temparature,
      // degree: this.pd8areferenceObj.degree,
      // particular: this.pd8areferenceObj.particular,
      // washInLtr: this.pd8areferenceObj.washInLtr,
      // molassesWeight: this.pd8areferenceObj.molassesWeight,
      // setupWashNo: this.pd8areferenceObj.setupWashNo,
      // initialGravity: this.pd8areferenceObj.initialGravity,
      setUpDryDip: this.pd8areferenceObj.setUpDryDip,
      // distilledWashNo: this.pd8areferenceObj.distilledWashNo,
      // finalGravity: this.pd8areferenceObj.finalGravity,
      productionPd8Id: this.pd8areferenceObj.productionPd8Id,
      distilledDryDip: this.pd8areferenceObj.distilledDryDip,
      distilledWashQty:this.pd8areferenceObj.distilledWashQty,
      
      status: status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {

      if (this.editId) {
        paramdpd['id'] = parseInt(this.editId);

        this.pd8aservice.updatePd8Awashdetail(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd-8/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      } else {
        this.pd8aservice.addPd8Awashdetail(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd-8/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      }
    }else {

    }
  }).catch(err => {
    console.log('\n err...', err);
  });
    }
  }
  previewcategory(form) {

    sessionStorage.setItem('formdata', JSON.stringify(this.pd8areferenceObj));
    this.router.navigate(['/supplychainmanagement/distillery/pd-8/preview']);
  }
  back() {
    sessionStorage.removeItem('formdata');
    this.router.navigate(['/supplychainmanagement/distillery/pd-8/list']);
  }
}
