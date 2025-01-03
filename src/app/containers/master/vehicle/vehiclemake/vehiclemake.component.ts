import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleMakeService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleMakeConfig } from '@app/config/table-config/vehiclemake-config';
import { VehicleMake } from '@app/models/master';

@Component({
  selector: 'app-vehiclemake',
  templateUrl: './vehiclemake.component.html',
  styleUrls: ['./vehiclemake.component.scss']
})
export class VehiclemakeComponent implements OnInit {
  vehicleList: any;
  vehiclemakeObj: any = {
    code: '',
    makeModel: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = VehicleMakeConfig.titleSection.list;
  public breadcrumbs = VehicleMakeConfig.breadcrumbs;
  public columns = VehicleMakeConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<VehicleMake>();

  constructor(
    private router: Router,
    private vehicleMakeService: VehicleMakeService
  ) { }

  ngOnInit() {
    this.getVehicleMakeList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/vehiclemake/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/vehiclemake/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getVehicleMakeList(pageNo, pageSize);
  }

  getVehicleMakeList(pageNo = 0, paginationSize = 5) {
    const searchobj = {
      filters: {
        code: this.vehiclemakeObj.code ? this.vehiclemakeObj.code : null,
        makeModel: this.vehiclemakeObj.makeModel ? this.vehiclemakeObj.makeModel : null,
        isActive: this.vehiclemakeObj.isActive ? JSON.parse(this.vehiclemakeObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.vehicleMakeService.searchVehicleMake(searchobj).subscribe(responceData => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as VehicleMake[];
      }
    });
  }

  searchVehicleMake() {
    this.getVehicleMakeList();
  }

  resetKey() {
    this.vehiclemakeObj = {
      code: '',
      makeModel: '',
      isActive: true
    };
    this.getVehicleMakeList();
  }
}
