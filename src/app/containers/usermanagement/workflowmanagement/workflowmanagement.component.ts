import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WorkFlowService } from '@app/services';

@Component({
  selector: 'app-workflowmanagement',
  templateUrl: './workflowmanagement.component.html',
  styleUrls: ['./workflowmanagement.component.scss']
})
export class WorkflowmanagementComponent implements OnInit, OnDestroy {
  countryData: any;
  countryObj: any = {};
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  workFlowList: any;

  constructor(public service: WorkFlowService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getData();
  }

  getData() {
    const url = 'workFlow';
    this.service.get(url).then((resp) => {
      this.workFlowList = resp;
      console.log(this.workFlowList);
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
