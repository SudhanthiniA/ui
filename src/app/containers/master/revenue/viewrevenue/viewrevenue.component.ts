import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RevenueService } from '@app/services';

@Component({
  selector: 'app-viewrevenue',
  templateUrl: './viewrevenue.component.html',
  styleUrls: ['./viewrevenue.component.scss']
})
export class ViewrevenueComponent implements OnInit {

  revenueObj: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private revenueService: RevenueService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getrevenueById(params.id);
      }
    });
  }

  getrevenueById(id) {
    this.revenueService.getRevenueById(id).subscribe((responceData: any) => {
      this.revenueObj = responceData.data;
      if (responceData.data.isActive) {
        this.revenueObj.isActive = 'Active';

      } else {
        this.revenueObj.isActive = 'InActive';

      }
    });
  }
}
