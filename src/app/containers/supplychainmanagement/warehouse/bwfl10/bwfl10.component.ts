import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { MasterapiService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { SugarmillapiService, PreviewService, WarehouseNewbrandService } from '@app/services';
import { WarehouseBwfl10Service } from '@app/services/ware-house/warehouse-bwfl10.service';
import { WareHouseBWFL10Config } from '@app/config/table-config/warehouse-bwfl10.config';
import { WareHouseBwfl10list } from '@app/models/warehouse';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-bwfl10',
  templateUrl: './bwfl10.component.html',
  styleUrls: ['./bwfl10.component.scss']
})
export class Bwfl10Component implements OnInit {

  data:any;
  bwfl10Data: any;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<WareHouseBwfl10list>();
  public columns = WareHouseBWFL10Config.columns;
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  page: number;
  limit: any;

  bwfl10Obj = {
    liquorDescription: '',
    brandRegistrationId: '',
  };
  dateselected: any = moment().format('LLLL');
  allbrands: any;


  constructor(
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private warehouseservice:WarehouseNewbrandService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService,
    private warehouseBwfl10Service: WarehouseBwfl10Service,
  ) { }

  ngOnInit() {
    this.getAllBwfl10();
    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.getAllBwfl6(pageNo, pageSize);
  }
  getAllBwfl10() {
    this.warehouseBwfl10Service.getList().subscribe((Response:any)=>{
      if(Response.status == 's'){
        this.bwfl10Data = Response.data;
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
  searchBwfl10(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        brandRegistrationId: this.bwfl10Obj.brandRegistrationId ? this.bwfl10Obj.brandRegistrationId : null,
        liquorDescription: this.bwfl10Obj.liquorDescription ? this.bwfl10Obj.liquorDescription : null,
      },
      pageNo,
      paginationSize,
    };
    this.warehouseBwfl10Service.searchBwfl10(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl10Data = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.bwfl10Obj = {
      liquorDescription: '',
      brandRegistrationId: '',
    };
  }
}
