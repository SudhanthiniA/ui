import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { ApiService,WarehouseNewbrandService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseBwfl6Service } from '@app/services/ware-house/warehouse-bwfl6.service';
// import { Router } from '@angular/router';
 import * as moment from 'moment';
@Component({
  selector: 'app-bwfl6',
  templateUrl: './bwfl6.component.html',
  styleUrls: ['./bwfl6.component.scss']
})
export class Bwfl6Component implements OnInit {

  data: any;
  bwfl6Data:any;
  bwfl6Form:any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Location>();
  public pageSize = 5;
  pageNo = 0;
  page: number;
  limit: any;
  bwfl6Obj:any = {
    issuedPassNumber: '',
    brandRegistrationId: '',
  };
  dateselected: any = moment().format('LLLL');
  allbrands: any;

  constructor(
    //private router: Router,
    private warehouseBwfl6Service: WarehouseBwfl6Service,
    private warehouseservice:WarehouseNewbrandService
  ) { }


  ngOnInit() {
    this.getAllBwfl6();
    // brand calling
    this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }
  
  getAllBwfl6() {
    this.warehouseBwfl6Service.getList().subscribe((response:any)=>{
      if(response.status == 's'){
        this.bwfl6Data = response.data;
        this.refreshTabIns();
      }
    })
  }
 
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
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

  searchBwfl6(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        issuedPassNumber: this.bwfl6Obj.issuedPassNumber ? this.bwfl6Obj.issuedPassNumber : null,
        brandRegistrationId: this.bwfl6Obj.brandRegistrationId ? this.bwfl6Obj.brandRegistrationId : null,
      },
      pageNo,
      paginationSize,
    };

    this.warehouseBwfl6Service.searchBwfl6(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl6Data = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.bwfl6Obj = {
      issuedPassNumber: '',
      brandRegistrationId: '',  
    };
  }
}
