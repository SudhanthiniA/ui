import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService, PreviewService, TankRegistrationService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MasterapiService } from '@app/services';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-tankregelist',
  templateUrl: './tankregelist.component.html',
  styleUrls: ['./tankregelist.component.scss']
})
export class TankregelistComponent implements OnInit {

  tankregList: any;
  selected: any;
  tanks = [];
  modulename:any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  tankreqObj = {
    registration_id: '',
    tank: '',
    total_capacity: '',
  };
  tankregistrationForm: any;
  constructor(
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService,
    private TankRegistrationService: TankRegistrationService
  ) { }

  ngOnInit() {
    this.gettank();
    this.modulename = localStorage.getItem('EntityType')
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      pageLength: 500,
      autoWidth: false,
      ajax: (dataTablesParameters: any, callback) => {
        const { start, length: limit } = dataTablesParameters;
        const page = (start > 0) ? (start / limit) : 0;
        let str;
        if (this.tankreqObj.registration_id) {
          str = this.tankreqObj.registration_id.substring(3)
        }
        const postData = {
          filters: {
            registration_id: str ? str : null,
            tank_id: this.tankreqObj.tank ? this.tankreqObj.tank : null,
            total_capacity: this.tankreqObj.total_capacity ? this.tankreqObj.total_capacity : null
          },
          pageNo: page,
          paginationSize: limit
        };
        that.TankRegistrationService.searchTanReg(postData).subscribe((resp: any) => {
          if (resp.data) {
            that.tankregList = resp.data.contents;
            callback({
              recordsTotal: resp.data.totalElements,
              recordsFiltered: resp.data.totalElements,
              data: []
            });

          } else {
            that.tankregList = [];
          }
        });
      },
      columns: [
        { data: 'id' },
        { data: 'tankName' },
        { data: 'capacity' },
        { data: 'height' },
        { data: 'width' },
        { data: 'innerDiameter' },
        { data: 'status' },
        { data: 'requestDate' }
      ],
    };
    this.preview.setData = '';
  }

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit', id]);
  }

  gettank() {
    this.MasterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
      this.tanks = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  searchapi() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
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
      url = `download/pdf?screenName=${'TankRegistration'}`;
      downloadType = 'application/pdf';
      title = 'TankRegistration.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'TankRegistration'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'TankRegistration.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'TankRegistration'}`;
      downloadType = 'application/csv';
      title = 'TankRegistration.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
