import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { ActionTakenService } from '@app/services/helpdesk/actiontaken.service';

@Component({
  selector: 'app-actiontaken',
  templateUrl: './actiontaken.component.html',
  styleUrls: ['./actiontaken.component.scss']
})
export class ActiontakenComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');

  list: any;

  constructor(private router: Router,private service: ActionTakenService) { }

  ngOnInit() {
    this.service.getAllActionTakenList().subscribe((resp: any) => {
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
       this.router.navigate(['/helpdeskmaster/actiontaken/view',id]);
    }
    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
   } 
}
