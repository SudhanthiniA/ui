import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ActualProbelmService } from '@app/services/helpdesk/actionprobelms.service';

@Component({
  selector: 'app-applicationforpermitmethylalcohl',
  templateUrl: './applicationforpermitmethylalcohl.component.html',
  styleUrls: ['./applicationforpermitmethylalcohl.component.scss']
})
export class ApplicationforpermitmethylalcohlComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;
  createObj: any = {
    actualproblem: ''
  }

  constructor(private router: Router,
    private Service: ActualProbelmService) { }

  ngOnInit() {
    this.getallproblems();
  }
  getallproblems() {
    this.Service.getAllActualProbelmList().subscribe((resp: any) => {
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
    this.createObj = {
    };
    this.getallproblems();
  }
  searchproblems() {
    const postdata = {
      "filters": { "actualproblem": this.createObj.actualproblem },
      // "fromDate": "string",
      "pageNo": 0,
      "paginationSize": 0,
      // "search": "string",
      // "sortField": "string",
      // "sortOrder": "string",
      // "toDate": "string"
    }
    this.Service.searchactualproblem(postdata).subscribe((resp: any) => {
      this.list = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];

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
    this.router.navigate(['/helpdeskmaster/actualprobelms/view', id]);
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
