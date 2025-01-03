import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{WholesaleStockOutService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewstockout',
  templateUrl: './viewstockout.component.html',
  styleUrls: ['./viewstockout.component.scss']
})
export class ViewstockoutComponent implements OnInit {
  StockOutObj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private WholesaleStockOutService: WholesaleStockOutService,
    private apiservice:ApiService) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {
          this.GetById(params.id);
          this.StockOutObj.id = params.id;
         
          // this.addedit = 'Edit';
  
        }
      });
      this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
      console.log('router url--->>',this.addedit);
    }
    GetById(id) {
      const url = 'WholesaleStockoutList'+'/'+id
      this.WholesaleStockOutService.get(url).then((responceData: any) => {
        this.StockOutObj = responceData;
        console.log(this.StockOutObj);
      })
    }
}

