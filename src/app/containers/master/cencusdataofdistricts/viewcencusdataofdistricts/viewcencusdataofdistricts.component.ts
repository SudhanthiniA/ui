import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CensusService } from '@app/services';

@Component({
  selector: 'app-viewcencusdataofdistricts',
  templateUrl: './viewcencusdataofdistricts.component.html',
  styleUrls: ['./viewcencusdataofdistricts.component.scss']
})
export class ViewcencusdataofdistrictsComponent implements OnInit {

  cencuslist: Array<any> = [];
  districtList: any = [];
  cencusObj: any;
  viewId: any;
  date: any;
  constructor(private route: ActivatedRoute,
    private censusService: CensusService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getByid(this.viewId);
      }
    });
  }

  getByid(id) {
    this.censusService.getCensusById(id).subscribe((resp: any) => {
      this.cencusObj = resp.data;
      if (resp.data.active) {
        this.cencusObj.active = 'Active';
      } else {
        this.cencusObj.active = 'InActive';
      }
    });
  }
}
