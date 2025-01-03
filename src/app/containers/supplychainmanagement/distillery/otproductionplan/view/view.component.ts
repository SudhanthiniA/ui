import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DistileryService, PreviewService } from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  otProdctionObj: any = {};
  formSubmitted = false;
  stockindetails: any[] = [];
  otrawmetireldetails: any = [];
  usagaeoftanks: any[] = [];
  usageoftankobj: any;
  addedit: any;
  viewid:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService,
    private previewservice: PreviewService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getotProdctionById(params.id);
        this.viewid = parseInt(params.id);
        this.otProdctionObj.id = params.id;
      } else {
        this.getotProdctionById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getotProdctionById(id?) {
    if (id) {
      this.distileryService.getotProdbyid(id).subscribe(responceData => {
        this.otProdctionObj = responceData['data'];
        let rawmetireldetails = responceData['data'].otRawMaterialDetailsList;
        this.otrawmetireldetails = rawmetireldetails.map(item => {
          return {
            rawmaterialTypeId: item.rawMaterial.name,
            tankRegId: item.tankRegistration.tankName,
            estimatedQuantity: item.estimatedQuantity

          }

        })

        this.usagaeoftanks = responceData['data'].otTankDetailsList;

        this.usageoftankobj = this.usagaeoftanks.map(e => e.tankName).join(', ')
        // this.stockindetails =responceData.data.stockInDetailList;
      });
    } else {
      // this.otProdctionObj = JSON.parse(sessionStorage.getItem('formdata'));
      // console.log('form data ==>>',JSON.parse(sessionStorage.getItem('formdata')))
      let getpreviewdata = this.previewservice.setData;

      let rawmetireldetails = getpreviewdata.otrawmetireldetails;
      this.otrawmetireldetails = rawmetireldetails.map(item => {
        return {
          rawmaterialTypeId: item.rawmaterialTypeId.name,
          tankRegId: item.tankRegId.name,
          estimatedQuantity: item.estimatedQuantity
        }

      })


      this.usageoftankobj = getpreviewdata.usageoftanks.map(e => e.tankName).join(', ');
      this.otProdctionObj.planDate = getpreviewdata.date;
      this.otProdctionObj.otNumber = getpreviewdata.otnumber;
      this.otProdctionObj.estimatedStartDate = getpreviewdata.productionstartdate
      this.otProdctionObj.yeastVesselsCount = getpreviewdata.noofyeastvissels
      this.otProdctionObj.fermenterCount = getpreviewdata.fermenterFillingCount
      this.otProdctionObj.preFermenterCount = getpreviewdata.noofpreferment
      this.otProdctionObj.receiverCount = getpreviewdata.noofrecivers


      console.log('getpreviewdata -->>', getpreviewdata);


    }
  }

}
