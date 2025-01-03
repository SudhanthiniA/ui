import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';

import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
@Component({
  selector: 'app-registrationrequest',
  templateUrl: './registrationrequest.component.html',
  styleUrls: ['./registrationrequest.component.scss']
})
export class RegistrationrequestComponent implements OnInit, OnDestroy {

  registrationList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.getregistrationList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/edit', id]);
  }
  getregistrationList() {
    this.apiService.get(apiUrls.getAllSugarMillReg).then((responsecontents: any) => {
      if (responsecontents.errorCode == 200) {
        this.registrationList = responsecontents.data;
      }
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
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
      url = `download/pdf?screenName=${'RegistrationRequest'}`;
      downloadType = 'application/pdf';
      title = 'RegistrationRequest.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'RegistrationRequest'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'RegistrationRequest.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'RegistrationRequest'}`;
      downloadType = 'application/csv';
      title = 'RegistrationRequest.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }

}
