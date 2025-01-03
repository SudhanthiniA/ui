import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DistilleryapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import {Pd9bproducationService} from '@app/services'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';




@Component({
  selector: 'app-pd9b-productionsummary',
  templateUrl: './pd9b-productionsummary.component.html',
  styleUrls: ['./pd9b-productionsummary.component.css']
})
export class Pd9bProductionsummaryComponent implements OnInit,OnDestroy {
  pd9bObj:any = {
    fromDate: '',
    toDate: '',
  
  };
  pd9bproductionList: any;
  // @ViewChild(DataTableDirective, { static: false })
  // dtElement: DataTableDirective;
  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();

  public actionKeys=['edit', 'view'];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  public pageSize = 5;
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
      name: 'finalGravity',
      displayName: 'Final Gravity of Fermented Wash',
      type: 'string'
    },
    {
      name: 'strength',
      displayName: 'Strength % V/V',
      type: 'string',
    },
    {
      name: 'passedDate',
      displayName: 'Date of Passed',
      type: 'date',
      dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'qtlsMolasses',
      displayName: 'Al/Qtls Molasses',
      type: 'string',
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
  entity_type: any;
  constructor(public distilleryapiService: DistilleryapiService,private pd9bproductionsrv:Pd9bproducationService,private router: Router,) { }

  ngOnInit() {
    this.entity_type = localStorage.getItem('EntityType');
    this.searchapi();
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd9b-productionsummary/view/' + event.id]);
  }
  // getPd9bProduction() {
  //   this.pd9bproductionsrv.getallpd9bdata().subscribe(responceData => {
  //     console.log(responceData);
  //     this.pd9bproductionList = responceData['data'];
  //   });
  // }

  ngOnDestroy(): void {
    // this.dtTrigger.unsubscribe();
  }
  searchapi(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        fromDate: this.pd9bObj.fromDate ? this.pd9bObj.fromDate : null,
        toDate: this.pd9bObj.toDate ? this.pd9bObj.toDate : null,
       
      },
      pageNo,
      paginationSize
    };
    this.pd9bproductionsrv.searchpd9bdata(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
    });
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchapi(pageNo, pageSize);
  }
  resetKey() {
    this.pd9bObj = {
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
}
