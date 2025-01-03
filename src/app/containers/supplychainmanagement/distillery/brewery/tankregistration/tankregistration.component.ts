import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarmillapiService, PreviewService, TankregistartionService,WorkflowcofigService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TankregestrationConfig } from '@app/config/table-config/tankregestration-config';
import { Tankregelist } from "@app/models/distillery";

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
  workflowobj:any;

  tankreqObj = {
    registration_id: '',
    tank: '',
    total_capacity: '',
  };
  tankregistrationForm: any;
  //Data table
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT'||'SENDBACK',
    },
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Tankregelist>();
  public columns = TankregestrationConfig.columns;
  page: number;
  limit: any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private apiService: SugarmillapiService,
    private workflowService: WorkflowcofigService,
    private TankRegistrationService: TankregistartionService
  ) { }

  ngOnInit() {
    // this.gettank();
    this.getalltanks();
    this.getworkflow();
    this.modulename = localStorage.getItem('EntityType')
    this.preview.setData = '';
  }
  handlePagination(event) {
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getalltanks(pageNo, pageSize);
  }
  getalltanks(page = 0, pageSize = 5) {
    // const postData = {
    //   filters: {
    //     registration_id: this.tankreqObj.registration_id ? this.tankreqObj.registration_id : null,
    //     tank_id: this.tankreqObj.tank ? this.tankreqObj.tank : null,
    //     total_capacity: this.tankreqObj.total_capacity ? this.tankreqObj.total_capacity : null
    //   },
    //   pageNo,
    //   paginationSize
    // };

    console.log('search data ==>>',this.tankreqObj.registration_id);
    
    const postData={
            orderBy: "asc",
            page,
            pageSize,
            searchInput:this.tankreqObj.registration_id,
            sortBy: "createdDate"
    }
    this.TankRegistrationService.searchTanReg(postData).subscribe((resp: any) => {
      if (resp.content) {
        console.log('responce data ==>>',resp.content.content);
        
        // this.tankregList = resp.data.contents;
        this.dataSource.data = resp.content.content as Tankregelist[];
        this.totalCount = resp.content.totalElements;
      }
      else{
        this.dataSource.data = []; 
        this.totalCount = 0;
      }
    });
  }
  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','Tank Registration').subscribe((resp: any) => {
      this.workflowobj = resp.content
      
    })
  
  
  }
  clearData() {
    this.tankreqObj.total_capacity = '';
    this.tankreqObj.tank = '';
    this.tankreqObj.registration_id = '';
    this.getalltanks();
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/edit', event.id]);
  }
  onView(event) {
    console.log('event==>.',event.id);
    
    this.router.navigate(['/supplychainmanagement/distillery/tankregistration/view', event.id]);
  }
  // gettank() {
  //   this.MasterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
  //     this.tanks = responceData.data;
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }
  // gettank() {
  //   const postData = {
  //     filters: {
  //       registration_id: null,
  //       tank_id: null,
  //       total_capacity: null
  //     },
  //     pageNo: 0,
  //     paginationSize: 100
  //   };
  //   this.TankRegistrationService.searchTanRegs(postData).subscribe((responceData: any) => {
  //     if (responceData.status === 's') {
  //       this.tanks = responceData.data;
  //     }
  //   })
  // }
  // exportFile(url, postData, downloadType, title) {
  //   this.apiService.postDownload(url, postData).then((responceData: any) => {
  //     const newBlob = new Blob([responceData], { type: downloadType });
  //     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //       window.navigator.msSaveOrOpenBlob(newBlob);
  //       return;
  //     }
  //     const data = window.URL.createObjectURL(newBlob);
  //     const link = document.createElement('a');
  //     link.href = data;
  //     link.download = title
  //     link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  //     return true;

  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }

  // getPdfData1(type: any) {
  //   let url, downloadType, title;
  //   const postData = {
  //     filters: {},
  //     pageNo: 0,
  //     paginationSize: 5
  //   };
  //   if (type == 'downloadPdf') {
  //     url = `download/pdf?screenName=${'TankRegistration'}`;
  //     downloadType = 'application/pdf';
  //     title = 'TankRegistration.pdf'
  //   }
  //   if (type == 'downloadExcel') {
  //     url = `download/excel?screenName=${'TankRegistration'}`;
  //     downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
  //     title = 'TankRegistration.xlsx'
  //   }
  //   if (type == 'downloadCsv') {
  //     url = `download/csv?screenName=${'TankRegistration'}`;
  //     downloadType = 'application/csv';
  //     title = 'TankRegistration.csv'
  //   }
  //   this.exportFile(url, postData, downloadType, title);
  //   return true
  // }

}
