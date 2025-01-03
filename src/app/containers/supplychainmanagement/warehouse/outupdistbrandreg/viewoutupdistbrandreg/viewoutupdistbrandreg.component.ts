import { Component, OnInit } from '@angular/core';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewoutupdistbrandreg',
  templateUrl: './viewoutupdistbrandreg.component.html',
  styleUrls: ['./viewoutupdistbrandreg.component.scss']
})
export class ViewoutupdistbrandregComponent implements OnInit {

  editId: any;
  
  bandRegObj: any={};
  constructor(
    private route: ActivatedRoute,
    private warehouseBrandService: OutofupbrandService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.id) {
        this.getById(params.id);
        this.editId = params.id;
      }
    });
  }
  getById(id) {
    this.warehouseBrandService.getbyid(id).subscribe((response: any) => {
      console.log(response);
      if (response.status == 's') {
        this.bandRegObj = response.data
      }
    });
  }
}
