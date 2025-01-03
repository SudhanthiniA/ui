import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviewService, DistileryService, TankregistartionService } from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  viewid: any;
  viewobj: any = {};
  addedit: any;
  otnumberlist: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private preview: PreviewService,
    private distileryService: DistileryService,
    private TankRegistrationService: TankregistartionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.viewid = params.id;
        this.getsentostillById(this.viewid);
      } else {
        this.getsentostillById()

      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';

  }



  getsentostillById(data?: any) {
    if (data) {
      this.distileryService.getsenttostillbyid(data).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          console.log('data of view------->>>', responceData);
          this.viewobj.otNumber = responceData.data.otProductionPlan.otNumber;
          this.viewobj.temperature = responceData.data.temperature;
          this.viewobj.bulkLitres = responceData.data.bulkLitres;
          this.viewobj.indication = responceData.data.indication;
          this.viewobj.strength = responceData.data.strength;
          this.viewobj.dip = responceData.data.dip;
          this.viewobj.completionDateTime = responceData.data.completionDateTime;
          this.viewobj.finalGravity = responceData.data.otFermentation.finalGravity;
          this.viewobj.washQty = responceData.data.otFermentation.finalWashQty;
          this.viewobj.fermentvessalname =responceData.data.otFermentation.fermentationTank.tankName;
          this.viewobj.otstartdate = responceData.data.otProductionPlan.estimatedStartDate



        }
      });

    } else {
      console.log(this.preview.setData);
      this.viewobj = this.preview.setData;
      if(this.preview.setData.id){
        this.viewid = this.preview.setData.id; 
      }
      if (this.viewobj.otProductionPlanId) {
        this.getotProdctionById(this.viewobj.otProductionPlanId);
      }
      if (this.viewobj.otFermentationId) {
        // this.getfermentvessalname(this.viewobj.otFermentationId)

      }

    }
  }

  getotProdctionById(id?) {
    this.distileryService.getotProdbyid(id).subscribe(responceData => {
      this.viewobj.otNumber = responceData['data'].otNumber;
    });
  }

  getfermentvessalname(id) {
    this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
      this.viewobj.fermentvessalname = responceData.data?responceData.data.tankName :null;

    }
    )
  }

}
