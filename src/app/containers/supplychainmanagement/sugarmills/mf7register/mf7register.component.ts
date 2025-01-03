import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService, PreviewService, FortnightyStatementService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService } from '@app/services';
@Component({
  selector: 'app-mf7register',
  templateUrl: './mf7register.component.html',
  styleUrls: ['./mf7register.component.scss']
})
export class Mf7registerComponent implements OnInit {
  constructor(private preview: PreviewService, private FortnightyStatementService: FortnightyStatementService, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService, private alert: AlertService) { }
  mf7List: any;
  selected: any;
  registerForm: any;
  mf7Obj: any = {
    tank_number: '',
    qty_of_molasses_tanks: '',
    depth_of_molasses_tanks_cms: ''
  }
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  ngOnInit() {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      pageLength: 5,
      autoWidth: false,
      ajax: (dataTablesParameters: any, callback) => {
        const { start, length: limit } = dataTablesParameters;
        const page = (start > 0) ? (start / limit) : 0;
        const postData = {
          filters: {
            tank_number: this.mf7Obj.tank_number ? this.mf7Obj.tank_number : null,
            qty_of_molasses_tanks: this.mf7Obj.qty_of_molasses_tanks ? this.mf7Obj.qty_of_molasses_tanks : null,
            depth_of_molasses_tanks_cms: this.mf7Obj.depth_of_molasses_tanks_cms ? this.mf7Obj.depth_of_molasses_tanks_cms : null
          },
          pageNo: page,
          paginationSize: limit
        };
        that.FortnightyStatementService.searchFortnighty(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.mf7List = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: []
            });

          } else {
            that.mf7List = [];
          }
        });
      },
      columns: [
        { data: 'id' },
        { data: 'tankNumber' },
        { data: 'qtyOfMolassesTanks' },
        { data: 'depthOfMolassesTanksCms' },
        { data: 'brixPercentage' },
        { data: 'nameOfAnalyst' },
        { data: 'status' }
      ],
    };
    this.preview.setData = ''
  }
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/mf7register/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/mf7register/edit', id]);
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
      url = `download/pdf?screenName=${'ForenightlyStatement'}`;
      downloadType = 'application/pdf';
      title = 'Forenightly_Statement.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'ForenightlyStatement'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'Forenightly_Statement.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'ForenightlyStatement'}`;
      downloadType = 'application/csv';
      title = 'Forenightly_Statement.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }
  getSearchData() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
