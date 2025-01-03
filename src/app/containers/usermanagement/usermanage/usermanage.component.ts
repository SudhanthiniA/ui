import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { UserConfig } from '@app/config/userManagement/user-config';
import { User } from '@app/models/user-management';
import {
  UserManagmentService
} from '@app/services';

@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.scss']
})
export class UsermanageComponent implements OnInit {
  roledata = [];
  userList: any;
  userObj = {
    userName: '',
    role: '',
    entityTypeId: '',
    entityId: '',
    designationId: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = UserConfig.titleSection.list;
  public breadcrumbs = UserConfig.breadcrumbs;
  public columns = UserConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<User>();
  entityTypesData: any;
  entityMasterData: any;
  designationData: any;
  enitytData: any;

  constructor(
    private router: Router,
    private userManageService: UserManagmentService
  ) { }

  ngOnInit() {
    this.getusers();
    this.getroles();
    this.getentityTypes();
  }

  getroles() {
    /*this.userManageService.getAllRoleMaster().subscribe((responceData: any) => {
      this.roledata = responceData.data;
    });*/
  }

  onEdit(event) {
    this.router.navigate(['/usermanagement/user/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/usermanagement/user/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getusers(pageNo, pageSize);
  }

  getusers(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    console.log(this.userObj.role);
    // const requestParam = {
    //   filters: {
    //     username: this.userObj.userName ? this.userObj.userName : null,
    //     status: this.userObj.active ? this.userObj.active : null,
    //     roleId: this.userObj.role ? parseInt(this.userObj.role, 10) : null,
    //     entityTypeId: this.userObj.entityTypeId ? parseInt(this.userObj.entityTypeId, 10) : null,
    //     entityId: this.userObj.entityId ? parseInt(this.userObj.entityId, 10) : null,
    //     designationId: this.userObj.designationId ? parseInt(this.userObj.designationId, 10) : null
    //   },
    //   pageNo,
    //   paginationSize
    // };
    const requestParam = {
      page: pageNo,
      pageSize: pageSize
    };
    // console.log(requestParam);
    this.userManageService.getAllUsers(requestParam).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content as User[];
      }
    });
  }

  searchUser() {
    this.getusers();
  }

  getentityTypes() {
    /*this.userObj.entityTypeId = '';
    this.userManageService.getActiveEntities().subscribe((resp: any) => {
      this.entityTypesData = resp.data;
    });*/
  }

  getEntityById(id) {
    /*if (id === 1) {
      this.getAllEntitys();
    }
    this.userManageService.getEntityByTypeId(id).subscribe((resp: any) => {
      this.entityMasterData = resp.data;
    });
    this.getDesignation(id);*/
  }

  getAllEntitys() {
    /*this.userManageService.getAllEntities().subscribe((resp: any) => {
      this.enitytData = resp.data;
    });*/
  }

  getDesignation(id) {
    /*this.userManageService.getDesignationByEntityTypeId(id).subscribe((resp: any) => {
      this.designationData = resp.data;
    });*/
  }

}
