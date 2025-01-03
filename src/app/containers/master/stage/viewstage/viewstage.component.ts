import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StageMasterService } from '@app/services';

@Component({
  selector: 'app-viewstage',
  templateUrl: './viewstage.component.html',
  styleUrls: ['./viewstage.component.scss']
})
export class ViewstageComponent implements OnInit {

  stageObj: any = {};
  // statId: any;
  constructor(
    private route: ActivatedRoute,
    private stageService: StageMasterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getstageById(params.id);
      }
    });
  }

  getstageById(id) {
    this.stageService.getStageById(id).subscribe((responceData: any) => {
      this.stageObj = responceData.data;
      if (responceData.data.isActive) {
        this.stageObj.isActive = 'Active';
      } else {
        this.stageObj.isActive = 'InActive';
      }
    });
  }
}
