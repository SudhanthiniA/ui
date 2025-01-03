import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{WholesalePurchaseReturnService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewpurchasereturn',
  templateUrl: './viewpurchasereturn.component.html',
  styleUrls: ['./viewpurchasereturn.component.scss']
})
export class ViewpurchasereturnComponent implements OnInit {
  PurchaseReturnObj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private WholesalePurchaseReturnService: WholesalePurchaseReturnService,
    private apiservice:ApiService) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {
          this.GetById(params.id);
          this.PurchaseReturnObj.id = params.id;
         
          // this.addedit = 'Edit';
  
        }
      });
      this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
      console.log('router url--->>',this.addedit);
    }
    GetById(id) {
      const url = 'WholesalePurchaseReturn'+'/'+id
      this.WholesalePurchaseReturnService.get(url).then((responceData: any) => {
        this.PurchaseReturnObj = responceData;
        console.log(this.PurchaseReturnObj);
      })
    }
}

