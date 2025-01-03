import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-exportorder',
  templateUrl: './exportorder.component.html',
  styleUrls: ['./exportorder.component.scss']
})
export class ExportorderComponent implements OnInit, OnDestroy {
  exportorderobj: any = {
    importOrderNumber: ''
  };
  exportorderData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distileryService: DistileryService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getexportorder();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getexportorder() {
    this.distileryService.getExportorder()
      .subscribe((resp: any) => {
        this.exportorderData = resp.data;
        this.refreshTabIns();
      });
  }

  searchapi() {
    const { importOrderNumber } = this.exportorderobj;
    const objtest = {
      filters: {
        importOrderNumber: importOrderNumber ? importOrderNumber : null,
        // name: this.exportorderObj.name ? this.exportorderObj.name : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    console.log(objtest);
    this.distileryService.searchExportOrder(objtest).subscribe((responceData: any) => {
      if (responceData['status'] == 's') {
        this.exportorderData = responceData.data.contents;
        this.refreshTabIns();
      } else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    });
  }

  resetKey() {
    this.exportorderobj = {
      importOrderNumber: '',
    };
    this.getexportorder();
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

  exportFile(downloadType, title) {
    this.distileryService.getExportDownload().subscribe((responceData: any) => {
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
      title = 'ExportOrder.pdf'
    }
    if (type == 'downloadExcel') {
      url = 'exportorder/exportExcel'
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'ExportOrder.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TransportGeneration'}`;
      downloadType = 'application/csv';
      title = 'ExportOrder.csv'
    }
    // this.exportFile(url, postData, downloadType, title);
    this.exportFile(downloadType, title)
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
