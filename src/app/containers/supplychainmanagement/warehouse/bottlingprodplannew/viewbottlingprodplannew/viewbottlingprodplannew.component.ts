import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-viewbottlingprodplannew',
  templateUrl: './viewbottlingprodplannew.component.html',
  styleUrls: ['./viewbottlingprodplannew.component.scss']
})
export class ViewbottlingprodplannewComponent implements OnInit {

  viewId: any;
  bottledata: any;
  sizelist: any;
  constructor(
    private route: ActivatedRoute,  
    //private warehouseNewbrandService: WarehouseNewbrandService,
    private bottlingplanservice: WarehousebottlingplanService
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
    this.bottlingplanservice.getplanbyid(id)
      .subscribe((resp: any) => {
        this.bottledata = resp.data;
      })
  }
}
