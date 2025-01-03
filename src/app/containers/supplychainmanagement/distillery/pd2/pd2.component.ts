import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd2Service} from '@app/services';
import {ApiService} from '@app/services'
@Component({
  selector: 'app-pd2',
  templateUrl: './pd2.component.html',
  styleUrls: ['./pd2.component.scss']
})
export class Pd2Component implements OnInit {
  constructor(private router: Router,
    private distilleryapiService: DistilleryapiService,
    private apiservice:ApiService,
    private Pd2Service: Pd2Service) { }
 digitallocksList: any;
 selected: any;
 Pd2list:any;
 pd11searchObj: any = {

 }
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 pd11List: any;
 navigateView() {
   this.router.navigate(['/supplychainmanagement/distillery/pd2/view']);
 }
 navigateEdit() {
   this.router.navigate(['/supplychainmanagement/distillery/distillery/pd2/edit']);
 }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd2records();
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

  getPd2records() {
    this.Pd2Service.get("Pd2List").then((response:any)=>{
      if(response){
        this.Pd2list = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
