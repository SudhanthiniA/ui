import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { SugarmillapiService, AlertService, StockinService } from '@app/services';

@Component({
  selector: 'app-stockin',
  templateUrl: './stockin.component.html',
  styleUrls: ['./stockin.component.scss']
})
export class StockinComponent implements OnInit, OnDestroy {
  drafttest: any;
  gradeList: any;
  stockList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  stockInObj = {
    grade: '',
    date: '',
  };
  stockInForm: any;

  constructor(
    private router: Router,
    private alert: AlertService,
    private apiService: SugarmillapiService,
    private StockinService: StockinService
  ) { }

  ngOnInit() {
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
            grade: this.stockInObj.grade ? this.stockInObj.grade : null,
            date: this.stockInObj.date ? this.stockInObj.date : null
          },
          pageNo: page,
          paginationSize: limit
        };
        that.StockinService.distillerysearchStockIn(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.stockList = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: []
            });

          } else {
            that.stockList = [];
          }
        });
      },
      columns: [
        { data: 'id' },
        { data: 'date' },
        { data: 'producedMolasses' },
        { data: 'gradeId' },
        { data: 'trs' },
        { data: 'brix' },
        { data: 'createdBy' },
         { data: 'createdOn' }
      ],
    };
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/distillery/stockin/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/distillery/stockin/edit', id]);
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
      link.download = title;
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
      url = `download/pdf?screenName=${'StockIn'}`;
      downloadType = 'application/pdf';
      title = 'StockIn.pdf';
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'StockIn'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'StockIn.xlsx';
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'StockIn'}`;
      downloadType = 'application/csv';
      title = 'StockIn.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  navigatetoadd() {
    if (this.drafttest) {
      this.alert.showError('Please Submit the Draft Data', 'error');
    } else {
      this.router.navigate(['/supplychainmanagement/distillery/stockin/add']);
    }
  }

  searchStockData() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
}
