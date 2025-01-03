import { Component, OnInit } from '@angular/core';
import { SpiritService } from '@app/services';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SpirittypeConfig } from '@app/config/table-config/spirittype-config';
import { SpiritType } from '@app/models/master';

@Component({
  selector: 'app-spirit-type',
  templateUrl: './spirit-type.component.html',
  styleUrls: ['./spirit-type.component.css']
})
export class SpiritTypeComponent implements OnInit {
  stirittypeData: any;
  spiritTypeObj: any = {
    code: '',
    type: '',
    isActive: ''
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = SpirittypeConfig.titleSection.list;
  public breadcrumbs = SpirittypeConfig.breadcrumbs;
  public columns = SpirittypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<SpiritType>();

  constructor(private spiritService: SpiritService, private router: Router) { }

  ngOnInit() {
    this.spiritTypeObj.isActive = '';
    this.getSpiritType();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/spirit-type/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/spirit-type/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getSpiritType(pageNo, pageSize);
  }

  getSpiritType(pageNo = 0, paginationSize = 5) {
      const objtest = {
        filters: {
          code: this.spiritTypeObj.code ? this.spiritTypeObj.code : null,
          type: this.spiritTypeObj.type ? this.spiritTypeObj.type : null,
          isActive: this.spiritTypeObj.isActive ? JSON.parse(this.spiritTypeObj.isActive) : null,
        },
        pageNo,
        paginationSize
      };
      this.spiritService.searchSpirit(objtest).subscribe((responceData: any) => {
        if (responceData.errorCode === 200) {
          this.totalCount = responceData.data.totalElements;
          this.dataSource.data = responceData.data.contents as SpiritType[];
        }
      });
  }

  searchSpiritType() {
    this.getSpiritType();
  }

  resetKey() {
    this.spiritTypeObj = {
      code: '',
      type: '',
      isActive: '',
    };
    this.getSpiritType();
  }
}
