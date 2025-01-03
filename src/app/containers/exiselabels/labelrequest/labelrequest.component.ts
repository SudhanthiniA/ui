import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-labelrequest',
  templateUrl: './labelrequest.component.html',
  styleUrls: ['./labelrequest.component.scss']
})
export class LabelrequestComponent implements OnInit {

  date: any;
  uomList: Array<any> = [];
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any;

  constructor(
    private router: Router,
    private apiservice: ApiService
  ) { }

  ngOnInit() {
    this.getuom();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
    scrollX: true
    };
  }

  getuom() {
    this.apiservice.get('labelrequest').then((resp: any) => {
      this.uomList = resp;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
  }

  navigateView(id) {
    // this.router.navigate(['payandreconcillation/requestforrefund/details',id]);
  }

  navigateEdit(id) {
    this.router.navigate(['exiselabel/labelrequest/edit', id]);
  }
  
}