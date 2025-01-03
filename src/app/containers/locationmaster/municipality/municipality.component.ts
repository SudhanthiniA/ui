import { Component, OnInit } from '@angular/core';
import {
  StatemasterService,
  CountrymasterService,
  DistrictMasterService,
  MunicipalityMasterService
} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { MunicipalityConfig } from '@app/config/table-config/municipality-config';
import { Router } from '@angular/router';
import { Municipality } from '@app/models/location-master';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {

  municipalityData: any;
  countryData: any;
  stateData: any;
  districtData: any;
  municipalityObj: any = {
    country_id: '',
    state_id: '',
    district_id: '',
    name: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = MunicipalityConfig.titleSection.list;
  public breadcrumbs = MunicipalityConfig.breadcrumbs;
  public columns = MunicipalityConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Municipality>();
  constructor(
    private router: Router,
    private stateService: StatemasterService,
    private municipalitySer: MunicipalityMasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService
  ) { }

  ngOnInit() {
    this.getMunicipality();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/municipality/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/municipality/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getMunicipality(pageNo, pageSize);
  }
  getCountry() {
    this.countryService.getCountry().subscribe((responceData: any) => {
      this.countryData = responceData.data;
    });
  }

  getStatesByCountryId(countryId) {
    if (countryId !== '') {
      this.stateService.getStateByCountryid(countryId).subscribe((responceData: any) => {
        this.stateData = responceData.data;
      });
    } else {
      this.stateData = [];
    }
  }

  getDistrictsByStateId(stateId) {
    if (stateId !== '') {
      this.districtService.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
        this.districtData = responceData.data;
      });
    } else {
      this.districtData = [];
    }
  }
  getMunicipality(pageNo = 0, pageSize = 10) {
    const { country_id, state_id, district_id, active, municipality_name } = this.municipalityObj;
    const searchObj = {
      filters: {
        country_id: country_id ? country_id : null,
        state_id: state_id ? state_id : null,
        district_id: district_id ? district_id : null,
        active: active ? JSON.parse(active) : null,
        name: municipality_name ? municipality_name : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.municipalitySer.searchMunicipality(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Municipality[];
    });
  }

  searchMunicipality() {
    this.getMunicipality();
  }
  resetForm() {
    this.municipalityObj = {
      country_id: '',
      state_id: '',
      district_id: '',
      name: '',
      active: true
    };
    this.getMunicipality();
  }

}
