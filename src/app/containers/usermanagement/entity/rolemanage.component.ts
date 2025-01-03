import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { UserManagmentService } from '@app/services';
import { RoleConfig } from '@app/config/userManagement/role-config';
import { MatTableDataSource } from '@angular/material/table';
import { Role } from '@app/models/user-management';

@Component({
  selector: 'app-rolemanage',
  templateUrl: './rolemanage.component.html',
  styleUrls: ['./rolemanage.component.scss']
})

export class RolemanageComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = RoleConfig.titleSection.list;
  public breadcrumbs = RoleConfig.breadcrumbs;
  public columns = RoleConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Role>();

  constructor(
    private router: Router,
    private userManageService: UserManagmentService
  ) { }

  ngOnInit() {
    this.getData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  onEdit(event) {
    this.router.navigate(['/usermanagement/role/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/usermanagement/role/view/' + event.id]);
  }

  handlePagination(event) {
    this.getData(null, event.currentPage, event.pageSize);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const requestParam = {
      searchInput: key,
      page: pageNo,
      pageSize: pageSize
    };
    this.userManageService.getAllRole(requestParam).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content as Role[];
      }
    });
  }

  navigateView(id) {
    this.router.navigate(['usermanagement/role/view', id]);
  }

  navigateEdit(id) {
    this.router.navigate(['usermanagement/role/edit', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  search(key) {
    this.getData(key);
  }

}
