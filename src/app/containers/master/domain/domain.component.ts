import { Component, OnInit } from '@angular/core';
import { DomainService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DomainConfig } from '@app/config/table-config/domain-config';
import { Domain } from '@app/models/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.scss']
})
export class DomainComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = DomainConfig.titleSection.list;
  public breadcrumbs = DomainConfig.breadcrumbs;
  public columns = DomainConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Domain>();
  domainData: any;
  domainObj: any = {
    code: '',
    name: '',
    isActive: true,
  };
  constructor(
    private router: Router,
    private domainService: DomainService) { }

  ngOnInit() {
    this.getDomain();
  }
  onEdit(event) {
    this.router.navigate(['/master/domain/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/domain/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getDomain(pageNo, pageSize);
  }
  getDomain(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.domainObj.code ? this.domainObj.code : null,
        name: this.domainObj.name ? this.domainObj.name : null,
        isActive: this.domainObj.isActive ? JSON.parse(this.domainObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.domainService.searchDomain(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Domain[];
    });
  }

  searchDomain() {
    this.getDomain();
  }

  resetKey() {
    this.domainObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getDomain();
  }
}
