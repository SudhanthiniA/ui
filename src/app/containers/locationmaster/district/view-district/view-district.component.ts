import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistrictMasterService } from '@app/services';

@Component({
  selector: 'app-view-district',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.scss']
})
export class ViewDistrictComponent implements OnInit {

  countryData: any;
  stateData: any;
  districtObject: any = {};

  constructor(
    private route: ActivatedRoute,
    private districtService: DistrictMasterService,
  ) { }

  ngOnInit() {
    this.districtObject.status = true;
    this.districtObject.country = '';
    this.districtObject.state = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDistrictById(params.id);
        this.districtObject.id = params.id;
      }
    });
  }

  getDistrictById(id) {
    this.districtService.getdistrictById(id).subscribe((responceData: any) => {
      this.districtObject = responceData.data;
    });
  }

}
