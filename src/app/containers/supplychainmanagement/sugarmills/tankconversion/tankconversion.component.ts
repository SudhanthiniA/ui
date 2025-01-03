import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { SugarmillapiService, PreviewService, MasterapiService,TankConversionService } from '@app/services';

@Component({
  selector: 'app-tankconversion',
  templateUrl: './tankconversion.component.html',
  styleUrls: ['./tankconversion.component.scss']
})
export class TankconversionComponent implements OnInit, OnDestroy {
  tanks: any;
  tankconverstionList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tankConObj = {
    application_id: '',
    tank_id: '',
    total_capacity: '',
  };
  tankConversionForm: any;
  constructor(
    private router: Router,
    private masterapiService: MasterapiService,
    private preview: PreviewService,
    private apiService: SugarmillapiService,
    private TankConversionService: TankConversionService
  ) { }
  ngOnInit() {
    this.gettank();
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
        let str;
        if (this.tankConObj.application_id) {
           str = this.tankConObj.application_id.substring(5)
        }
        const postData = {
          filters: {
            application_id: str ? str : null,
            tank_id: this.tankConObj.tank_id ? this.tankConObj.tank_id : null,
            total_capacity: this.tankConObj.total_capacity ? this.tankConObj.total_capacity : null
          },
          pageNo: page,
          paginationSize: limit
        };
        that.TankConversionService.searchTanCon(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.tankconverstionList = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: []
            });

          } else {
            that.tankconverstionList = [];
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
    this.preview.setData = '';
  }
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankconversion/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankconversion/edit', id]);
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
    let url;
    let downloadType;
    let title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'TankConversion'}`;
      downloadType = 'application/pdf';
      title = 'TankConversion.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TankConversion'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'TankConversion.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TankConversion'}`;
      downloadType = 'application/csv';
      title = 'TankConversion.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
  gettank() {
    this.masterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
      console.log(responceData);
      this.tanks = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  searchConData() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
