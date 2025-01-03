import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { IssueService } from '@app/services/helpdesk/issueservice';

@Component({
  selector: 'app-issuedetails',
  templateUrl: './issuedetails.component.html',
  styleUrls: ['./issuedetails.component.scss']
})
export class IssuedetailsComponent implements OnInit {
  bankNames: any;
  datalist: any;
  ticket: any;
  autoSuggestBankList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;
  sub: any;
  cat: any;
  priority1: any;
  entity: any;
  status: any;
  id: any;
  message: any;
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  createObj: any = {
    ticketnumber: ''
  }
  constructor(private Service: IssueService, private router: Router) { }

  ngOnInit() {
    this.getall();
  }
  getall() {
    this.Service.getallissues().subscribe((resp: any) => {
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

  viewroute(data) {
    this.router.navigate(['/helpdeskmaster/issuedetails/view', data.id]);
  }
  addedit(data) {
    this.router.navigate(['/helpdeskmaster/issuedetails/add', data.id]);
  }
}
