import { Component, OnInit } from '@angular/core';
//import { WarehouseNewbrandService } from '@app/services/ware-house';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
// need to modify  importpasspermitService service file
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { StockInHandConfig } from '@app/config/warehouse/stockInHand.config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
// need to model class ImportPermitStatus to dispatch
@Component({
  selector: 'app-stockinhand',
  templateUrl: './stockinhand.component.html',
  styleUrls: ['./stockinhand.component.scss']
})
export class StockinhandComponent implements OnInit {
  stokcin: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StockInHandConfig.titleSection.list;
  public breadcrumbs = StockInHandConfig.breadcrumbs;
  public columns = StockInHandConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitStatus>();
 
  stockInHand:any={
    permitNumber:''
  };

   // onceapi redy integrated those values. and remove below code
   data:any = [
    {
      id:1,
      brandName: "Atla",
      liquorType: "100Pipers",
      liquorSubType: "Kingfisher",
      packageSize: 100,
      packageType: "FL",
      availableCases: 36978,
      availableBottles: 200
    }
  ]
  constructor(public WarehouseNewbrandService:WarehouseNewbrandService,
    
    // need to change importpasspermit service
    private importpasspermit: importpasspermitService,
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private warehouseservice:WarehouseNewbrandService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService,) { }

  ngOnInit() {
    this.searchStockInHand();
  }
  // onEdit(event) {
  //   this.router.navigate(['/supplychainmanagement/warehouse/dispatch/edit/' + event.id]);
  // }

  // onView(event) {
  //   console.log('event::', event);
  //   let status = this.dataSource.data.find(item => item.id == event.id).status;
  //   this.router.navigate(['/supplychainmanagement/warehouse/dispatch/view/' + event.id + '/' + status]);
  // }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.searchStockInHand(pageNo, pageSize);
  }

  searchStockInHand(pageNo = 0, pageSize = 5){
    // const paginationSize = pageSize;
    // const searchObj = {
    //   filters: {
    //     permitNumber: this.dipatchData.permitNumber ? this.dipatchData.permitNumber : null,
       
    //   },
    //   pageNo,
    //   paginationSize,
    // };

    // this.importpasspermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
    //   console.log(responceData);
    //   this.dataSource.data = responceData.data.contents as ImportPermitStatus[];
    //   this.totalCount = responceData.data.totalElements;
    //   });

    this.dataSource.data = this.data;
    // this.totalCount = responceData.data.totalElements;
  }

  resetKey() {
    this.stockInHand={
      permitNumber:''
    }
  }

// getallstockin(){
//   this.WarehouseNewbrandService.getallstockiin().subscribe((res:any) => {
//     this.stokcin = res.data;
//   })
// }
}
