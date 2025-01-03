import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationmasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DipMasterConfig } from '@app/config/table-config/dipmaster-config';
import { DipMasterService } from '@app/services';
import { Location } from "@app/models/master";

@Component({
  selector: 'app-dip',
  templateUrl: './dip.component.html',
  styleUrls: ['./dip.component.css']
})
export class DipComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DipMasterConfig.titleSection.list;
  public breadcrumbs = DipMasterConfig.breadcrumbs;
  public columns = DipMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  departmentData: any;
  dipObj: any = {
    code: '',
    name: '',
    isActive: true
  };

  constructor(
    private router: Router,
    private locServ: LocationmasterService,
    private dipmaster: DipMasterService
  ) { }

  ngOnInit() {
    this.getDepartment();
  }

  
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/dip/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/dip/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getDepartment(pageNo, pageSize);
  }

  getDepartment(pageNo = 0, pageSize = 5) {
    const searchobj = {
          filters: {
            code: this.dipObj.code ? this.dipObj.code : null,
            name: this.dipObj.name ? this.dipObj.name : null,
            isActive: this.dipObj.isActive ? JSON.parse(this.dipObj.isActive) : null,
          },
          pageNo,
          paginationSize: pageSize
        };
    this.dipmaster.searchDip(searchobj).subscribe((responceData: any) => {
          this.departmentData = responceData.data.contents;
          if ( responceData.errorCode === 200 ) {
            this.totalCount = responceData.data.totalElements;
            this.dataSource.data = responceData.data.contents as Location[];
          }
        });
    }

  searchDip() {

    this.getDepartment();
  }


  resetKey() {
  this.dipObj = {
    code: '',
    name: '',
    isActive: true
  };
  this.getDepartment();
  }

}
