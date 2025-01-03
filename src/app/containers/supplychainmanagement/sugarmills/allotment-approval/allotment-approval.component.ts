import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
@Component({
  selector: 'app-allotment-approval',
  templateUrl: './allotment-approval.component.html',
  styleUrls: ['./allotment-approval.component.css']
})
export class AllotmentApprovalComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }
  stockList: any;
  selected: any;
  gradelist = [{ id: 1, name: 'C-Heavy' }, { id: 2, name: 'B-Heavy' }];
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  locationlist = [{ id: 1, name: 'UAE' }, { id: 2, name: 'kenya' }];

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true,
      infoCallback: (oSettings, iStart, iEnd, iMax, iTotal, sPre) => {
        const showArr = sPre.split(' ');
        return showArr[0] + ' ' + showArr[3] + ' ' + showArr[4] + ' ' + showArr[5] + ' ' + showArr[6];
      }
    };
  }
  exportFile(url, postData, downloadType, title) {
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
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'AllotmentApproval'}`;
      downloadType = 'application/pdf';
      title = 'AllotmentApproval.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'AllotmentApproval'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'AllotmentApproval.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'AllotmentApproval'}`;
      downloadType = 'application/csv';
      title = 'AllotmentApproval.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/allotment-approval/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockin/edit', id]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
