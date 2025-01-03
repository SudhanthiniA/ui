import { Component, OnInit } from '@angular/core';
import { AlertService } from '@app/services';
import { GroupService } from '@app/services/helpdesk/group.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  groupObj = {
    name: '',
    status: true
  };
  list: any; opened = -1; opened1 = -1;
  name: any;
  id: any;
  listarray: any = []; selecte = []; selected = []; selecteleft = [];
  arraypush: any;
  formSubmitted = false;
  whenClicked = [false, false];
  constructor(
    private group: GroupService,private router: Router,
    private alert: AlertService
  ) { }
  ngOnInit() {
    this.getallgroup();
  }

  saveData(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      let id = [];
      console.log(this.listarray);
      if (this.listarray == 0) {
        this.alert.showError("Please select Available User", '');
      } else {
        this.listarray.forEach((ele: any, index) => {
          id.push(ele.id);
        });
        console.log(this.listarray);
        let postdata = {
          "active": this.groupObj.status,
          "memberIdList": id,
          "name": this.groupObj.name,
        }

        this.group.addgroup(postdata).subscribe(responceData => {
          console.log(this.groupObj);
          if (responceData.errorCode === 200) {
            // if (responceData.userDisplayMesg == 'No record Found') {
            this.alert.showSuccess(responceData.userDisplayMesg, '');
            this.router.navigate(['helpdeskmaster/groups/list']);
            // }
          } else {
            this.alert.showError(responceData.userDisplayMesg, '');
          }

        });
      }

    }
  }
  getallgroup() {
    let code = "HDFA"
    this.group.getallusergroup(code).subscribe(responceData => {
      this.list = responceData.data
    })
  }
  setValue(item, val) {
    // this.id = i;
    // this.name = val;    
  }
  deleteuser() {
    let id = this.id;
    console.log(id)
    this.listarray.forEach((ele: any, index) => {
      console.log(this.listarray);
      let check = this.listarray[index].id;
      console.log(check);

      if (check == id) {
        this.listarray.splice(index, 1);
        console.log(this.listarray);


      }
      //   // let check = this.listarray.indexOf(id, 0);
      //   // console.log(check);

      //   if (index > -1) {
      //     this.listarray.splice(index, 1);      
      //   }
    });
  }
  setval(item) {
    this.name = item;
  }
  addselecteduser(type) {
    if (type == 'right') {
      if (this.name) {
        this.listarray.push(this.name);
        console.log(this.listarray);
        this.opened = -1;
        var valuelist = this.list.indexOf(this.name);
        this.list.splice(valuelist, 1);
        console.log(this.list);
        this.name = '';
      }
    } else {
      if (this.name) {
        this.list.push(this.name);
        console.log(this.list);
        this.opened1 = -1;
        var valuelist = this.listarray.indexOf(this.name);
        this.listarray.splice(valuelist, 1);
        console.log(this.listarray);
        this.name = '';
      }
    }
    // let check1 = [];
    // let check = {
    //   id: this.id,
    //   name: this.name,
    // }
    // if (check.id != undefined && check.name != undefined) {
    //   this.listarray.push(check);
    // }
  }

  bulk(item, type) {
    console.log(item);
    if (type == 'right') {
      if (this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          this.listarray.push(this.list[i]);
        }
        var uniqueNames = [];
        for (i = 0; i < this.listarray.length; i++) {
          if (uniqueNames.indexOf(this.listarray[i].id) === -1) {
            uniqueNames.push(this.listarray[i]);
          }
        }
        this.listarray = uniqueNames;
        this.list = [];
      }
    } else {
      if (this.listarray.length > 0) {
        for (var i = 0; i < this.listarray.length; i++) {
          this.list.push(this.listarray[i]);
        }
        var uniqueNames = [];
        for (i = 0; i < this.list.length; i++) {
          if (uniqueNames.indexOf(this.list[i].id) === -1) {
            uniqueNames.push(this.list[i]);
          }
        }
        this.list = uniqueNames;
        this.listarray = [];
      }
    }

  }

}
