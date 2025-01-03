import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SLAService } from '@app/services/helpdesk/sla.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  createObj: any = {
    templatename: '',
    templatetype: '',
    status: '',
  }

  constructor(private router: Router,
    private Service: SLAService) { }

  clearfilter() {
    this.createObj = {
    };
    this.gettemplate();
  }
  ngOnInit() {
    this.gettemplate();
  }
  gettemplate() {
    this.Service.getalltemp().subscribe((resp: any) => {
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

    this.router.navigate(['helpdesk/sla/template/view', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  filtertemplate() {
    const postdata = {
      "filters": {"templatename": this.createObj.templatename,"templatetype":this.createObj.templatetype,"isActive":this.createObj.status?JSON.parse(this.createObj.status)==true?1:0:''},
      // "fromDate": "string",
      "pageNo": 0,
      "paginationSize": 0,
      // "search": "string",
      // "sortField": "string",
      // "sortOrder": "string",
      // "toDate": "string"
    }
    this.Service.searchtemplate(postdata).subscribe((resp: any) => {
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
