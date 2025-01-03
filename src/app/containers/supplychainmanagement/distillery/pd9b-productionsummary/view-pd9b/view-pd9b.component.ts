import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pd9bproducationService, DistileryService } from '@app/services';
import { AlertService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-pd9b',
  templateUrl: './view-pd9b.component.html',
  styleUrls: ['./view-pd9b.component.scss']
})
export class ViewPd9bComponent implements OnInit {

  pd9bproductionObj: any = {};
  editId: any;
  addedit: any;
  entityType: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pd9bservice: Pd9bproducationService,
    private alert: AlertService,
    private datePipe: DatePipe,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.entityType = localStorage.getItem('EntityType');
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpd9bproduction(params.id);
        this.pd9bproductionObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      } else {
        this.getpd9bproduction();
      }
    });
  }

  getpd9bproduction(id?) {
    if (id) {
      this.pd9bservice.getpd9bbyid(id).subscribe(responceData => {
        this.pd9bproductionObj = responceData['data'];
        console.log(this.pd9bproductionObj);
      });
    } else {
      // this.pd9bproductionObj = JSON.parse(sessionStorage.getItem('pd9bproduction'));
      this.pd9bproductionObj = this.distileryService.setPreview;
      console.log('preview data --->>', this.pd9bproductionObj);

      this.pd9bproductionObj.fromDate = this.datePipe.transform(this.pd9bproductionObj.fromDate, 'yyyy-MM-ddThh:mm');
      this.pd9bproductionObj.toDate = this.datePipe.transform(this.pd9bproductionObj.toDate, 'yyyy-MM-ddThh:mm');
      this.pd9bproductionObj.usedTrsPercent = this.pd9bproductionObj.trsMolasses;
      this.pd9bproductionObj.usedFsPercent = this.pd9bproductionObj.fsMolasses;
      this.pd9bproductionObj.gravityI = this.pd9bproductionObj.gravityOne;
      this.pd9bproductionObj.gravityII = this.pd9bproductionObj.gravityTwo;
      this.pd9bproductionObj.gravityIII = this.pd9bproductionObj.gravityThree;
      this.pd9bproductionObj.gravityIV = this.pd9bproductionObj.gravityFour;
      this.pd9bproductionObj.gravityV = this.pd9bproductionObj.gravityFive;
      this.pd9bproductionObj.gravityVI = this.pd9bproductionObj.gravitySix;
      this.pd9bproductionObj.passedDate = this.datePipe.transform(this.pd9bproductionObj.dateOfPassed, 'yyyy-MM-dd');
      this.pd9bproductionObj.qtlsMolasses = this.pd9bproductionObj.qtlsMolasses;
      this.pd9bproductionObj.receiverNum = this.pd9bproductionObj.receiverNo;
      this.pd9bproductionObj.alcoholWashPercent = this.pd9bproductionObj.alcoholPercentage;
      this.pd9bproductionObj.temperature = this.pd9bproductionObj.tempratureC;
      this.pd9bproductionObj.finalGravity = this.pd9bproductionObj.finalGravity;
      this.pd9bproductionObj.totalWashDistilled = this.pd9bproductionObj.totalWashDistilled;
      this.pd9bproductionObj.dip = this.pd9bproductionObj.dip;
      this.pd9bproductionObj.bulkLtrs = this.pd9bproductionObj.bulkLtrs;
      this.pd9bproductionObj.indication = this.pd9bproductionObj.indication;
      this.pd9bproductionObj.strength = this.pd9bproductionObj.strength;
      this.pd9bproductionObj.alcoholicLtrs = this.pd9bproductionObj.alcoholicLtrs;
      this.pd9bproductionObj.impureSpirit = this.pd9bproductionObj.impureSpirit;
      this.pd9bproductionObj.rectifiedSpirit = this.pd9bproductionObj.rectifiedSpirit;
      this.pd9bproductionObj.qtlsMolasses = this.pd9bproductionObj.alMolasses;
      this.pd9bproductionObj.molassesUsed = this.pd9bproductionObj.molassesUsed;
      this.pd9bproductionObj.referenceno = this.pd9bproductionObj.productionPd9Id;
    }
  }

  userapproval(status) {

    const data = '/' + `${this.editId}` + '/' + `${status}`
    console.log('log of approvel ==>>', data);
    console.log('id of data ===>>>', this.editId);
    this.pd9bservice.approved(data).subscribe((ressponseDate: any) => {
      this.handleResponse(ressponseDate);
    });
  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/pd9/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

}
