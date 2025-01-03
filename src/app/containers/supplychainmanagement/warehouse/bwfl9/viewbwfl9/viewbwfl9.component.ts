import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';
import { WarehouseBwfl9Service } from '@app/services/ware-house/warehouse-befl9.service';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-viewbwfl9',
  templateUrl: './viewbwfl9.component.html',
  styleUrls: ['./viewbwfl9.component.scss']
})
export class Viewbwfl9Component implements OnInit {

  editId: any;
  Bwfl9Obj: any;
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseBwfl9Service: WarehouseBwfl9Service,
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
    this.warehouseBwfl9Service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.Bwfl9Obj = response.data
      }
    })
  }

}
