import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MasterapiService, DistilleryapiService, DistileryService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-mf10-molassesentry',
  templateUrl: './mf10-molassesentry.component.html',
  styleUrls: ['./mf10-molassesentry.component.css']
})
export class Mf10MolassesentryComponent implements OnInit, OnDestroy {

  molassesEntryList: any;
  molassesentrysearchObj: any = {
    molassesId: ''
  };
  molassestypeData: any[] = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distilleryApiService: DistilleryapiService,
    private masterapiService: MasterapiService,
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getMolassesEntry();
    this.getMolasses();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  
  getMolassesEntry() {
    this.distileryService.getMf10entrys().subscribe((responceData: any) => {
      console.log(responceData);
      this.molassesEntryList = responceData.data;
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

  getMolasses() {
    this.masterapiService.get(apiUrls.getAllMolassesType).then((responceData: any) => {
      this.molassestypeData = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  searchapi() {
    this.molassesentrysearchObj.molassesId = parseInt(this.molassesentrysearchObj.molassesId);
    const requestParam = {
      filters: {
        molassesId: this.molassesentrysearchObj.molassesId ? this.molassesentrysearchObj.molassesId : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchMf10entrys(requestParam).subscribe((responceData: any) => {
      this.molassesEntryList = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.molassesentrysearchObj = {
      molassesId: '',
    };
    this.getMolassesEntry();
  }
  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'TankRegistration'}`;
      downloadType = 'application/pdf';
      title = 'TankRegistration.pdf';
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TankRegistration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'TankRegistration.xlsx';
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TankRegistration'}`;
      downloadType = 'application/csv';
      title = 'TankRegistration.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }

  exportFile(url, postData, downloadType, title) {
    this.distilleryApiService.postDownload(url, postData).then((responceData: any) => {
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
