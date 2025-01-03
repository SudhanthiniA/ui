import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{RollOverStockService,ApiService} from '@app/services';

@Component({
  selector: 'app-samplerequest',
  templateUrl: './samplerequest.component.html',
  styleUrls: ['./samplerequest.component.scss']
})
export class SamplerequestComponent implements OnInit {
  constructor(private router: Router,
    private apiservice:ApiService,
    private RollOverStockService: RollOverStockService) { }
 digitallocksList: any;
 selected: any;
 Pd18list:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 RollOverStocklist: any;
  

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getRollOverStockrequestById();
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

  getRollOverStockrequestById() {
    this.RollOverStockService.get("RollOverStockList").then((response:any)=>{
      if(response){
        this.RollOverStocklist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
