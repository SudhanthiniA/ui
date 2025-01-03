import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TreasuryService } from '@app/services/masters/treasury.service';
import { DivisionService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { TreasuryConfig } from '@app/config/table-config/treasury-config';
import { Treasury } from '@app/models/master';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.scss']
})
export class TreasuryComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TreasuryConfig.titleSection.list;
  public breadcrumbs = TreasuryConfig.breadcrumbs;
  public columns = TreasuryConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Treasury>();
  divisionData: any;
  treasuryData: any;
  treasuryObj: any = {
    treasuryCode: '',
    treasuryName: '',
    divisionid: '',
    isActive: ''
  };
  constructor(
    private router: Router,
    private service: TreasuryService,
    private division: DivisionService
  ) { }

  ngOnInit() {
    this.treasuryObj.isActive = '';
    this.getTreasury();
    this.getDivision();
  }

  getDivision() {
    this.division.getAllDivision().subscribe((resp: any) => {
      this.divisionData = resp.data;
    });
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/treasury/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/treasury/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getTreasury(pageNo, pageSize);
  }

  getTreasury(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        treasuryCode: this.treasuryObj.treasuryCode ? this.treasuryObj.treasuryCode : null,
        treasuryName: this.treasuryObj.treasuryName ? this.treasuryObj.treasuryName : null,
        isActive: this.treasuryObj.isActive ? this.treasuryObj.isActive : null,
      },
      pageNo,
      paginationSize
    };
    this.service.searchTreasury(searchobj).subscribe((responceData: any) => {
      this.treasuryData = responceData.data.contents;
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Treasury[];
      }
    });
  }

  searchTreasury() {
    this.getTreasury();
  }

  resetKey() {
    this.treasuryObj = {
      treasuryCode: '',
      treasuryName: '',
      isActive: '',
    };
    this.getTreasury();
  }
}
