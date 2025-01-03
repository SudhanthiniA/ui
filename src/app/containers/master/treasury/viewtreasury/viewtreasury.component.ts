import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TreasuryService } from '@app/services/masters/treasury.service';

@Component({
    selector: 'app-viewtreasury',
    templateUrl: './viewtreasury.component.html',
    styleUrls: ['./viewtreasury.component.scss']
  })
  export class ViewTreasuryComponent implements OnInit {
  
    treasuryList: Array<any> = [];
    treasuryObj: any = {};
    viewId: any;
    date: any;
    isModified: any;

   constructor(
     private route: ActivatedRoute,
    private service: TreasuryService){}

   ngOnInit(){
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
   }

   setData(id) {
    this.service.getTreasuryById(id)
      .subscribe((resp: any) => {
        this.treasuryObj = resp.data;
        if (resp.data.active) {
          this.treasuryObj.active = 'Active';
        } else {
          this.treasuryObj.active = 'InActive';
        }
      });
  }
  }