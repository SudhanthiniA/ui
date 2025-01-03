import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AlertService, ApiService } from '@app/services';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-viewimportpermitnew',
  templateUrl: './viewimportpermitnew.component.html',
  styleUrls: ['./viewimportpermitnew.component.scss']
})
export class ViewimportpermitnewComponent implements OnInit {

  editId: any;
  impPermit: any;
  status:any;
  impPermitAll:any;
  allbrands: any;
  tableData:any;
  sizelist: any;
  constructor(
    private route: ActivatedRoute , 
    //private warehouseNewbrandService: WarehouseNewbrandService,
    private importpermit: importpasspermitService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
  }

  setData(id) {
    this.importpermit.getImportsbyId(id).subscribe((responceData: any) => {
      this.impPermit = responceData.data;
      console.log(this.impPermit);
      
      this.tableData = this.impPermit.importPermitIndentDetails.importPermitProdDetails;
      
    })
  }
    
}
