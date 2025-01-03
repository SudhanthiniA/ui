import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, WholesaleStockinService } from '@app/services';
@Component({
  selector: 'app-vieworderpickup',
  templateUrl: './vieworderpickup.component.html',
  styleUrls: ['./vieworderpickup.component.scss']
})
export class VieworderpickupComponent implements OnInit {
  editId: any;
  orderdata: any;
  orderpickuplogs: any;
  logs = [];
  indentno: any;

  constructor(private ActivatedRoute: ActivatedRoute, private Router: Router,
    private WholesaleStockinService: WholesaleStockinService, private AlertService: AlertService) { }

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

    this.WholesaleStockinService.getorderpickupByIdforAllLists(id).subscribe((res: any) => {
      this.orderdata = res.data;
      this.indentno = this.orderdata.indentNo
      console.log('acceptance', this.orderdata.indentNo)
      this.orderpicklogs(this.orderdata.indentNo)

    })
  }
  pickuplogs = []

  orderpicklogs(indentno) {
    console.log('logs', indentno)
    this.WholesaleStockinService.getorderpickuplogs(indentno).subscribe((res: any) => {
      this.orderpickuplogs = res.data;
      console.log('res', this.orderpickuplogs[0]['orderPickUpProductDetails'])
      this.indentno = this.orderpickuplogs.indentNo

        this.orderpickuplogs.forEach(element => {
          // this.logs = [...this.logs, ...element['orderPickUpProductDetails']]
          element.orderPickUpProductDetails.map(e=>{this.pickuplogs.push(e)})
          // element['orderPickUpProductDetails']
          // .map(e => e )
        })
       
    })
    console.log("pickuplogs",this.pickuplogs)
    console.log('logs', this.orderpickuplogs, this.logs)
  }
  orderpickupReset() {
    this.WholesaleStockinService.getorderpickuplogsReset(this.editId).subscribe((res: any) => {
      if (res.status == 'f') {
        this.AlertService.showWarning(res.userDisplayMesg, 'warning');
        // this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])
      } else {
        this.AlertService.showSuccess(res.userDisplayMesg, 'Success');
        this.Router.navigate(['/supplychainmanagement/wholesale/orderpickup/list'])
      }



    })
  }
}
