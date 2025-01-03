import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { AlertService, UserManagmentService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  menuListData: Object[] = [];
  @ViewChild('treeview', { static: false })
  public tree: TreeViewComponent;
  // set the CheckBox to the TreeView
  public showCheckBox = true;
  // set the checknodes to the TreeView
  public checkedNodes: Number[] = [];
  // dataa:any;
  addedit: any;
  curDate = new Date();
  name: any;
  rolelist: Array<any> = [];
  roleObj: any = {
    mobileno: '',
    name: '',
    role: '',
    active: true,
    landingScreen: ''
  };
  date: any;
  editId: any;
  formSubmitted = false;
  checkedmenulist: any = [];
  checkedlist = [];
  field: Object = { dataSource: '', id: '', parentID: '', text: '', hasChildren: 'hasChild' };
  codeExistsFlag = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private modalService: NgbModal,
    private userManageService: UserManagmentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.getMenuList();
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getMenuList() {
    this.userManageService.getRoleMenuListData().subscribe((resp: any) => {
      this.menuListData = resp.content;
      this.field = { dataSource: this.menuListData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
    });
  }

  nodeChecked($event) {

    const array = $event.data;
    if ($event.action == 'check') {
      console.log($event);
      array.forEach((ele, i) => {
        if (ele.hasChildren && !ele.expanded) {
          if (!ele.parentID) {
            this.menuListData.filter((data: any, inx) => {
              if (data.pid == ele.id) {
                this.getMenu(data.id);
              }
            });
          } else {
            this.getMenu(ele.id);
          }
        } else {
          if (ele.isChecked && !ele.expanded) {
            this.checkedmenulist.push(ele.id);
            this.checkedlist.push(ele);
          }
        }
      });
    } else {
      if ($event.action == 'uncheck') {
        const unCheckedData = $event.data;
        unCheckedData.forEach((ele, i) => {
          if (!ele.hasChildren) {
            this.checkedmenulist.forEach((el, ind) => {
              if (el == ele.id) {
                this.checkedmenulist.splice(ind, 1);
                this.checkedlist.splice(ind, 1);
              }
            });
          } else {
            if (ele.hasChildren && !ele.expanded) {
              if (!ele.parentID) {
                this.menuListData.filter((eln: any, idno) => {
                  if (eln.pid == ele.id) {
                    this.unCheckedMenu(eln);
                  }
                });
              } else {
                this.unCheckedMenu(ele);
              }
            }
          }
        });
      }
    }
  }

  getMenu(ele) {
    this.menuListData.forEach((el: any, j) => {
      if (el.id == ele && el.hasChild) {
        this.menuListData.forEach((elem: any, k) => {
          if (elem.pid == el.id && !elem.hasChild) {
            elem.isChecked = true;
            this.checkedmenulist.push(elem.id);
            this.checkedlist.push(elem);
            console.log('yes');
          } else {
            if (elem.pid == el.id && elem.hasChild) {
              this.menuListData.forEach((elmnt: any, l) => {
                if (elmnt.pid == elem.id) {
                  this.checkedmenulist.push(elmnt.id);
                  this.checkedlist.push(elem);
                }
              });
            }
          }
        });
      } else if (el.id == ele && !el.hasChild) {
        console.log(el);
        this.checkedmenulist.push(el.id);
        this.checkedlist.push(el);
      }
    });
  }

  unCheckedMenu(ele) {
    if (ele.hasChild || ele.hasChildren) {
      this.menuListData.forEach((data: any) => {
        if (data.pid == ele.id && !data.hasChild) {
          this.checkedmenulist.forEach((el, ind) => {
            if (el == data.id) {
              this.checkedmenulist.splice(ind, 1);
              this.checkedlist.splice(ind, 1);
            }
          });
        } else {
          if (data.pid == ele.id && data.hasChild) {
            this.menuListData.filter((elmnt: any, i) => {
              if (elmnt.pid == data.id) {
                this.checkedmenulist.filter((elt, indx) => {
                  if (elt == elmnt.id) {
                    this.checkedmenulist.splice(indx, 1);
                    this.checkedlist.splice(indx, 1);
                  }
                });
              }
            });
          }
        }
      });
    } else {
      if (!ele.hasChild) {
        this.checkedmenulist.filter((delId, idx) => {
          if (delId == ele.id) {
            this.checkedmenulist.splice(idx, 1);
            this.checkedlist.splice(idx, 1);
          }
        });
      }
    }
  }

  setData(id) {
    this.userManageService.getRoleById(id).subscribe((responceData: any) => {
      if (responceData.responseCode === 200) {
        console.log(responceData.content);
        const respData = responceData.content;
        this.field = {
          dataSource: respData.activityList,
          id: 'id',
          parentID: 'pid',
          text: 'name',
          hasChildren: 'hasChild'
        };
        this.roleObj = respData;
        this.roleObj.landingScreen = respData.landingActivity.id;
        this.menuListData = respData.activityList;
        this.arraycheckitems(this.menuListData);
      }
    });
  }

  arraycheckitems(obj) {
    obj.forEach((ele, i) => {
      if (ele.isChecked) {
        console.log(ele);
        this.checkedmenulist.push(ele.id);
        this.checkedlist.push(ele);
      }
    });
  }

  checkCode(value) {
    if (value.length > 0) {
      this.userManageService.validateRoleCode(value)
        .subscribe((responseData: any) => {
          console.log(responseData);
          if (responseData === true) {
            this.codeExistsFlag = true;
          } else {
            this.codeExistsFlag = false;
          }
        });
    }
  }

  adduser(userForm) {
    this.formSubmitted = false;
    if (userForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        roleCode: this.roleObj.roleCode,
        roleName: this.roleObj.roleName,
        activityIdList: this.checkedmenulist,
        active: this.roleObj.active,
        landingActivityId: this.roleObj.landingScreen,
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.userManageService.updateRoleMaster(postParam) : this.userManageService.addRoleMaster(postParam))
            .subscribe((respData: any) => {
              if (respData.responseCode === 200) {
                this.alert.showSuccess(respData.responseMessage, 'Success');
                setTimeout(() => {
                  this.router.navigate(['/usermanagement/role/list']);
                }, 1300);
              } else {
                this.alert.showError(respData.responseMessage, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigaterolelist() {
    this.router.navigate(['usermanagement/role/list']);
  }

}



