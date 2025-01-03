import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { SugarmillapiService, PreviewService, MasterapiService } from '@app/services';

@Component({
  selector: 'app-tanktransfer',
  templateUrl: './tanktransfer.component.html',
  styleUrls: ['./tanktransfer.component.scss']
})
export class TanktransferComponent implements OnInit,OnDestroy {
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
    private apiService: SugarmillapiService
  ) { }

  ngOnInit() {
    this.gettank();
    this.getTankconversion();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.preview.setData = '';
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tanktransfer/view', id]);
  }
  // navigateEdit(id) {
  //   this.router.navigate(['/supplychainmanagement/sugarmills/tankconversion/edit', id]);
  // }
  getTankconversion() {
    this.apiService.get(apiUrls.getalltankransfer).then((responceData: any) => {
      console.log(responceData);
      this.tankconverstionList = responceData.data;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
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
    const objtest = {
      filters: {
        registration_id: this.tankConObj.application_id ? this.tankConObj.application_id : null,
        tank_id: this.tankConObj.tank_id ? this.tankConObj.tank_id : null,
        total_capacity: this.tankConObj.total_capacity ? this.tankConObj.total_capacity : null
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.apiService.post(apiUrls.searchTankCon, objtest).then((responceData: any) => {
      this.tankconverstionList = responceData.data.contents;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  navigateEdit(id) {

  }

}
