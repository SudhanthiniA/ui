import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { SLAService } from '@app/services/helpdesk/sla.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent implements OnInit {
  createObj: any = {
    rulename: '',
  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;
  constructor(private router: Router,
    private Service: SLAService) { }


  ngOnInit() {
    this.listsla();
  }
  listsla() {
    this.Service.getAllsla().subscribe((resp: any) => {
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
  navigateView(id) {
    this.router.navigate(['helpdesk/sla/rule/view', id]);
  }
  clearfilter() {
    this.createObj = {};
    this.listsla();
  }
  searchviewticket() {

    this.Service.getfilterrulename(this.createObj.rulename).subscribe((resp: any) => {
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
}
