import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { ProbelmReportedService } from '@app/services/helpdesk/probelmreported.service';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problemsreported',
  templateUrl: './problemsreported.component.html',
  styleUrls: ['./problemsreported.component.scss']
})
export class ProblemsreportedComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any; sub: any;
  cat: any;
  createObj: any = {
    category: '',
    subcategory: '',
    priority: '',
  }
  constructor(private Service: ProbelmReportedService, private subcategory: SubcategoryService, private router: Router) { }

  ngOnInit() {
    this.getallreport();
    this.getcat();
  }
  getallreport() {
    this.Service.getAllProbelmReportedList().subscribe((resp: any) => {
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
    this.router.navigate(['/helpdeskmaster/reported/view', id]);
  }
  clearfilter() {
    this.createObj = {
    };
    this.getallreport();
  }
  getsub($event) {
    console.log($event.target.value);
    this.subcategory.getByIdcategory($event.target.value).subscribe((responceData: any) => {
      this.sub = (responceData.status === 's') ? responceData.data : [];
    });
    const rest = this.cat.filter(x => x.id === $event.target.value)[0];
    this.createObj.subcategory = rest.categoryName;
  }

  getcat() {
    this.subcategory.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);
      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  searchproblems() {
    const postdata = {
      "filters": { "category": this.createObj.category, "subcategory": this.createObj.subcategory, "priority": this.createObj.priority },
      "fromDate": "string",
      "pageNo": 0,
      "paginationSize": 0,
      "search": "string",
      "sortField": "string",
      "sortOrder": "string",
      "toDate": "string"
    }
    this.Service.searchproblem(postdata).subscribe((resp: any) => {
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
}
