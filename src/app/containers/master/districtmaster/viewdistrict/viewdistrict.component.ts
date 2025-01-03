import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-viewdistrict',
  templateUrl: './viewdistrict.component.html',
  styleUrls: ['./viewdistrict.component.scss']
})
export class ViewdistrictComponent implements OnInit {

  districtObj: any;
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
    this.masterapiService.get(`${apiUrls.getByIdDistrict}${id}`).then((responceData: any) => {
      this.districtObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
