import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl10Service } from '@app/services/ware-house/warehouse-bwfl10.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-viewbwfl10',
  templateUrl: './viewbwfl10.component.html',
  styleUrls: ['./viewbwfl10.component.scss']
})
export class Viewbwfl10Component implements OnInit {

  editId: any;
  Bwfl10Obj: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl10Service: WarehouseBwfl10Service,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        // this.BrandNewObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
  }

  getById(id) {
    this.warehouseBwfl10Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl10Obj = response.data
      }
    })
  }
}
