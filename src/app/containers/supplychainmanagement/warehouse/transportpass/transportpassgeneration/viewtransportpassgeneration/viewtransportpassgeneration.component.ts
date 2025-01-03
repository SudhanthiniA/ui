import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseTrnsportPassGenService } from '@app/services/ware-house';
@Component({
  selector: 'app-viewtransportpassgeneration',
  templateUrl: './viewtransportpassgeneration.component.html',
  styleUrls: ['./viewtransportpassgeneration.component.scss']
})
export class ViewtransportpassgenerationComponent implements OnInit {

  TransportObj:any={}
  editId: any;
  constructor(
    private apiService: ApiService,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
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
    this.warehouseTrnsportPassGenService.getransportdetailstbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.TransportObj = response.data
      }
    })
  }
}
