import { Component, OnInit } from '@angular/core';
import { StatemasterService, CountrymasterService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { StateConfig } from '@app/config/table-config/state-config';
import { State } from '@app/models/location-master';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {
  pageNo = 0;
  countryDropDownSettings: IDropdownSettings;
  searchValue = null;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StateConfig.titleSection.list;
  public breadcrumbs = StateConfig.breadcrumbs;
  public columns = StateConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<State>();
  stateData: any;
  countryData: any;
  stateObj: any = {
    stateName: '',
    countryName: '',
    active: true,
  };

  constructor(
    private stateService: StatemasterService,
    private router: Router,
    private countryService: CountrymasterService
  ) { }

  ngOnInit() {
    this.getState();
    this.getCountry(null);
    this.countryDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'countryName',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
  }
  onEdit(event) {
    this.router.navigate(['/location/state/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/location/state/view/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getState(pageNo, pageSize);
  }
  onItemSelect(item: any) {
  }

  onItemDeselect(item: any) {
  }


  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValue = item;
      this.getCountry(this.searchValue);
    } else {
      this.searchValue = null;
      this.getCountry(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getCountry(this.searchValue);
    }
  }
  getCountry(countryName) {
    const requestParam = {
      filters: { countryName: countryName, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.countryService.searchCountry(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.countryData = resp.data.contents;
        }
      });
  }

  getState(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchobj = {
      filters: {
        countryName: this.stateObj.countryName ? this.stateObj.countryName[0].countryName : null,
        stateName: this.stateObj.stateName ? this.stateObj.stateName : null,
        active: this.stateObj.active ? this.stateObj.active : null,
      },
      pageNo,
      paginationSize
    };
    this.stateService.searchState(searchobj)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.totalCount = resp.data.totalElements;
          this.dataSource.data = resp.data.contents as State[];
        }
      });
  }
  searchState() {
    this.getState();
  }

  resetKey() {
    this.stateObj = {
      stateName: '',
      countryName: '',
      active: true,
    };
    this.getState();
  }
}
