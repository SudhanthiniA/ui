import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { TankShapeConfig } from '@app/config/table-config/tankshape-config';
import { TankShapeService } from '@app/services';

@Component({
  selector: 'app-tank-shape',
  templateUrl: './tank-shape.component.html',
  styleUrls: ['./tank-shape.component.css']
})
export class TankShapeComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TankShapeConfig.titleSection.list;
  public breadcrumbs = TankShapeConfig.breadcrumbs;
  public columns = TankShapeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  tankShapeObj: any = {};
  departmentData: any;

  constructor(
    private router: Router,
    private tankshape: TankShapeService
  ) { }

  ngOnInit() {
    this.tankShapeObj.isActive = '';
    this.getList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/tankshape/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/tankshape/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getList(pageNo, pageSize);
  }

  getList(pageNo = 0, pageSize = 5) {
    const searchobj = {
      filters: {
        code: this.tankShapeObj.code ? this.tankShapeObj.code : null,
        name: this.tankShapeObj.name ? this.tankShapeObj.name : null,
        isActive: this.tankShapeObj.isActive ? JSON.parse(this.tankShapeObj.isActive) : null,
      },
      pageNo,
      paginationSize: pageSize
    };
    this.tankshape.searchTankShape(searchobj).subscribe(
      (responceData: any) => {
      this.departmentData = responceData.data.contents;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Location[];
      }
    });
  }

  searchTankShape() {
    this.getList();
  }

  resetKey() {
    this.tankShapeObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getList();
  }
}
