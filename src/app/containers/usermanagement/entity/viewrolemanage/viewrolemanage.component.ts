import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { UserManagmentService } from '@app/services';

@Component({
  selector: 'app-viewrolemanage',
  templateUrl: './viewrolemanage.component.html',
  styleUrls: ['./viewrolemanage.component.scss']
})
export class ViewrolemanageComponent implements OnInit {

  @ViewChild('treeview', { static: false })
  public tree: TreeViewComponent;

  public countries: object[] = [
    { id: 1, name: 'Dashboard', hasChild: false, isChecked: false },
    { id: 2, name: 'Masters', hasChild: true, isChecked: false },
    { id: 3, pid: 2, name: 'Location Master', isChecked: false },
    { id: 4, pid: 2, name: 'Inventory Master', isChecked: false },
    { id: 5, name: 'User Management', hasChild: true, isChecked: false },
    { id: 6, pid: 5, name: 'User Management', isChecked: false },
    { id: 7, pid: 5, name: 'Role Management', isChecked: false },
  ];
  // maps the appropriate column to fields property
  public field: object;
  // set the CheckBox to the TreeView
  public showCheckBox = true;
  // set the checknodes to the TreeView
  public checkedNodes: string[] = [];

  // dataa:any;
  addedit: any;
  curDate = new Date();
  name: any;
  rolelist: Array<any> = [];
  roleObj: any = {
    mobileno: '',
    name: '',
    role: '',
    status: true,
    confirmpassword: '',
    password: '',
    email: ''
  };
  date: any;
  editId: any;
  formSubmitted = false;
  checkedmenulist = [];
  checkedlist = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userManageService: UserManagmentService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  nodeChecked($event) {
    const array = $event.data;
    if ($event.action === 'check') {
      for (const i of array) {
        this.checkedmenulist.push(parseInt(i.id));
      }
    }
    console.log($event);
    console.log('The checked node\'s id is: ' + this.tree.checkedNodes);
    console.log(this.checkedmenulist);
  }

  setData(id) {
    //this.userService.get('roleMaster/getRoleMasterById?id=' + id).then((responceData: any) => {
    this.userManageService.getRoleById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.roleObj = responceData.data;
      this.field = { dataSource: this.roleObj.activityList, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
      this.checkedlist = this.roleObj.menulist;
      console.log(this.checkedlist);
      this.arraycheckitems(this.checkedlist);

    });
  }

  arraycheckitems(obj) {
    this.countries.forEach((item: any, index) => {
      const obj1 = obj.find((data: any) => {
        return +(data) === item.id;
      });
      if (obj1) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }

    });
  }

  navigaterolelist() {
    this.router.navigate(['usermanagement/role/list']);
  }

}
