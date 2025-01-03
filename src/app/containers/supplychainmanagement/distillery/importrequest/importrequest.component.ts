import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-importrequest',
  templateUrl: './importrequest.component.html',
  styleUrls: ['./importrequest.component.scss']
})
export class ImportrequestComponent implements OnInit, OnDestroy {

  importrequestData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  importreqobj: any = {
    name: '',
    permitNo: ''
  };

  constructor(
    private distileryService: DistileryService
  ) { }

  ngOnInit() {
    this.getImportRequest();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  searchapi() {
    const { name = null, permitNo = null } = this.importreqobj;
    const objtest = {
      filters: {
        name,
        permitNo,
      },
      pageNo: 0,
      paginationSize: 5
    };

    this.distileryService.searchImportreq(objtest).subscribe((response: any) => {
      if (response.status === 's') {
        this.importrequestData = response.data.contents;
        this.refreshTabIns();
      }
    });
  }

  resetKey() {
    this.importreqobj = {
      name: '',
      permitNo: '',
    };
    this.getImportRequest();
  }

  getImportRequest() {
    this.distileryService.getImportreq().subscribe((response: any) => {
      if (response.status == 's') {
        this.importrequestData = response.data;
        this.refreshTabIns();
      }
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

  exportFile(downloadType, title) {
    this.distileryService.getexceldownload().subscribe((responceData: any) => {
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
    if (type === 'downloadPdf') {
      downloadType = 'application/pdf';
      title = 'ImportOrder.pdf';
    }
    if (type === 'downloadExcel') {
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'ImportOrder.xlsx';
    }
    if (type === 'downloadCsv') {
      downloadType = 'application/csv';
      title = 'ImportOrder.csv';
    }
    this.exportFile(downloadType, title);
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
