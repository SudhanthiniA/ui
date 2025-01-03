import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pd9cefficencyService, DistileryService} from '@app/services';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-view-pd9c',
  templateUrl: './view-pd9c.component.html',
  styleUrls: ['./view-pd9c.component.scss']
})
export class ViewPd9cComponent implements OnInit {

  pd9cEfficiencyObj: any = {};
  editId: any;
  addedit: any;
  entityType: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pd9csercice: Pd9cefficencyService,
    private alert: AlertService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpd9cEfficiency(params.id);
        this.pd9cEfficiencyObj.id = params.id;
        this.editId = params.id;
      } else {
        this.getpd9cEfficiency();
      }
    });
  }

  getpd9cEfficiency(id?) {
    if(id){
      this.pd9csercice.getpd9cbyid(id).subscribe(responceData => {
        this.pd9cEfficiencyObj = responceData['data'];
        this.pd9cEfficiencyObj.plainAlcoholicLtrs = responceData['data'].alcoholLtrs;
        console.log(this.pd9cEfficiencyObj);
      });
    } else {
      this.pd9cEfficiencyObj = this.distileryService.setPreview;
      this.pd9cEfficiencyObj.gravityI = this.pd9cEfficiencyObj.gravityOne;
      this.pd9cEfficiencyObj.gravityII = this.pd9cEfficiencyObj.gravityTwo;
      this.pd9cEfficiencyObj.gravityIII = this.pd9cEfficiencyObj.gravityThree;
      this.pd9cEfficiencyObj.gravityIV = this.pd9cEfficiencyObj.gravityFour;
      this.pd9cEfficiencyObj.gravityV = this.pd9cEfficiencyObj.gravityFive;
      this.pd9cEfficiencyObj.gravityVI = this.pd9cEfficiencyObj.gravitySix;
      this.pd9cEfficiencyObj.alcoholWashPercent = this.pd9cEfficiencyObj.alcoholInWash;
      this.pd9cEfficiencyObj.totalFsUnused = this.pd9cEfficiencyObj.fsunused;
      this.pd9cEfficiencyObj.fsMolasses = this.pd9cEfficiencyObj.molassesUsed;
      this.pd9cEfficiencyObj.alcoholLtrs = this.pd9cEfficiencyObj.rectifiedAlcoholicLtrs;
      this.pd9cEfficiencyObj.absoluteAlcoholLtrs = this.pd9cEfficiencyObj.absoluteAlcoholicLtrs;
      this.pd9cEfficiencyObj.bulkLtrs = this.pd9cEfficiencyObj.plainBulkLtrs;
      this.pd9cEfficiencyObj.fermentationEff = this.pd9cEfficiencyObj.fermentationEfficiency;
      this.pd9cEfficiencyObj.overallEff = this.pd9cEfficiencyObj.overallEfficiency;
      this.pd9cEfficiencyObj.distillationEff = this.pd9cEfficiencyObj.distillationEfficiency;
      this.pd9cEfficiencyObj.recoveryMollassesQtls = this.pd9cEfficiencyObj.recoveryAlmolasses;
      this.pd9cEfficiencyObj.recoveryFsQtls = this.pd9cEfficiencyObj.recoveryAlfs;
      this.pd9cEfficiencyObj.distilation_loss = this.pd9cEfficiencyObj.distillationLoss;
      this.pd9cEfficiencyObj.spentLessAlcohol = this.pd9cEfficiencyObj.spentWashAlcohol;
      this.pd9cEfficiencyObj.spentLessFuselOil = this.pd9cEfficiencyObj.spentWashFuelOil;
      this.pd9cEfficiencyObj.spentWashAlchohol = this.pd9cEfficiencyObj.spentlessAlcohol;
      this.pd9cEfficiencyObj.spentWashFueselOil = this.pd9cEfficiencyObj.spentlessFuelOil;
    }
  }

  userapproval(status){

    const data = '/'+ `${this.editId}` + '/' + `${status}`
    console.log('log of approvel ==>>',data);
    console.log('id of data ===>>>',this.editId);

    this.pd9csercice.approved(data).subscribe( ( ressponseDate: any ) => {
      this.handleResponse(ressponseDate);
    });

  }

  handleResponse(responceData: any) {
    if (responceData.status === 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

}
