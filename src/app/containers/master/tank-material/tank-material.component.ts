import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { TankMaterialConfig } from '@app/config/table-config/tankmaterial-config';
import { TankMaterialService } from '@app/services';

@Component({
  selector: 'app-tank-material',
  templateUrl: './tank-material.component.html',
  styleUrls: ['./tank-material.component.css']
})
export class TankMaterialComponent implements OnInit {
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = TankMaterialConfig .titleSection.list;
  public breadcrumbs = TankMaterialConfig .breadcrumbs;
  public columns = TankMaterialConfig .columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  departmentData: any;
  tankmaterialObj: any = {};

  constructor(
    private tankMaterialService: TankMaterialService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tankmaterialObj.isActive = '';
    this.getList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/tankmaterial/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/tankmaterial/view/' + event.id ]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getList(pageNo, pageSize);
  }

  getList(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.tankmaterialObj.code ? this.tankmaterialObj.code : null,
        name: this.tankmaterialObj.name ? this.tankmaterialObj.name : null,
        isActive: this.tankmaterialObj.isActive ? JSON.parse(this.tankmaterialObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.tankMaterialService.searchTankMaterial(searchobj).subscribe((responceData: any) => {
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      }
    });
  }

  searchTankMaterial() {
    this.getList();
  }

  resetKey() {
    this.tankmaterialObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getList();
  }
}
