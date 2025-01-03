import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{WholesaleConsignmentRecieptService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewconsignmentreceipt',
  templateUrl: './viewconsignmentreceipt.component.html',
  styleUrls: ['./viewconsignmentreceipt.component.scss']
})
export class ViewconsignmentreceiptComponent implements OnInit {
  ConsignmentObj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private WholesaleConsignmentRecieptService: WholesaleConsignmentRecieptService,
    private apiservice:ApiService) {}
    ngOnInit() {
      this.route.params.subscribe(params => {
        if (params.id) {
          this.GetConsigneeById(params.id);
          this.ConsignmentObj.id = params.id;
         
          // this.addedit = 'Edit';
  
        }
      });
      this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
      console.log('router url--->>',this.addedit);
    }
    GetConsigneeById(id) {
      const url = 'WholesaleConsigneeList'+'/'+id
      this.WholesaleConsignmentRecieptService.get(url).then((responceData: any) => {
        this.ConsignmentObj = responceData;
        console.log(this.ConsignmentObj);
      })
    }
}
