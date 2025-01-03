import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {

  dispatchList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(  private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

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
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/edit', id]);
  }
  getorderrequestallocation() {
    this.apiService.get('dispatchlist/').then(responceData => {
      console.log(responceData);
      this.dispatchList = responceData;
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
