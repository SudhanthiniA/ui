import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KnowledgeService } from '@app/services/helpdesk/knowledgeservice';
import { DataTableDirective } from 'angular-datatables';
import * as moment from 'moment';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss']
})
export class KnowledgebaseComponent implements OnInit {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;

  constructor(
    private Service: KnowledgeService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.Service.getallknowledge().subscribe((resp: any) => {
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

  navigateView(id, name) {
    console.log(name)
    if (name == 'view') {
      this.router.navigate(['/helpdesk/knowledgebase/view', id]);
    } else if (name == 'edit') {
      this.router.navigate(['/helpdesk/knowledgebase/add', id]);
    } else {
      this.router.navigate(['/helpdesk/knowledgebase/add']);
    }
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
