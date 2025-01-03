import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transportgeneration',
  templateUrl: './transportgeneration.component.html',
  styleUrls: ['./transportgeneration.component.scss']
})
export class TransportgenerationComponent implements OnInit, OnDestroy {

  transportGenList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private apiService: ApiService
  ) { }

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
    this.router.navigate(['/supplychainmanagement/bonds/transportgeneration/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/bonds/transportgeneration/edit', id]);
  }
  getorderrequestallocation() {
    this.apiService.get('bondtransportgenerationlist/').then(responceData => {
      console.log(responceData);
      this.transportGenList = responceData;
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
