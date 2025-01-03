import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { Pd8BdistilaryService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';


@Component({
  selector: 'app-addedit-pd8b',
  templateUrl: './addedit-pd8b.component.html',
  styleUrls: ['./addedit-pd8b.component.scss']
})
export class AddeditPd8bComponent implements OnInit {
  popupFlag: boolean;
  pd8bDistillationObj: any = {
    productionPd8Id:''
  };
  addedit: any;
  pd8referencelist:any[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private modelservice: NgbModal,
    private alert: AlertService,
    private pd8bsrv: Pd8BdistilaryService
  ) { }

  formSubmitted = false;
  curDate = new Date();
  editId: any;

  ngOnInit() {
    this.getpd8areference();

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getMolassesRegister(params.id);
        // tslint:disable-next-line: no-string-literal
        this.pd8bDistillationObj['id'] = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.getMolassesRegister();
      }
    });

    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }
  

  getpd8areference(){
    this.pd8bsrv.get8aApprovedlist().subscribe(responseData =>{
      this.pd8referencelist=responseData.data;

    })
  }

  getpd8autopopulatedata(id){
    this.getpd8areference();
    let data = id;
  
    if(data !== "" ){
      let autoObj = this.pd8referencelist.filter(item =>{
        return item.id == data
      })
      this.pd8bDistillationObj.distilledWashQty = autoObj[0].distilledWashQty;
      this.pd8bDistillationObj.finalGravity = autoObj[0].finalGravity;
      // this.pd8bDistillationObj.productionPd8Id = null;

    }else{
      this.pd8bDistillationObj.distilledWashQty = "";

    }

  

  }
  saveData(form, status) {
    let payload = {
      alcoholIndication: this.pd8bDistillationObj.alcoholIndication,
      alcoholPercent: this.pd8bDistillationObj.alcoholPercent,
      alcoholQty: this.pd8bDistillationObj.alcoholQty,
      alcoholStength: this.pd8bDistillationObj.alcoholStength,
      alcoholTemp: this.pd8bDistillationObj.alcoholTemp,
      date: this.pd8bDistillationObj.date,
      isActive: true,
      productionPd8Id: this.pd8bDistillationObj.productionPd8Id,
      receiverNum: this.pd8bDistillationObj.receiverNum,
      status: status
    }
    this.formSubmitted = false;
    if (form.valid === false && status === 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modelservice.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            payload['id'] = parseInt(this.editId);

            this.pd8bsrv.updatepd8bdata(payload).subscribe(responceData => {
              if (responceData['status'] == 's') {
                this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
                sessionStorage.removeItem("molassesregister")
                this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/list']);
                console.log(responceData);
              } else {
                this.alert.showError(responceData['userDisplayMesg'], 'error')
              }
            })
          } else {

            this.pd8bsrv.addpd8data(payload).subscribe(responceData => {
              if (responceData['status'] == 's') {
                this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
                sessionStorage.removeItem("molassesregister")
                this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/list']);
                console.log(responceData);
              } else {
                this.alert.showError(responceData['userDisplayMesg'], 'error')
              }
  
            })
          };
        } else {

        }
      }).catch(err => {
        console.log('\n err...', err);
      });

    }
  }

  getMolassesRegister(id?) {
    if (id) {
      this.pd8bsrv.getpd8bbyid(id).subscribe(responceData => {
        this.pd8bDistillationObj = responceData['data'];
        this.pd8bDistillationObj.date = this.datePipe.transform(responceData.data.date,'yyyy-MM-dd');
      });
    } else {
      this.pd8bDistillationObj = JSON.parse(sessionStorage.getItem('pd8bdistillation'));
      if (this.pd8bDistillationObj) {
        this.pd8bDistillationObj = this.pd8bDistillationObj
      } else {
        this.pd8bDistillationObj = {}
      }
    }
  }

  previewPd8b(form) {
    sessionStorage.setItem('pd8bdistillation', JSON.stringify(this.pd8bDistillationObj));
    this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/preview']);
  }

  backtoHome() {
    sessionStorage.removeItem('pd8bdistillation');
    this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/list']);
  }

}
