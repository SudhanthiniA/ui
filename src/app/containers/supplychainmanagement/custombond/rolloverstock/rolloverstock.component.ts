import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{RollOverStockService,ApiService} from '@app/services';

@Component({
  selector: 'app-rolloverstock',
  templateUrl: './rolloverstock.component.html',
  styleUrls: ['./rolloverstock.component.scss']
})
export class RolloverstockComponent implements OnInit {
  constructor(private router: Router,
    ) { }
 

  ngOnInit() {
   }
  }
