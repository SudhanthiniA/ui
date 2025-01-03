import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryMasterService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { GstConfig } from '@app/config/table-config/gst-config';
import { Gst } from '@app/models/inventory-master';

@Component({
  selector: 'app-gstmaster',
  templateUrl: './gstmaster.component.html',
  styleUrls: ['./gstmaster.component.scss']
})
export class GstmasterComponent implements OnInit {
  date: any;
  gstList: Array<any> = [];
  gstObj: any = {
    code: '',
    name: '',
    isActive: '',
    daterange: ''
  };
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = GstConfig.titleSection.list;
  public breadcrumbs = GstConfig.breadcrumbs;
  public columns = GstConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Gst>();

  constructor(
    private router: Router,
    private inventoryMasterService: InventoryMasterService
  ) { }

  ngOnInit() {
    this.gstObj.isActive = '';
    this.getGst();
  }
  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/inventory/gstmaster/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/inventory/gstmaster/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getGst(pageNo, pageSize);
  }

  getGst(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.gstObj.code ? this.gstObj.code : null,
        name: this.gstObj.name ? this.gstObj.name : null,
        isActive: this.gstObj.isActive ? JSON.parse(this.gstObj.isActive) : null,
        dataterange: this.gstObj.daterange ? this.gstObj.daterange : null,
      },
      pageNo,
      paginationSize
    };
    this.inventoryMasterService.searchGst(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as Gst[];
      }
    });
  }

  searchGst() {
    this.getGst();
  }

  resetKey() {
    this.gstObj = {
      code: '',
      name: '',
      isActive: '',
    };
    this.getGst();
  }
}
