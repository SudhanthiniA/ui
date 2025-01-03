import { Component, OnInit } from '@angular/core';
import { ReturnService } from '@app/services/retails';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ReturnConfig } from '@app/config/retail/return-config';
import { Return } from '@app/models/retails';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {
  workFlowList: any;
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = ReturnConfig.titleSection.list;
  public breadcrumbs = ReturnConfig.breadcrumbs;
  public columns = ReturnConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Return>();

  constructor(
    private router: Router,
    private service: ReturnService) { }

  ngOnInit() {
    this.getDataJson();
  }
  
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/return/view']);
  }
  
  getDataJson() {
    this.service.get().subscribe((resp) => {
      this.workFlowList = resp;
      this.dataSource.data = resp as Return[];
    });
  }
}
