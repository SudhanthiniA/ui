import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import { RawMaterialService } from '@app/services';

@Component({
  selector: 'app-viewrawmaterial',
  templateUrl: './viewrawmaterial.component.html',
  styleUrls: ['./viewrawmaterial.component.scss']
})
export class ViewrawmaterialComponent implements OnInit {

  rawmaterialObj: any = {};
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rawMaterialService: RawMaterialService,
    private apiservice: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getrawmaterialById(params.id);
      }
    });
  }

  getrawmaterialById(id) {
    this.rawMaterialService.getMaterialById(id).subscribe((responceData: any) => {
      this.rawmaterialObj = responceData.data;
      if (responceData.data.isActive) {
        this.rawmaterialObj.isActive = 'Active';

      } else {
        this.rawmaterialObj.isActive = 'InActive';

      }
    });
  }
}
