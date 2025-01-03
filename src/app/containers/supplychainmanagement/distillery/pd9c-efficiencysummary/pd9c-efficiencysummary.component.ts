import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DistilleryapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Pd9cefficencyService} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pd9c-efficiencysummary',
  templateUrl: './pd9c-efficiencysummary.component.html',
  styleUrls: ['./pd9c-efficiencysummary.component.css']
})
export class Pd9cEfficiencysummaryComponent implements OnInit,OnDestroy {


  pd9cObj:any = {
    fromDate: '',
    toDate: '',
  
  };
  entity_type:any;
  public actionKeys = ['edit', 'view'];
  // public actionKeys;
  public pageSize = 5;
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'fromDate',
      displayName: 'From Date and Time',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'toDate',
      displayName: 'To Date and Time',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'molassesUsed',
      displayName: 'Molasses used in Qtls',
      type: 'string'
    },
    {
      name: 'alcoholWashPercent',
      displayName: 'Alcohol % in wash',
      type: 'string'
    },
    {
      name: 'totalLoss',
      displayName: 'Total Loss',
      type: 'string',
    },
   {
     name:'overallEff',
     displayName:'Overall Efficiency',
     type:'string'
   },
   {
    name: "status",
    displayName: "Status",
    type: 'options',
    badgeColors: {
      'SUMITTED': 'badge-success',
      'APPROVED': 'badge-primary',
      'REJECTED': 'badge-danger',
      'INITIATED':'badge-warning'
    },

  }

  ];

  pd9cEfficiencyObj: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private distilleryapiService: DistilleryapiService,  private router: Router,private pd9csercice:Pd9cefficencyService) { }

  ngOnInit() {
    this.entity_type = localStorage.getItem('EntityType');
    this.searchapi();
  }
  
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9c-efficiencysummary/view/' + event.id]);
  }
  searchapi(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        fromDate: this.pd9cObj.fromDate ? this.pd9cObj.fromDate : null,
        toDate: this.pd9cObj.toDate ? this.pd9cObj.toDate : null,
       
      },
      pageNo,
      paginationSize
    };
    this.pd9csercice.getalldatapd9c(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
   
    });
  }
  resetKey() {
    this.pd9cObj = {
      fromDate: '',
      toDate: '',
    };
    this.searchapi();
  }
 
  getPdfData1(type: any) {
    let url, downloadType,title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'TankRegistration'}`;
      downloadType = 'application/pdf';
      title= 'TankRegistration.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TankRegistration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title= 'TankRegistration.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TankRegistration'}`;
      downloadType = 'application/csv';
      title= 'TankRegistration.csv'
    }
    this.exportFile(url, postData, downloadType,title);
    return true
  }
  exportFile(url, postData, downloadType,title) {
    this.distilleryapiService.postDownload(url, postData).then((responceData: any) => {
      const newBlob = new Blob([responceData], { type: downloadType });
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = title
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;
      
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.searchapi(pageNo, pageSize);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
