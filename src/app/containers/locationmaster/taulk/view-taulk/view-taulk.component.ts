import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalukMasterService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-view-taulk',
  templateUrl: './view-taulk.component.html',
  styleUrls: ['./view-taulk.component.scss']
})
export class ViewTaulkComponent implements OnInit {
  countryData: any;
  stateData: any;
  districtData: any;
  taulkObject: any = {};
  formSubmitted = false;

  constructor(
    private route: ActivatedRoute,
    private talukService: TalukMasterService,
  ) { }

  ngOnInit() {
    this.taulkObject.status = true;
    this.taulkObject.country = '';
    this.taulkObject.state = '';
    this.taulkObject.district = '';
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTaulkById(params.id);
        this.taulkObject.id = params.id;
      }
    });
  }

  getTaulkById(id) {
    const url = apiUrls.getTaulkById + '?id=' + id;
    this.talukService.gettalukById(id).subscribe((responceData: any) => {
      this.taulkObject = responceData.data;
    });
  }

}
