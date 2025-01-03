import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';


@Component({
  selector: 'app-inspectionpart3',
  templateUrl: './inspectionpart3.component.html',
  styleUrls: ['./inspectionpart3.component.scss']
})
export class Inspectionpart3Component implements OnInit, OnDestroy {

  mf5part2list: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  statuslist = [{id: 1, name: 'Pending'}, {id: 2, name: 'Verified'}];
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
    this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part3/inspectionpart3/view', id]);
  }
  getOrderrequests() {
    this.apiService.get(apiUrls.mfpart3GetAll).then((responceData: any) => {
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



}
