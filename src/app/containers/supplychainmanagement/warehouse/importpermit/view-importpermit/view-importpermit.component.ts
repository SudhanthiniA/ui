import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AlertService, ApiService } from '@app/services';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-view-importpermit',
  templateUrl: './view-importpermit.component.html',
  styleUrls: ['./view-importpermit.component.scss']
})
export class ViewImportpermitComponent implements OnInit {
  editId: any;
  obj: any;
  status:any;
  tableobj:any;
  allbrands: any;
  sizelist: any;
  constructor(
    private route: ActivatedRoute , 
    private warehouseNewbrandService: WarehouseNewbrandService,
    private importpasspermit: importpasspermitService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    // brand calling
    this.warehouseNewbrandService.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
     //  calling measurement
     this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });
  }
  setData(id) {
    this.importpasspermit.getImportsbyId(id).subscribe((responceData: any) => {
      this.obj = responceData.data;
      console.log(this.obj);
      
      this.tableobj = this.obj.requestimpPermitDetlist;
      
    })
  }
}
