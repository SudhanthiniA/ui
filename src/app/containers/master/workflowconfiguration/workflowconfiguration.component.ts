import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';
import { MatTableDataSource } from '@angular/material/table';
import { WorkflowConfig } from '@app/config/table-config/workflow-config';
import { Workflow } from '@app/models/master';

@Component({
  selector: 'app-workflowconfiguration',
  templateUrl: './workflowconfiguration.component.html',
  styleUrls: ['./workflowconfiguration.component.css']
})
export class WorkflowconfigurationComponent implements OnInit {
  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = WorkflowConfig.titleSection.list;
  public breadcrumbs = WorkflowConfig.breadcrumbs;
  public columns = WorkflowConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Workflow>();

  constructor(
    private service: WorkflowcofigService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    const moduleNameCode = this.dataSource.data.find(item => item.id === event.id).moduleNameCode;
    const subModuleNameCode = this.dataSource.data.find(item => item.id === event.id).subModuleNameCode;
    this.router.navigate(['/master/workflowconfig/add/' + moduleNameCode + '/' + subModuleNameCode]);
  }

  onView(event) {
    const moduleNameCode = this.dataSource.data.find(item => item.id === event.id).moduleNameCode;
    const subModuleNameCode = this.dataSource.data.find(item => item.id === event.id).subModuleNameCode;
    this.router.navigate(['/master/workflowconfig/view/' + moduleNameCode + '/' + subModuleNameCode]);
  }

  handlePagination(event) {
    console.log(event);
    this.getData(null, event.currentPage, event.pageSize);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const requestParam = {
      searchInput: key,
      page: pageNo,
      pageSize
    };
    this.service.getallworkflow(requestParam)
      .subscribe((resp: any) => {
        console.log('resp::', resp);
        if (resp.responseCode === 200) {
          this.totalCount = resp.content.totalElements;
          this.dataSource.data = resp.content.content as Workflow[];
        }
      });
  }

  search(key) {
    this.getData(key);
  }
}
