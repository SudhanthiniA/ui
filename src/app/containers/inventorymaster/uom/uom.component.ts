import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { UomConfig } from '@app/config/table-config/uom-config';
import { Uom } from '@app/models/inventory-master';

@Component({
  selector: 'app-uom',
  templateUrl: './uom.component.html',
  styleUrls: ['./uom.component.scss']
})
export class UomComponent implements OnInit {
  date: any;
  uomList: Array<any> = [];
  uomObj: any = {}
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = UomConfig.titleSection.list;
  public breadcrumbs = UomConfig.breadcrumbs;
  public columns = UomConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Uom>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService,
  ) { }

  ngOnInit() {
    this.uomObj.isActive = '';
    this.getuom();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/uom/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/uom/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getuom(pageNo, pageSize);
  }
  getuom(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.uomObj.code ? this.uomObj.code : null,
        name: this.uomObj.name ? this.uomObj.name : null,
        isActive: this.uomObj.isActive ? JSON.parse(this.uomObj.isActive) : null,
        daterange: this.uomObj.daterange ? this.uomObj.daterange : null
      },
      pageNo,
      paginationSize
    };
    this.inventoryMasterService.searchUom(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Uom[];
      }
    });
  }

  searchUom() {
    this.getuom();
  }

  resetKey() {
    this.uomObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getuom();
  }
}