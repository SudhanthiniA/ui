import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ChartDB } from '../../fack-db/chart-data';
import { ApexChartService } from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import { Router } from '@angular/router';
import { SugarmillapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-stockavailability',
  templateUrl: './stockavailability.component.html',
  styleUrls: ['./stockavailability.component.scss']
})
export class StockavailabilityComponent implements OnInit, OnDestroy {

  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  tankoverviewList: any = [];
  tankGradeViewList: any;

  constructor(
    public apexEvent: ApexChartService,
    private apiService: SugarmillapiService,
    private router: Router
  ) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }
  
  ngOnInit() {
    this.getGradeOverViewList();
    // this.gettankoverviewlist();
    this.gettankregester();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  
  gettankregester() {
    console.log('tanksssss')
    this.apiService.get('tankRegistration/getAllTankReg').then((responceData: any) => {
      console.log('tanks names',responceData);
      this.tankoverviewList = responceData.data;
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

  gettankoverviewlist() {
    this.apiService.get(apiUrls.getAvailableTank).then((responceData: any) => {
      console.log(responceData);
      this.tankoverviewList = responceData.data;
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

  getGradeOverViewList() {
    this.apiService.get(apiUrls.getAvailableGrade).then((responceData: any) => {
      this.tankGradeViewList = responceData.data;
      console.log(this.tankGradeViewList);
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

  exportFile(url, postData, downloadType,title) {
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
    let url, downloadType,title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'StockAvailability'}`;
      downloadType = 'application/pdf';
      title= 'StockAvailability.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'StockAvailability'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title= 'StockAvailability.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'StockAvailability'}`;
      downloadType = 'application/csv';
      title= 'StockAvailability.csv'
    }
    this.exportFile(url, postData, downloadType,title);
    return true;
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  navigate(id) {
    this.router.navigate(['/sugarmills/stockavailability/tankmaintainance',id]);

  }


}
