import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TankMaintainance } from '@app/models/industial-distillery';
import { DistilleryapiService, WorkflowcofigService, DistileryService } from '@app/services';
import { Router } from '@angular/router';
import { TankMaintainancesService } from '@app/services/distillery/tankmaintainance.service';
import { TankMaintainancesConfig } from '@app/config/industrial-distillery/tankmaintainance-config';

@Component({
  selector: 'app-tankmaintenance',
  templateUrl: './tankmaintenance.component.html',
  styleUrls: ['./tankmaintenance.component.scss']
})
export class TankmaintenanceComponent implements OnInit {

  public columns = TankMaintainancesConfig.columns;
  public actionKeys = ['view','edit'];
  public dataSource = new MatTableDataSource<TankMaintainance>();
  tankData: any;
  tankConversionData: any;
  totalCount: any;
  workflowobj: any;
  tankList: any;
  constructor(private service:TankMaintainancesService, private router: Router, private workflowService: WorkflowcofigService,private distileryService: DistileryService) { }
  public pageSize = 0;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  ngOnInit() {
    this.getworkflow();
    this.getTank();
    this.getAllTankList();
  }
  tankConversionObj: any = {
    requestId:''
  };
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTank(pageNo, pageSize);
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_MAINTENANCE').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  getTank(pageNo = 0, paginationSize  = 5) {
   
      const searchobj = {
        "orderBy": "asc",
        "page": pageNo,
        "pageSize": paginationSize,
        "searchInput": this.tankConversionObj.requestId,
        "sortBy": "createdDate"
      };
      
    
    this.service.searchTank(searchobj).subscribe((resp: any) => {
      this.tankConversionData = resp.content.content;
      console.log(this.tankConversionData, '====sample====');
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content as TankMaintainance[];
      }
    });
  }

  onView(event) {
    console.log('event data ==>>',event);
    
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/view/' +  event.id]);
  }
 
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/edit/' +  event.id]);
  }
  searchTank() {
    this.getTank();
  }
  clearData() {
    
    this.tankConversionObj.requestId = '';
  
    this.getTank();
  }
  getAllTankList() {
    this.distileryService.getAllTankRegis().subscribe((resp: any) => {
      this.tankList = resp.content;
      console.log(this.tankList);
    });
  }
}



