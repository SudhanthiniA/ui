import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DistileryService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewprintqrcodes',
  templateUrl: './viewprintqrcodes.component.html',
  styleUrls: ['./viewprintqrcodes.component.scss']
})
export class ViewprintqrcodesComponent implements OnInit {

  reqObj: any;
  viewid: any;
  Obj: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distService: DistileryService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.Id) {
        this.viewid = param.Id;
         this.setData(this.viewid);
      
      }
      else {
        this.setData(this.viewid);
      }
    });
  }
 
  
  setData(id) {
    this.distService.getQrById(id).subscribe((responceData: any) => {
      let data = responceData.content 
       this.reqObj = responceData.content;
       this.Obj = responceData.content.qrcodeBarcodePrint;
       debugger;
      this.reqObj.bottlingPlan = data.bottlingProductionPlan ? data.bottlingProductionPlan.applicationNumber : null;
       this.reqObj.name = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandName : null;
         this.reqObj.type = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.liquorTypeValue : null;
       this.reqObj.subType = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails? data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.subLiquorTypeValue : null;
       this.reqObj.mapped = data.bottlingProductionPlan.bottlingPlanDetails? data.bottlingProductionPlan.bottlingPlanDetails.bottlingType : null;
       this.reqObj.numberBottles =data.bottlingProductionPlan.bottlingPlanDetails? data.bottlingProductionPlan.bottlingPlanDetails.numberOfBottles : null;
       this.reqObj.cases =data.bottlingProductionPlan.bottlingPlanDetails? data.bottlingProductionPlan.bottlingPlanDetails.numberOfCases : null;
       this.reqObj.size =data.bottlingProductionPlan.bottlingPlanDetails.labelDetails? data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.packageSizeName : null;
       this.reqObj.status = data.bottlingProductionPlan ? data.bottlingProductionPlan.status : null;
       this.reqObj.barcode = data.printedBarCodes;
       this.reqObj.balancesBarcode = data.balanceBarCodes;
       this.reqObj.date =this.datePipe.transform(data.bottlingProductionPlan.bottlingPlanDetails.requestDate,'yyyy-MM-dd');
       this.reqObj.printerName = data.qrcodeBarcodePrint[0].printerName
      
      console.log(responceData);
    });
  }
 
}
