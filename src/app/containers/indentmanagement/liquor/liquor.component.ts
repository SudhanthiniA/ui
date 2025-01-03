import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-liquor',
  templateUrl: './liquor.component.html',
  styleUrls: ['./liquor.component.css']
})

export class LiquorComponent implements OnInit , OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  indliquorlist: any;
  selected: any;
  dateselected: any = moment().format('LLLL');

  constructor(
    private router: Router, 
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCategory();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  navigateView(id) {
    this.router.navigate(['/indentmanagement/liquor/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['/indentmanagement/liquor/edit', id]);
  }

  getCategory() {
    this.apiService.get('indliquorlist').then(responceData => {
      console.log(responceData);
      this.indliquorlist = responceData;
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
