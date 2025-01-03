import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountrymasterService, LocationmasterService, StatemasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { LocationConfig } from '@app/config/table-config/master-config';
import { Location } from '@app/models/location-master';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})

export class LocationComponent implements OnInit {

  districtData: any;
  countryData: any;
  stateData: any[];
  locationObj: any = {
    country: '',
    state: '',
    name: '',
    isActive: true
  };

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LocationConfig.titleSection.list;
  public breadcrumbs = LocationConfig.breadcrumbs;
  public columns = LocationConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();

  constructor(
    private router: Router,
    private locServ: LocationmasterService,
    private countryService: CountrymasterService,
    private stateService: StatemasterService
  ) { }

  ngOnInit() {
  
    this.getCountryList();
    this.getDistrictList();
    this.getLocations();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/location/location/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/location/location/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getLocations(pageNo, pageSize);
  }

  getLocations(pageNo = 0, pageSize = 5) {
    const { country, state, isActive, locationName } = this.locationObj;
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        country: country ? country : null,
        state: state ? state : null,
        isActive: isActive ? JSON.parse(isActive) : null,
        locationName: locationName ? locationName : null
      },
      pageNo,
      paginationSize
    };
    this.locServ.searchLocation(searchObj)
      .subscribe((responceData: any) => {
        // console.log('responceData::', responceData);
        if ( responceData.errorCode === 200 ) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as Location[];
        }
      });
  }

  search() {
    this.getLocations();
  }

  clear() {
    this.locationObj = {
      country: '',
      state: '',
      locationName: '',
      isActive: true
    };
    this.getLocations();
  }

  getCountryList() {
    this.countryService.getCountry()
      .subscribe((responceData: any) => {
        this.countryData = responceData.data;
      });
  }

  getDistrictList() {
    this.locServ.getLocations()
      .subscribe( ( resp: any ) => {
        this.districtData = resp.data;
      });
  }

  getStatesByCountryId(countryId) {
    this.stateService.getStateByCountryid(countryId)
      .subscribe((responceData: any) => {
        this.stateData = responceData.data;
      });
  }

}
