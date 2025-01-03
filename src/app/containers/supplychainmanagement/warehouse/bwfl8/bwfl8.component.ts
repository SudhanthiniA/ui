import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { WarehouseBwfl8Service } from '@app/services/ware-house/warehouse-bwfl8.service';
import { WareHouseBWFL8Config } from '@app/config/table-config/warehouse-bwfl8-config';
import { WareHouseBwfl8list } from '@app/models/warehouse';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-bwfl8',
  templateUrl: './bwfl8.component.html',
  styleUrls: ['./bwfl8.component.scss']
})
export class Bwfl8Component implements OnInit {

  data: any;
  bwfl8Data: any;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<WareHouseBwfl8list>();
  public columns = WareHouseBWFL8Config.columns;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement: DataTableDirective;
  page: number;
  limit: any;
  dateselected: any = moment().format('LLLL');
  bwfl8Obj: any = {
    employeeName: '',
    employeeDesignation: '',
  };
  constructor(
    private warehouseBwfl8Service: WarehouseBwfl8Service,
  ) { }

  ngOnInit() {
    this.getAllBwfl8();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.getAllBwfl6(pageNo, pageSize);
  }

  getAllBwfl8() {
    this.warehouseBwfl8Service.getList().subscribe((Response: any) => {
      if (Response.status == 's') {
        this.bwfl8Data = Response.data;
        this.refreshTabIns();
      }
      // console.log(Response);
      // this.bwfl8Data=Response.data;
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

  searchBwfl8(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        employeeName: this.bwfl8Obj.employeeName ? this.bwfl8Obj.employeeName : null,
        employeeDesignation: this.bwfl8Obj.employeeDesignation ? this.bwfl8Obj.employeeDesignation : null,
      },
      pageNo,
      paginationSize,
    };

    this.warehouseBwfl8Service.searchBwfl8(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl8Data = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.bwfl8Obj = {
      employeeName: '',
      employeeDesignation: '',
    };;
  }
}
