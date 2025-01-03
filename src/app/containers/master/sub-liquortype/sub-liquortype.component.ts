import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubLiquorTypeConfig } from '@app/config/table-config/subliquortype-config';
import { SubLiquorType } from '@app/models/master';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-sub-liquortype',
  templateUrl: './sub-liquortype.component.html',
  styleUrls: ['./sub-liquortype.component.scss']
})
export class SubLiquortypeComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = SubLiquorTypeConfig.titleSection.list;
   public breadcrumbs = SubLiquorTypeConfig.breadcrumbs;
   public columns = SubLiquorTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SubLiquorType>();
  tankShapeObj: any = {};
  departmentData: any;
  rawmaterialList: any;

  typeObj: any = {
    code: '',
    name: '',
    isActive: 1
  };

  constructor(
    private service: SubLiquorTypeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getSubLiquortype();
  }

  onEdit(event) {
    this.router.navigate([ '/master/subliquortype/edit/' + event.id ]);
  }

  onView(event) {
    this.router.navigate([ '/master/subliquortype/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getSubLiquortype(pageNo, pageSize);
  }

  getSubLiquortype(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.typeObj.code ? this.typeObj.code : null,
        name: this.typeObj.name ? this.typeObj.name : null,
        isActive: this.typeObj.isActive ? JSON.parse(this.typeObj.isActive) : null,
      },
      pageNo,
      paginationSize: pageSize
    };
    this.service.searchSubLiquorType(objtest).subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
      if ( responceData.errorCode === 200 ) {
        this.dataSource.data = responceData.data.contents;
        this.totalCount = responceData.data.totalElements;
      }
    });
  }

  searchLiquorType(){
    this.getSubLiquortype();
  }

  resetKey() {
    this.typeObj = {
      code: '',
      name: '',
      isActive: 1,
    };
    this.getSubLiquortype();
  }
}
