import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BreakageEntryNewService, ApiService } from '@app/services';
import { BreakageEntry } from '@app/config/wholesale/breakageEntry.config';
import { breakgeEntry } from '@app/models/wholesale/breakageEntry';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-breakageentry',
  templateUrl: './breakageentry.component.html',
  styleUrls: ['./breakageentry.component.scss']
})
export class BreakageentryComponent implements OnInit {
  constructor(private router: Router,
    private apiservice: ApiService,
    private breakageServices: BreakageEntryNewService) { }
  

  ngOnInit() {

    
  }

  
}
