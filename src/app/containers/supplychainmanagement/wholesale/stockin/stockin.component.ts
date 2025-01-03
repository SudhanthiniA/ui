import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleStockinService,ApiService, WholeSaleIndentRequestService} from '@app/services';
import { StockIn } from '@app/config/wholesale/stockIn.config';
import { MatTableDataSource } from '@angular/material/table';
import { Inprogress } from '@app/models/wholesale/stockIn';
@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.scss']
})
export class StockinComponent implements OnInit {
  public actionBtnBasedOnCondInprogress = {
    edit: {
      column: 'transportPassStatus',
      condition: 'INPROGRESS',
    },
    view: {
      column: 'transportPassStatus',
      condition: 'INPROGRESS',
    },
  };
  public actionKeysInprogrss = ['edit', 'view'];
  public pageSizeInprogress = 5;
  public dataSourceCompleted = new MatTableDataSource<Inprogress>();
  public inprogress = StockIn.Completed;

  constructor(private router: Router,
    private apiservice:ApiService,
    private wholesaleindentservice: WholeSaleIndentRequestService) { }
 digitallocksList: any;
 selected: any;
 stockinlist:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 BreakageEntrylist: any;
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.StockInList();
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
  handlePagination1(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // this.TransPassCancelsearchByPendForApprov(pageNo, pageSize);
  }

   StockInList() {
    this.wholesaleindentservice.getallstockin().subscribe((response:any)=>{
      if(response){
        this.stockinlist = response;
        this.refreshTabIns();
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}

