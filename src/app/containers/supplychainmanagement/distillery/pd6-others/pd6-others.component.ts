import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd11IssuesService } from '@app/services';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-pd6-others',
  templateUrl: './pd6-others.component.html',
  styleUrls: ['./pd6-others.component.scss']
})
export class Pd6OthersComponent implements OnInit,OnDestroy {

  constructor(private router: Router,
     private distilleryapiService: DistilleryapiService,
     private apiservice:ApiService,
     private pd11service: Pd11IssuesService) { }
  digitallocksList: any;
  selected: any;
  Pd6list:any;
  pd11searchObj: any = {

  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  pd11List: any;
  navigateView() {
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/view']);
  }
  navigateEdit() {
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/edit']);
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd6records();
  }

  searchapi() {
    const requestParam = {
      filters: {
        issuedPassNumber: this.pd11searchObj.issuedPassNumber ? this.pd11searchObj.issuedPassNumber : null,
        consignerName: this.pd11searchObj.consignerName ? this.pd11searchObj.consignerName : null,
       
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distilleryapiService.post('Allotmentrequest/lazySearch', requestParam).then((responceData: any) => {
      this.digitallocksList = responceData.data.contents;
      this.refreshTabIns();
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  resetKey() {
    this.pd11searchObj = {
      issuedPassNumber: '',
      consignerName: '',
    };
    this.getPd6records();
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

  getPd6records() {
    this.apiservice.get("Pd6list").then((response:any)=>{
      if(response){
        this.Pd6list = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
