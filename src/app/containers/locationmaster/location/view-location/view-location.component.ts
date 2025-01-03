import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss']
})
export class ViewLocationComponent implements OnInit {
  
  countryData: any;
  stateData: any;
  locationObject: any = {};

  constructor(
    private route: ActivatedRoute,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getDistrictById(params.Id);
        this.locationObject.id = params.Id;
      }
    });
  }

  getDistrictById(id) {
    this.masterapiService.get(`${apiUrls.getLocationById}${id}`).then((responceData: any) => {
      this.locationObject = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
