import { Component, OnInit } from '@angular/core';
import {
  StatemasterService, CountrymasterService,
  DistrictMasterService, BlockMasterService
} from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { BlockConfig } from '@app/config/table-config/block-config';
import { Router } from '@angular/router';
import { Block } from "@app/models/location-master";

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  blockData: any;
  districtData: any;
  stateData: any[];
  countryData: any;
  blockObj: any = {
    country_id: '',
    state_id: '',
    district_id: '',
    block_name: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 10;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = BlockConfig.titleSection.list;
  public breadcrumbs = BlockConfig.breadcrumbs;
  public columns = BlockConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Block>();
  constructor(
    private router: Router,
    private stateService: StatemasterService,
    private blockService: BlockMasterService,
    private districtService: DistrictMasterService,
    private countryService: CountrymasterService) { }

  ngOnInit() {
    this.getBlock();
    this.getCountry();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/location/block/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/location/block/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getBlock(pageNo, pageSize);
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
  getBlock(pageNo = 0, pageSize = 10) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        country_id: this.blockObj.country_id ? this.blockObj.country_id : null,
        state_id: this.blockObj.state_id ? this.blockObj.state_id : null,
        district_id: this.blockObj.district_id ? this.blockObj.district_id : null,
        active: this.blockObj.active ? JSON.parse(this.blockObj.active) : null,
        block_name: this.blockObj.block_name ? this.blockObj.block_name : null,
      },
      pageNo,
      paginationSize
    };
    this.blockService.searchblock(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Block[];
    });
  }
  searchBlock() {
    this.getBlock();
  }
  resetForm() {
    this.blockObj = {
      country_id: '',
      state_id: '',
      district_id: '',
      block_name: '',
      active: true
    };
    this.getBlock();
  }
}
