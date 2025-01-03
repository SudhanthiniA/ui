import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { ReturnWorklistService } from '@app/services/wholesale/return-worklist.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-returnworklist',
  templateUrl: './returnworklist.component.html',
  styleUrls: ['./returnworklist.component.css']
})
export class ReturnworklistComponent implements OnInit {
  constructor(
    private router: Router,
    private apiservice:ApiService,
    private returnlist: ReturnWorklistService) { }
    listvalue: any;
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
    this.PurchaseList();
    sessionStorage.removeItem('formdata');
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

 PurchaseList() {
    this.returnlist.getAllretrn().subscribe(
      (responceData) => {
      if(responceData){
        this.listvalue = responceData;
        this.refreshTabIns();
        console.log(this.listvalue);
        
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  view(i){
    this.router.navigate(['/supplychainmanagement/wholesale/returnworklist/view' , i]);
  }
  edit(i){
    this.router.navigate(['/supplychainmanagement/wholesale/returnworklist/add' , i]);
  }
}