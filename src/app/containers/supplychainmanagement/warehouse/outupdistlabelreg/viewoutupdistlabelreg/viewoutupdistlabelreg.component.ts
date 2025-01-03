import { Component, OnInit } from '@angular/core';
import { OutsidelabelService } from '@app/services/ware-house/outsidelabel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewoutupdistlabelreg',
  templateUrl: './viewoutupdistlabelreg.component.html',
  styleUrls: ['./viewoutupdistlabelreg.component.scss']
})
export class ViewoutupdistlabelregComponent implements OnInit {
  editId: any;
  labelRegObj: any={};
  formSubmitted = false;
  bandRegObj: any;
  outUpbrandlist: any;
  labelbrandData: any;
  constructor(
    private route: ActivatedRoute,
    private warehouseLabelService: OutsidelabelService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
       this.getallBrand()
        this.getById(params.id);
        this.editId = params.id;
      }
    });
   
  }

  getById(id) {
    this.warehouseLabelService.getLabelRegbyid(id).subscribe((response: any) => {
      console.log(response);
      if (response.status == 's') {
        this.labelRegObj = response.data
        this.labelbrandData = this.outUpbrandlist.find(x => x.id == this.labelRegObj.brandRegistration.id)
      }
    })
  }

  getallBrand() {
    this.warehouseLabelService.getallbrand()
    .subscribe((resp: any) => {
      console.log(resp);
      this.outUpbrandlist = resp.data 
    })
  }
}
