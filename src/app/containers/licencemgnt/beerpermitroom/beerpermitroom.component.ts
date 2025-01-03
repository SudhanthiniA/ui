import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LicenseConfigService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LicenseConfig } from '@app/config/table-config/license-config';
import { LicenseConfiguration } from '@app/models/master';

@Component({
  selector: 'app-beerpermitroom',
  templateUrl: './beerpermitroom.component.html',
  styleUrls: ['./beerpermitroom.component.scss']
})
export class BeerpermitroomComponent implements OnInit {

  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LicenseConfig.titleSection.list;
  public breadcrumbs = LicenseConfig.breadcrumbs;
  public columns = LicenseConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<LicenseConfiguration>();


  constructor(
    private service: LicenseConfigService,
    private router: Router
  ) { }
  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    let item = this.dataSource.data.find(item => item.id == event.id);
    this.router.navigate(['/licencemgnt/configuration/edit/' + item.entityCode + '/' + item.licenseTypeCode]);
  }

  onView(event) {
    let item = this.dataSource.data.find(item => item.id == event.id);
    this.router.navigate(['/licencemgnt/configuration/view/' + item.entityCode + '/' + item.licenseTypeCode]);
  }

  handlePagination(event) {
    console.log(event);
    this.getData(null, event.currentPage, event.pageSize);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const requestParam = {
      searchInput: key,
      page: pageNo,
      pageSize: pageSize
    };
    this.service.findDropdownList(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.totalCount = resp.data.totalElements;
          this.dataSource.data = resp.data.content as LicenseConfiguration[];
        }
      });
  }

  search(key) {
    this.getData(key);
  }

}
