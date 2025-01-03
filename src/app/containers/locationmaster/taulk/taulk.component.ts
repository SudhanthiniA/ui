import { Component, OnInit } from '@angular/core';
import { StatemasterService, CountrymasterService, DistrictMasterService, TalukMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TalukConfig } from '@app/config/table-config/taluk-config';
import { Taluk } from '@app/models/location-master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taulk',
  templateUrl: './taulk.component.html',
  styleUrls: ['./taulk.component.css']
})
export class TaulkComponent implements OnInit {
  taulkData: any;
  taulkObject: any = {
    country_id: '',
    state_id: '',
    district_id: '',
    taluk_name: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = TalukConfig.titleSection.list;
  public breadcrumbs = TalukConfig.breadcrumbs;
  public columns = TalukConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Taluk>();
  countryData: any;
  stateData: any;
  districtData: any;
  constructor(
              private router: Router,
              private stateService: StatemasterService,
              private districtService: DistrictMasterService,
              private talukService: TalukMasterService,
              private countryService: CountrymasterService) { }

  ngOnInit() {
    this.getTaulk();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/taluk/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/taluk/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getTaulk(pageNo, pageSize);
  }
  getCountry() {
    this.countryService.getCountry().subscribe((responceData: any) => {
      this.countryData = responceData.data;
    });
  }

  getState(countryId) {
    if (countryId !== '') {
      this.stateService.getStateByCountryid(countryId).subscribe((responceData: any) => {
        this.stateData = responceData.data;
      });
    } else {
      this.stateData = [];
    }
  }

  getDistrict(stateId) {
    if (stateId !== '') {
      this.districtService.getDistrictsByStateid(stateId).subscribe((responceData: any) => {
        this.districtData = responceData.data;
      });
    } else {
      this.districtData = [];
    }
  }
  getTaulk(pageNo = 0, pageSize = 5) {
    const searchObj = {
      filters: {
        countryName: this.taulkObject.country_id ? this.taulkObject.country_id : null,
        stateName: this.taulkObject.state_id ? this.taulkObject.state_id : null,
        districtName: this.taulkObject.district_id ? this.taulkObject.district_id : null,
        active: this.taulkObject.active ? JSON.parse(this.taulkObject.active) : null,
        talukName: this.taulkObject.taluk_name ? this.taulkObject.taluk_name : null,
      },
      pageNo,
      paginationSize: pageSize
    };
    this.talukService.searchTaluk(searchObj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Taluk[];
      }
    });
  }

  searchTaulk() {
   this.getTaulk();
  }
  resetForm() {
    this.taulkObject = {
      country_id: '',
      state_id: '',
      taluk_name: '',
      district_id: '',
      active: true
    };
    this.getTaulk();
  }
}
