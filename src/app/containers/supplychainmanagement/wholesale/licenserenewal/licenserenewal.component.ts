import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { WholesaleLicenseRenewalService } from '@app/services/wholesale';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-licenserenewal',
  templateUrl: './licenserenewal.component.html',
  styleUrls: ['./licenserenewal.component.css']
})
export class LicenserenewalComponent implements OnInit {

  constructor(
    private router: Router,
    private apiservice:ApiService,
    private wholesaleLicenseRenewalService: WholesaleLicenseRenewalService
  ) { }
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
    this.LicenseREnewalList();
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

 LicenseREnewalList() {
    this.wholesaleLicenseRenewalService.getAlllicense().subscribe(
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
    this.router.navigate(['/supplychainmanagement/wholesale/licenserenewal/view' , i]);
  }
  edit(i){
    this.router.navigate(['/supplychainmanagement/wholesale/licenserenewal/add' , i]);
  }

}
