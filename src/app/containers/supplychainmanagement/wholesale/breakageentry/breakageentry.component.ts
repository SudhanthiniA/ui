import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { BreakageEntryNewService, ApiService } from '@app/services';
import { BreakageEntry } from '@app/config/wholesale/breakageEntry.config';
import { breakgeEntry } from '@app/models/wholesale/breakageEntry';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-breakageentry',
  templateUrl: './breakageentry.component.html',
  styleUrls: ['./breakageentry.component.scss']
})
export class BreakageentryComponent implements OnInit {
  public actionBtnBasedOnCondAccepted = {

    view: {
      column: 'orderStatus',
      condition: 'ACCEPTED',
    },
  };

  breakageObj: any = {
    date:'',
    brandName: '',
    liquorType:'',
    packageSize:"",
  };

  public actionKeysAccepted = ['view', 'edit'];

  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public accepted = BreakageEntry.Accepted;

  public dataSourceAccepted = new MatTableDataSource<breakgeEntry>();

  constructor(private router: Router,
    private apiservice: ApiService,
    private breakageServices: BreakageEntryNewService) { }
  digitallocksList: any;
  selected: any;
  Pd18list: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  BreakageEntrylist: any;

  ngOnInit() {

    this.getBreakageEntryLists();
  }

  edit(event) {
    console.log('Parent-edit', event);
  }
  view(event) {
    console.log('Parent-view', event);
  }
  getBreakageEntryLists(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const requestParam = {
      filters: {
        // date:this.breakageObj.date?this.breakageObj.date : null,
        // brandName:this.breakageObj.brandName?this.breakageObj.brandName : null,
        // liquorType:this.breakageObj.liquorType?this.breakageObj.liquorType : null,
        // packageSize:this.breakageObj.packageSize?this.breakageObj.packageSize : null,
        },
      pageNo,
      paginationSize
    };
    this.breakageServices.searchBreakageEntry(requestParam).subscribe((response: any) => {
      if (response) {
        this.BreakageEntrylist = response.data.contents;
        this.dataSourceAccepted.data = response.data.contents as breakgeEntry[]
      }
    })
  }
  
  searchBrakage(){
    this.getBreakageEntryLists()
  }
  
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getBreakageEntryLists(pageNo, pageSize);
  }

}
