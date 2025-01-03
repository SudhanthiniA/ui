import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{WholesaleStockinService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewstockin',
  templateUrl: './viewstockin.component.html',
  styleUrls: ['./viewstockin.component.scss']
})
export class ViewstockinComponent implements OnInit {
  StockInObj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private WholesaleStockinService: WholesaleStockinService,
    private apiservice:ApiService) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {
          this.GetIndentById(params.id);
          this.StockInObj.id = params.id;
         
          // this.addedit = 'Edit';
  
        }
      });
      this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
      console.log('router url--->>',this.addedit);
    }
    GetIndentById(id) {
      const url = 'WholesaleStockInList'+'/'+id
      this.WholesaleStockinService.get(url).then((responceData: any) => {
        this.StockInObj = responceData;
        console.log(this.StockInObj);
      })
    }
}

