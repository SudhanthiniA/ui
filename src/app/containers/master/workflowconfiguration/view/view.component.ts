import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowcofigService } from '@app/services/ware-house/workflowcofig.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  editId;
  yearObj: any;
  moduleNameCode: any;
  subModuleNameCode: any;
  siteVisitSectionFlag = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workflowconfig: WorkflowcofigService
  ) { }

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('workflowdata'));
    if (data) {
      this.getall();
    }
    this.route.params.subscribe(params => {
      this.moduleNameCode = params.moduleNameCode;
      this.subModuleNameCode = params.subModuleNameCode;
      if (params.moduleNameCode) {
        this.getall();
      }
    });
  }

  getall() {
    this.workflowconfig.getworkflowbysubmodule(this.moduleNameCode, this.subModuleNameCode).subscribe((resp: any) => {
      this.yearObj = resp.content;
      if (this.yearObj.moduleNameCode === 'LICENSE_MANAGEMENT') {
        this.siteVisitSectionFlag = true;
      }
    });
  }

  goback() {
    sessionStorage.removeItem('workflowdata')
    this.router.navigate(['/master/workflowconfig/list']);
  }
}
