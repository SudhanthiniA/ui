import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-importpermit-outside-up',
  templateUrl: './importpermit-outside-up.component.html',
  styleUrls: ['./importpermit-outside-up.component.css']
})
export class ImportpermitOutsideUpComponent implements OnInit {
  indentrequestData: any;
  importpermitrequestsearchObj: any = {
    nameOfExpDistillery: '',
    reqDate: ''
  };
  importPermitlist: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
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
    this.listapi();
  }

  listapi() {
    this.distileryService.getallimportpermitreq().subscribe(responceData => {
      console.log(responceData);
      this.importPermitlist = responceData['data'];
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
    const { reqDate = null, nameOfExpDistillery = null, } = this.importpermitrequestsearchObj;
    const objtest = {
      filters: {
        reqDate,
        nameOfExpDistillery,
      },
      pageNo: 0,
      paginationSize: 5
    };

    this.distileryService.searchimportprmtreq(objtest).subscribe((response: any) => {
      if (response.status === 's') {
        this.importPermitlist = response.data.contents;
        this.refreshTabIns();
      }
    });
  }

  resetKey() {
    this.importpermitrequestsearchObj = {
      nameOfExpDistillery: '',
      reqDate: '',
    };
    this.listapi();
  }

  exportFile(url, postData, downloadType, title) {
    this.distileryService.getdownloadexcel().subscribe((responceData: any) => {
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
      title = 'ImportOrderParmit.pdf';
    }
    if (type === 'downloadExcel') {
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'ImportOrderParmit.xlsx';
    }
    if (type === 'downloadCsv') {
      downloadType = 'application/csv';
      title = 'ImportOrderParmit.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }
}
