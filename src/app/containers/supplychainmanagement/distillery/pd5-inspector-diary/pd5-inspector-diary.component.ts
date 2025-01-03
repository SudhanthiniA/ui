import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd5Service} from '@app/services';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-pd5-inspector-diary',
  templateUrl: './pd5-inspector-diary.component.html',
  styleUrls: ['./pd5-inspector-diary.component.css']
})
export class Pd5InspectorDiaryComponent implements OnInit {

  constructor(private router: Router,
    private distilleryapiService: DistilleryapiService,
    private apiservice:ApiService,private Pd5Service: Pd5Service) { }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  digitallocksList: any;
  selected: any;
  pd5List:any;
  navigateView() {
    this.router.navigate(['/supplychainmanagement/distillery/pd5-InspectorDiary/view']);
  }
  navigateEdit() {
    this.router.navigate(['/supplychainmanagement/distillery/distillery/pd5-InspectorDiary/edit']);
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd5records();
  }


  // refreshTabIns() {
  //   if (this.dtElement.dtInstance) {
  //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //       dtInstance.destroy();
  //       this.dtTrigger.next();
  //     });
  //   } else {
  //     this.dtTrigger.next();
  //   }
  //   return true;
  // }

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

  getPd5records() {
    this.Pd5Service.get("pd5List").then((response:any)=>{
      if(response){
        this.pd5List = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }
}
