import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, MasterapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view-corporation',
  templateUrl: './view-corporation.component.html',
  styleUrls: ['./view-corporation.component.scss']
})
export class ViewCorporationComponent implements OnInit {

  countryData: any;
  stateData: any;
  districtData: any;
  corporationObject: any = {};
  formSubmitted = false;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private masterServiceApi: MasterapiService,
  ) { }

  ngOnInit() {
    this.getCountry();
    this.corporationObject.status = true;
    this.corporationObject.country = '';
    this.corporationObject.state = '';
    this.corporationObject.district = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getCorporationById(params.id);
        this.corporationObject.id = params.id;
      }
    });
  }

  getCountry() {
    this.apiService.get('countrylist').then(responceData => {
      this.countryData = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getState(countryId) {
    if (countryId !== '') {
      this.apiService.get('statelist').then(responceData => {
        this.stateData = responceData;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      this.stateData = [];
    }
  }

  getDistrict(stateId) {
    if (stateId !== '') {
      this.apiService.get('districtlist').then(responceData => {
        this.districtData = responceData;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      this.districtData = [];
    }
  }

  getCorporationById(id) {
      const url = apiUrls.getCorporationByid + '?id=' + id;
      this.masterServiceApi.get(url).then((responceData: any) => {
        this.corporationObject = responceData.data;
        this.corporationObject.country = this.corporationObject.countryResponseDto.countryName;
        this.corporationObject.state = this.corporationObject.stateResponseDto.stateName;
        this.corporationObject.district = this.corporationObject.districtName;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
