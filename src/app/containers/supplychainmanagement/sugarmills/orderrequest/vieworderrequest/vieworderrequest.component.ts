import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-vieworderrequest',
  templateUrl: './vieworderrequest.component.html',
  styleUrls: ['./vieworderrequest.component.scss']
})
export class VieworderrequestComponent implements OnInit {

  orderrequestObj: any;

  addedit: any;
  viewId: any;
  date: any;
  constructor(private route: ActivatedRoute, private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }

      this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    });
  }

  Transportgenerate() {
    this.router.navigate(['/supplychainmanagement/sugarmills/dispatch/add', this.viewId]);
  }
  setData(id) {
    this.apiService.get(`${apiUrls.orderRequestGetById}${id}`).then((responceData: any) => {
      console.log(responceData);
      this.orderrequestObj = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
