import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleModelService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleModelConfig } from '@app/config/table-config/vehiclemodel-config';
import { VehicleModel } from '@app/models/master';

@Component({
  selector: 'app-vehiclemodel',
  templateUrl: './vehiclemodel.component.html',
  styleUrls: ['./vehiclemodel.component.scss']
})
export class VehiclemodelComponent implements OnInit {
  Obj: any = {
    createdDate: '',
    model: '',
    isActive: true
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = VehicleModelConfig.titleSection.list;
  public breadcrumbs = VehicleModelConfig.breadcrumbs;
  public columns = VehicleModelConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<VehicleModel>();

  constructor(
    private router: Router,
    private vehiclemodelService: VehicleModelService
  ) { }

  ngOnInit() {
    this.getVehicleModelList();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/vehiclemodel/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/vehiclemodel/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getVehicleModelList(pageNo, pageSize);
  }

  getVehicleModelList(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.Obj.code ? this.Obj.code : null,
        model: this.Obj.model ? this.Obj.model : null,
        isActive: this.Obj.isActive ? JSON.parse(this.Obj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.vehiclemodelService.searchVehicleModel(objtest).subscribe(responceData => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        this.dataSource.data = responceData.data.contents as VehicleModel[];
      }
    });
  }

  searchapi() {
    this.getVehicleModelList();
  }

  resetKey() {
    this.Obj = {
      date: '',
      model: '',
      isActive: true,
    };
    this.getVehicleModelList();
  }
}
