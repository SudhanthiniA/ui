import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { EmailrequestService } from '@app/services/helpdesk/emailrequest.service';

@Component({
  selector: 'app-emailrequest',
  templateUrl: './emailrequest.component.html',
  styleUrls: ['./emailrequest.component.scss']
})
export class EmailrequestComponent implements OnInit {
  createObj: any = {
    fromdate: '',
    todate: ''
  };
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;

  constructor(
    private router: Router,
    private Service: EmailrequestService
  ) { }

  ngOnInit() {
    this.listemailreq();
  }

  listemailreq() {
    this.Service.getAllemailrequestList().subscribe((resp: any) => {
      this.list = resp.data;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  clearfilter() {
    this.createObj = {};
    this.listemailreq();
  }

  searchrequest() {
    this.Service.getfilteremail(this.createObj).subscribe((resp: any) => {
      this.list = (resp.status === 's') ? resp.data ? resp.data : [] : [];
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  navigateView(id) {
    this.router.navigate(['/helpdesk/emailrequest/viewemail', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
