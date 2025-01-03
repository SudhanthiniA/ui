import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AlertService } from '@app/services';
import { DistileryService } from '@app/services';

@Component({
  selector: 'app-export-permit-request',
  templateUrl: './export-permit-request.component.html',
  styleUrls: ['./export-permit-request.component.css']
})
export class ExportPermitRequestComponent implements OnInit {
  indentrequestData: any;
  pd24list: any;
  exportpermitobj: any = {
    saleAgreementDate: '',
    purchaserNameAddress: ''
  };
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distileryService: DistileryService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getlist();
  }

  getlist() {
    this.distileryService.getExportorderprimit().subscribe((response: any) => {
      this.pd24list = response['data'];
      this.refreshTabIns();
    });
  }

  searchapi() {
    const { saleAgreementDate = null, purchaserNameAddress = null } = this.exportpermitobj;
    const objtest = {
      filters: {
        saleAgreementDate,
        purchaserNameAddress,
      },
      pageNo: 0,
      paginationSize: 5
    };
    console.log(objtest);
    this.distileryService.searchExportPrmt(objtest).subscribe((responceData: any) => {
      if (responceData['status'] == 's') {
        this.pd24list = responceData.data.contents;
        this.refreshTabIns();
      } else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    });
  }

  resetKey() {
    this.exportpermitobj = {
      saleAgreementDate: '',
      purchaserNameAddress: '',
    };
    this.getlist();
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
    this.distileryService.downloadExportPrmt().subscribe((responceData: any) => {
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
    if (type == 'downloadPdf') {
      downloadType = 'application/pdf';
      title = 'ExportPermit.pdf';
    }
    if (type == 'downloadExcel') {
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'ExportPermit.xlsx';
    }
    if (type == 'downloadCsv') {
      downloadType = 'application/csv';
      title = 'ExportPermit.csv';
    }
    this.exportFile(downloadType, title);
    return true;
  }
}
