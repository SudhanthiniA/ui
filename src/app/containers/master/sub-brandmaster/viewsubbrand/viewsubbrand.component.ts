import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-viewsubbrand',
  templateUrl: './viewsubbrand.component.html',
  styleUrls: ['./viewsubbrand.component.scss']
})
export class ViewsubbrandComponent implements OnInit {

  liquorList: Array<any> = [];
  liquortypeObj: any;
  viewId: any;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.masterapiService.get(`${apiUrls.getsubbrandbyid}?id=${id}`).then((responceData: any) => {
      console.log(responceData);
      this.liquortypeObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
