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
 

  
  ngOnInit() {
   }

 
}