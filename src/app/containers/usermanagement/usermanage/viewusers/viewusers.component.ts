import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserManagmentService } from '@app/services/usermanagement';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {

  roledata = [{ id: 1, name: 'user' }, { id: 2, name: 'admin' }];
  mismatch: any;
  addedit: any;
  curDate = new Date();
  name: any;
  userList: Array<any> = [];
  userObj: any = {
    applicationtype: '',
    emailId: '',
    password: '',
    confirmpassword: '',
    phoneNumber: '',
    roleCode: '',
    status: true,
    userName: '',
    entityName: '',
    talukName: '',
    districtName: '',
    stateName: '',
    villageName: '',
  };
  date: any;
  editId: any;
  formSubmitted = false;
  isModified: boolean;
  enitytData: any;
  dropdownSettings: IDropdownSettings;
  isWorkLocation: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private userManageService: UserManagmentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.getAllEntitys();
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getAllEntitys() {
    this.userManageService.getAllEntities().subscribe((resp: any) => {
      this.enitytData = resp.data;
    });
  }

  setData(id) {
    this.userManageService.getUserById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.userObj = responceData.data;
      this.userObj.created_by = responceData.data.createdBy;
      this.userObj.modified_by = responceData.data.modifiedBy;
      this.userObj.roleCode = responceData.data.roleMasterResponseDto.roleCode;
      this.userObj.entityType = responceData.data.entityMaster.entityType.name;
      this.userObj.designation = responceData.data.designationResponseDto.name;
      this.userObj.entityName = responceData.data.entityMaster.name;
      this.userObj.stateName = responceData.data.stateResponseDto.stateName;
      this.userObj.districtName = responceData.data.districtResponseDto.name;
      this.userObj.talukName = responceData.data.talukResponseDto.name;
      this.userObj.villageName = responceData.data.villageResponseDto.name;
      let workLocationArray = responceData.data.workLocationList;
      if (!workLocationArray) {
        workLocationArray = [];
      } else if (workLocationArray.length > 0) {
        workLocationArray = workLocationArray.map(item => {
          return { id: item.entityId, name: item.entityName };
        });
        this.isWorkLocation = true;
        this.userObj.userWorklocationIds = workLocationArray;
        this.isWorkLocation = true;
      }
      const createdDate = this.datePipe.transform(this.userObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.userObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      this.isModified = (createdDate === modifiedDate || modifiedDate === 'null') ? false : true;
    });
  }

  navigateUserList() {
    this.router.navigate(['usermanagement/user/list']);
  }

}
