import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-digitallocks',
  templateUrl: './digitallocks.component.html',
  styleUrls: ['./digitallocks.component.scss']
})
export class DigitallocksComponent implements OnInit, OnDestroy {
  digitallocksList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private router: Router, private datepipe: DatePipe, private apiService: ApiService) { }

  ngOnInit() {
    this.getdigitallocks();
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
    this.router.navigate(['/supplychainmanagement/distillery/digitallocks/view']);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/distillery/digitallocks/edit', id]);
  }
  getdigitallocks() {
    this.apiService.get('digitallockslist/').then(responceData => {
      console.log(responceData);
      this.digitallocksList = responceData;
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
