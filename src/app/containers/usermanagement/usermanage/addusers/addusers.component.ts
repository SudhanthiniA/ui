import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import {
  AlertService,
  UserManagmentService,
  DistrictMasterService,
  LicenceManagementService
} from '@app/services';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.scss']
})
export class AddusersComponent implements OnInit {

  roledata = [];
  mismatch: any;
  addedit: any;
  curDate = new Date();
  name: any;
  userList: Array<any> = [];
  salutationObj: any;
  worklocation:'master.common.worklocation'
  userObj: any = {
    salutation: '',
    firstname: '',
    middlename: '',
    lastname: '',
    emailId: '',
    department: 'UP-Excise',
    mobileNumber: '',
    roleIdList: [],
    status: true,
    userName: '',
    entityTypeId: [],
    designationId: '',
    districtId: '',
    userWorklocationIds: []
  };
  date: any;
  editId: any;
  formSubmitted = false;
  userTypesData: any;
  designationData: any;
  entityTypesData: any;
  entityMasterData: any;
  worklocationList: any = [];
  workObj = [];
  enitytDropdownSettings: IDropdownSettings;
  stateData: any;
  districtData: any = [];
  taulkData: any;
  villagesData: any[];

  roleRequired = false;
  roleDropDownSettings: IDropdownSettings;
  searchValueRole = null;

  entityRequired = false;
  entityDropDownSettings: IDropdownSettings;
  searchValueEntity = null;

  districtDropDownSettings: IDropdownSettings;
  searchValueDistrict = null;
  stateId = 25;


  userExistsFlag = false;
  emailExistsFlag = false;
  mobileExistsFlag = false;
  entityHeadOfficeFlag = false;
  choosedHeadOffice = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private userManageService: UserManagmentService,
    private districtService: DistrictMasterService,
    private licenceManagementService: LicenceManagementService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getSalutation();
    this.getroles(null);
    this.getentityTypes(null);
    this.getDistrictsByStateId(this.stateId, null);
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'usermanagement.common.adduser': 'usermanagement.common.edituser';
    this.getDesignation();
    this.roleDropDownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'roleName',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.entityDropDownSettings = {
      singleSelection: false,
      idField: 'code',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.districtDropDownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.enitytDropdownSettings = {
      singleSelection: false,
      idField: 'licenseApplicationId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  getSalutation() {
    this.salutationObj = [
      { id: 1, name: 'Mr.' },
      { id: 2, name: 'Mrs.' },
      { id: 3, name: 'Miss.' }
    ];
  }

  getroles(key) {
    const requestParam = {
      page: 0,
      pageSize: 10,
      searchInput: key
    }

    this.userManageService.getAllActiveRoles(requestParam).subscribe((responceData: any) => {
      if (responceData.responseCode === 200) {
        if (responceData.content.content.length > 0) {
          this.roledata = responceData.content.content;
        }
      }
    });
  }

  onRoleSelect(item: any) {
    this.roleRequired = true;
  }

  onRoleDeselect(item: any) {
    this.roleRequired = false;
  }

  onRoleFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValueRole = item;
      this.getroles(this.searchValueRole);
    } else if (item.length === 0) {
      this.searchValueRole = null;
      this.getroles(this.searchValueRole);
    }
  }

  onRoleDropDownClose() {
    if (this.searchValueRole !== null) {
      this.searchValueRole = null;
      this.getroles(this.searchValueRole);
    }
  }

  getDesignation() {
    const requestParam = {
      page: 0,
      pageSize: 10,
      searchInput: null
    }
    this.userManageService.getAllActiveDesignation(requestParam).subscribe((responceData: any) => {
      if (responceData.responseCode === 200) {
        if (responceData.content.length > 0) {
          this.designationData = responceData.content;
        }
      }
    });
  }

  getentityTypes(key) {
    const requestParam = {
      page: 0,
      pageSize: 10,
      searchInput: key
    }
    this.userManageService.getActiveEntityType(requestParam).subscribe((resp: any) => {
      if (resp.responseCode === 200) {
        this.entityTypesData = resp.content.content;
      }
    });
  }

  onEntitySelect(item: any) {
    this.entityRequired = true;
    this.getWorklocation();
    this.checkHeadOfficeSelection();
  }

  onEntityDeselect(item: any) {
    this.entityRequired = false;
    this.getWorklocation();
    this.checkHeadOfficeSelection();
  }

  onEntitySelectAll(items: any) {
    console.log(items);
    this.entityRequired = true;
    this.getWorklocation();
    setTimeout(() => { this.checkHeadOfficeSelection(); }, 100);
  }

  onEntityDeSelectAll(items: any) {
    console.log(items);
    this.entityRequired = false;
    this.getWorklocation();
    setTimeout(() => { this.checkHeadOfficeSelection(); }, 100);
  }

  checkHeadOfficeSelection() {
    const found = this.userObj.entityTypeId.some(el => el.code === 'HEAD_OFFICE');
    if (this.userObj.entityTypeId.length > 1) {
      console.log(found);
      (found) ? this.entityHeadOfficeFlag = true : this.entityHeadOfficeFlag = false;
    } else {
      this.entityHeadOfficeFlag = false;
    }
    this.choosedHeadOffice = (found) ? true : false;
  }

  onEntityFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValueEntity = item;
      this.getentityTypes(this.searchValueEntity);
    } else if (item.length === 0) {
      this.searchValueEntity = null;
      this.getentityTypes(this.searchValueEntity);
    }
  }

  onEntityDropDownClose() {
    if (this.searchValueEntity !== null) {
      this.searchValueEntity = null;
      this.getentityTypes(this.searchValueEntity);
    }
  }

  getDistrictsByStateId(stateId, key) {
    const requestParam = {
      filters: { district_name: key, stateId: stateId, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    // this.districtService.searchDistrict(requestParam).subscribe((responceData: any) => {
    //   this.districtData = responceData.data;
    // });
    this.districtService.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
      this.districtData = responceData.data;
    });
  }

  onDistrictSelect(item: any) {
    this.getWorklocation();
  }

  onDistrictDeselect(item: any) {
    this.getWorklocation();
  }

  onDistrictSelectAll(items: any) {
    this.getWorklocation();
  }

  onDistrictDeSelectAll(items: any) {
    this.getWorklocation();
  }

  onDistrictFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValueDistrict = item;
      this.getDistrictsByStateId(this.stateId, this.searchValueDistrict);
    } else if (item.length === 0) {
      this.searchValueDistrict = null;
      this.getDistrictsByStateId(this.stateId, this.searchValueDistrict);
    }
  }

  onDistrictDropDownClose() {
    if (this.searchValueDistrict !== null) {
      this.searchValueDistrict = null;
      this.getDistrictsByStateId(this.stateId, this.searchValueDistrict);
    }
  }

  getWorklocation() {
    let licenseCategory = '';
    for (let j = 0; j < this.userObj.entityTypeId.length; j++) {
      let entityCode = this.userObj.entityTypeId[j].code;
      licenseCategory = licenseCategory ? licenseCategory + ',' + entityCode : entityCode;
    }
    let districtIds = '';
    for (let k = 0; k < this.userObj.districtId.length; k++) {
      let districtId = this.userObj.districtId[k].id;
      districtIds = districtIds ? districtIds + ',' + districtId : districtId;
    }
    if (licenseCategory && districtIds) {
      this.licenceManagementService.getAllAllocatedEntity(licenseCategory, districtIds)
        .subscribe((resp: any) => {
          if (resp.responseCode === 200) {
            let respData = resp.content;
            let tempList = [];
            for (var key in respData) {
              let res = respData[key];
              let workObj = {
                licenseApplicationId: res.licenseApplicationId,
                name: res.licenseApplicationNumber + '-' + res.unitName,
                unitName: res.unitName,
                licenseApplicationNumber: res.licenseApplicationNumber,
                licenseNumber: res.licenseNumber
              };
              tempList.push(workObj);
            }
            this.worklocationList = tempList;
          }
        });
    } else {
      this.worklocationList = [];
    }

  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  checkUsername(name) {
    if (name.length > 0) {
      this.userManageService.checkUserName(name)
        .subscribe((responseData: any) => {
          console.log(responseData);
          if (responseData === true) {
            this.userExistsFlag = true;
          } else {
            this.userExistsFlag = false;
          }
        });
    }
  }

  checkEmail(name) {
    if (name.length > 0) {
      this.userManageService.checkEmail(name)
        .subscribe((responseData: any) => {
          console.log(responseData);
          if (responseData === true) {
            this.emailExistsFlag = true;
          } else {
            this.emailExistsFlag = false;
          }
        });
    }
  }

  checkMobileNumber(name) {
    if (name.length > 0) {
      this.userManageService.checkMobileNumber(name)
        .subscribe((responseData: any) => {
          console.log(responseData);
          if (responseData === true) {
            this.mobileExistsFlag = true;
          } else {
            this.mobileExistsFlag = false;
          }
        });
    }
  }

  adduser(userForm) {
    this.formSubmitted = false;
    if (userForm.valid === false) {
      this.formSubmitted = true;
    } else if (
      this.userExistsFlag === false ||
      this.emailExistsFlag === false ||
      this.mobileExistsFlag === false ||
      this.entityHeadOfficeFlag === false
    ) {

      console.log(this.userObj);

      let roleList = [];
      console.log(this.userObj.roleIdList)
      for (let i = 0; i < this.userObj.roleIdList.length; i++) {
        roleList.push({
          id: this.userObj.roleIdList[i].id
        });
      }

      let entityList = [];
      console.log(this.userObj.entityTypeId)
      for (let j = 0; j < this.userObj.entityTypeId.length; j++) {
        entityList.push({
          entityCode: this.userObj.entityTypeId[j].code,
          entityDesc: this.userObj.entityTypeId[j].name
        });
      }

      let districtList = [];
      console.log(this.userObj.districtId)
      for (let k = 0; k < this.userObj.districtId.length; k++) {
        districtList.push({
          districtId: this.userObj.districtId[k].id,
          districtDesc: this.userObj.districtId[k].name
        });
      }

      let allocatedList = [];
      for (let l = 0; l < this.userObj.districtId.length; l++) {
        let apId = this.userObj.userWorklocationIds[l].licenseApplicationId;
        allocatedList.push({
          licenseApplicationId: apId,
          licenseApplicationNumber: apId ? this.worklocationList.find(item => item.licenseApplicationId == apId).licenseApplicationNumber : '',
          licenseNumber: apId ? this.worklocationList.find(item => item.licenseApplicationId == apId).licenseNumber : '',
          unitName: apId ? this.worklocationList.find(item => item.licenseApplicationId == apId).unitName : '',
        });
      }

      const postParam = {
        designationId: this.userObj.designationId,
        email: this.userObj.emailId,
        firstName: this.userObj.firstname,
        lastName: this.userObj.lastname,
        middleName: this.userObj.middlename,
        mobileNumber: this.userObj.mobileNumber,
        salutation: this.userObj.salutation,
        username: this.userObj.userName,
        status: this.userObj.status,
        roles: roleList,
        allocatedEntityList: entityList,
        allocatedDistrictList: districtList,
        allocatedWorkLocationList: allocatedList
      }

      if (this.editId) {
        postParam['id'] = this.editId;
      }
      console.log(postParam);
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          (this.userManageService.saveUpdateUser(postParam))
            .subscribe((responseData: any) => {
              if (responseData.responseCode === 200) {
                this.alert.showSuccess(responseData.responseMessage, 'Success');
                this.router.navigate(['/usermanagement/user/list']);
              } else {
                this.alert.showError(responseData.responseMessage, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  setData(id) {
    this.userManageService.getUserById(id).subscribe((responceData: any) => {
      const respData = responceData.content;
      this.userObj.salutation = respData.salutation;
      this.userObj.firstname = respData.firstName;
      this.userObj.middlename = respData.middleName;
      this.userObj.lastname = respData.lastName;
      this.userObj.emailId = respData.email;
      this.userObj.department = 'UP-Excise';
      this.userObj.mobileNumber = respData.mobileNumber;
      this.userObj.status = respData.status;
      this.userObj.userName = respData.username;
      this.userObj.designationId = respData.designation ? respData.designation.id : '';

      if (respData.roles.length > 0) {
        this.userObj.roleIdList = respData.roles.map(item => {
          return { id: item.id, roleName: item.roleName };
        });
      }

      if (respData.allocatedEntityList.length > 0) {
        this.userObj.entityTypeId = respData.allocatedEntityList.map(item => {
          return { code: item.entityCode, name: item.entityDesc };
        });
      }

      if (respData.allocatedDistrictList.length > 0) {
        this.userObj.districtId = respData.allocatedDistrictList.map(item => {
          return { id: item.districtId, name: item.districtDesc };
        });
      }

      if (respData.allocatedWorkLocationList.length > 0) {
        console.log(respData.allocatedWorkLocationList.length);
        this.userObj.userWorklocationIds = respData.allocatedWorkLocationList.map(obj => {
          return {
            licenseApplicationId: parseInt(obj.licenseApplicationId, 10),
            name: obj.licenseApplicationNumber + '-' + obj.unitName,
            unitName: obj.unitName,
            licenseApplicationNumber: obj.licenseApplicationNumber,
            licenseNumber: obj.licenseNumber
          };
        });
      }

      setTimeout(() => {
        this.getWorklocation();
      }, 500);

    });
  }

  navigateUserList() {
    this.router.navigate(['usermanagement/user/list']);
  }



}
