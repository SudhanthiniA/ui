import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService,Pd11IssuesService } from '@app/services';

@Component({
  selector: 'app-pd11-register-of-issuespirit',
  templateUrl: './pd11-register-of-issuespirit.component.html',
  styleUrls: ['./pd11-register-of-issuespirit.component.css']
})
export class Pd11RegisterOfIssuespiritComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private distilleryapiService: DistilleryapiService,private pd11service: Pd11IssuesService) { }
  digitallocksList: any;
  selected: any;
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
    this.getPd11records();
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
    this.getPd11records();
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

  getPd11records() {
    this.pd11service.getPd11issues().subscribe((responceData: any) => {
      this.pd11List = responceData.data;
     this.refreshTabIns();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
