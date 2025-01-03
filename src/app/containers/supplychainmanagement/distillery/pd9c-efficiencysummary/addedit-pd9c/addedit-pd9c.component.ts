import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { Pd9cefficencyService, DistileryService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addedit-pd9c',
  templateUrl: './addedit-pd9c.component.html',
  styleUrls: ['./addedit-pd9c.component.scss']
})
export class AddeditPd9cComponent implements OnInit {

  pd9cEfficiencyObj: any = {
    referenceno: '',
    referenceNumber: ''
  };
  receiverNo: any;
  addedit: any;
  refno: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  // datepipe: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private pd9csercice: Pd9cefficencyService,
    public datepipe: DatePipe,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getreferenceNo();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getEfficiency(params.id);
        this.pd9cEfficiencyObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.getEfficiency();
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const payload = {
          id: this.editId,
          molassesUsed: this.pd9cEfficiencyObj.molassesUsed,
          alcoholLtrs: this.pd9cEfficiencyObj.plainAlcoholicLtrs, // need clearity ***
          alcoholWashPercent: this.pd9cEfficiencyObj.alcoholInWash,
          fromDate: this.pd9cEfficiencyObj.fromDate,
          toDate: this.pd9cEfficiencyObj.toDate,
          bulkLtrs: this.pd9cEfficiencyObj.plainBulkLtrs,
          distilation_loss: this.pd9cEfficiencyObj.distillationLoss,
          distillationEff: this.pd9cEfficiencyObj.distillationEfficiency,
          fermentationEff: this.pd9cEfficiencyObj.fermentationEfficiency,
          gravityV: this.pd9cEfficiencyObj.gravityFive,
          gravityVI: this.pd9cEfficiencyObj.gravitySix,
          gravityI: this.pd9cEfficiencyObj.gravityOne,
          gravityIV: this.pd9cEfficiencyObj.gravityFour,
          gravityII: this.pd9cEfficiencyObj.gravityTwo,
          gravityIII: this.pd9cEfficiencyObj.gravityThree,
          productionPd9Id: this.pd9cEfficiencyObj.referenceno,
          // productionPd9Id:2,
          absoluteAlcoholLtrs: this.pd9cEfficiencyObj.absoluteAlcoholicLtrs,
          absoluteBulkLtrs: this.pd9cEfficiencyObj.absoluteBulkLtrs,
          overallEff: this.pd9cEfficiencyObj.overallEfficiency,
          recoveryFsQtls: this.pd9cEfficiencyObj.recoveryAlfs,
          recoveryMollassesQtls: this.pd9cEfficiencyObj.recoveryAlmolasses,
          rectifiedAlcoholLtrs: this.pd9cEfficiencyObj.rectifiedAlcoholicLtrs,
          rectifiedBulkLtrs: this.pd9cEfficiencyObj.rectifiedBulkLtrs,
          spentWashAlchohol: this.pd9cEfficiencyObj.spentWashAlcohol,
          spentWashFueselOil: this.pd9cEfficiencyObj.spentWashFuelOil,
          status: status,
          totalFsUnused: this.pd9cEfficiencyObj.fsunused,
          totalLoss: this.pd9cEfficiencyObj.totalLoss,
          spentLessAlcohol: this.pd9cEfficiencyObj.spentlessAlcohol,
          spentLessFuselOil: this.pd9cEfficiencyObj.spentlessFuelOil,
          fermentationLoss: this.pd9cEfficiencyObj.fermentationLoss

        }

        this.pd9csercice.updatepd9cdata(payload).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('pd9cefficiency');
            this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        });
      } else {
        const payload = {
          molassesUsed: this.pd9cEfficiencyObj.molassesUsed,
          alcoholLtrs: this.pd9cEfficiencyObj.plainAlcoholicLtrs, // need clearity ***
          alcoholWashPercent: this.pd9cEfficiencyObj.alcoholInWash,
          fromDate: this.pd9cEfficiencyObj.fromDate,
          toDate: this.pd9cEfficiencyObj.toDate,
          bulkLtrs: this.pd9cEfficiencyObj.plainBulkLtrs,
          distilation_loss: this.pd9cEfficiencyObj.distillationLoss,
          distillationEff: this.pd9cEfficiencyObj.distillationEfficiency,
          fermentationEff: this.pd9cEfficiencyObj.fermentationEfficiency,
          gravityV: this.pd9cEfficiencyObj.gravityFive,
          gravityVI: this.pd9cEfficiencyObj.gravitySix,
          gravityI: this.pd9cEfficiencyObj.gravityOne,
          gravityIV: this.pd9cEfficiencyObj.gravityFour,
          gravityII: this.pd9cEfficiencyObj.gravityTwo,
          gravityIII: this.pd9cEfficiencyObj.gravityThree,
          productionPd9Id: this.pd9cEfficiencyObj.referenceno,
          // productionPd9Id:2,
          absoluteAlcoholLtrs: this.pd9cEfficiencyObj.absoluteAlcoholicLtrs,
          absoluteBulkLtrs: this.pd9cEfficiencyObj.absoluteBulkLtrs,
          overallEff: this.pd9cEfficiencyObj.overallEfficiency,
          recoveryFsQtls: this.pd9cEfficiencyObj.recoveryAlfs,
          recoveryMollassesQtls: this.pd9cEfficiencyObj.recoveryAlmolasses,
          rectifiedAlcoholLtrs: this.pd9cEfficiencyObj.rectifiedAlcoholicLtrs,
          rectifiedBulkLtrs: this.pd9cEfficiencyObj.rectifiedBulkLtrs,
          spentWashAlchohol: this.pd9cEfficiencyObj.spentWashAlcohol,
          spentWashFueselOil: this.pd9cEfficiencyObj.spentWashFuelOil,
          status: status,
          totalFsUnused: this.pd9cEfficiencyObj.fsunused,
          totalLoss: this.pd9cEfficiencyObj.totalLoss,
          spentLessAlcohol: this.pd9cEfficiencyObj.spentlessAlcohol,
          spentLessFuselOil: this.pd9cEfficiencyObj.spentlessFuelOil,
          fermentationLoss: this.pd9cEfficiencyObj.fermentationLoss
        };
        console.log('payload of add ---->>>', payload);

        this.pd9csercice.addpd9cdata(payload).subscribe(responceData => {
          if (responceData['status'] == 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success')
            sessionStorage.removeItem('pd9cefficiency');
            this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/list']);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
          console.log(responceData);
        });
      }
    }
  }

  getEfficiency(id?) {
    if (id) {
      this.pd9csercice.getpd9cbyid(id).subscribe(responceData => {
        this.pd9cEfficiencyObj = responceData['data'];
        this.pd9cEfficiencyObj.plainAlcoholicLtrs = this.pd9cEfficiencyObj.alcoholLtrs;// need clearity ***
        this.pd9cEfficiencyObj.alcoholInWash = this.pd9cEfficiencyObj.alcoholWashPercent;
        this.pd9cEfficiencyObj.fromDate = this.datepipe.transform(this.pd9cEfficiencyObj.fromDate, 'yyyy-MM-ddThh:mm');
        this.pd9cEfficiencyObj.toDate = this.datepipe.transform(this.pd9cEfficiencyObj.toDate, 'yyyy-MM-ddThh:mm');
        this.pd9cEfficiencyObj.plainBulkLtrs = this.pd9cEfficiencyObj.bulkLtrs;
        this.pd9cEfficiencyObj.distillationLoss = this.pd9cEfficiencyObj.distilation_loss;
        this.pd9cEfficiencyObj.distillationEfficiency = this.pd9cEfficiencyObj.distillationEff;
        this.pd9cEfficiencyObj.fermentationEfficiency = this.pd9cEfficiencyObj.fermentationEff;
        this.pd9cEfficiencyObj.gravityFive = this.pd9cEfficiencyObj.gravityV;
        this.pd9cEfficiencyObj.gravitySix = this.pd9cEfficiencyObj.gravityVI;
        this.pd9cEfficiencyObj.gravityOne = this.pd9cEfficiencyObj.gravityI;
        this.pd9cEfficiencyObj.gravityFour = this.pd9cEfficiencyObj.gravityIV;
        this.pd9cEfficiencyObj.gravityTwo = this.pd9cEfficiencyObj.gravityII;
        this.pd9cEfficiencyObj.gravityThree = this.pd9cEfficiencyObj.gravityIII;
        this.pd9cEfficiencyObj.absoluteAlcoholicLtrs = this.pd9cEfficiencyObj.absoluteAlcoholLtrs;
        this.pd9cEfficiencyObj.absoluteBulkLtrs = this.pd9cEfficiencyObj.absoluteBulkLtrs;
        this.pd9cEfficiencyObj.overallEfficiency = this.pd9cEfficiencyObj.overallEff;
        this.pd9cEfficiencyObj.recoveryAlfs = this.pd9cEfficiencyObj.recoveryFsQtls;
        this.pd9cEfficiencyObj.recoveryAlmolasses = this.pd9cEfficiencyObj.recoveryMollassesQtls;
        this.pd9cEfficiencyObj.rectifiedAlcoholicLtrs = this.pd9cEfficiencyObj.rectifiedAlcoholLtrs;
        this.pd9cEfficiencyObj.rectifiedBulkLtrs = this.pd9cEfficiencyObj.rectifiedBulkLtrs;
        this.pd9cEfficiencyObj.spentWashAlcohol = this.pd9cEfficiencyObj.spentWashAlchohol;
        this.pd9cEfficiencyObj.spentWashFuelOil = this.pd9cEfficiencyObj.spentWashFueselOil;
        this.pd9cEfficiencyObj.fsunused = this.pd9cEfficiencyObj.totalFsUnused;
        this.pd9cEfficiencyObj.totalLoss = this.pd9cEfficiencyObj.totalLoss;
        this.pd9cEfficiencyObj.spentlessAlcohol = this.pd9cEfficiencyObj.spentLessAlcohol;
        this.pd9cEfficiencyObj.spentlessFuelOil = this.pd9cEfficiencyObj.spentLessFuselOil;
        this.pd9cEfficiencyObj.fermentationLoss = this.pd9cEfficiencyObj.fermentationLoss;
      });
    } else {
      // this.pd9cEfficiencyObj = JSON.parse(sessionStorage.getItem('pd9cefficiency'));
      // if (this.pd9cEfficiencyObj) {
      //   this.pd9cEfficiencyObj = this.pd9cEfficiencyObj;
      // } else {
      //   this.pd9cEfficiencyObj = {};
      // }
      if (this.distileryService.setPreview) {
        this.pd9cEfficiencyObj = this.distileryService.setPreview
      }
    }
  }

  previewPd9c(form) {
    // console.log('preview data --->>>',this.pd9cEfficiencyObj);
    this.distileryService.setPreview = this.pd9cEfficiencyObj;
    this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/preview']);
  }

  backtoHome() {
    this.distileryService.setPreview = '';
    this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/list']);
  }

  getreferenceNo() {
    this.pd9csercice.getreference().subscribe((response: any) => {
      this.refno = response['data'];
    });
  }
}
