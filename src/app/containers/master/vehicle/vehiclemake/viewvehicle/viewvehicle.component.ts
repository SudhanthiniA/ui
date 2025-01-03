import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleMakeService } from '@app/services';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.scss']
})
export class ViewvehicleComponent implements OnInit {

  vehicleList: Array<any> = [];
  vehicleObj: any;
  viewId: any;
  date: any;
  constructor(private route: ActivatedRoute,
    private vehicleMakeService: VehicleMakeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.vehicleMakeService.getVehicleMakeById(id).subscribe(responceData => {
      console.log(responceData);
      this.vehicleObj = responceData.data;
    });
  }
}
