import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

export interface TransportgenerationObj {
  transportid?: string;
  beforeloadingofmolasses?: number;
  afterloadingofmolases?: string;
  vehicaltype?: string;
  vehicalno?: string;
  wholesalelocation?: string;
  drivername?: string;
  vehicalquantity?: string;
  companyname?: string;
  date?: Date;
  warehousename?: string;
  warehouselocation?: string;
  noofconsignments?: string;
  created_on?: string;
  created_by?: string;
}

@Component({
  selector: 'app-viewtransportgeneration',
  templateUrl: './viewtransportgeneration.component.html',
  styleUrls: ['./viewtransportgeneration.component.scss']
})
export class ViewtransportgenerationComponent implements OnInit {

  transportgenerationObj: TransportgenerationObj;
  viewId: any;
  date: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
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
    this.apiService.get('bondtransportgenerationlist/' + id).then(responceData => {
      console.log(responceData);
      this.transportgenerationObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }


}
