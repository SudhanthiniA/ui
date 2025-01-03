import { Component, OnInit } from '@angular/core';
import { RawMaterialService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';
import { Router } from '@angular/router';
import { RawMaterial } from '@app/models/master';

@Component({
  selector: 'app-rawmaterial',
  templateUrl: './rawmaterial.component.html',
  styleUrls: ['./rawmaterial.component.css']
})
export class RawmaterialComponent implements OnInit {

  rawmaterialList: any = [];
  rawMaterialObj: any = {};
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = RawMaterialConfig.titleSection.list;
  public breadcrumbs = RawMaterialConfig.breadcrumbs;
  public columns = RawMaterialConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<RawMaterial>();
  constructor(
    private router: Router,
    private rawMaterialService: RawMaterialService) { }

  ngOnInit() {
    this.rawMaterialObj.isActive = true;
    this.getrawmaterialList();
  }
  onEdit(event) {
    this.router.navigate(['/master/rawmaterial/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/rawmaterial/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getrawmaterialList(pageNo, pageSize);
  }
  getrawmaterialList(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.rawMaterialObj.code ? this.rawMaterialObj.code : null,
        name: this.rawMaterialObj.name ? this.rawMaterialObj.name : null,
        isActive: this.rawMaterialObj.isActive ? JSON.parse(this.rawMaterialObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.rawMaterialService.searchRawMaterial(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as RawMaterial[];
      }
    });
  }

  searchRawMaterial() {
    this.getrawmaterialList();
  }
  resetKey() {
    this.rawMaterialObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getrawmaterialList();
  }
}
