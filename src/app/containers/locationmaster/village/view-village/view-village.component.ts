import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';
import { StatemasterService, CountrymasterService,
  DistrictMasterService, TalukMasterService, VillageMasterService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { AlertService, MasterapiService } from '@app/services';
@Component({
  selector: 'app-view-village',
  templateUrl: './view-village.component.html',
  styleUrls: ['./view-village.component.scss']
})
export class ViewVillageComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  taulkData: any;
  villageObject: any = {};
  formSubmitted = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private masterServiceApi: MasterapiService,
    private alert: AlertService,
    private villageService: VillageMasterService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.getCountry();
    this.villageObject.status = true;
    this.villageObject.country = '';
    this.villageObject.state = '';
    this.villageObject.district = '';
    this.villageObject.taulk = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getVillageById(params.id);
        this.villageObject.id = params.id;
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

  getTaulk(districtId) {
    if (districtId !== '') {
      this.apiService.get('villagelist').then(responceData => {
        this.taulkData = responceData;
      }).catch((err: any) => {
        console.log('\n err...', err);
      });
    } else {
      this.taulkData = [];
    }
  }

  getVillageById(id) {
    this.villageService.getvillageById(id).subscribe((responceData: any) => {
      this.villageObject = responceData.data;
      this.villageObject.country = this.villageObject.countryResponseDto.countryName;
      this.villageObject.state = this.villageObject.stateResponseDto.stateName;
      this.villageObject.district = this.villageObject.districtName;
      this.villageObject.taulk = this.villageObject.talukName;
    });
  }

}
