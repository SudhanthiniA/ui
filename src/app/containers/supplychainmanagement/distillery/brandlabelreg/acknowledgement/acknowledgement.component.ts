import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandlabelregService } from '@app/services';

@Component({
  selector: 'app-acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.scss']
})
export class AcknowledgementComponent implements OnInit, OnDestroy{
  applicationNo: string;
  viewid: any;
  constructor(private router: Router, private route: ActivatedRoute,private brandlabelregService: BrandlabelregService) { }

  ngOnInit() {
    this.route.params.subscribe((param) => {
      if (param.Id) {
        this.viewid = param.Id;
        this.getData(this.viewid);
      }
    });
 
  }
  getData(id) {
    // this.applicationNo =sessionStorage.getItem('applicationNo');


    this.brandlabelregService.getById(id).subscribe((responceData: any) => {
      this.applicationNo = responceData.data.applicationNumber;

    });
  }
  ngOnDestroy() {
    sessionStorage.removeItem('applicationNo');
    sessionStorage.removeItem('unitName');
    sessionStorage.removeItem('unitAddress');
    sessionStorage.removeItem('brandFees');
    sessionStorage.removeItem('labelFees');
  }
}
