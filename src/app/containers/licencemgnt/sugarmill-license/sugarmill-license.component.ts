import { Component, OnInit } from '@angular/core';
import { MockForm } from '@app/_shared/mock/mock-form';

@Component({
  selector: 'app-sugarmill-license',
  templateUrl: './sugarmill-license.component.html',
  styleUrls: ['./sugarmill-license.component.scss']
})
export class SugarmillLicenseComponent implements OnInit {
  data = MockForm;

  sugarmillLicenceObjs = [
    {
      titleText: 'Sugarmill Within UP',
      url: '/licencemgnt/sugarmill-license/withinupregistration'
    },
    {
      titleText: 'Sugarmill Outside Up',
      url: '/licencemgnt/sugarmill-license/sugarmilloutsideup'
    },
    {
      titleText: 'Indutries Inside UP',
      url: '/licencemgnt/sugarmill-license/industriesinsideup'
    },
    {
      titleText: 'Indutries Outside UP',
      url: '/licencemgnt/sugarmill-license/industriesoutsideup'
    },
    {
      titleText: 'Molasess Trader Exports',
      url: '/licencemgnt/sugarmill-license/molassestraders'
    },
    {
      titleText: 'Registeration for Below Grade',
      url: '/licencemgnt/sugarmill-license/belowgrade'
    }
  ];

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata');
  }

}
