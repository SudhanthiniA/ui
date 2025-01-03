import { Component, OnInit } from '@angular/core';
import { Pd10Service } from '@app/services';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addpd10form',
  templateUrl: './addpd10form.component.html',
  styleUrls: ['./addpd10form.component.scss']
})
export class Addpd10formComponent implements OnInit {

 
  gatedata: any[] = [];
  pd10form: any ={
    tankerSealed: true
  };
  formSubmitted:boolean =false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert:AlertService,
    public datepipe: DatePipe,
    private pd10csercice:Pd10Service,
    private modelservice: NgbModal
  ) { }

  ngOnInit() {
    this.pd10form.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.getreferenceNo();
  }

  getreferenceNo(){
    this.pd10csercice.getmf4gatepass().subscribe((response:any)=>{
      this.gatedata = response['data'];
      // console.log('gate pass----->>',this.gatepassno);
      
    })

  }

  selectedautopopulatedata(id){
    if(id !== ""){
      let selectedObj = this.gatedata.filter(item =>{
        return item.id === parseInt(id);
      })
      this.getmf4data(selectedObj);

    }else{
      this.pd10form ={}
    }

   
  }
  getmf4data(obj){
    let data ='/'+`${obj[0].id}`+'/'+`${obj[0].gatePassNumber}`
    this.pd10csercice.getmf4data(data).subscribe((responseData:any)=>{
      let pd10obj = responseData.data;
      this.pd10form.date =this.datepipe.transform(this.pd10form.date,'yyyy-MM-dd');
      this.pd10form.unloadingDateTime = this.datepipe.transform(pd10obj.unloadingDateTime,'yyyy-MM-dd');
      this.pd10form.incomingTime = this.datepipe.transform(pd10obj.incomingTime,'yyyy-MM-ddThh:mm');
      this.pd10form.outgoingTime = this.datepipe.transform(pd10obj.outgoingTime,'yyyy-MM-ddThh:mm');
      this.pd10form.sugarmillId = pd10obj.sugarmillId;
      this.pd10form.watchmanId = pd10obj.watchmanId;
      this.pd10form.despatchNetWeight = pd10obj.despatchNetWeight;
      this.pd10form.despatchTareWeight = pd10obj.despatchTareWeight;
      this.pd10form.driverName = pd10obj.driverName;
      this.pd10form.despatchGrossWeight = pd10obj.despatchGrossWeight
      this.pd10form.receiptGrossWeight = pd10obj.receiptGrossWeight
      this.pd10form.receiptNetWeight = pd10obj.receiptNetWeight
      this.pd10form.receiptTareWeight = pd10obj.receiptTareWeight
    })


  }

  saveData(form,status){ 
    const paramdpd = {
      date:this.pd10form.date,
      chemist: this.pd10form.chemist,
      inspector: this.pd10form.inspector,
      molassesStockTransferId: parseInt(this.pd10form.molassesStockTransferId),
      tankerSealed: this.pd10form.tankerSealed, 
      status: status
    };
    this.formSubmitted = false;
    if (form.valid === false && status == 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {


        this.pd10csercice.createpd10(paramdpd).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem("formdata")
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd10/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        })
      // }
    }else {

    }
  }).catch(err => {
    console.log('\n err...', err);
  });
    }
    
    
  }

  previewPd10(form) {
    sessionStorage.setItem('pd10formobj', JSON.stringify(this.pd10form));
    this.router.navigate(['/supplychainmanagement/distillery/pd10/preview']);
  }
}
