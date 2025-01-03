import { Component, OnInit } from '@angular/core';
import { CountrymasterService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { CountryConfig } from '@app/config/table-config/country-config';
import { Country } from '@app/models/location-master';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit {
  countryData: any;
  countryObj: any = {
    country_name: '',
    active: true,
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = CountryConfig.titleSection.list;
  public breadcrumbs = CountryConfig.breadcrumbs;
  public columns = CountryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Country>();
  constructor(
    private countryService: CountrymasterService,
    private router: Router) { }

  ngOnInit() {
    this.getCountry();
  }

  onEdit(event) {
    this.router.navigate(['/location/country/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/location/country/view/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getCountry(pageNo, pageSize);
  }
  getCountry(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const requestParam = {
      filters: {
        countryName: this.countryObj.country_name ? this.countryObj.country_name : null,
        isActive: this.countryObj.active ? JSON.parse(this.countryObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.countryService.searchCountry(requestParam)
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
        this.dataSource.data = resp.data.contents as Country[];
        this.totalCount = resp.data.totalElements;
        }
      });
  }
  searchCountry() {
  this.getCountry();
  }

  resetKey() {
    this.countryObj = {
      country_name: '',
      active: true,
    };
    this.getCountry();
  }
}
