import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleConsignmentRecieptService,ApiService} from '@app/services';
@Component({
  selector: 'app-consignmentreceipt',
  templateUrl: './consignmentreceipt.component.html',
  styleUrls: ['./consignmentreceipt.component.scss']
})
export class ConsignmentreceiptComponent implements OnInit {

  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesaleConsignmentRecieptService: WholesaleConsignmentRecieptService) { }
 digitallocksList: any;
 selected: any;
 Indentlist:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 Consignmentlist: any;
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.ConsignmentRecieptList();
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

  ConsignmentRecieptList() {
    this.WholesaleConsignmentRecieptService.get("WholesaleConsigneeList").then((response:any)=>{
      if(response){
        this.Consignmentlist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
