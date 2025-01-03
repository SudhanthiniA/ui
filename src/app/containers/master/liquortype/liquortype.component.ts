import { Component, OnInit } from '@angular/core';
import { LocationmasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LiquorTypeConfig } from '@app/config/table-config/liquortype-config';
import { Location } from '@app/models/master';
import { LiquorTypeService } from '@app/services';

@Component({
  selector: 'app-liquortype',
  templateUrl: './liquortype.component.html',
  styleUrls: ['./liquortype.component.scss']
})
export class LiquortypeComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = LiquorTypeConfig.titleSection.list;
  public breadcrumbs = LiquorTypeConfig.breadcrumbs;
  public columns = LiquorTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Location>();
  tankShapeObj: any = {};
  departmentData: any;
  rawmaterialList: any;

  typeObj: any = {
    code: '',
    name: '',
    isActive: true
  }

  constructor(
    private liquorTypeService: LiquorTypeService,
    private router: Router,
    private locServ: LocationmasterService
  ) { }

  ngOnInit() {
    this.getrawmaterialList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate([ '/master/liquortype/edit/' + event.id ]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate([ '/master/liquortype/view/' + event.id ]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getrawmaterialList(pageNo, pageSize);
  }

  getrawmaterialList(pageNo = 0, pageSize = 5) {
    const objtest = {
      filters: {
        code: this.typeObj.code ? this.typeObj.code : null,
        name: this.typeObj.name ? this.typeObj.name : null,
        isActive: this.typeObj.isActive ? JSON.parse(this.typeObj.isActive) : null,
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.liquorTypeService.searchLiquorType(objtest).subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
      if ( responceData.errorCode === 200 ) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents;
      }
    });
  }

  searchLiquorType(){
    this.getrawmaterialList();
  }

  resetKey() {
    this.typeObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getrawmaterialList();
  }
 
}
