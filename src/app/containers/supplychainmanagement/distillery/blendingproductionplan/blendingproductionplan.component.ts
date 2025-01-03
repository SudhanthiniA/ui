import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { ProductionPlanService } from '@app/services/distillery/productionplan.service';
import { ProductionPlan } from '@app/models/industial-distillery';
import { ProductionPlanConfig } from '@app/config/industrial-distillery/productionplan-config';

@Component({
  selector: 'app-blendingproductionplan',
  templateUrl: './blendingproductionplan.component.html',
  styleUrls: ['./blendingproductionplan.component.scss']
})
export class BlendingproductionplanComponent implements OnInit {

   public columns = ProductionPlanConfig.columns;
  public actionKeys = ['view','edit'];
  public dataSource = new MatTableDataSource<ProductionPlan>();
  tankData: any;
  tankConversionData: any;
  totalCount: any;
  workflowobj: any;
  constructor(private service:ProductionPlanService, private router: Router) { }
  public pageSize = 5;
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  ngOnInit() {
  
    this.getTank();
  }
  Obj: any = {
    tankId :'',
    reqdate:''
  };
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getTank(pageNo, pageSize);
  }

  
  getTank(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        reqdate: this.Obj.reqdate ? this.Obj.reqdate : null,
      },
      pageNo,
      paginationSize
    };
    this.service.searchTank(searchobj).subscribe((resp: any) => {
      this.tankConversionData = resp.data.contents;
      console.log(this.tankConversionData, '====sample====');
      if (resp.errorCode === 200) {
        this.totalCount = resp.data.totalElements;
        this.dataSource.data = resp.data.contents as ProductionPlan[];
      }
    });
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/view/' +  event.id]);
  }
 
  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/edit/' +  event.id]);
  }
}
