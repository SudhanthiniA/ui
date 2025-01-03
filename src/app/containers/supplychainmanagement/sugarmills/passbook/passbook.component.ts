import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.scss']
})
export class PassbookComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }
  passbookList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];

  ngOnInit() {
    this.getpassbook();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
  }
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/passbook/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/passbook/edit', id]);
  }
  getpassbook() {
    this.apiService.get(apiUrls.getAllPassbook).then((responceData: any) => {
      this.passbookList = responceData.data;
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
  exportFile(url, postData, downloadType,title) {
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
    let url, downloadType,title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      url = `download/pdf?screenName=${'Passbook'}`;
      downloadType = 'application/pdf';
      title= 'Passbook.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'Passbook'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title= 'Passbook.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'Passbook'}`;
      downloadType = 'application/csv';
      title= 'Passbook.csv'
    }
    this.exportFile(url, postData, downloadType,title);
    return true
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
