
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumptionTypeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { ConsumptionTypeConfig } from '@app/config/table-config/consumptiontype-config';
import { ConsumptionType } from '@app/models/master';

@Component({
  selector: 'app-consuption-type',
  templateUrl: './consuption-type.component.html',
  styleUrls: ['./consuption-type.component.css']
})
export class ConsuptionTypeComponent implements OnInit {

  consuptiontypeData: any;
  consuptiontypeObj: any = {};
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = ConsumptionTypeConfig.titleSection.list;
  public breadcrumbs = ConsumptionTypeConfig.breadcrumbs;
  public columns = ConsumptionTypeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<ConsumptionType>();

  constructor(private consumptionTypeService: ConsumptionTypeService, private router: Router) { }

  ngOnInit() {
    this.consuptiontypeObj.active = '';
    this.getConsuption();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/consuption-type/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/consuption-type/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getConsuption(pageNo, pageSize);
  }

  getConsuption(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.consuptiontypeObj.code ? this.consuptiontypeObj.code : null,
        name: this.consuptiontypeObj.name ? this.consuptiontypeObj.name : null,
        active: this.consuptiontypeObj.active ? this.consuptiontypeObj.active : null,
      },
      pageNo,
      paginationSize
    };
    this.consumptionTypeService.searchConsumptionType(searchobj).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as ConsumptionType[];
      }
    });
  }


  searchConsumptionType() {
    this.getConsuption();
  }

  resetKey() {
    this.consuptiontypeObj = {
      code: '',
      name: '',
    };
    this.getConsuption();
  }
}
