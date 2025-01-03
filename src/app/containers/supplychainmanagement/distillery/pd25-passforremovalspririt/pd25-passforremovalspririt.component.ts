import { Component, OnInit } from '@angular/core';
import { DistilleryapiService, DistileryService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pd25-passforremovalspririt',
  templateUrl: './pd25-passforremovalspririt.component.html',
  styleUrls: ['./pd25-passforremovalspririt.component.css']
})
export class Pd25PassforremovalspriritComponent implements OnInit {
  pd25searchObj: any = {
    permitNo: '',
    date: ''
  };
  pd25List: any;

  public actionKeys = ['edit', 'view'];
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "INITIATED",
    },
  };

  // public actionKeys;
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource();
  public columns = [
    {
      name: 'id',
      displayName: '#',
      type: 'number'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'date',
      dateFormat: 'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'nameOfConsignee',
      displayName: 'Name of Consignee',
      type: 'string',
      // dateFormat:'dd-MMM-yyyy hh:mm a'
    },
    {
      name: 'nameOfPlace',
      displayName: 'Name of place to which',
      type: 'string'
    },
    {
      name: 'permitNo',
      displayName: 'Permit No.',
      type: 'string'
    },
    {
      name: 'permitDate',
      displayName: 'Permit Date',
      type: 'string',
    },
    // {
    //   name: "status",
    //   displayName: "Status",
    //   type: 'options',
    //   badgeColors: {
    //     'SUMITTED': 'badge-success',
    //     'APPROVED': 'badge-primary',
    //     'REJECTED': 'badge-danger',
    //     'INITIATED':'badge-warning'
    //   },

    // }


  ];

  constructor(
    public distilleryapiService: DistilleryapiService,
    private distileryService: DistileryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPD26datalist();
  }

  getPD26datalist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const payload = {
      filters: {
        // from: this.pd8searchObj.from ? this.pd8searchObj.from : null,
        // to: this.pd8searchObj.to ? this.pd8searchObj.to : null
      },
      pageNo,
      paginationSize
    };
    this.distileryService.getPd25().subscribe(responceData => {
      // this.pd25List = responceData['data'];
      this.totalCount = 1;
      // this.dataSource.data = responceData.data.contents;
      this.dataSource.data = responceData.data;
    });
  }

  searchapi() {
    const requestParam = {
      filters: {
        date: this.pd25searchObj.date ? this.pd25searchObj.date : null,
        permitNo: this.pd25searchObj.permitNo ? this.pd25searchObj.permitNo : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchPd25(requestParam).subscribe((responceData: any) => {
      this.pd25List = responceData.data.contents;
      // this.refreshTabIns();
    });
  }

  resetKey() {
    this.pd25searchObj = {
      permitNo: '',
      date: ''
    };
    this.getPD26datalist();
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type === 'downloadPdf') {
      url = `download/pdf?screenName=${'indentRequest'}`;
      downloadType = 'application/pdf';
      title = 'indentRequest.pdf';
    }
    if (type === 'downloadExcel') {
      url = `download/excel?screenName=${'indentRequest'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'indentRequest.xlsx';
    }
    if (type === 'downloadCsv') {
      url = `download/csv?screenName=${'indentRequest'}`;
      downloadType = 'application/csv';
      title = 'indentRequest.csv';
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
      link.download = title
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      return true;

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd25-passforremovalspirit/edit' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/pd25-passforremovalspirit/view' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getPD26datalist(pageNo, pageSize);
  }
  
}
