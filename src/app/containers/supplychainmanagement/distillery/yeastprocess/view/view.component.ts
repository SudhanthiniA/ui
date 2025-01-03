import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YeastprocessService, PreviewService, DistileryService, TankregistartionService,MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

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
    private yeastprocess: YeastprocessService,
    private MasterapiService: MasterapiService,
    private TankRegistrationService: TankregistartionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.viewid = params.id;
        this.getyeastveesel(this.viewid);
      } else {
        this.getyeastveesel()

      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';

  }

  getotnumber() {
    this.yeastprocess.getotnumber().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumberlist = responceData.data;
      }
    });
  }

  getyeastveesel(data?: any) {
    if (data) {
      let id = '?id=' + data;
      this.yeastprocess.getyeaseldata(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          console.log('data of view------->>>', responceData);
          this.viewobj.otNumber = responceData.data.otProductionPlanEntity.otNumber;
          this.viewobj.noofyeastvessels = responceData.data.otProductionPlanEntity.yeastVesselsCount;
          this.viewobj.molasistype = responceData.data.molassesTankEntity.specification;
          this.viewobj.molassestankname = responceData.data.molassesTankEntity.tankName;
          this.viewobj.molasisquantity = responceData.data.molassesQuantity;
          this.viewobj.qtyoffermentedsugar = responceData.data.fermentedSugarQuantity;
          this.viewobj.status = responceData.data.status;
          this.viewobj.yeastVesselName = responceData.data.yeastVesselName


        }
      });

    } else {
      console.log(this.preview.setData);
      this.viewobj = this.preview.setData;
      if(this.preview.setData.id){
        this.viewid = this.preview.setData.id; 
      }

      if (this.viewobj.otnumber) {
        this.getotProdctionById(this.viewobj.otnumber);
      }
      if (this.viewobj.yeastvesselno) {
        this.getyeastvessalname(this.viewobj.yeastvesselno)

      }
      if (this.viewobj.tankserialno) {
        this.gettankname(this.viewobj.tankserialno)

      }
      
      if (this.viewobj.molassestype) {
        const data = `?id=${this.viewobj.molassestype}`;
        this.MasterapiService.get(`${apiUrls.getGradeById}${data}`).then((responceData: any) => {
          this.viewobj.molasistype = responceData.data ? responceData.data.name : null;
        }).catch((err: any) => {
          console.log('\n err...', err);
        });
      }

    }
  }

  getotProdctionById(id?) {
    this.distileryService.getotProdbyid(id).subscribe(responceData => {
      this.viewobj.otNumber = responceData['data'].otNumber;
    });
  }
  gettankname(id) {
    this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
      this.viewobj.molassestankname = responceData.data?responceData.data.tankName :null;

    }
    )
  }
  getyeastvessalname(id) {
    this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
      this.viewobj.yeastVesselName = responceData.data?responceData.data.tankName :null;

    }
    )
  }
}
