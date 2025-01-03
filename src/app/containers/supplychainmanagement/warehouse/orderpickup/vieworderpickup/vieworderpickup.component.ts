import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleStockinService } from '@app/services';
import { OrderpickupService } from '@app/services/ware-house/orderpickup.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vieworderpickup',
  templateUrl: './vieworderpickup.component.html',
  styleUrls: ['./vieworderpickup.component.scss']
})
export class VieworderpickupComponent implements OnInit {

  editId: any;
  orderdata: any;
  status: any;
  orderpickuplogs: any;
  logs = [];
  indentno: any;
  orderPickdetails: any = [];
  orderPickUpForm: FormGroup;
  isFlag = false;
  orderPickUpLogData: any = [];
  orderPickStatus: any;
  pickuplogs = []

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private Router: Router,
    private fb: FormBuilder,
    private orderPickupService: OrderpickupService,
    //private WholesaleStockinService: WholesaleStockinService, 
    private AlertService: AlertService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      console.log('active route', params)
      if (params.id) {
        this.editId = params.id;
        this.setdata(this.editId)
      }
    });
  }

  setdata(id) {
    console.log('iddd', id)
    this.orderPickupService.getindentbyindnum(id).subscribe((res: any) => {
      this.orderdata = res.data;
     // this.status = res.data.orderPickStatus
      this.indentno = this.orderdata.indentNo
      let indentNum = res.data.indentNo;
      this.orderPickUpLogs(indentNum);
      console.log('acceptance', this.orderdata.indentNo)
      // if(this.orderdata.indentno){
      // this.orderpicklogs(this.orderdata.indentNo)
      // }
    })
  }

  orderPickUpLogs(indentId) {
    this.orderPickupService.getOrderPickUpLogs(indentId).subscribe((resp: any) => {
      let data = resp.data;
      if (data.length > 0) {
        this.isFlag = true;
        this.orderPickUpLogData = resp.data;
      } else {
        this.isFlag = false;
      }
    });
  }

  orderpicklogs(indentno) {
    console.log('logs', indentno)
    this.orderPickupService.getorderpickuplogs(indentno).subscribe((res: any) => {
      this.orderpickuplogs = res.data;
      // console.log('res', this.orderpickuplogs[0]['wholesaleIndentProducts'])
      // this.indentno = this.orderpickuplogs.indentNo
      //   this.orderpickuplogs.forEach(element => {
      //     element.wholesaleIndentProducts.map(e=>{this.pickuplogs.push(e)})
      //   })

    })
    // console.log(this.pickuplogs)
    // console.log('logs', this.orderpickuplogs, this.logs)
  }

  back() {
    this.Router.navigate(['/supplychainmanagement/warehouse/orderpickup/list/'], { queryParams: { status: this.status } })
  }

  // orderpickupReset() {
  //   this.WholesaleStockinService.getorderpickuplogsReset(this.indentno).subscribe((res: any) => {
  //     if (res.status == 'f') {
  //       this.AlertService.showWarning(res.userDisplayMesg, 'warning');
  //     } else {
  //       this.AlertService.showSuccess(res.userDisplayMesg, 'Success');
  //       this.Router.navigate(['/supplychainmanagement/warehouse/orderpickup/list'])
  //     }
  //   })
  // }
}
