import { Component, OnInit } from '@angular/core';
//import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
// need to modify  importpasspermitService service file
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService, WarehouseNewbrandService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { ConsignmentReceiptConfig } from '@app/config/warehouse/consignment-receipt.config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
// need to model class ImportPermitStatus to dispatch

@Component({
  selector: 'app-consignementreceipt',
  templateUrl: './consignementreceipt.component.html',
  styleUrls: ['./consignementreceipt.component.css']
})
export class ConsignementreceiptComponent implements OnInit {
  allcosigmnet: any;

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ConsignmentReceiptConfig.titleSection.list;
  public breadcrumbs = ConsignmentReceiptConfig.breadcrumbs;
  public columns = ConsignmentReceiptConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitStatus>();

  consignmentReceiptData:any={
    permitNumber:''
  };

  // onceapi redy integrated those values. and remove below code
  data:any = [
    {
      id:1,
      transportPassNoDate: "28-May-2021",
      transportPassNo: "ABC12345",
      permitNumber: "ABC12345",
      recievedCases: "Atla",
      recievedBottles: 1235,
      recievedBy: 36978,
      recievedDate: "28-May-2021"
    }
  ]
  constructor( 
     // need to change importpasspermit service
     private router: Router,
     private preview: PreviewService,
     private datepipe: DatePipe,
     private warehouseservice:WarehouseNewbrandService,
     private apiService: SugarmillapiService,
     private MasterapiService: MasterapiService,
    ) { }

  ngOnInit() {
    this.ConsignmentReceiptSearch()
  }

  // onEdit(event) {
  //   this.router.navigate(['/supplychainmanagement/warehouse/consignementreceipt/edit/' + event.id]);
  // }

  // onView(event) {
  //   console.log('event::', event);
  //   let status = this.dataSource.data.find(item => item.id == event.id).status;
  //   this.router.navigate(['/supplychainmanagement/warehouse/consignementreceipt/view/' + event.id + '/' + status]);
  // }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    //this.ConsignmentReceiptSearch(pageNo, pageSize);
  }

  ConsignmentReceiptSearch(pageNo = 0, pageSize = 5){
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
    this.consignmentReceiptData={
      permitNumber:''
    }
  }
  // getallconsignment(){
  //   this.importpasspermit.getconsignment()
  //   .subscribe((resp: any) => {
  //     this.allcosigmnet = resp.data
  //   })
  // }
}
