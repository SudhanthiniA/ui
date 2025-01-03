import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MasterapiService, AlertService, Pd9bproducationService, DistileryService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addedit-pd9b',
  templateUrl: './addedit-pd9b.component.html',
  styleUrls: ['./addedit-pd9b.component.scss']
})
export class AddeditPd9bComponent implements OnInit {

  pd9bproductionObj: any = {
    referenceno: '',
    referenceNumber: '',
    receiverNo: ''
  };
  desibleflag = false;
  receiverno: any;
  addedit: any;
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  refno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private masterapiservice: MasterapiService,
    private alert: AlertService,
    private datePipe: DatePipe,
    private pd9bservice: Pd9bproducationService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getreferenceNo();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getRwamaterial(params.id);
        this.pd9bproductionObj.id = params.id;
        this.editId = params.id;
        this.desibleflag= true;
      } else {
        this.getRwamaterial();
      }
    });
    this.geReceiverNo();
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        const payload ={
          id:this.editId,
          alcoholWashPercent: this.pd9bproductionObj.alcoholPercentage,
          alcoholicLtrs: this.pd9bproductionObj.alcoholicLtrs,
          bulkLtrs: this.pd9bproductionObj.bulkLtrs,
          dip: this.pd9bproductionObj.dip,
          finalGravity: this.pd9bproductionObj.finalGravity,
          fromDate: this.pd9bproductionObj.fromDate,
          gravityI: this.pd9bproductionObj.gravityOne,
          gravityII: this.pd9bproductionObj.gravityTwo,
          gravityIII: this.pd9bproductionObj.gravityThree,
          gravityIV: this.pd9bproductionObj.gravityFour,
          gravityV: this.pd9bproductionObj.gravityFive,
          gravityVI: this.pd9bproductionObj.gravitySix,
          impureSpirit: this.pd9bproductionObj.impureSpirit,
          indication: this.pd9bproductionObj.indication,
          molassesUsed: this.pd9bproductionObj.molassesUsed,
          passedDate: this.pd9bproductionObj.dateOfPassed,
          productionPd9Id:this.pd9bproductionObj.referenceno,
          qtlsMolasses:this.pd9bproductionObj.alMolasses,
          receiverNum: this.pd9bproductionObj.receiverNo,
          rectifiedSpirit: this.pd9bproductionObj.rectifiedSpirit,
          status: status,
          strength:this.pd9bproductionObj.strength,
          temperature: this.pd9bproductionObj.tempratureC,
          toDate: this.pd9bproductionObj.toDate,
          totalWashDistilled: this.pd9bproductionObj.totalWashDistilled,
          usedFsPercent: this.pd9bproductionObj.fsMolasses,
          usedTrsPercent: this.pd9bproductionObj.molassesUsed,
          trsMolasses: this.pd9bproductionObj.trsMolasses
        };
        // payload['id']=this.editId
        // const url = apiUrls.PD9bProductionSumUpdate
        this.pd9bservice.updatepd9bdata(payload).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('formdata')
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        const payload ={
          alcoholWashPercent: this.pd9bproductionObj.alcoholPercentage,
          alcoholicLtrs: this.pd9bproductionObj.alcoholicLtrs,
          bulkLtrs: this.pd9bproductionObj.bulkLtrs,
          dip: this.pd9bproductionObj.dip,
          finalGravity: this.pd9bproductionObj.finalGravity,
          fromDate: this.pd9bproductionObj.fromDate,
          gravityI: this.pd9bproductionObj.gravityOne,
          gravityII: this.pd9bproductionObj.gravityTwo,
          gravityIII: this.pd9bproductionObj.gravityThree,
          gravityIV: this.pd9bproductionObj.gravityFour,
          gravityV: this.pd9bproductionObj.gravityFive,
          gravityVI: this.pd9bproductionObj.gravitySix,
          impureSpirit: this.pd9bproductionObj.impureSpirit,
          indication: this.pd9bproductionObj.indication,
          molassesUsed: this.pd9bproductionObj.molassesUsed,
          passedDate: this.pd9bproductionObj.dateOfPassed,
          productionPd9Id:this.pd9bproductionObj.referenceno,
          qtlsMolasses:this.pd9bproductionObj.alMolasses,
          receiverNum: this.pd9bproductionObj.receiverNo,
          rectifiedSpirit: this.pd9bproductionObj.rectifiedSpirit,
          status: status,
          strength:this.pd9bproductionObj.strength,
          temperature: this.pd9bproductionObj.tempratureC,
          toDate: this.pd9bproductionObj.toDate,
          totalWashDistilled: this.pd9bproductionObj.totalWashDistilled,
          usedFsPercent: this.pd9bproductionObj.fsMolasses,
          usedTrsPercent: this.pd9bproductionObj.molassesUsed,
          trsMolasses:this.pd9bproductionObj.trsMolasses
        }
        this.pd9bservice.addpd9bdata(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            sessionStorage.removeItem('formdata');
            console.log(responceData);
            this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      }
    }
  }

  // getRwamaterial(id) {
  //   const url = apiUrls.PD9bProductionSumGetbyId + id;
  //   this.pd9bservice.getpd9bbyid(id).subscribe(responceData => {
  //     this.pd9bproductionObj = responceData['data'];
  //     console.log( this.pd9bproductionObj);
  //   });
  // }
  getRwamaterial(id?) {
    if (id) {
      this.pd9bservice.getpd9bbyid(id).subscribe(responceData => {
        // this.pd9bproductionObj = responceData['data'];
        this.pd9bproductionObj.fromDate = this.datePipe.transform(responceData['data'].fromDate, 'yyyy-MM-ddThh:mm');
        this.pd9bproductionObj.toDate = this.datePipe.transform( responceData['data'].toDate, 'yyyy-MM-ddThh:mm');
        this.pd9bproductionObj.trsMolasses = responceData['data'].usedTrsPercent;
        this.pd9bproductionObj.fsMolasses = responceData['data'].usedFsPercent;
        this.pd9bproductionObj.gravityOne = responceData['data'].gravityI;
        this.pd9bproductionObj.gravityTwo = responceData['data'].gravityII;
        this.pd9bproductionObj.gravityThree = responceData['data'].gravityIII;
        this.pd9bproductionObj.gravityFour = responceData['data'].gravityIV;
        this.pd9bproductionObj.gravityFive = responceData['data'].gravityV;
        this.pd9bproductionObj.referenceNumber = responceData['data'].referneceNumber;
        this.pd9bproductionObj.gravitySix = responceData['data'].gravityVI;
        this.pd9bproductionObj.dateOfPassed = this.datePipe.transform(responceData['data'].passedDate, 'yyyy-MM-dd');
        this.pd9bproductionObj.alMolasses = responceData['data'].qtlsMolasses;
        this.pd9bproductionObj.receiverNo = responceData['data'].receiverNum;
        this.pd9bproductionObj.alcoholPercentage = responceData['data'].alcoholWashPercent;
        this.pd9bproductionObj.tempratureC = responceData['data'].temperature;
        this.pd9bproductionObj.finalGravity = responceData['data'].finalGravity;
        this.pd9bproductionObj.totalWashDistilled = responceData['data'].totalWashDistilled;
        this.pd9bproductionObj.dip = responceData['data'].dip;
        this.pd9bproductionObj.bulkLtrs = responceData['data'].bulkLtrs;
        this.pd9bproductionObj.indication = responceData['data'].indication;
        this.pd9bproductionObj.strength = responceData['data'].strength;
        this.pd9bproductionObj.alcoholicLtrs = responceData['data'].alcoholicLtrs;
        this.pd9bproductionObj.impureSpirit = responceData['data'].impureSpirit;
        this.pd9bproductionObj.rectifiedSpirit = responceData['data'].rectifiedSpirit;
        this.pd9bproductionObj.alMolasses = responceData['data'].qtlsMolasses;
        this.pd9bproductionObj.molassesUsed = responceData['data'].molassesUsed;
        this.pd9bproductionObj.referenceno = responceData['data'].productionPd9Id;
      });
    } else {
      if (this.distileryService.setPreview){
        this.pd9bproductionObj = this.distileryService.setPreview;
      }
    }
  }

  previewPd9b(form) {
    console.log('pd9b payload ---->>',this.pd9bproductionObj);
    this.distileryService.setPreview = this.pd9bproductionObj;
    console.log('prevew data -->>',this.pd9bproductionObj);
    this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/preview']);
  }

  backtoHome() {
    this.distileryService.setPreview =''
    this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/list']);
  }

  geReceiverNo() {
    this.masterapiservice.get(apiUrls.tanktype).then(responceData => {
      console.log(responceData);
      this.receiverno = responceData['data'];
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getreferenceNo(){
    this.pd9bservice.getreference().subscribe((response:any)=>{
      this.refno = response['data'];
    });
  }

}
