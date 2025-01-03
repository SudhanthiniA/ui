import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleDispatchReportService,WholesaleDispatchService,WholesaleIndentRequestService} from '@app/services'
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { DispatchConfig } from '@app/config/wholesale/dispatch-config'
import { DispatchReport } from '@app/models/wholesale/dispatchReport';
@Component({
  selector: 'app-dispatchreport',
  templateUrl: './dispatchreport.component.html',
  styleUrls: ['./dispatchreport.component.css']
})
export class DispatchreportComponent implements OnInit {
  constructor(private router: Router,  private dispatchService: WholesaleDispatchService,
    // private apiservice:ApiService,
    private wholesaleDispatchReportService: WholesaleDispatchReportService) { }
 digitallocksList: any;
 selected: any;
 Pd18list:any;
 @ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 DispatchReportList: any;
 public pageNo = 0;
 public pageSize = 5;
 public actionKeys = ['view'];

 public totalCount: number;
 public isSearchRes = false;

 public columns = DispatchConfig.columnsReport;
 public lastText = 'master.common.list';
 public dataSource = new MatTableDataSource<DispatchReport>(); 
 dispatchObj: any = {
  dispatchdate: '',
  transportPassNo:'',
  indentNo:''
};
  ngOnInit() {
    this.getAllDispatch();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    // this.getBreakageEntryrequestById();
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

  getBreakageEntryrequestById() {
    this.wholesaleDispatchReportService.get("WholesaleDispatchReport").then((response:any)=>{
      if(response){
        this.DispatchReportList = response;
        this.refreshTabIns();
      }
    })
  }
  resetKey() {
    this.dispatchObj = {
      dispatchdate: '',
      transportPassNo:'',
      indentNo:''
    };
    this.getAllDispatch();
  }
  searchDispatch() {
    this.getAllDispatch();
  }
  getAllDispatch() {
    const paginationSize = this.pageSize;
    const requestParam = {
      filters: this.dispatchObj,
      pageNo:this.pageNo,
      paginationSize:this.pageSize,
      transportPassStatus:'COMPLETED'
    };
    this.dispatchService.searchDisptchc(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.dataSource.data = resp.data.contents as DispatchReport[];;
          this.totalCount = resp.data.totalElements;
        }
      });
  }
  onEdit(event) {
    let id = event.id
    this.router.navigate(['/supplychainmanagement/wholesale/dispatch/edit/'+id]);
  }

  onView(event) {
    let id = event.id
    this.router.navigate(['/supplychainmanagement/wholesale/dispatchreport/view/'+id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
