import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DistilleryapiService, DistileryService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pd24-partwiseissuance',
  templateUrl: './pd24-partwiseissuance.component.html',
  styleUrls: ['./pd24-partwiseissuance.component.css']
})
export class Pd24PartwiseissuanceComponent implements OnInit, OnDestroy {
  pd24Obj: any = {
    absoluteDate: '',
    quantitySanction: ''
  }
  pd24list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    public distileryService: DistileryService,
    private distilleryapiService: DistilleryapiService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getAllpd24list();
  }

  getAllpd24list() {
    this.distileryService.getPd24().subscribe(responceData => {
      this.pd24list = responceData['data'];
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
        absoluteDate: this.pd24Obj.absoluteDate ? this.pd24Obj.absoluteDate : null,
        quantitySanction: this.pd24Obj.quantitySanction ? this.pd24Obj.quantitySanction : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchPd24(requestParam).subscribe((responceData: any) => {
      this.pd24list = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.pd24Obj = {
      absoluteDate: '',
      quantitySanction: '',
    };
    this.getAllpd24list();
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type === 'downloadPdf') {
      url = `download/pdf?screenName=${'TankRegistration'}`;
      downloadType = 'application/pdf';
      title = 'TankRegistration.pdf';
    }
    if (type === 'downloadExcel') {
      url = `download/excel?screenName=${'TankRegistration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'TankRegistration.xlsx';
    }
    if (type === 'downloadCsv') {
      url = `download/csv?screenName=${'TankRegistration'}`;
      downloadType = 'application/csv';
      title = 'TankRegistration.csv';
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
