import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-bottling-for-fl',
  templateUrl: './bottling-for-fl.component.html',
  styleUrls: ['./bottling-for-fl.component.css']
})
export class BottlingForFlComponent implements OnInit {
  bottlingfllist: any;
  producttypelist: any[] = [];

  @ViewChild(DataTableDirective, { static: false })
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(
    private apiservice: ApiService
  )  { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getbottlingfllist();
  }

  getbottlingfllist() {
    this.apiservice.get('bottlingforflList').then((response: any) => {
      if (response) {
        this.bottlingfllist = response;
        this.refreshTabIns();
      }
    });
  }
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }

}
