import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SugarmillapiService, IndentRequestService, MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { MatTableDataSource } from '@angular/material/table';
import { Indentrequestconfig } from '@app/config/table-config/indentrequest-config';
import { Indentrequest } from '@app/models/retails';

@Component({
  selector: 'app-orderrequest',
  templateUrl: './orderrequest.component.html',
  styleUrls: ['./orderrequest.component.scss']
})
export class OrderrequestComponent implements OnInit {
  orderrequestList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  locationData: any;
  indentObj = {
    id: '',
    distillery: '',
    indentquantity: '',
    location: ''
  };
  indentForm: any;
  //data table 
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Indentrequest>();
  public columns = Indentrequestconfig.columns;

  constructor(
    private router: Router,
    private IndentRequestService: IndentRequestService,
    private MasterapiService: MasterapiService,
    private apiService: SugarmillapiService
  ) { }

  ngOnInit() {
    this.getindentlist();
    this.getAllLocation();
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getindentlist(pageNo, pageSize);
  }

  getindentlist(pageNo = 0, paginationSize = 5,location?) {
    const postData = {
      filters: {
        id: this.indentObj.id ? this.indentObj.id : null,
        distillery: this.indentObj.distillery ? this.indentObj.distillery : null,
        indentquantity: this.indentObj.indentquantity ? this.indentObj.indentquantity : null,
        location: this.indentObj.location ? this.indentObj.location : null
      },
      pageNo,
      paginationSize
    };
    this.IndentRequestService.searchIndent(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.dataSource.data = resp.data.contents as Indentrequest[];
        this.totalCount = resp.data.totalElements;
      } else  {
        this.dataSource.data = [];
        this.totalCount = 0;
      }
    });
  }

  clearData() {
    this.indentObj.id = '';
    this.indentObj.distillery = '';
    this.indentObj.indentquantity = '';
    this.indentObj.location = '';
    this.getindentlist();
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/indentrequest/view', event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/indentrequest/view', event.id]);
  }

  getAllLocation() {
    this.MasterapiService.get(apiUrls.getAllLocation).then((responceData: any) => {
      this.locationData = responceData.data;
      console.log('locations',responceData)
    }).catch((err: any) => {
      console.log('\n err...', err);
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
      url = `download/pdf?screenName=${'OrderRequest'}`;
      downloadType = 'application/pdf';
      title = 'OrderRequest.pdf'
    }
    if (type == 'downloadExcel') {
      url = `download/excel?screenName=${'OrderRequest'}`;
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'OrderRequest.xlsx'
    }
    if (type == 'downloadCsv') {
      url = `download/csv?screenName=${'OrderRequest'}`;
      downloadType = 'application/csv';
      title = 'OrderRequest.csv'
    }
    this.exportFile(url, postData, downloadType, title);
    return true
  }

  navigatetransportgeneration(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/add', id]);
  }

}
