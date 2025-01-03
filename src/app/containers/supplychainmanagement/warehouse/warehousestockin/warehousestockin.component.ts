import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WarehouseStockInService } from '@app/services/ware-house/warehouse-stockin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehousestockin',
  templateUrl: './warehousestockin.component.html',
  styleUrls: ['./warehousestockin.component.scss']
})
export class WarehousestockinComponent implements OnInit {

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  stockData: any;
  StockInDetailsObj:any={
    transportPassNo: '',
    brandName:'',
  }
  constructor(
    private apiService: ApiService,
    private warehouseStockService: WarehouseStockInService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getlist();
    this.searchWareHousePass();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getlist(){
    this.warehouseStockService.getallStockIndetails().subscribe((response:any)=>{
      if(response.status == 's'){
        this.stockData = response.data;
        this.refreshTabIns();
      }
    })
  }
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }
   // search data
   searchWareHousePass(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        transportPassNo: this.  StockInDetailsObj.transportPassNo ? this.  StockInDetailsObj.transportPassNo : null,
        brandName: this.  StockInDetailsObj.brandName ? this.  StockInDetailsObj.brandName : null,
      },
      pageNo,
      paginationSize,
    };
    this.warehouseStockService.searchStockInDetails(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.stockData = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.StockInDetailsObj = {
      transportPassNo: '',
      brandName:'',
    };
  }
}
