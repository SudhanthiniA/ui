import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd20Service} from '@app/services';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-pd20-form',
  templateUrl: './pd20-form.component.html',
  styleUrls: ['./pd20-form.component.scss']
})
export class Pd20FormComponent implements OnInit {

  constructor(
    private router: Router,
    private distilleryapiService: DistilleryapiService,
     private apiservice:ApiService,
     private Pd20Service: Pd20Service
  ) { }
  digitallocksList: any;
  selected: any;
  Pd20list:any;
  pd11searchObj: any = {

  }
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
    this.getPd20records();
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

  getPd20records() {
    this.Pd20Service.get("Pd20LIst").then((response:any)=>{
      if(response){
        this.Pd20list = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
