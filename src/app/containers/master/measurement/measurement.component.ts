import { Component, OnInit } from '@angular/core';
import { MeasurementService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { MeasurementConfig } from '@app/config/table-config/measurement-config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  measurementList: any;
  selected: any;
  measurementObj: any = {
    code: '',
    desc: '',
    active: true,
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = MeasurementConfig.titleSection.list;
  public breadcrumbs = MeasurementConfig.breadcrumbs;
  public columns = MeasurementConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource();
  constructor(
    private router: Router,
    private measurementService: MeasurementService
    ) { }

  ngOnInit() {
    this.getmeasurementList();
  }

  onEdit(event) {
    this.router.navigate(['/master/measurement/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/measurement/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getmeasurementList(pageNo, pageSize);
  }
  getmeasurementList(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        code: this.measurementObj.code ? this.measurementObj.code : null,
        desc: this.measurementObj.desc ? this.measurementObj.desc : null,
        isActive: this.measurementObj.active ? JSON.parse(this.measurementObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.measurementService.searchMeasurement(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents;
    });
  }
  searchMeasurements() {
      this.getmeasurementList();
  }
  resetKey() {
    this.measurementObj = {
      code: '',
      desc: '',
      active: true,
    };
    this.getmeasurementList();
  }
}
