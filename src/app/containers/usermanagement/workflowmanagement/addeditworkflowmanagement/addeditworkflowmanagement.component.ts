import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { WorkFlowService } from '@app/services/usermanagement';

@Component({
  selector: 'app-addeditworkflowmanagement',
  templateUrl: './addeditworkflowmanagement.component.html',
  styleUrls: ['./addeditworkflowmanagement.component.scss']
})
export class AddeditworkflowmanagementComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  levelid: Number;
  workFlowObj: any = {
    moduleId: '',
    screenId: '',
    levelId: '1',
    level: [],
    active: true
  };
  level: any = [];
  moduleArr: any = [
    { id: 1, moduleName: 'Admin User' },
    { id: 2, moduleName: 'Sugar Mill' },
    { id: 3, moduleName: 'Distillery' },
    { id: 4, moduleName: 'Bonds' },
    { id: 5, moduleName: 'Wholesale' },
  ];

  screenArr: any = [
    { id: 1, screenName: 'Country', pid: 1 },
    { id: 2, screenName: 'State', pid: 1 },
    { id: 3, screenName: 'Liquor Category', pid: 1 },
    { id: 4, screenName: 'Gender', pid: 1 },
    { id: 5, screenName: 'Tank Cover Type', pid: 1 },
    { id: 6, screenName: 'Stock In', pid: 2 },
    { id: 7, screenName: 'Tank Registration', pid: 2 },
    { id: 8, screenName: 'Molasses Receipt & Consumption', pid: 2 },
  ];
  approvalLavelArr = [
    { id: 1, type: 'Level 1' },
    { id: 2, type: 'Level 2' },
    { id: 3, type: 'Level 3' },
    { id: 4, type: 'Level 4' },
    { id: 5, type: 'Level 5' },
    { id: 6, type: 'Level 6' }
  ];
  designation = [
    { id: 0, name: 'AEC Distillery/DEO' },
    { id: 1, name: 'Excise HQ' },
    { id: 2, name: 'DEC License' },
    { id: 3, name: 'JT. Comm. (HQ)' }
  ];
  subModules: any = [];
  formSubmitted = false;
  moduleName: any;
  screenName: any;
  levelArr: any;
  editFlag = false;
  constructor(
    public workFlowService: WorkFlowService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editFlag = true;
        this.workFlowObj.id = params.id;
        this.getWorkFlowById(params.id);
      }
    });
  }
  getWorkFlowById(id) {
    const url = 'workFlow' + '/' + id;
    this.workFlowService.get(url).then((responceData: any) => {
      this.workFlowObj.moduleId = responceData.moduleId;

      const modId = responceData.moduleId;
      this.screenArr.filter((ele, i) => {
        if (ele.pid == modId) {
          this.subModules.push(ele);
        }
      });
      this.workFlowObj.screenId = responceData.screenId;
      this.workFlowObj.levelId = responceData.levelId;
      const levelId = responceData.levelId;
      this.getLevel(levelId);
      this.moduleName = responceData.moduleName;
      this.screenName = responceData.screenName;
      this.workFlowObj.level = responceData.designation;
      // this.levelArr = responceData.designation;
    });
  }
  getModuleByScreens(event) {
    this.moduleName = event.target.options[event.target.options.selectedIndex].text;
    this.subModules = [];
    this.screenArr.filter((ele, i) => {
      if (ele.pid == event.target.value) {
        this.subModules.push(ele);
      }
    });
  }
  getScreens(event) {
    this.screenName = event.target.options[event.target.options.selectedIndex].text;
  }
  getLevel(id) {
    this.workFlowObj.level = [];
    if (id) {
      this.levelid = parseInt(id, 7);
    }
  }
  counter() {
    return new Array(this.levelid);
  }
  saveData(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      return false;
    } else {
      let levelArr = [];
      let levelValue = {};
      for (let key in this.workFlowObj.level) {
        const valInt = parseInt(this.workFlowObj.level[key], 10);
        const levelName = this.designation.find(dec => dec.id === valInt).name
        let levelValue = { 'id': valInt, 'name': levelName };
        levelArr.push(levelValue);
      }
      console.log(levelArr);
      if (this.workFlowObj.id) {
        const postParam = {
          id: this.workFlowObj.id,
          moduleName: this.moduleName,
          moduleId: this.workFlowObj.moduleId,
          screenId: this.workFlowObj.screenId,
          screenName: this.screenName,
          designation: levelArr,
          levelId: this.workFlowObj.levelId,
          active: this.workFlowObj.active
        };
        const url = 'workFlow/' + this.workFlowObj.id;
        this.workFlowService.patch(url, postParam).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/usermanagement/workflowmanagement/list']);
        });
      } else {
        const postParam = {
          moduleName: this.moduleName,
          moduleId: this.workFlowObj.moduleId,
          screenId: this.workFlowObj.screenId,
          screenName: this.screenName,
          designation: levelArr,
          levelId: this.workFlowObj.levelId,
          active: this.workFlowObj.active
        };
        const url = 'workFlow';
        this.workFlowService.post(url, postParam).then((responceData: any) => {
          this.alert.showSuccess('Record created successfully', 'Success');
          this.router.navigate(['/usermanagement/workflowmanagement/list']);
        });
      }
    }
  }
}
