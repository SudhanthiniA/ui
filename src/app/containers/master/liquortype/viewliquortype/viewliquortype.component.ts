import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LiquorTypeService } from '@app/services';

@Component({
  selector: 'app-viewliquortype',
  templateUrl: './viewliquortype.component.html',
  styleUrls: ['./viewliquortype.component.scss']
})
export class ViewliquortypeComponent implements OnInit {

  rawmaterialObj: any = {};
  // statId: any;
  constructor(
    private route: ActivatedRoute,
    private liquorTypeService: LiquorTypeService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getrawmaterialById(params.id);
      }
    });
  }

  getrawmaterialById(id) {
    this.liquorTypeService.getLiquorTypeById(id).subscribe((responceData: any) => {
      this.rawmaterialObj = responceData.data;
      if (responceData.status) {
        this.rawmaterialObj.active = 'Active';
      } else {
        this.rawmaterialObj.active = 'InActive';
      }
    });
  }
}
