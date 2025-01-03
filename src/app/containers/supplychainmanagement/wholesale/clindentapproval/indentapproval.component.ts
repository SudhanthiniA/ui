import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{IndentAcceptanceService,ApiService} from '@app/services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { IndentAcceptance } from '@app/config/wholesale/indentacceptance.config';
import { Accepted } from '@app/models/wholesale/indentAcceptance';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-indentapproval',
  templateUrl: './indentapproval.component.html',
  styleUrls: ['./indentapproval.component.scss']
})
export class IndentapprovalComponent implements OnInit {
  constructor(
    ) { }
 
  
  ngOnInit() {
    
   
  }
  
}
