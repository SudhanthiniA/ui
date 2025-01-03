import { Component, OnInit} from '@angular/core';
import { StageMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { StageConfig } from '@app/config/table-config/stage-config';
import { Stage } from '@app/models/master';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = StageConfig.titleSection.list;
  public breadcrumbs = StageConfig.breadcrumbs;
  public columns = StageConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Stage>();
  stageObj: any = {
    code: '',
    stages: '',
    isActive: true,
  };
  stageList: any;
  constructor(
    private stageService: StageMasterService,
    private router: Router) { }

  ngOnInit() {
    this.getStages();
  }
  onEdit(event) {
    this.router.navigate(['/master/stage/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/stage/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getStages(pageNo, pageSize);
  }
  getStages(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.stageObj.code ? this.stageObj.code : null,
        stages: this.stageObj.stages ? this.stageObj.stages : null,
        isActive: this.stageObj.isActive ? JSON.parse(this.stageObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.stageService.searchStage(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Stage[];
    });
  }

  searchapi() {
    this.getStages();
  }

  resetKey() {
    this.stageObj = {
      code: '',
      stages: '',
      isActive: '',
    };
    this.getStages();
  }
}
