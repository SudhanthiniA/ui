import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MasterapiService, DistileryService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-pd22-registerofissuance',
  templateUrl: './pd22-registerofissuance.component.html',
  styleUrls: ['./pd22-registerofissuance.component.css']
})
export class Pd22RegisterofissuanceComponent implements OnInit, OnDestroy {
  indentrequestData: any;
  pd22list: any;
  districtlist: any[] = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  pd22Obj: any = {
    date: '',
    districtId: ''
  };

  constructor(
    private distileryService: DistileryService,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getPd22records();
    this.getdistrict();
  }
  
  getPd22records() {
    this.distileryService.getPd22().subscribe(responceData => {
      console.log(responceData);
      this.pd22list = responceData['data'];
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
    this.pd22Obj.districtId = parseInt(this.pd22Obj.districtId);
    const requestParam = {
      filters: {
        date: this.pd22Obj.date ? this.pd22Obj.date : null,
        districtId: this.pd22Obj.districtId ? this.pd22Obj.districtId : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.distileryService.searchPd22(requestParam).subscribe((responceData: any) => {
      this.pd22list = responceData.data.contents;
      this.refreshTabIns();
    });
  }

  resetKey() {
    this.pd22Obj = {
      date: '',
      districtId: '',
    };
    this.getPd22records();
  }

  getdistrict() {
    this.masterapiService.get(apiUrls.getAllDistrict).then((responceData: any) => {
      console.log(responceData);
      this.districtlist = responceData.data;
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
    // this.exportFile(url, postData, downloadType, title);
    return true;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
