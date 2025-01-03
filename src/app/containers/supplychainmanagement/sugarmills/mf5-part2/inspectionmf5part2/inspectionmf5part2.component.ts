import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inspectionmf5part2',
  templateUrl: './inspectionmf5part2.component.html',
  styleUrls: ['./inspectionmf5part2.component.scss']
})
export class Inspectionmf5part2Component implements OnInit, OnDestroy {

  mf5part2list: any;
  statuslist = [{id: 1, name: 'Pending'}, {id: 2, name: 'Verified'}];
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(  private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.getOrderrequests();
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
    this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part2/inspectionpart2/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part2/edit', id]);
  }

  getOrderrequests() {
    this.apiService.get('molassesFormat/getAllMolassesFormat/').then( ( responceData: any ) => {
      console.log(responceData);
      this.mf5part2list = responceData.data;
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

  navigatetransportgeneration(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/add', id]);
  }
}
