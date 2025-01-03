import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugarmillapiService } from '@app/services';

export interface StockavailabilityObj {
  stockname?: string;
  quantity?: string;
  messurement?: string;
  measurement?: string;
  location?: string;
  tank?: string;
  created_by?: string;
  created_on?: string;
  modified_by?: string;
  modified_on?: string;
}

@Component({
  selector: 'app-viewstockavailability',
  templateUrl: './viewstockavailability.component.html',
  styleUrls: ['./viewstockavailability.component.scss']
})
export class ViewstockavailabilityComponent implements OnInit {

  stockavailabilityObj: StockavailabilityObj;
  viewId: any;
  date: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: SugarmillapiService
  ) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
    if (params.Id) {
      this.viewId = params.Id;
      this.setData(this.viewId);
    }
  });
  }

  setData(id) {
    this.apiService.get('stockavailability/' + id).then(responceData => {
      console.log(responceData);
      this.stockavailabilityObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
