import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LicenceMasterConfig } from '@app/config/table-config/licencemaster-config';
import { LicenceService } from '@app/services';

@Component({
  selector: 'app-licencemaster',
  templateUrl: './licencemaster.component.html',
  styleUrls: ['./licencemaster.component.scss']
})
export class LicencemasterComponent implements OnInit{

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LicenceMasterConfig.titleSection.list;
  public breadcrumbs = LicenceMasterConfig.breadcrumbs;
  public columns = LicenceMasterConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  selected: any;
  // dateselected: any = moment().format('LLLL');
  licenceObj: any = {
    code: '',
    name: '',
    type: '',
    active: true,
  };
  licencelist: any;

  constructor(
    private router: Router,
    private licenceService: LicenceService
  ) { }

  ngOnInit() {
    this.getLicence();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/licencemaster/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/licencemaster/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getLicence(pageNo, pageSize);
  }

  getLicence(pageNo = 0, pageSize = 5) {
    const paginationSize= pageSize;
    const searchobj = {
      filters: {
        code: this.licenceObj.code ? this.licenceObj.code : null,
        name: this.licenceObj.name ? this.licenceObj.name : null,
        type: this.licenceObj.type ? this.licenceObj.type : null,
        isActive: this.licenceObj.active ? JSON.parse(this.licenceObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.licenceService.searchLicence(searchobj).subscribe((responceData: any) => {
      this.licencelist = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      }
    });
  }

  searchLicence() {
    this.getLicence();
  }

  resetKey() {
    this.licenceObj = {
      code: '',
      name: '',
      type: '',
      active: true,
    };
    this.getLicence();
  }
}
