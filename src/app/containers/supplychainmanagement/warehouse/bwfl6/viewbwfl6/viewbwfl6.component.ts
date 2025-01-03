import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl6Service } from '@app/services/ware-house/warehouse-bwfl6.service';
import { FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-viewbwfl6',
  templateUrl: './viewbwfl6.component.html',
  styleUrls: ['./viewbwfl6.component.scss']
})
export class Viewbwfl6Component implements OnInit {

  editId: any;
  Bwfl6Obj: any;
  formSubmitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl6Service: WarehouseBwfl6Service,
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
    this.warehouseBwfl6Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl6Obj = response.data
      }
    })
  }
}
