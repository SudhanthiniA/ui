import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd17Service } from '@app/services';
import {ApiService} from '@app/services'





@Component({
  selector: 'app-pd17-registerof-bonds',
  templateUrl: './pd17-registerof-bonds.component.html',
  styleUrls: ['./pd17-registerof-bonds.component.scss']
})
export class Pd17RegisterofBondsComponent implements OnInit {

  constructor(private apiservice:ApiService) { }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  pd17List: any;

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd17records();
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

  getPd17records() {
    this.apiservice.get("Pd17list").then((response:any)=>{
      this.pd17List = response;
     this.refreshTabIns();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
