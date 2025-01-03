import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-orderpicking',
  templateUrl: './orderpicking.component.html',
  styleUrls: ['./orderpicking.component.scss']
})
export class OrderpickingComponent implements OnInit, OnDestroy {

  orderpickingList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(  private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService, private alert: AlertService) { }

  ngOnInit() {
    this.getorderrequestallocation();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
  }
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/orderpicking/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/orderpicking/edit', id]);
  }
  // getorderrequestallocation() {
  //   this.apiService.get('orderpickinglist/').then(responceData => {
  //     console.log(responceData);
  //     this.orderpickingList = responceData;
  //     if (this.dtElement.dtInstance) {
  //       this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
  //         dtInstance.destroy();
  //         this.dtTrigger.next();
  //       });
  //     } else {
  //       this.dtTrigger.next();
  //     }
  //   }).catch((err: any) => {
  //     console.log('\n err...', err);
  //   });
  // }

  // api integration :: ss
  getorderrequestallocation() {
    this.apiService.get('orderPicking/getAllOrderPicking/').then((responseData: any) => {
      if (responseData.status == 's') {
        console.log(responseData);
        this.orderpickingList = responseData.data;
      } else {
        this.alert.showError(responseData.userDisplayMesg, 'error');

      }

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
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
