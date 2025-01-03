import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleDispatchReportService,WholesaleDispatchService,WholesaleIndentRequestService} from '@app/services'
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { DispatchConfig } from '@app/config/wholesale/dispatch-config'
import { DispatchReport } from '@app/models/wholesale/dispatchReport';
@Component({
  selector: 'app-dispatchreport',
  templateUrl: './dispatchreport.component.html',
  styleUrls: ['./dispatchreport.component.css']
})
export class DispatchreportComponent implements OnInit {
  constructor(private router: Router,  private dispatchService: WholesaleDispatchService,
    // private apiservice:ApiService,
    ) { }
  ngOnInit() {
  
  }
  

  
}
