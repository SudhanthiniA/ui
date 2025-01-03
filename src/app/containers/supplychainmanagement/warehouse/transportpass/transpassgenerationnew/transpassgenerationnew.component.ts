import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
// need to modify  importpasspermitService service file
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { SugarmillapiService, PreviewService, MasterapiService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableDirective } from 'angular-datatables';
import { AlertService } from '@app/services'
import { WarehouseTrnsportPassGenService } from '@app/services/ware-house';
import { TranspassGenerationnewConfig } from '@app/config/warehouse/transpassgenerationnew.config';
import { TranspassGenerationnewCancelConfig } from '@app/config/warehouse/tranpass-genration-cancel.config';
import { Dispatch } from '@app/models/wholesale/wholesale-data';
import { FormBuilder, FormGroup } from '@angular/forms';

// need to model class ImportPermitStatus to dispatch

@Component({
  selector: 'app-transpassgenerationnew',
  templateUrl: './transpassgenerationnew.component.html',
  styleUrls: ['./transpassgenerationnew.component.scss']
})
export class TranspassgenerationnewComponent implements OnInit, AfterViewInit {
  @ViewChild('tabSet', { static: false }) tabSet;

  transitForm: FormGroup;
  transitpassliistCom: any;
  transitpassliist: any;
  transitpasscompletedliist: any;
  canclledlistdata: any;
  transportStatus: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public actionKeys1 = ['view'];

  public pageSize = 5;
  public totalCount: number;
  public totalCount1: number;
  public isSearchRes = false;

  public titleSection = TranspassGenerationnewConfig.titleSection.list;
  public breadcrumbs = TranspassGenerationnewConfig.breadcrumbs;
  public columns = TranspassGenerationnewConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Dispatch>();
  public dataSource1 = new MatTableDataSource<Dispatch>();



  public titleSectionOne = TranspassGenerationnewCancelConfig.titleSection.list;
  public breadcrumbsOne = TranspassGenerationnewCancelConfig.breadcrumbs;
  public column = TranspassGenerationnewCancelConfig.columns;
  public lastText1 = 'master.common.list';
  public dataSource2 = new MatTableDataSource();
  dipatchData: any = {
    permitNumber: ''
  };
  selStatus = '';

  tpGeneration = {
    issueDate: '',
    transportDate: '',
    transportNo: '',
    transportPassStatus: ''
  }
  // onceapi redy integrated those values. and remove below code
  // data: any = [
  //   {
  //     id: 1,
  //     issueDate: "20-Apr-2021",
  //     transportDate: "20-Apr-2021",
  //     transportPassNo: "GP4879454",
  //     unitName: "Daurala Distillery",
  //     noofCasesRequested: 50,
  //     noofBottlesRequested: 500,
  //     status: "completed"
  //   }
  // ]


  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private fb: FormBuilder,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private alert: AlertService,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.list();
    this.route.params.subscribe(param => {
      if (param.status) {
        this.selStatus = param.status;
      }
    })
  }
  ngAfterViewInit() {
    if (this.selStatus) {
      this.tabchange(this.selStatus);
      this.cdr.detectChanges();
    }
  }
  buildPrescriptionFormGrp() {
    this.transitForm = this.fb.group({
      issueDate: [''],
      transportDate: [''],
      transportNo: [''],
      transportPassStatus: ['']
    })
  }
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transpassgenerationnew/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transpassgenerationnew/view/' + event.id]);
  }

  handlePagination1(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.list(pageNo, pageSize);
  }
  handlePagination2(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.TransitPassList(pageNo, pageSize);
  }
  handlePagination3(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.canclledlist(pageNo, pageSize);
  }


  search() {
    const tabelement = document.getElementById(this.transportStatus) as HTMLAnchorElement;
    tabelement.click();
    this.TransitPassList()
    this.list()
    this.canclledlist()
  }
  tabClick(event) {
    let value = event.nextId
    if (value == 'COMPLETED') {
      this.TransitPassList()
    } else {
      if (value == 'CANCELLED') {
        this.canclledlist()
      }
    }
    if (value == 'INPROGRESS') {
      this.list();
    }
  }


  list(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let params = {
      filters: {
        issueDate: this.transitForm.value.issueDate,
        transportDate: this.transitForm.value.transportDate,
        transportNo: this.transitForm.value.transportNo,
        transportPassStatus: "INPROGRESS"
      },
      pageNo,
      paginationSize,
    }
    this.warehouseTrnsportPassGenService.getAlltransportPassLazySearch(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.dataSource.data = response.data.contents as Dispatch[];
        this.totalCount = response.data.totalElements;
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }


  TransitPassList(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let params = {
      filters: {
        issueDate: this.transitForm.value.issueDate,
        transportDate: this.transitForm.value.transportDate,
        transportNo: this.transitForm.value.transportNo,
        transportPassStatus: 'COMPLETED'
      },
      pageNo,
      paginationSize,
    }
    this.warehouseTrnsportPassGenService.getAlltransportPassLazySearch(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.dataSource1.data = response.data.contents as Dispatch[];
        this.totalCount1 = response.data.totalElements;
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }
  cancel() {
    this.transitForm.reset();
    this.dipatchData = {
      issueDate: '',
      transportDate: '',
      transportNo: '',
    }
    this.TransitPassList()
    this.list()
    this.canclledlist()
  }



  canclledlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    let params = {
      filters: {
        issueDate: this.transitForm.value.issueDate,
        transportDate: this.transitForm.value.transportDate,
        transportNo: this.transitForm.value.transportNo,
        transportPassStatus: "CANCELLED"
      },
      pageNo,
      paginationSize,
    }
    this.warehouseTrnsportPassGenService.getAlltransportPassLazySearch(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.dataSource2.data = response.data.contents;
        this.totalCount = response.data.totalElements;
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }
 
  changestatus(status) {
    this.transportStatus = status;
  }

  tabchange(status) {
    const tabelement = document.getElementById(status) as HTMLAnchorElement;
    tabelement.click();
  }
  changePrimesType(status) {
    this.tabSet.select(status);
  }

}
