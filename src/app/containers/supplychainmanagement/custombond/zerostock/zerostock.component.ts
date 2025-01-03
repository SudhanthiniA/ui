import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleZeroStockService,ApiService} from '@app/services';

@Component({
  selector: 'app-zerostock',
  templateUrl: './zerostock.component.html',
  styleUrls: ['./zerostock.component.scss']
})
export class ZerostockComponent implements OnInit {
  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesaleZeroStockService: WholesaleZeroStockService) { }
    

  
  ngOnInit() {
    
  }
 
}
