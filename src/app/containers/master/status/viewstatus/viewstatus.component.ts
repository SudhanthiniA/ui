import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusMasterService } from '@app/services';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.scss']
})
export class ViewstatusComponent implements OnInit {

  statusObj: any = {};
  constructor(
    private route: ActivatedRoute,
    private statusService: StatusMasterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getStatusById(params.id);
      }
    });
  }

  getStatusById(id) {
    this.statusService.getStatusById(id).subscribe((responceData: any) => {
      this.statusObj = responceData.data;
      if (responceData.data.isActive) {
        this.statusObj.isActive = 'Active';
      } else {
        this.statusObj.isActive = 'InActive';
      }
    });
  }
}
