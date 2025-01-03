import { Component, OnInit } from '@angular/core';
import { AccidentalService } from '@app/services/ware-house/accidental.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AccidentalApplicationConfig } from '@app/config/warehouse/accidental-application.config';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';

@Component({
  selector: 'app-accidental-application',
  templateUrl: './accidental-application.component.html',
  styleUrls: ['./accidental-application.component.scss']
})
export class AccidentalApplicationComponent implements OnInit {
  accidents: any;
  accidentForm: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = AccidentalApplicationConfig.titleSection.list;
  public breadcrumbs = AccidentalApplicationConfig.breadcrumbs;
  public columns = AccidentalApplicationConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ImportPermitStatus>();
  accidentrespObj: any = {
    status: '',
  }
  constructor(
    private router: Router,
    private accident: AccidentalService
  ) { }

  ngOnInit() {
    this.getall()
  }

  getall() {
    this.accident.getallaccedents()
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.accidents = resp.data;
        }
      })
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/accidental-application/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/accidental-application/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchLabelRegData(pageNo, pageSize);
  }

  searchLabelRegData(pageNo = 0, pageSize = 5) {
    // const paginationSize = pageSize;
    // const searchObj = {
    //   filters: {
    //     applicationNumber: this.LabelRegObj.applicationNumber ? this.LabelRegObj.applicationNumber : null,
    //     brandCode: this.LabelRegObj.brandCode ? this.LabelRegObj.brandCode : null,
    //     createdDate: this.LabelRegObj.createdDate ? this.LabelRegObj.createdDate : null,
    //   },
    //   pageNo,
    //   paginationSize,
    // };
    // this.labelservice.searchLabelReg(searchObj).subscribe((responceData: any) => {
    //   console.log(responceData);
    //   this.dataSource.data = responceData.data.contents as LabelRegistration[];
    //   this.totalCount = responceData.data.totalElements;
    // this.alllabels = responceData.data.contents;
    // });
  }

  resetKey() {
    this.accidentrespObj = {
      brandCode: '',
      createdDate: '',
      applicationNumber: '',
    };
  }

}

