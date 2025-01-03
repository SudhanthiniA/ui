import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl8Service } from '@app/services/ware-house/warehouse-bwfl8.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewbwfl8',
  templateUrl: './viewbwfl8.component.html',
  styleUrls: ['./viewbwfl8.component.scss']
})
export class Viewbwfl8Component implements OnInit {

  editId: any;
  bwfl8Obj: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl8Service: WarehouseBwfl8Service,
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
    this.warehouseBwfl8Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.bwfl8Obj = response.data
      }
    })
  }

}
