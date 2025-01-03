import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DesignationConfig } from '@app/config/userManagement/designation-config';
import { Designation } from '@app/models/user-management';
import { Router } from '@angular/router';
import { UserManagmentService } from '@app/services/usermanagement';

@Component({
  selector: 'app-designationmanage',
  templateUrl: './designationmanage.component.html',
  styleUrls: ['./designationmanage.component.scss']
})
export class DesignationmanageComponent implements OnInit {
  public pageNo = 0;
  public pageSize = 5;
  public actionKeys = ['edit', 'view'];
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DesignationConfig.titleSection.list;
  public breadcrumbs = DesignationConfig.breadcrumbs;
  public columns = DesignationConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Designation>();

  constructor(
    private userManageService: UserManagmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  onEdit(event) {
    this.router.navigate(['/usermanagement/designation/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/usermanagement/designation/view/' + event.id]);
  }

  handlePagination(event) {
    console.log(event);
    this.getData(null, event.start, event.end);
  }

  getData(key = null, pageNo = 0, pageSize = 5) {
    const requestParam = {
      searchInput: key,
      page: pageNo,
      pageSize: pageSize
    };
    this.userManageService.getAllDesignation(requestParam)
      .subscribe((resp: any) => {
        if (resp.responseCode === 200) {
          this.totalCount = resp.content.totalElements;
          this.dataSource.data = resp.content.content as Designation[];
        }
      });
  }

  search(key) {
    this.getData(key);
  }
}
