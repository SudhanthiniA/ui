import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupplyTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { SupplyTypeConfig } from '@app/config/table-config/supplytype-config';
import { SupplyType } from '@app/models/master';

@Component({
  selector: 'app-supllytype',
  templateUrl: './supllytype.component.html',
  styleUrls: ['./supllytype.component.scss']
})
export class SupllytypeComponent implements OnInit {
  Obj: any = {
    supplyType: '',
    name: '',
    isActive: '',
  }
  supplytypelist: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = SupplyTypeConfig.titleSection.list;
  public breadcrumbs = SupplyTypeConfig.breadcrumbs;
  public columns = SupplyTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SupplyType>();

  constructor(private router: Router, private supplyTypeService: SupplyTypeService) { }

  ngOnInit() {
    this.Obj.isActive = '';
    this.getCategory();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/supplytype/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/supplytype/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getCategory(pageNo, pageSize);
  }

  getCategory(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        supplyType: this.Obj.supplyType ? this.Obj.supplyType : null,
        name: this.Obj.name ? this.Obj.name : null,
        isActive: this.Obj.isActive ? JSON.parse(this.Obj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.supplyTypeService.searchSupplyType(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as SupplyType[];
      }
    });
  }

  searchapi() {
    this.getCategory();
  }

  resetKey() {
    this.Obj = {
      supplyType: '',
      name: '',
      isActive: '',
    };
    this.getCategory();
  }
}
