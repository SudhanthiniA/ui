import { Component, OnInit } from '@angular/core';
import { StatemasterService, CountrymasterService,
  DistrictMasterService, TalukMasterService, VillageMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { VillageConfig } from '@app/config/table-config/village-config';
import { Village } from '@app/models/location-master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  villageData: any;
  countryData: any;
  stateData: any;
  districtData: any;
  VillageObj: any = {
    country_id: '',
    state_id: '',
    village_name: '',
    district_id: '',
    taluk_id: '',
    active: true
  };
  taulkData: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = VillageConfig.titleSection.list;
  public breadcrumbs = VillageConfig.breadcrumbs;
  public columns = VillageConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Village>();
  constructor(private stateService: StatemasterService,
              private router: Router,
              private districtService: DistrictMasterService,
              private talukService: TalukMasterService,
              private villageService: VillageMasterService,
              private countryService: CountrymasterService) { }

  ngOnInit() {
    this.getVillage();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/village/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/village/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getVillage(pageNo, pageSize);
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
  getTaulkByDistId(distId) {
    if (distId !== '') {
      this.talukService.gettalukByDistId(distId).subscribe((responceData: any) => {
        this.taulkData = responceData.data;
        console.log(this.taulkData, '<-----sdfsdf----->')
      });
    } else {
      this.taulkData = [];
    }
  }
  getVillage(pageNo = 0, pageSize = 10) {
    const searchObj = {
      filters: {
        country_id: this.VillageObj.country_id ? this.VillageObj.country_id : null,
        state_id: this.VillageObj.state_id ? this.VillageObj.state_id : null,
        district_id: this.VillageObj.district_id ? this.VillageObj.district_id : null,
        active: this.VillageObj.active ? JSON.parse(this.VillageObj.active) : null,
        taluk_id: this.VillageObj. taluk_id ? this.VillageObj. taluk_id : null,
        village_name: this.VillageObj. village_name ? this.VillageObj. village_name : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.villageService.searchVillage(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data  = responceData.data.contents as Village[];
    });
  }

  searchVillage() {
  this.getVillage();
  }
  resetForm() {
    this.VillageObj = {
      country_id: '',
      state_id: '',
      district_id: '',
      taluk_id: '',
      active: true,
      village_name: ''
    };
    this.getVillage();
  }

}
