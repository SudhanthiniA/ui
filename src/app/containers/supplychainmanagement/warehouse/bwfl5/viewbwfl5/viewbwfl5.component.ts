import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl5Service } from '@app/services/ware-house';
import { FormBuilder, FormArray } from '@angular/forms';
import { RawMaterialConfig } from '@app/config/table-config/rawMaterial-config';

@Component({
  selector: 'app-viewbwfl5',
  templateUrl: './viewbwfl5.component.html',
  styleUrls: ['./viewbwfl5.component.scss']
})
export class Viewbwfl5Component implements OnInit {
  editId: any;
  Bwfl5Obj: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl5Service: WarehouseBwfl5Service,
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
    this.warehouseBwfl5Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl5Obj = response.data
      }
    })
  }
}
