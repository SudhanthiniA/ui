import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Router, ActivatedRoute } from '@angular/router';
import { TankConversionService, StockInService, MasterapiService, AlertService } from '@app/services';

@Component({
  selector: 'app-tankconversion',
  templateUrl: './tankconversion.component.html',
  styleUrls: ['./tankconversion.component.scss']
})
export class TankconversionComponent implements OnInit {
  tankconverstion: any = {
    date: '',
    tankname: '',
    // assisid:'',
    tankgrade: 'grade 1',
    convertto: '',
    balenceqtl: 1000,
    reasonforconversion: ''
  };
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  viewId: any;
  tankList: any;
  tankGradeList: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tankconversionservice: TankConversionService,
    private stockInService: StockInService,
    private masterapiService: MasterapiService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        console.log('params', params);
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });

    this.getTankLists();
    this.getAllTankGrades();
  }

  navigate() {
    this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.viewId]);
  }

  getTankLists() {
    // this.masterapiService.get(apiUrls.getAllTank).then((responceData: any) => {
    //   this.tankList = responceData.data;
    // }).catch((err: any) => {
    //   console.log('\n err...', err);
    // });
    const postData = {filters: {registration_id: null, tank_id: null, total_capacity: null}, pageNo: 0, paginationSize: 500};
    this.stockInService.searchTanReg(postData).subscribe((resp: any) => {
      this.tankList = resp.data.contents;
      console.log('tnklist', resp);
    });
  }

  tankconverstions(form) {
    console.log('data of converstion', this.tankconverstion);
    if (form.valid === false) {
      // this.formSubmitted = true;
      // return false;
      this.alert.showError('Please fill required Fields', 'error');
      this.exampleModalCenter.hide();
    } else {
      const obj = {
        balance: this.tankconverstion.balenceqtl,
        capacity: this.tankconverstion.capacity,
        createdBy: 2,
        createdDate: new Date(),
        feedBack: this.tankconverstion.reasonforconversion,
        fromGradeId: this.tankconverstion.tankgrade,
        id: 0,
        method: 'Submit',
        modifiedBy: 2,
        modifiedDate: new Date(),
        reasonForConvestion: this.tankconverstion.reasonforconversion,
        remarks: 'string',
        status: 1,
        tankId: this.tankconverstion.tankname,
        toGradeId: +(this.tankconverstion.convertto),
      };

      this.tankconversionservice.addTanCon(obj).subscribe((resp: any) => {
        this.handleResponse(resp);
      });
    }
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }


  getTankbyid(id) {
    this.tankconversionservice.getstockbytank(id).subscribe((resp: any) => {
      console.log(resp.data);
      if (resp.status = 's') {
        console.log(resp.data);
        this.tankconverstion.tankname = resp.data.id;
        this.tankconverstion.assisid = resp.data.assetName;
        this.tankconverstion.tankgrade = resp.data.gradeId;
        this.tankconverstion.balenceqtl = resp.data.balanceCapacity;
        this.tankconverstion[`capacity`] = resp.data.capacity;      }
    });
  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.exampleModalCenter.hide();

      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.tankconverstion.tankname]);

    } else {
      this.exampleModalCenter.hide();

      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
}
