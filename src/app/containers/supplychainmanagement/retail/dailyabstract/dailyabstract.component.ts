import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DailyAbstractConfig } from '@app/config/retail/dailyabstract-config';
import { DailyAbstract } from '@app/models/retails';
import { Router } from '@angular/router';
import { DailyAbstractService } from '@app/services/retails/dailyAbstract.service';

@Component({
  selector: 'app-dailyabstract',
  templateUrl: './dailyabstract.component.html',
  styleUrls: ['./dailyabstract.component.css']
})
export class DailyabstractComponent implements OnInit {
  dailyAbstractData: any;
  dailyAbstractObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = DailyAbstractConfig.titleSection.list;
  public breadcrumbs = DailyAbstractConfig.breadcrumbs;
  public columns = DailyAbstractConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<DailyAbstract>();

  constructor(private service: DailyAbstractService, private router: Router) { }

  ngOnInit() {
    this.getDailyAbstract();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/dailyabstract/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/dailyabstract/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getDailyAbstract(pageNo, pageSize);
  }

  getDailyAbstract(pageNo = 0, pageSize = 5) {
    this.service.get().subscribe((resp: any) => {
      this.dailyAbstractData = resp;
      console.log(this.dailyAbstractData);
      this.dataSource.data = resp as DailyAbstract[];
    });
  }
}