import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addeditdispatch',
  templateUrl: './addeditdispatch.component.html',
  styleUrls: ['./addeditdispatch.component.scss']
})
export class AddeditdispatchComponent implements OnInit {
  dispatchobj = {
    orderid: '',
    dispatchdate: '',
    deliverydate: '',
    consigmentnum: '',
    molases: '',
    aftermolases: '',
    vehicletype: '',
    vehiclenum: '',
    sugermilllocation: '',
    location: '',
    sampleid: '',
    route: '',
    created_by: '',
    created_on: new Date(),
    modified_by: '',
    modified_on: new Date()
  };
  constructor(private apiservice: ApiService, private route: Router) { }

  ngOnInit() {
  }
  savedispach() {
    this.dispatchobj.created_by = 'Admin';
    this.dispatchobj.modified_by =  'Admin';
    this.apiservice.post('dispatch', this.dispatchobj).then((resp: any) => {
      this.route.navigate(['supplychainmanagement/bonds/dispatch/list']);
    });
  }
}
