import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LocationmasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LabelMasterConfig } from '@app/config/labelmaster.config';
import { LabelMaster } from '@app/models/master';
import { LabelService } from '@app/services';

@Component({
  selector: "app-lablemaster",
  templateUrl: "./lablemaster.component.html",
  styleUrls: ["./lablemaster.component.scss"],
})
export class LablemasterComponent implements OnInit {
  ageNo = 0;
  public actionKeys = ["edit", "view"];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LabelMasterConfig.titleSection.list;
  public breadcrumbs = LabelMasterConfig.breadcrumbs;
  public columns = LabelMasterConfig.columns;
  public lastText = "master.common.list";
  public dataSource = new MatTableDataSource<LabelMaster>();
  lableList: any;
  selected: any;
  //dateselected: any = moment().format('LLLL');
  label: any = {
    code: "",
    name: "",
    active: true,
  };

  constructor(
    private router: Router,
    private locServ: LocationmasterService,
    private datepipe: DatePipe,
    private labelService: LabelService
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(["/master/lablemaster/edit/" + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(["/master/lablemaster/view/" + event.id]);
  }

  handlePagination(event) {
    console.log("Parent-handlePagination", event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.label.code ? this.label.code : null,
        name: this.label.name ? this.label.name : null,
        isActive: this.label.active ? JSON.parse(this.label.active) : null,
      },
      pageNo: 0,
      paginationSize: 5,
    };
    this.labelService.searchLabel(objtest).subscribe((responceData: any) => {
      this.lableList = responceData.data;
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as LabelMaster[];
      }
    });
  }
  searchLabel() {
    this.getCategory();
  }

  resetKey() {
    this.label = {
      code: "",
      name: "",
      active: true,
    };
    this.getCategory();
  }
}
