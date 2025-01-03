import { Component, OnInit,ViewChild } from '@angular/core';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { ReceivedImportPermitsConfig } from '@app/config/warehouse/received-import-permits.config';
import { ReceivedImportPrmit } from '@app/models/warehouse/receivedImportPermits';

@Component({
  selector: 'app-receivedimportpermits',
  templateUrl: './receivedimportpermits.component.html',
  styleUrls: ['./receivedimportpermits.component.scss']
})
export class ReceivedimportpermitsComponent implements OnInit {
  receviedData:any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = ReceivedImportPermitsConfig.titleSection.list;
  public breadcrumbs = ReceivedImportPermitsConfig.breadcrumbs;
  public columns = ReceivedImportPermitsConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ReceivedImportPrmit>();
  receviedPermitObj:any={
    indentNo: '',
    bottlingType:'',
  }

  constructor(    
    private receviedimportpermit: importpasspermitService,
    private datepipe: DatePipe,
    private route:ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    //this.getallrecevied();
    this.searchReceviedPermit();
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/receivedimportpermits/edit/' + event.id]);
  }

  onView(event) {
    // console.log('event::', event);
    let status = this.receviedData.find(item => item.id == event.id).importPermitIndentDetails.importPermitStatus;
    // + '/' + status
    this.router.navigate(['/supplychainmanagement/warehouse/receivedimportpermits/view' , event.id,status]);
  }

  getallrecevied() {
    this.receviedimportpermit.getimportstatus().subscribe((response:any)=>{
      if(response.status == 's'){ 
        this.receviedData = response.data;
      }
    })
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchReceviedPermit(pageNo, pageSize);
  }
 

  searchReceviedPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        indentNo: this.receviedPermitObj.indentNo ? this.receviedPermitObj.indentNo : null,
        bottlingType: this.receviedPermitObj.bottlingType ? this.receviedPermitObj.bottlingType : null,

      },
      pageNo,
      paginationSize,
    };

    this.receviedimportpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.receviedData = responceData.data.contents;
      this.dataSource.data = responceData.data.contents as ReceivedImportPrmit[];
      this.totalCount = responceData.data.totalElements;
      });
  }

  resetKey() {
    this.receviedPermitObj = {
      indentNo: '',
      bottlingtype:''
    };
    this.searchReceviedPermit();
  }
  

}
