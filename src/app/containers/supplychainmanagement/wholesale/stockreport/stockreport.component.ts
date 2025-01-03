import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{StockregisterReportService} from '@app/services'

@Component({
  selector: 'app-stockreport',
  templateUrl: './stockreport.component.html',
  styleUrls: ['./stockreport.component.css']
})
export class StockreportComponent implements OnInit {
  constructor(private router: Router,
    // private apiservice:ApiService,
    private stockregisterReportService: StockregisterReportService) { }
 digitallocksList: any;
 selected: any;
 Pd18list:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 StockinReportList: any;
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getBreakageEntryrequestById();
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

  getBreakageEntryrequestById() {
    this.stockregisterReportService.get("WholesaleStockReport").then((response:any)=>{
      if(response){
        this.StockinReportList = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
