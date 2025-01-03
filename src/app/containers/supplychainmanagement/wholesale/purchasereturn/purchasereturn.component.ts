import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesalePurchaseReturnService,ApiService} from '@app/services';

@Component({
  selector: 'app-purchasereturn',
  templateUrl: './purchasereturn.component.html',
  styleUrls: ['./purchasereturn.component.scss']
})
export class PurchasereturnComponent implements OnInit {
  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesalePurchaseReturnService: WholesalePurchaseReturnService) { }
    purchasereturnlist: any;
 selected: any;
 
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();

  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.PurchaseList();
  }
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }

 PurchaseList() {
    this.WholesalePurchaseReturnService.get("WholesalePurchaseReturn").then((response:any)=>{
      if(response){
        this.purchasereturnlist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
