import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WholesaleTransportGenerationService } from '@app/services/wholesale/wholesale-transport-generation.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services'
import { Canceled, Completed, Inprogress } from '@app/models/wholesale/transportpass-gen';
import { MatTableDataSource } from '@angular/material/table';
import { transPortPassGenration } from '@app/config/wholesale/transportpass-gen.config';
@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.css']
})
export class ReconciliationComponent implements OnInit {
  // transitForm:FormGroup;
  transitpassInproliist: any;
  editId: any;
  transitpasscompletedliist: any;
  transitpassliistCom: any;
  canclledlistdata: any;
  tarnsListobj = {
    issueDate: '',
    transportDate: '',
    transportNo: '',
    statuss: '',

  }
  public actionBtnBasedOnCondInprogress = {
    edit: {
      column: 'transportPassStatus',
      condition: 'INPROGRESS',
    },
    view: {
      column: 'transportPassStatus',
      condition: 'INPROGRESS',
    },
  };
  public actionBtnBasedOnCondCompleted = {
    // edit: {
    //   column: 'status',
    //   condition: 'DRAFT',
    // },
    view: {
      column: 'transportPassStatus',
      condition: 'COMPLETED',
    },
  };
  public actionBtnBasedOnCondCanceled = {
    edit: {
      column: 'transportPassStatus',
      condition: 'CANCELLED',
    },
    view: {
      column: 'transportPassStatus',
      condition: 'CANCELLED',
    },
  };
  public actionKeysInprogrss = ['edit', 'view'];
  public actionKeysCompleted = ['view'];
  public actionKeysCanceled = ['edit', 'view'];

  public pageSizeInprogress = 5;
  public totalCountInprogress: number;
  public isSearchResInprogress = false;

  public pageSizeCompleted = 5;
  public totalCountCompleted: number;
  public isSearchResCompleted = false;

  public pageSizeCanceled = 5;
  public totalCountCanceled: number;
  public isSearchResCanceled = false;

  public dataSourceCompleted = new MatTableDataSource<Completed>();
  public dataSourceInprogress = new MatTableDataSource<Inprogress>();
  public dataSourceCanceled = new MatTableDataSource<Canceled>();

  public inprogress = transPortPassGenration.Inprogress;
  public completed = transPortPassGenration.Completed;
  public canceled = transPortPassGenration.Canceled;

  constructor(
    private router: Router, private ActivatedRoute: ActivatedRoute,
    // private apiservice:ApiService,
    private formbuilder: FormBuilder,
    private wholesaleTransportGenerationService: WholesaleTransportGenerationService,
    private alert: AlertService
  ) { }
  digitallocksList: any;
  selected: any;
  Pd18list: any;
  @ViewChild('tabSet', { static: false }) tabSet;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  transitpassliist: any;
  status: any;
  ngOnInit() {
    // this.buildPrescriptionFormGrp();
    this.list();
    this.ActivatedRoute.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setdata(this.editId)
      }
    })
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.TransitPassList()
    this.canclledlist()
    this.ActivatedRoute.queryParams.subscribe(params => {
      if (params.status) {
        let status = params.status;
        setTimeout(function () {
          let ele = document.getElementById(status);
          ele.click();
        }, 10);
      }
    });
  }
  setdata(id) {

  }
  // buildPrescriptionFormGrp() {
  //   this.transitForm = this.formbuilder.group({
  //     issueDate: [''],
  //     transportDate:[''],
  //     transportNo:[''],
  //     transportPassStatus:['']
  //   })
  // }

  search() {
    this.TransitPassList()
    this.list()
    this.canclledlist()
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
  TransitPassList(pageNo = 0, pageSizeCompleted = 5) {
    const paginationSize = pageSizeCompleted
    let params = {
      "filters": {
        "issueDate": this.tarnsListobj.issueDate ? this.tarnsListobj.issueDate : '',
        "transportDate": this.tarnsListobj.transportDate ? this.tarnsListobj.transportDate : '',
        "transportNo": this.tarnsListobj.transportNo ? this.tarnsListobj.transportNo : '',
        "transportPassStatus": 'COMPLETED'
      },
      // "fromDate": "",
      pageNo,
      paginationSize,
      // "search": "",
      // "sortField": "",
      // "sortOrder": "",
      // "toDate": ""
    }
    this.wholesaleTransportGenerationService.getAlltransitpass(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.transitpassliistCom = response.data.contents;
        this.dataSourceCompleted.data = response.data.contents as Completed[];;
        this.totalCountCompleted = response.data.totalElements;
        // console.log(this.transitpassliist);
        // this.transitpasscompletedliist=this.transitpassliist.filter((obj:any)=>{
        //   return obj.transportPassStatus == 'COMPLETED'
        // })
        // this.transitpassInproliist=this.transitpassliist.filter((obj:any)=>{
        //   return obj.transportPassStatus == 'INPROGRESS'
        // })
        // this.refreshTabIns();
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }
  // TransitPassList1(transitForm?) {
  //   let params ={ 
  //     "filters": {
  //       issueDate:'',
  //       // indentNo:'',
  //       transportNo:'',
  //       transportPassStatus:'COMPLETED'
  //     },
  //     // "fromDate": "",
  //     "pageNo": 0,
  //     "paginationSize": 10,
  //     // "search": "",
  //     // "sortField": "",
  //     // "sortOrder": "",
  //     // "toDate": ""
  // }
  //   this.wholesaleTransportGenerationService.getAlltransitpass(params).subscribe((response:any)=>{
  //     if(response){
  //       this.transitpassliist = response.data.contents;
  //       console.log(this.transitpassliist);
  //       this.transitpasscompletedliist=this.transitpassliist.filter((obj:any)=>{
  //         return obj.transportPassStatus == 'COMPLETED'
  //       })
  //       this.transitpassInproliist=this.transitpassliist.filter((obj:any)=>{
  //         return obj.transportPassStatus == 'INPROGRESS'
  //       })
  //       this.refreshTabIns();
  //     }
  //   })
  // }
  cancel() {
    this.tarnsListobj = {
      issueDate: '',
      transportDate: '',
      transportNo: '',
      statuss: '',
    }
    this.canclledlist()
    this.list()
    this.TransitPassList()
  }
  canclledlist(pageNo = 0, pageSizeCanceled = 5) {
    const paginationSize = pageSizeCanceled
    let params = {
      "filters": {
        "issueDate": this.tarnsListobj.issueDate ? this.tarnsListobj.issueDate : '',
        "transportDate": this.tarnsListobj.transportDate ? this.tarnsListobj.transportDate : '',
        "transportNo": this.tarnsListobj.transportNo ? this.tarnsListobj.transportNo : '',
        "transportPassStatus": 'CANCELLED'
      },
      // "fromDate": "",
      pageNo,
      paginationSize,
      // "search": "",
      // "sortField": "",
      // "sortOrder": "",
      // "toDate": ""
    }
    this.wholesaleTransportGenerationService.getAlltransitpass(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.canclledlistdata = response.data.contents;
        this.dataSourceCanceled.data = response.data.contents as Canceled[];;
        this.totalCountCanceled = response.data.totalElements;
        console.log(this.transitpassliist);

        // this.refreshTabIns();
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }
  list(pageNo = 0, pageSizeInprogress = 5) {
    const paginationSize = pageSizeInprogress
    let params = {
      "filters": {
        "issueDate": this.tarnsListobj.issueDate ? this.tarnsListobj.issueDate : '',
        "transportDate": this.tarnsListobj.transportDate ? this.tarnsListobj.transportDate : '',
        "transportNo": this.tarnsListobj.transportNo ? this.tarnsListobj.transportNo : '',
        "transportPassStatus": 'INPROGRESS'
      },
      // "fromDate": "",
      pageNo,
      paginationSize,
      // "search": "",
      // "sortField": "",
      // "sortOrder": "",
      // "toDate": ""
    }
    this.wholesaleTransportGenerationService.getAlltransitpass(params).subscribe((response: any) => {
      if (response.errorCode == 200) {
        this.transitpassliist = response.data.contents;
        this.dataSourceInprogress.data = response.data.contents as Inprogress[];;
        this.totalCountInprogress = response.data.totalElements;
        console.log(this.transitpassliist);

        // this.refreshTabIns();
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  view(event) {
    this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/view/' + event.id])
  }
  editt(event) {
    this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/add/' + event.id])
  }
  changestatus(status) {
    this.tabSet.select(status);
  }

}
