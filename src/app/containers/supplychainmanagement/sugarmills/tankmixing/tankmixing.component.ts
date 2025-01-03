import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TankConversionConfig } from '@app/config/industrial-distillery/tankconversion-config';
import { Router } from '@angular/router';
import { TankConversionService } from '@app/services/distillery/tankconversion.service';
import { DistileryService, WorkflowcofigService } from '@app/services';

@Component({
  selector: 'app-tankmixing',
  templateUrl: './tankmixing.component.html',
  styleUrls: ['./tankmixing.component.scss']
})
export class TankmixingComponent implements OnInit {
  tankConversionData: any;
  tankConversionObj: any = {};
  tankData: any;
  workflowobj:any;
  tankList: any;

  pageNo = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TankConversionConfig.titleSection.list;
  public breadcrumbs = TankConversionConfig.breadcrumbs;
  public columns = TankConversionConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource();

  constructor(private service: TankConversionService, 
    private router: Router,
    private workflowService: WorkflowcofigService,
    private distilleryService: DistileryService) { }

  ngOnInit() {
    this.getworkflow();
    this.getTankConversion();
    // this.getAllTankList();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_CONVERSION').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }

  // getAllTankList() {
  //   this.distilleryService.getAllTankRegis().subscribe((resp: any) => {
  //     this.tankList = resp.content;
  //     console.log(this.tankList);
  //   });
  // }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/edit/' + event.id]);
  }

  handlePagination2(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTankConversion(pageNo, pageSize);
  }

  getTankConversion(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      // "orderBy": "asc",
      "page": pageNo,
      "pageSize": paginationSize,
      "searchInput": this.tankConversionObj.search,
      // "sortBy": "createdDate"
    };
    this.service.searchTankConversion(searchobj).subscribe((resp: any) => {
      this.tankConversionData = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content;
      }
    });
  }

  searchTankConversion() {
    this.getTankConversion();
  }

  clearData() {
    this.tankConversionObj.search = '';
    this.getTankConversion();
  }
}
