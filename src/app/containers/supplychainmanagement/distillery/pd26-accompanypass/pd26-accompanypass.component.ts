import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DistileryService, DistilleryapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pd26-accompanypass',
  templateUrl: './pd26-accompanypass.component.html',
  styleUrls: ['./pd26-accompanypass.component.css']
})
export class Pd26AccompanypassComponent implements OnInit, OnDestroy {
  indentrequestData: any;
  pd26List: any;
  pd26searchobj: any = {
    vehicleNo: '',
    date: ''
  };
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    public distilleryapiService: DistilleryapiService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd26list();
  }

  getPd26list() {
    this.distileryService.getPd26().subscribe(responceData => {
      this.pd26List = responceData['data'];
      this.refreshTabIns();
    });
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

  searchapi() {
    const requestParam = {
      filters: {
        date: this.pd26searchobj.date ? this.pd26searchobj.date : null,
        vehicleNo: this.pd26searchobj.vehicleNo ? this.pd26searchobj.vehicleNo : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchPd26(requestParam).subscribe((responceData: any) => {
      this.pd26List = responceData.data.contents;
      this.refreshTabIns();
    })
  }

  resetKey() {
    this.pd26searchobj = {
      vehicleNo: '',
      date: '',
    };
    this.getPd26list();
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type === 'downloadPdf') {
      url = `download/pdf?screenName=${'indentRequest'}`;
      downloadType = 'application/pdf';
      title = 'indentRequest.pdf';
    }
    if (type === 'downloadExcel') {
      url = `download/excel?screenName=${'indentRequest'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'indentRequest.xlsx';
    }
    if (type === 'downloadCsv') {
      url = `download/csv?screenName=${'indentRequest'}`;
      downloadType = 'application/csv';
      title = 'indentRequest.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }

  exportFile(url, postData, downloadType, title) {
    this.distilleryapiService.postDownload(url, postData).then((responceData: any) => {
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
