import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CencuDataOfDistrictsConfig } from '@app/config/cencusdataofdistricts-config';
import { CensusService } from '@app/services';
import { Location } from "@app/models/master";

@Component({
  selector: 'app-cencusdataofdistricts',
  templateUrl: './cencusdataofdistricts.component.html',
  styleUrls: ['./cencusdataofdistricts.component.scss']
})

export class CencusdataofdistrictsComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = CencuDataOfDistrictsConfig.titleSection.list;
  public breadcrumbs = CencuDataOfDistrictsConfig.breadcrumbs;
  public columns = CencuDataOfDistrictsConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  cencusDataList: any;
  selected: any;
  cencusObj: any = {
    code: '',
    name: '',
    isActive: true
  };

  constructor(
    private router: Router,
    private censusService: CensusService) { }

  ngOnInit() {
    this.getCategory();
  }

  onEdit(event) {
    this.router.navigate([ '/master/cencusdataofdistricts/edit/' + event.id ]);
  }

  onView(event) {
    this.router.navigate([ '/master/cencusdataofdistricts/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.cencusObj.code ? this.cencusObj.code : null,
        name: this.cencusObj.name ? this.cencusObj.name : null,
        isActive: this.cencusObj.isActive ? JSON.parse(this.cencusObj.isActive) : null
      },
      pageNo,
      paginationSize
    };
    this.censusService.searchCensus(searchobj).subscribe((responceData: any) => {
      this.cencusDataList = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Location[];
      }
    });
  }

  searchCencus() {
   this.getCategory();
  }

  resetKey() {
    this.cencusObj = {
      code: '',
      name: '',
      isActive: true
    };
    this.getCategory();
  }
}
