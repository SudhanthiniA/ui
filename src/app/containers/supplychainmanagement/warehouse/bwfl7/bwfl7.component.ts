import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseBwfl7Service } from '@app/services/ware-house/warehouse-bwfl7.service';
import { WareHouseBwfl7list } from '@app/models/warehouse';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-bwfl7',
  templateUrl: './bwfl7.component.html',
  styleUrls: ['./bwfl7.component.scss']
})
export class Bwfl7Component implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  bwfl7Data: any;
  public dataSource = new MatTableDataSource<WareHouseBwfl7list>();
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  page: number;
  limit: any;

  dateselected: any = moment().format('LLLL');
  bwfl7Obj: any = {
    passNumber: '',
    brandRegistrationId: '',
  };
  allbrands: any;

  constructor(
    private warehouseBwfl7Service: WarehouseBwfl7Service,
    private router: Router,
    private warehouseservice: WarehouseNewbrandService,
  ) {
  }

  ngOnInit() {
    this.getAllBwfl7();
    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  getAllBwfl7() {
    this.warehouseBwfl7Service.getList().subscribe((Response:any)=>{
      if(Response.status == 's'){
        this.bwfl7Data = Response.data;
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

   searchBwfl7(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        brandRegistrationId: this.bwfl7Obj.brandRegistrationId ? this.bwfl7Obj.brandRegistrationId : null,
        passNumber: this.bwfl7Obj.passNumber ? this.bwfl7Obj.passNumber : null,
      },
      pageNo,
      paginationSize,
    };
    this.warehouseBwfl7Service.searchBwfl7(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl7Data = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.bwfl7Obj = {
      passNumber: '',
      brandRegistrationId: '',
    };
  }
}
