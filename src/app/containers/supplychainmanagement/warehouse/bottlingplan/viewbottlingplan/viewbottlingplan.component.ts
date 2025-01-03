import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { WarehousebottlingplanService } from '@app/services';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-viewbottlingplan',
  templateUrl: './viewbottlingplan.component.html',
  styleUrls: ['./viewbottlingplan.component.scss']
})
export class ViewbottlingplanComponent implements OnInit {
  viewId: any;
  bottledata: any;
  sizelist: any;

  constructor(  private route: ActivatedRoute,  
    private warehouseNewbrandService: WarehouseNewbrandService,
    private bottlingplanservice: WarehousebottlingplanService,) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
   //  calling measurement
    // this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
    //   console.log(responceData);
    //   this.sizelist = responceData.data;
    // });
  }

 
  setData(id) {
    this.bottlingplanservice.getplanbyid(id)
      .subscribe((resp: any) => {
        this.bottledata = resp.data;
      })
  }

}
