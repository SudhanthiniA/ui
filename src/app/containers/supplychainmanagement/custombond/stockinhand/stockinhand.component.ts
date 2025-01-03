import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleStockInHandService,ApiService, BrandMasterService, LiquorTypeService} from '@app/services';
import { StockInHand } from '@app/config/wholesale/stockInHand.config';
import { stockInHand } from '@app/models/wholesale/stockInHand';
import { MatTableDataSource } from '@angular/material/table';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-stockinhand',
  templateUrl: './stockinhand.component.html',
  styleUrls: ['./stockinhand.component.scss']
})
export class StockinhandComponent implements OnInit {
 
  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesaleStockInHandService: WholesaleStockInHandService,
    private masterService:BrandMasterService,
    private liquorType: LiquorTypeService,
    private subLiquorType: SubLiquorTypeService,
    ) { }
 
  
  ngOnInit() {
  }
}
