import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SugarmillapiService } from '@app/services';

export interface RegistrationObj {
  treasurydetails?: string;
  sugarmillname?: number;
  district?: string;
  yearofestblishment?: string;
  molasesquantity?: number;
  sugarquantity?: number;
  tonsperday?: number;
  tonspersession?: number;
  created_on?: string;
  created_by?: string;
  modified_on?: string;
  modified_by?: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationObj: RegistrationObj;
  viewId: any;
  date: any;

  constructor(
    private router: Router,
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
    this.apiService.get('sugarmillsregistrationslist/' + id).then(responceData => {
      console.log(responceData);
      this.registrationObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  navigateback() {
    this.router.navigate(['/supplychainmanagement/sugarmills/registrationrequest/view', this.viewId]);
  }

}
