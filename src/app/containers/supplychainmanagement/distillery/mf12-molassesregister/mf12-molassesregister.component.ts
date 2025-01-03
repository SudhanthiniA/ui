import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DistilleryapiService, DistileryService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mf12-molassesregister',
  templateUrl: './mf12-molassesregister.component.html',
  styleUrls: ['./mf12-molassesregister.component.css']
})
export class Mf12MolassesregisterComponent implements OnInit, OnDestroy {

  molassesRegisterList: any;
  mf12searchObj: any = {
    sugarFactoryName: '',
    mf4GatePass: ''
  };
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distileryService: DistileryService,
    private distilleryapiService: DistilleryapiService
  ) { }

  ngOnInit() {
    this.getMolassesRegister();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getMolassesRegister() {
    this.distileryService.getMf12register().subscribe(responceData => {
      console.log(responceData);
      this.molassesRegisterList = responceData['data'];
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
    const { mf4GatePass = null, sugarFactoryName = null } = this.mf12searchObj;
    const requestParam = {
      filters: {
        mf4GatePass,
        sugarFactoryName,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchMf12register(requestParam).subscribe((responceData: any) => {
      this.molassesRegisterList = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.mf12searchObj = {
      sugarFactoryName: '',
      mf4GatePass: ''

    };
    this.getMolassesRegister();
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
