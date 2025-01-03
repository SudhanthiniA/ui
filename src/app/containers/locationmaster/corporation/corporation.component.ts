import { Component, OnInit } from '@angular/core';
import {
  StatemasterService, CountrymasterService,
  DistrictMasterService,
  CorporationMasterService
} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { CorporationConfig } from '@app/config/table-config/corporation-config';
import { Router } from '@angular/router';
import { Corporation } from '@app/models/location-master';

@Component({
  selector: 'app-corporation',
  templateUrl: './corporation.component.html',
  styleUrls: ['./corporation.component.css']
})
export class CorporationComponent implements OnInit {
  corporationData: any;
  districtData: any[];
  stateData: any[];
  countryData: any;
  corporationObj: any = {
    country_id: '',
    state_id: '',
    district_id: '',
    corporation_name: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = CorporationConfig.titleSection.list;
  public breadcrumbs = CorporationConfig.breadcrumbs;
  public columns = CorporationConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Corporation>();
  constructor(
    private router: Router,
    private stateService: StatemasterService,
    private corporationServ: CorporationMasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService) { }

  ngOnInit() {
    this.getCorporation();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/corporation/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/corporation/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCorporation(pageNo, pageSize);
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
  getCorporation(pageNo = 0, pageSize = 10) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        country_id: this.corporationObj.country_id ? this.corporationObj.country_id : null,
        state_id: this.corporationObj.state_id ? this.corporationObj.state_id : null,
        district_id: this.corporationObj.district_id ? this.corporationObj.district_id : null,
        active: this.corporationObj.active ? JSON.parse(this.corporationObj.active) : null,
        corporation_name: this.corporationObj.corporation_name ? this.corporationObj.corporation_name : null,
      },
      pageNo,
      paginationSize
    };
    this.corporationServ.searchCorporation(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Corporation[];
    });
  }
  searchCorporation() {
    this.getCorporation();
  }
  resetForm() {
    this.corporationObj = {
      country_id: '',
      state_id: '',
      district_id: '',
      corporation_name: '',
      active: true
    };
    this.getCorporation();
  }
}
