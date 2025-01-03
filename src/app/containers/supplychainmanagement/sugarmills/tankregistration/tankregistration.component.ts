import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, TankRegistrationService } from '@app/services';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { TankregestrationConfig } from '@app/config/table-config/tankregestration-config';
import { Tankregelist } from '@app/models/distillery';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: 'app-tankregistration',
  templateUrl: './tankregistration.component.html',
  styleUrls: ['./tankregistration.component.scss']
})

export class TankregistrationComponent implements OnInit {
  tankregList: any;
  selected: any;
  tanks = [];
  modulename: any;
  dateselected: any = moment().format('LLLL');
  tankreqObj = {
    registration_id: '',
    tank: '',
    total_capacity: '',
  };
  tankregistrationForm: any;
  //Data table
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Tankregelist>();
  public columns = TankregestrationConfig.columns;
  page: number;
  limit: any;
  workflowobj: any;

  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };
  constructor(
    private router: Router,
    private preview: PreviewService,
    private apiService: SugarmillapiService,
    private TankRegistrationService: TankRegistrationService,
    private wrokflowconfig: WorkflowcofigService
  ) { }

  ngOnInit() {
    this.gettank();
    this.workflow();
    this.getalltanks()
    this.modulename = localStorage.getItem('EntityType')
    this.preview.setData = '';
  }

  workflow(){
    this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL','SUGARMILL_TANK_REGISTRATION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getalltanks(pageNo, pageSize);
  }
  getalltanks(pageNo = 0, paginationSize = 5) {
    const postData = {
      filters: {
        registration_id: this.tankreqObj.registration_id ? this.tankreqObj.registration_id : null,
        tank_id: this.tankreqObj.tank ? this.tankreqObj.tank : null,
        total_capacity: this.tankreqObj.total_capacity ? this.tankreqObj.total_capacity : null
      },
      pageNo,
      paginationSize
    };
    this.TankRegistrationService.searchTanReg(postData).subscribe((resp: any) => {
      if (resp.data) {
        this.tankregList = resp.data.contents;
        this.dataSource.data = resp.data.contents as Tankregelist[];
        this.totalCount = resp.data.totalElements;
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }
  clearData() {
    this.tankreqObj.total_capacity = '';
    this.tankreqObj.tank = '';
    this.tankreqObj.registration_id = '';
    this.getalltanks();
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit', event.id]);
  }
  onView(event) {
    const findobj = this.tankregList.find(x => x.id == event.id)

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    console.log('is customer', iscustomer);
    if (iscustomer == 'true') {
      if (iscustomer == 'true' && findobj.status == 'SENDBACK') {
        this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit/', event.id]);
      }else{
        this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/view/', event.id]);
      }
    }else{
      this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit/', event.id]);
    }


    // if ((this.workflowobj && !this.workflowobj.isEditable) &&  findobj.status != 'SENDBACK' ){
    //   this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/view', event.id]);
    // } else {
    //   // 
    //   if(findobj.stage != this.workflowobj.assignedDesc && this.workflowobj.level== 'Level 1') {
    //     this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/view', event.id]);

    //   } else {
    //     this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit', event.id]);

    //   }
    // }
  }
  // gettank() {
  //   this.MasterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
  //     this.tanks = responceData.data;
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }
  gettank() {
    const postData = {
      filters: {
        registration_id: null,
        tank_id: null,
        total_capacity: null
      },
      pageNo: 0,
      paginationSize: 100
    };
    this.TankRegistrationService.searchTanRegs(postData).subscribe((responceData: any) => {
      if (responceData.data) {
        this.tanks = responceData.data.contents;
        // this.dataSource.data = responceData.data.contents as Mf9fortnight[];
        this.totalCount = responceData.data.totalElements;
      } else {
        this.dataSource.data = [];
        this.totalCount = 0;
      }
    })
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
}
