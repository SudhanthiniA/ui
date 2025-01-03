import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';
@Component({
  selector: 'app-viewsubliquortype',
  templateUrl: './viewsubliquortype.component.html',
  styleUrls: ['./viewsubliquortype.component.scss']
})
export class ViewsubliquortypeComponent implements OnInit {

  subLiquorData: any = {};
  // statId: any;
  constructor(
    private route: ActivatedRoute,
    private service: SubLiquorTypeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getsubLiquorType(params.id);
      }
    });
  }

  getsubLiquorType(id) {
    this.service.getSubLiquorTypeById(id).subscribe((responceData: any) => {
      this.subLiquorData = responceData.data;
      // if (responceData.status) {
      //   this.subLiquorData.active = 'Active';
      // } else {
      //   this.subLiquorData.active = 'InActive';
      // }
    });
  }

}
