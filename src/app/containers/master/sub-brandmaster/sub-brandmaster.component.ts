import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MasterapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-sub-brandmaster',
  templateUrl: './sub-brandmaster.component.html',
  styleUrls: ['./sub-brandmaster.component.scss']
})
export class SubBrandmasterComponent implements OnInit {
  liqObj: any = {
    code: '',
    name: '',
  };
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  liquortypelist: any;
  selected: any;
  dateselected: any = moment().format('LLLL');

  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.getCategory();
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getCategory() {
    this.masterapiService.get(apiUrls.getallsubbrand).then((responceData: any) => {
      console.log(responceData);
      this.liquortypelist = responceData.data;
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

  searchapi() {
    const objtest = {
      filters: {
        Code: this.liqObj.code ? this.liqObj.code : null,
        Name: this.liqObj.name ? this.liqObj.name : null,

      },
      pageNo: 0,
      paginationSize: 5
    };
    this.masterapiService.post(apiUrls.searchsubbrand, objtest).then((responceData: any) => {
      this.liquortypelist = responceData.data.contents;
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
  
  resetKey() {
    this.liqObj = {
      code: '',
      name: '',
    };
    this.getCategory();
  }

  navigateView(id) {
    this.router.navigate(['master/liquortype/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['master/liquortype/edit', id]);
  }
}
