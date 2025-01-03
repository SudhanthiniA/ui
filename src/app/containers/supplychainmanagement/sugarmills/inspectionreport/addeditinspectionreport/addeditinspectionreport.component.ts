import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {
  AlertService,
  InspectionReportService,
  ApiService,
  MasterapiService,
  PreviewService,
  CommonService
} from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addeditinspectionreport',
  templateUrl: './addeditinspectionreport.component.html',
  styleUrls: ['./addeditinspectionreport.component.scss']
})
export class AddeditinspectionreportComponent implements OnInit {
  inspectionData: any = {
    inspectionDate: '',
    verificationTypeId: '',
    steelTankNumberId: '',
    dryDipMeter: '',
    wetDipMeter: '',
    molassesInLiter: '',
    molassesInQuintal: '',
    trs: '',
    brix: '',
    openingBalance: '',
    recieptBalance: '',
    total: '',
    actualBalance: '',
    wastage: ''
  };
  editId: any;
  formSubmitted = false;
  virificationtype: any;
  tanktypeno: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  inspectionreportLists: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  gettanktype: any;
  balancess: any;
  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private router: Router,
    private datepipe: DatePipe,
    private inspectionReportService: InspectionReportService,
    private alert: AlertService,
    private jsonApiService: ApiService,
    private preview: PreviewService,
    private modalService: NgbModal,
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.getvirifictiontype();
    this.gettankno();
    // this.getinspectionlist();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      searching: false,
      lengthMenu: [4, 10, 20, 50, 100]
    };
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
      else if (this.preview.setData) {
        this.inspectionData = this.preview.setData;
      }
    });
  }
  autopopulatedbalace(id) {
    this.inspectionReportService.getbalancess(id).subscribe((responceData: any) => {
      this.balancess = responceData.data;
      // this.inspectionData.patchValue({
      this.inspectionData.openingBalance = this.balancess.openingBalance
      this.inspectionData.recieptBalance = this.balancess.recieptBalance ? this.balancess.recieptBalance : 0;
      this.inspectionData.total = this.balancess.total
      this.inspectionreportLists = this.balancess.inspectionReportEntity
      // })
    })
  }
  wastegebalance() {
    //  patchValue({
    this.inspectionData.wastage = (this.inspectionData.total) - (this.inspectionData.actualBalance)
    if (this.inspectionData.wastage < 0) {
      this.inspectionData.wastage = 0
    }
    // })
  }
  getvirifictiontype() {
    this.masterapiService.get(`${apiUrls.verificationType}`).then((responceData: any) => {
      if (responceData.status === 's') {
        this.virificationtype = responceData.data;
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  gettankno() {
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
        this.tanktypeno = responceData.data.contents;
      }
    })
  }
  setData(id) {
    this.inspectionReportService.getInspectionReportId(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.inspectionData = responceData.data;
        const inspectionDate = this.datepipe.transform(this.inspectionData.inspectionDate, 'yyyy-MM-dd');
        this.inspectionData.inspectionDate = inspectionDate;
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    })
  }
  saveinspection(inspectionform, method) {
    this.formSubmitted = false;
    if (inspectionform.valid === false) {
      this.formSubmitted = true;
      return false;
    }
    const modalRef = this.modalService.open(CommonPopupComponent);
    modalRef.result.then(respData => {
      if (respData) {
        const inspectionReportService = this.inspectionReportService;
        if (this.editId) {
          this.inspectionData[`id`] = this.editId;
          this.inspectionData[`method`] = method;
          this.inspectionData[`modifiedBy`] = 'Admim';
          this.inspectionData[`status`] = 1;
        } else {
          this.inspectionData[`method`] = method;
          this.inspectionData[`createdBy`] = 'Admim';
          this.inspectionData[`status`] = 1;
        }
        ((this.editId) ? inspectionReportService.updateInspectionReport(this.inspectionData) : inspectionReportService.addInspectionReport(this.inspectionData)).subscribe((responceData: any) => {
          this.handleResponse(responceData)
        })
      }
    }).catch(err => {
      console.log('\n err...', err);
    });

  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/inspectionreport/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  previewinspection(inspectionform) {
    this.formSubmitted = false;
    if (inspectionform.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      console.log(this.inspectionData)
      this.preview.setData = this.inspectionData
      this.router.navigate(['/supplychainmanagement/sugarmills/inspectionreport/preview']);
    }

  }
  getinspectionlist() {
    this.jsonApiService.get('inspectionreportList/').then(responceData => {
      this.inspectionreportLists = responceData;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  showprvrecords(data) {
    console.log('data', data);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  getverificationtype(id) {
    const fidobj = this.virificationtype.find(x => x.id === id)
    return fidobj.name;
  }
}
