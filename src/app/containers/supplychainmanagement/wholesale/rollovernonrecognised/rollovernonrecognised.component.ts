import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{RollOverNonRecognisedService,ApiService} from '@app/services';

@Component({
  selector: 'app-rollovernonrecognised',
  templateUrl: './rollovernonrecognised.component.html',
  styleUrls: ['./rollovernonrecognised.component.scss']
})
export class RollovernonrecognisedComponent implements OnInit {
  constructor(private router: Router,
    private apiservice:ApiService,
    private RollOverNonRecognisedService: RollOverNonRecognisedService) { }
 rolllist: any;
 selected: any;
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
    this.ListApi();
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

  ListApi() {
    this.RollOverNonRecognisedService.get("WholesaleRolloverList").then((response:any)=>{
      if(response){
        this.rolllist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
