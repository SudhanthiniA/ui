import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseStockInService } from '@app/services/ware-house/warehouse-stockin.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-viewwarehousestockin',
  templateUrl: './viewwarehousestockin.component.html',
  styleUrls: ['./viewwarehousestockin.component.scss']
})
export class ViewwarehousestockinComponent implements OnInit {

  formSubmitted = false;
  editId: any;
  WarehouseStockObj: any;
  addedit: string;
  edit: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseStockService: WarehouseStockInService,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        //this.WarehouseStockObj.id = params.id;
        this.editId = params.id;
      }
    });
  }
  getById(id) {
    this.warehouseStockService.getStockdetailstbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.WarehouseStockObj = response.data
      }
    })
  }
}
