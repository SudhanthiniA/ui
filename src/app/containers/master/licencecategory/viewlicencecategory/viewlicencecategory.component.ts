import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {ApiService} from '@app/services';
import { LicenseCategotyService } from '@app/services';

@Component({
  selector: 'app-viewlicencecategory',
  templateUrl: './viewlicencecategory.component.html',
  styleUrls: ['./viewlicencecategory.component.scss']
})
export class ViewlicencecategoryComponent implements OnInit {

  licencecategoryObj: any = {};
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private licenseService: LicenseCategotyService,
    private apiservice: ApiService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getlicencecategoryById(params.id);
        // this.countryId = params.id;
      }
    });
  }

  getlicencecategoryById(id) {
    this.licenseService.getLicenseById(id).subscribe((responceData: any) => {
      this.licencecategoryObj = responceData.data;
      if (responceData.data.active) {
        this.licencecategoryObj.active = 'Active';

      } else {
        this.licencecategoryObj.active = 'InActive';

      }
    });
  }


}
