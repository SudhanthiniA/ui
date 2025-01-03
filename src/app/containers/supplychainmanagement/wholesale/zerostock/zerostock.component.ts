import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleZeroStockService,ApiService} from '@app/services';

@Component({
  selector: 'app-zerostock',
  templateUrl: './zerostock.component.html',
  styleUrls: ['./zerostock.component.scss']
})
export class ZerostockComponent implements OnInit {
  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesaleZeroStockService: WholesaleZeroStockService) { }
    zerostocklist: any;
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
    this.ZeroStockList();
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

 ZeroStockList() {
    this.WholesaleZeroStockService.get("WholesaleZeroStockList").then((response:any)=>{
      if(response){
        this.zerostocklist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
