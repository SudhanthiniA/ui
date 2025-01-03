import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleStockOutService,ApiService} from '@app/services';

@Component({
  selector: 'app-stockout',
  templateUrl: './stockout.component.html',
  styleUrls: ['./stockout.component.scss']
})
export class StockoutComponent implements OnInit {
  constructor(private router: Router,
    ) { }
   

  
  ngOnInit() {
    }
  
}
