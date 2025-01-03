import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl7Service } from '@app/services/ware-house/warehouse-bwfl7.service';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-viewbwfl7',
  templateUrl: './viewbwfl7.component.html',
  styleUrls: ['./viewbwfl7.component.scss']
})
export class Viewbwfl7Component implements OnInit {

  editId: any;
  Bwfl7Obj: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl7Service: WarehouseBwfl7Service,
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
    this.warehouseBwfl7Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl7Obj = response.data
      }
    })
  }
}
