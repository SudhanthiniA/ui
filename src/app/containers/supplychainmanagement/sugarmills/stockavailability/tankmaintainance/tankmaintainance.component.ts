import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugarmillapiService } from '@app/services';

@Component({
  selector: 'app-tankmaintainance',
  templateUrl: './tankmaintainance.component.html',
  styleUrls: ['./tankmaintainance.component.scss']
})
export class TankmaintainanceComponent implements OnInit {
  viewId: any;
  stockavailabilityObj: any;

  constructor( private route: ActivatedRoute,
    private apiService: SugarmillapiService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });
    console.log('came to maintanance');

  }
getTankbyid(id){
  console.log('id', id)
  this.apiService.get('stockAvailability/getTankProfile?id=' + id).then((responceData: any) => {
    console.log(responceData);
    this.stockavailabilityObj = responceData.data;
    console.log('tank by id',  this.stockavailabilityObj)
  }).catch((err: any) => {
    console.log('\n err...', err);
  });

}
}
