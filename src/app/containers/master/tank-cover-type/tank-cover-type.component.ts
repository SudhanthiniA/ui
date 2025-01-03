import { Component, OnInit } from '@angular/core';
import { TankCoverTypeService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { TankCoverTypeConfig } from '@app/config/table-config/tankcovertype-config';
import { TankCoverType } from '@app/models/master';

@Component({
  selector: 'app-tank-cover-type',
  templateUrl: './tank-cover-type.component.html',
  styleUrls: ['./tank-cover-type.component.css']
})
export class TankCoverTypeComponent implements OnInit {
  tankCoverData: any;
  tankCoverObj: any = {
    code: '',
    name: '',
    active: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = TankCoverTypeConfig.titleSection.list;
  public breadcrumbs = TankCoverTypeConfig.breadcrumbs;
  public columns = TankCoverTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<TankCoverType>();

  constructor(private tankCoverService: TankCoverTypeService, private router: Router) { }

  ngOnInit() {
    this.getList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/tankcovertype/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/tankcovertype/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getList(pageNo, pageSize);
  }

  getList(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.tankCoverObj.code ? this.tankCoverObj.code : null,
        name: this.tankCoverObj.name ? this.tankCoverObj.name : null,
        isActive: this.tankCoverObj.active ? JSON.parse(this.tankCoverObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.tankCoverService.searchTankCover(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as TankCoverType[];
      }
    });
  }
  
  searchTankCover() {
    this.getList();
  }
  resetKey() {
    this.tankCoverObj = {
      code: '',
      name: '',
      active: true,
    };
    this.getList();
  }
}
