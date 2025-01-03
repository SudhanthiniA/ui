import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityMasterService } from '@app/services';

@Component({
  selector: 'app-view-municipality',
  templateUrl: './view-municipality.component.html',
  styleUrls: ['./view-municipality.component.scss']
})
export class ViewMunicipalityComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  municipalityObject: any = {};
  formSubmitted = false;
  
  constructor(
    private route: ActivatedRoute,
    private municipalitySer: MunicipalityMasterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTaulkById(params.id);
        this.municipalityObject.id = params.id;
      }
    });
  }

  getTaulkById(id) {
    this.municipalitySer.getmunicipalityById(id).subscribe((responceData: any) => {
      this.municipalityObject = responceData.data;
      this.municipalityObject.country = this.municipalityObject.countryResponseDto.countryName;
      this.municipalityObject.state = this.municipalityObject.stateResponseDto.stateName;
      this.municipalityObject.district = this.municipalityObject.districtName;
      this.municipalityObject.taulk = this.municipalityObject.talukName;
    });
  }

}
