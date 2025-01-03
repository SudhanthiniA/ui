import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService, PreviewService, Mf5Part1Service } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Mf5part1config } from '@app/config/table-config/mf5part1-config';
import { Mf5part1g } from '@app/models/sugarmill';

@Component({
  selector: 'app-mf5partone',
  templateUrl: './mf5partone.component.html',
  styleUrls: ['./mf5partone.component.scss']
})
export class Mf5partoneComponent implements OnInit, OnDestroy {
  mf5partoneList: any;
  selected: any;
  partOneForm: any;
  partOneObj: any = {
    request_date: ''
  }
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,
    private Mf5Part1Service: Mf5Part1Service
  ) { }

  //data tables
  totalCount: any;

  public dataSource = new MatTableDataSource<Mf5part1g>();
  public columns = Mf5part1config.columns;
  public actionKeys = ['edit','view'];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };

  public pageSize = 15;
  ngOnInit() {
    this.getmf5part1list();
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      pageLength: 5,
      autoWidth: false,
      ajax: (dataTablesParameters: any, callback) => {
        const { start, length: limit } = dataTablesParameters;
        const page = (start > 0) ? (start / limit) : 0;
        const postData = {
          filters: {
            request_date: this.partOneObj.request_date ? this.partOneObj.request_date : null
          },
          pageNo: page,
          paginationSize: limit
        };
        that.Mf5Part1Service.searchMf5PartOne(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.mf5partoneList = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: []
            });

          } else {
            that.mf5partoneList = [];
          }
        });
      },
      columns: [
        { data: 'id' },
        { data: 'requestDate' },
        { data: 'openStockByAccount' },
        { data: 'totalSugarQuantity' },
        { data: 'totalSugarQuantity' },
        { data: 'status' }
      ],
    };
    this.preview.setData = ''
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getmf5part1list(pageNo, pageSize);
  }
    getmf5part1list(pageNo=0,paginationSize=15){
  const postData = {
    filters: {
      request_date: this.partOneObj.request_date ? this.partOneObj.request_date : null
    },
    pageNo,
    paginationSize
  };
  this.Mf5Part1Service.searchMf5PartOne(postData).subscribe((resp: any) => {
    if (resp.data) {
      this.mf5partoneList = resp.data.contents;
     
      this.dataSource.data = resp.data.contents as Mf5part1g[];
      this.totalCount = resp.data.totalElements;
    } 
  });
}
onEdit(event) {
  this.router.navigate(['/supplychainmanagement/sugarmills/mf5/edit', event.id]);
}

onView(event) {
  this.router.navigate(['/supplychainmanagement/sugarmills/mf5/view', event.id]);
}


  exportFile(url, postData, downloadType, title) {
    this.apiService.postDownload(url, postData).then((responceData: any) => {
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

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'CurrentMolassesAccount'}`;
      downloadType = 'application/pdf';
      title = 'Current_Molasses_Account.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'CurrentMolassesAccount'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'Current_Molasses_Account.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'CurrentMolassesAccount'}`;
      downloadType = 'application/csv';
      title = 'Current_Molasses_Account.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }

  getSearchData() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}