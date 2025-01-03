import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, TransportGenService } from '@app/services';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { Mf4transport } from '@app/config/table-config/mf4transportpass-config';
import { Mf4transportpass } from '@app/models/sugarmill';
@Component({
  selector: 'app-transportgeneration',
  templateUrl: './transportgeneration.component.html',
  styleUrls: ['./transportgeneration.component.scss']
})
export class TransportgenerationComponent implements OnInit {
  transportObj: any = {
    distilleryName: '',
    indentNum: ''
  };
  transportForm: any;
  transportGenList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  //data table
  public dataSource = new MatTableDataSource<Mf4transportpass>();
  public columns = Mf4transport.columns;
  public pageSize = 5;
  public totalCount: number;
  public actionKeys = ['view', 'edit'];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };
  constructor(
    private router: Router,
    private TransportGenService: TransportGenService,
    private preview: PreviewService,
    private apiService: SugarmillapiService
  ) { }
  ngOnInit() {
    this.transportGenlistt();
    this.preview.setData = '';
  }
  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.transportGenlistt(pageNo, pageSize);
  }
  transportGenlistt(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        distilleryName: this.transportObj.distilleryName ? this.transportObj.distilleryName : null,
        indentNum: this.transportObj.indentNum ? this.transportObj.indentNum : null,
      },
      pageNo,
      paginationSize
    };
    this.TransportGenService.searchTransGen(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.dataSource.data = resp.data.contents as Mf4transportpass[];
        this.totalCount = resp.data.totalElements;
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }
  clearData()
  {
    this.transportObj.distilleryName = '';
    this.transportObj.indentNum = '';
    this.transportGenlistt();
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/edit', event.id]);
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/view', event.id]);
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
      url = `download/pdf?screenName=${'TransportGeneration'}`;
      downloadType = 'application/pdf';
      title = 'TransportGeneration.pdf';
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TransportGeneration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'TransportGeneration.xlsx';
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TransportGeneration'}`;
      downloadType = 'application/csv';
      title = 'TransportGeneration.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
}
