import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { apiUrls } from '@appEnv/apiurls';
import { MatTableDataSource } from '@angular/material/table';
import { Inspectionreportconfig } from '@app/config/table-config/inspectionreport-config';
import { Inspectionreport } from '@app/models/sugarmill';
import { SugarmillapiService, PreviewService, InspectionReportService, MasterapiService } from '@app/services';

@Component({
  selector: 'app-inspectionreport',
  templateUrl: './inspectionreport.component.html',
  styleUrls: ['./inspectionreport.component.scss']
})
export class InspectionreportComponent implements OnInit {

  inspectionreportLists: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  tankTypeNo: any;
  verificationType: any;
  inspectionForm: any;
  inspectionObj: any = {
    verificationTypeId: '',
    steel_tank_number: '',
    ins_date: ''
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Inspectionreport>();
  public columns = Inspectionreportconfig.columns;

  constructor(
    private router: Router,
    private inspectionReportService: InspectionReportService,
    private masterapiService: MasterapiService,
    private preview: PreviewService,
    private apiService: SugarmillapiService
  ) { }

  ngOnInit() {
    this.getreports();
    this.getVerifictionType();
    this.getTankNo();
    this.preview.setData = '';
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getreports(pageNo, pageSize);
  }

  getreports(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        verificationTypeId: this.inspectionObj.verificationTypeId ? this.inspectionObj.verificationTypeId : null,
        steel_tank_number: this.inspectionObj.steel_tank_number ? this.inspectionObj.steel_tank_number : null,
        ins_date: this.inspectionObj.ins_date ? this.inspectionObj.ins_date : null
      },
      pageNo,
      paginationSize
    };
    this.inspectionReportService.searchInspectionReport(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.dataSource.data = resp.data.contents as Inspectionreport[];
        this.totalCount = resp.data.totalElements;
      } else {
        this.dataSource.data = [];
        this.totalCount = 0;
      }
    });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/inspectionreport/edit', event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/inspectionreport/view', event.id]);
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
      link.download = title;
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
      url = `download/pdf?screenName=${'InspectionReport'}`;
      downloadType = 'application/pdf';
      title = 'Inspection_Report.pdf';
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'InspectionReport'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'Inspection_Report.xlsx';
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'InspectionReport'}`;
      downloadType = 'application/csv';
      title = 'Inspection_Report.csv';
    }
    this.exportFile(url, postData, downloadType, title);
    return true;
  }

  getVerifictionType() {
    this.masterapiService.get(`${apiUrls.verificationType}`).then((responceData: any) => {
      console.log(responceData.data);
      if (responceData.status === 's') {
        this.verificationType = responceData.data;
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getTankNo() {
    const postData = {
      filters: {
        registration_id: null,
        tank_id: null,
        total_capacity: null
      },
      pageNo: 0,
      paginationSize: 100
    };
    this.inspectionReportService.searchTanReg(postData).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.tankTypeNo = responceData.data.contents;
      }
    });
  }

  clearData() {
    this.inspectionObj.verificationTypeId = '';
    this.inspectionObj.steel_tank_number = '';
    this.inspectionObj.ins_date = '';
    this.getreports();
  }
}
