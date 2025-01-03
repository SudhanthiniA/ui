import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd18Service} from '@app/services';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-pd18-form',
  templateUrl: './pd18-form.component.html',
  styleUrls: ['./pd18-form.component.scss']
})
export class Pd18FormComponent implements OnInit {
  constructor(private router: Router,
    private distilleryapiService: DistilleryapiService,
    private apiservice:ApiService,
    private Pd18Service: Pd18Service) { }
 digitallocksList: any;
 selected: any;
 Pd18list:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 pd11List: any;
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd18records();
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

  getPd18records() {
    this.Pd18Service.get("Pd18List").then((response:any)=>{
      if(response){
        this.Pd18list = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
