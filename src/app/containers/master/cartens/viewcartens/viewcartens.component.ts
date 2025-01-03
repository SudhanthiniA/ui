import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {ApiService} from '@app/services';
import { CartonService } from '@app/services';

@Component({
  selector: 'app-viewcartens',
  templateUrl: './viewcartens.component.html',
  styleUrls: ['./viewcartens.component.scss']
})
export class ViewcartensComponent implements OnInit {

  applicantstatusObj: any = {};
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartonService: CartonService,
    private apiservice: ApiService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getcartonsById(params.id);
        // this.countryId = params.id;
      }
    });
  }

  getcartonsById(id) {
    this.cartonService.getcartonsById(id).subscribe((responceData: any) => {
      this.applicantstatusObj = responceData.data;
      if (responceData.status) {
        this.applicantstatusObj.active = 'Active';

      } else {
        this.applicantstatusObj.active = 'InActive';

      }
    });
  }
}
