import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatemasterService, CountrymasterService, DistrictMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { DistrictConfig } from '@app/config/table-config/district-config';
import { District } from '@app/models/location-master';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  districtData: any;

  countryData: any;
  stateData: any;
  districtObject: any = {
    country_id: '',
    state_id: '',
    district_name: '',
    active: true
  };

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = DistrictConfig.titleSection.list;
  public breadcrumbs = DistrictConfig.breadcrumbs;
  public columns = DistrictConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<District>();
  constructor(
    private router: Router,
    private stateService: StatemasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService
  ) { }

  ngOnInit() {
    this.getDistrict();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/district/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/district/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getDistrict(pageNo, pageSize);
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

  getDistrict(pageNo = 0, paginationSize = 5) {
    const { country_id, state_id, district_name, active } = this.districtObject;
    const searchObj = {
      filters: {
        country_id: country_id ? country_id : null,
        state_id: state_id ? state_id : null,
        district_name: district_name ? district_name : null,
        active: active ? JSON.parse(active) : null,
      },
      pageNo,
      paginationSize
    };
    this.districtService.searchDistrict(searchObj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as District[];
      }
    });
  }
  searchDistrict() {
    this.getDistrict();
  }
  resetForm() {
    this.districtObject = {
      country_id: '',
      state_id: '',
      district_name: '',
      active: true
    };
    this.getDistrict();
  }
}



