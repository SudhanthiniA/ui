import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseBwfl9Service } from '@app/services/ware-house/warehouse-befl9.service';
import { WareHousebwfl9Config } from '@app/config/table-config/warehouse-bwfl9.config';
import { WareHouseBwfl6list } from '@app/models/warehouse';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-bwfl9',
  templateUrl: './bwfl9.component.html',
  styleUrls: ['./bwfl9.component.scss']
})
export class Bwfl9Component implements OnInit {

  data:any;
  bwfl9Data: any;
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<WareHouseBwfl6list>();
  public columns = WareHousebwfl9Config.columns;
  page: number;
  limit: any;

  bwfl9Obj:any= {
    brandRegistrationId:'',
    liquorDescription:','
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
    private warehouseBwfl9Service: WarehouseBwfl9Service,
  ) { }

  ngOnInit() {
    this.getAllBwfl9();
     // brand calling
     this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  getAllBwfl9() {
    this.warehouseBwfl9Service.getList().subscribe((Response:any)=>{
      if(Response.status == 's'){
        this.bwfl9Data = Response.data;
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


  searchBwfl9(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        brandRegistrationId: this.bwfl9Obj.brandRegistrationId ? this.bwfl9Obj.brandRegistrationId : null,
        liquorDescription: this.bwfl9Obj.liquorDescription ? this.bwfl9Obj.liquorDescription : null,
      },
      pageNo,
      paginationSize,
    };

    this.warehouseBwfl9Service.searchBwfl9(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl9Data = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.bwfl9Obj = {
      brandRegistrationId:'',
      liquorDescription:','
    };
  }
}
