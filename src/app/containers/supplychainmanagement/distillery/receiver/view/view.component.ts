import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { 
  AlertService, 
  DistileryService, 
  PreviewService
 
} from '@app/services';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  viewid:any
  viewtabledata=[];
  addedit:any

  viewobj={
    status:'',
    recivernumber:'',
    Otnumber:'',
    OTstartdate:'',
    spiritName:''

  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private distileryService: DistileryService,
    private previews: PreviewService,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.viewid = params.id;
        this.getviewdata(this.viewid)
      }else{
        this.getviewdata()
      }
    });

    this.addedit = this.router.url.includes('preview') === true ? 'preview' : 'view';

  }


  getviewdata(id?){
    let viewid ='?id='+id;
   this.distileryService.getrecverviewdata(viewid).subscribe((responceData: any) => {
     if (responceData.status === 's') {
      this.viewtabledata = responceData.data.details;

      this.viewobj.status = responceData.data.status;
      this.viewobj.Otnumber = responceData.data.otNumber;
      this.viewobj.OTstartdate = responceData.data.otStartDate;
      this.viewobj.recivernumber = responceData.data.referenceNumber;
      this.viewobj.spiritName = responceData.data.spiritName;
     } else {
      let getpreviewdata = this.previews.setData;
     let previewdata =getpreviewdata.viewtabledata.map((data)=>{       
       return  {
          "otFermentation":data.fermentationrefno,
          "finalWashQty":data.fermentationofwash,
          "initialGravity":data.Inistialgravity,
          "finalGravity":data.finalgravity,
          "washAlcoholPercentage":data.washAlcoholPercentage,
          "spiritQty":data.spiritQty,
          "strength":data.strength
        }
       
      })
      this.viewtabledata = previewdata; 
      this.viewobj.Otnumber = getpreviewdata.Otnumber;
      this.viewobj.OTstartdate =getpreviewdata.OTstartdate;
      this.viewobj.recivernumber = getpreviewdata.recivernumber;
      this.viewobj.spiritName = getpreviewdata.spiritName;
     
      
     }
   });
  }
}
