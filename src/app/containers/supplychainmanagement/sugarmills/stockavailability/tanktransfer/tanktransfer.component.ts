import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Router, ActivatedRoute } from '@angular/router';
import { TanktransferService, } from '@app/services/sugarmill/tanktransfer.service';
import { AlertService, StockInService, SugarmillapiService, MasterapiService } from '@app/services';
import { apiUrls } from 'src/environments/apiurls';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import * as moment from 'moment';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: 'app-tanktransfer',
  templateUrl: './tanktransfer.component.html',
  styleUrls: ['./tanktransfer.component.scss']
})
export class TanktransferComponent implements OnInit {
  tanktransfer: any = {
    reqdate: '',
    transOrEmpt: '',
    tankName: '',
    transQty: '',
    toTankGrade: '',
    transTo: '',
    capacity: '',
    avlQty: '',
    fromTankGrade: '',
    reason: '',
    fromTankAssetId: 10,
    toTankAssetId: 9,
    id: 0,
  "createdBy": "",
  "createdDate": "",
  "modifiedBy": " ",
  "modifiedDate": " ",
  "status": " ",
 
  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  tankList: any;
  viewId: any;
  stockavailabilityObj: any;
  tankData: any;
  tankDetails: any;
  gradeData: any;
  formSubmitted: boolean;
  mindate:any = new Date();
  workflowobj: any;
  totankId: any;

  constructor(private router: Router, private masterapiService: MasterapiService, private route: ActivatedRoute, private apiservice: TanktransferService,
    private alert: AlertService,private modalService: NgbModal, private StockInService: StockInService,
     private apiService: SugarmillapiService,private wrokflowconfig:WorkflowcofigService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });
    this.getTankLists()
    this.getAllGrade();
    this.mindate = moment(this.mindate).format('yyyy-MM-DD');

  }

  getTankbyid(id) {
    this.StockInService.getTankDetails(id).subscribe((responceData: any) => {
      let data = responceData.data;
      this.tanktransfer.tankName = data.id;
      this.getTankDetail(data.id);
      if (data.molassesTypeResponseDto) {
        console.log('molasesid',data.molassesTypeResponseDto)
        this.tanktransfer.fromTankGrade = data.molassesTypeResponseDto ? data.molassesTypeResponseDto.id : null;
        this.getTankByGradeId(data.molassesTypeResponseDto.id)
      }
      else {
        this.tanktransfer.fromTankGrade = data.productTypeResponseDto ? data.productTypeResponseDto.id : null;
        this.getTankByGradeId(data.productTypeResponseDto.id)
      }
    })
  }
  getTankByGradeId(id) {
    this.StockInService.getTanksByGrade(id).subscribe((resp: any) => {
      this.tankDetails = resp.data;
    })
  }
  tankbyid(id) {
    this.totankId = id
    this.StockInService.getTankDetail(id).subscribe((resp: any) => {
      this.tanktransfer.capacity = resp.data.totalCapacity;
      this.tanktransfer.avlQty = resp.data.availableCapacity;
      this.getFromGrade(id)
    })
  }
  getFromGrade(id) {
    this.StockInService.getTankDetails(id).subscribe((responceData: any) => {
      let data = responceData.data;
      if (data.molassesTypeResponseDto) {
        this.tanktransfer.toTankGrade = data.molassesTypeResponseDto ? data.molassesTypeResponseDto.id : null;
      }
      else {
        this.tanktransfer.toTankGrade = data.productTypeResponseDto ? data.productTypeResponseDto.id : null;
      }
    })
  }
  getTankLists() {
    const postData = { "filters": { "registration_id": null, "tank_id": null, "total_capacity": null }, "pageNo": 0, "paginationSize": 500 }
    this.StockInService.searchTanReg(postData).subscribe((resp: any) => {
      this.tankList = resp.data.contents;
    })
    this.wrokflowconfig.getworkflowbydesignation('SUGAR_MILL','Tank Transfer').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  getAllGrade() {
    this.masterapiService.get(apiUrls.getAllMolassesType).then((responceData: any) => {
      this.gradeData = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  getTankDetail(id) {
    this.StockInService.getTankDetail(id).subscribe((resp: any) => {
      this.tanktransfer.transQty = resp.data ? resp.data.occupiedCapacity : null;
    })
  }

  tanktransferdata(form) {
    alert('hi')
    this.formSubmitted = false;
    if (form.valid === false) {
      this.alert.showError('Please fill required Fields', 'error');
      this.formSubmitted = true;
      return false;
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          this.tanktransfer[`createdBy`]= '';
          this.tanktransfer[`createdDate`] = this.tanktransfer.reqdate;
          this.tanktransfer[`fromTankId`] = this.viewId;
          this.tanktransfer[`toTankId`] = this.totankId;
        
      this.apiservice.addTantransfer(this.tanktransfer).subscribe((responceData: any) => {
        this.handleResponse(responceData)
      })
    }
  })
    }
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
}
