import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleModelService } from '@app/services';

@Component({
  selector: 'app-viewvehiclemodel',
  templateUrl: './viewvehiclemodel.component.html',
  styleUrls: ['./viewvehiclemodel.component.scss']
})
export class ViewvehiclemodelComponent implements OnInit {

  vehicleList: Array<any> = [];
  vehicleObj: any;
  viewId: any;
  date: any;
  constructor(
    private route: ActivatedRoute,
    private vehiclemodelService: VehicleModelService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.vehiclemodelService.getVehicleModelById(id).subscribe(responceData => {
      this.vehicleObj = responceData.data;
      console.log(this.vehicleObj);
    });
  }
}
