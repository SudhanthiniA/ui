import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LicenceManagementDummyService } from '@app/services/licence-management-dummy.service';
import { WorkFlowService } from '@app/services/usermanagement';

@Component({
  selector: 'app-viewworkflowmanagement',
  templateUrl: './viewworkflowmanagement.component.html',
  styleUrls: ['./viewworkflowmanagement.component.scss']
})
export class ViewworkflowmanagementComponent implements OnInit {
  workFlowObj: any = {
    moduleId: '',
    screenId: '',
    levelId: '',
    level: [],
    active: true
  };
  levelArr: any = [];

  constructor(
    private route: ActivatedRoute,
    public workFlowService: WorkFlowService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getWorkFlowById(params.id);
      }
    });
  }
  getWorkFlowById(id) {
    const url = 'workFlow' + '/' + id;
    this.workFlowService.get(url).then((responceData: any) => {
      this.workFlowObj = responceData;
      this.levelArr = responceData.designation;
    });
  }

}
