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
 
  
  ngOnInit() {
    
  }
 
}
