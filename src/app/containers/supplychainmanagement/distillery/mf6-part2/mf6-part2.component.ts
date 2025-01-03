import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DistilleryapiService, DistileryService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mf6-part2',
  templateUrl: './mf6-part2.component.html',
  styleUrls: ['./mf6-part2.component.scss']
})
export class Mf6Part2Component implements OnInit, OnDestroy {

  mf6part2Obj: any = {
    date: '',
    sugarmill: ''
  }
  mf6list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distileryService: DistileryService,
    private router: Router,
    private distilleryapiService: DistilleryapiService
  ) { }

  ngOnInit() {
    this.getMf6datalist();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part2/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part2/edit', id]);
  }

  getMf6datalist() {
    this.distileryService.getMf6parttwo().subscribe((responceData: any) => {
      console.log(responceData);
      this.mf6list = responceData['data'];
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

  searchmf6partwolist() {
    const requestParam = {
      filters: {
        date: this.mf6part2Obj.date ? this.mf6part2Obj.date : null,
        sugarmill: this.mf6part2Obj.sugarmill ? this.mf6part2Obj.sugarmill : null,

      },
      pageNo: 0,
      paginationSize: 5
    };

    this.distileryService.getMf6parttwoById(requestParam).subscribe((responceData: any) => {
      this.mf6list = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.mf6part2Obj = {
      date: '',
      quantitysanction: '',
    };
    this.getMf6datalist();
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
