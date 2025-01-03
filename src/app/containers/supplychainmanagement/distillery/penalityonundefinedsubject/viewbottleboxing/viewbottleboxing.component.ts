import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, DistileryService, WorkflowcofigService } from '@app/services';

@Component({
  selector: 'app-viewbottleboxing',
  templateUrl: './viewbottleboxing.component.html',
  styleUrls: ['./viewbottleboxing.component.scss']
})
export class ViewbottleboxingComponent implements OnInit {

  boxbottlingobj: any;
  viewId: any;
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  workflowdata: any;
  logshow: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert:AlertService,
    private worfFlowService: WorkflowcofigService,
    private distilleryservice: DistileryService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.viewId = params.Id
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  setData(id?) {
    if (id) {
      this.distilleryservice.getboxingProcessId(id).subscribe((resp: any) => {
        const data = resp.content;
        this.boxbottlingobj = data;
        this.logshow = data.boxingProcessList;
        console.log(this.boxbottlingobj, 'bottling plan view');
      });
    }
  }

}
