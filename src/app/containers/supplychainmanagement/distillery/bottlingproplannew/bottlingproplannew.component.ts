import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductionPlan } from '@app/models/industial-distillery';
import { ProductionPlanConfig } from '@app/config/industrial-distillery/productionplan-config';
import { DistileryService,WorkflowcofigService ,PreviewService} from '@app/services';

@Component({
  selector: 'app-bottlingproplannew',
  templateUrl: './bottlingproplannew.component.html',
  styleUrls: ['./bottlingproplannew.component.scss']
})
export class BottlingproplannewComponent implements OnInit {
  

  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  workflowobj: any;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public columns = ProductionPlanConfig.columns;
  public dataSource = new MatTableDataSource<ProductionPlan>();
  tankData: any;
  constructor(private service:DistileryService,
              private workflowService:WorkflowcofigService,
              private router: Router,
              private preview: PreviewService) { }
  ngOnInit() {
  this.preview.setData = '';
  this.getPBB();
  this.getworkflow();
  }

  getworkflow(){
    this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_BOTTLING_PRO_PLAN').subscribe((resp: any) => {
      this.workflowobj = resp.content
    })
  }
  bppSearchObj: any = {
     
  };
  handlePagination(event) {

    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getPBB(pageNo, pageSize);
  }

  getPBB(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      searchInput:this.bppSearchObj.search,
      pageNo,
      pageSize:paginationSize
    };
    this.service.searchBPP(searchobj).subscribe((resp: any) => {
      this.tankData = resp.content.content;
      if (resp.responseCode === 200) {
        this.totalCount = resp.content.totalElements;
        this.dataSource.data = resp.content.content as ProductionPlan[];
      }
     
    });
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottlingproplannew/view/',event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/bottlingproplannew/edit/',event.id]);
  }

  searchBPP() {
    this.getPBB();
  }

  clearData() {
    this.bppSearchObj.search = '';
    this.getPBB();
  }

}
