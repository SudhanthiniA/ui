import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retail-landing',
  templateUrl: './retail-landing.component.html',
  styleUrls: ['./retail-landing.component.scss']
})
export class RetailLandingComponent implements OnInit {

  retailLicenceObjs = [
    {
      titleText: 'FL-4A',
      descText: 'License for retail sale of foreign Liquor/Beer/Wine/LAB in sealed Bottles for consumption ""on"" and ""Off"" the premises and Draught beer on the premises (Model Shop) - ( F. L - 4A)',
      url: 'fl4a',
      renewLicense: false
    },
    {
      titleText: 'FL-4C',
      descText: 'License for Retail sale of foreign Liquor in sealed Bottles for consumption (Premium Retail Vend) - ( F. L - 4C)',
      url: 'fl4c',
      renewLicense: false
    },
    {
      titleText: 'FL-5B',
      descText: 'License for Retail Sale of Beer (Including Wine & Low strength alcoholic beverages) unsealed Bottles for consumption "off" the Premises - ( F. L - 5B)',
      url: 'fl5b',
      renewLicense: false
    },
    {
      titleText: 'CL-5C',
      descText: 'License for Retail sale of "mild" & "strong" country liquor in sealed bottles and container for consumption "on" and "off" premises. - ( C.L - 5C)',
      url: 'cl5c',
      renewLicense: false
    },
    {
      titleText: 'FL-5D',
      descText: 'License for Retail Sale of Foreign Liquor (Export Beer) (Including Wine) in Sealed Bottles for consumption "off" the premises - ( F. L - 5D)',
      url: 'fl5d',
      renewLicense: false
    },
    {
      titleText: 'FL-9',
      descText: 'License retail vend of foreign spirits and foreign fermented liquors under the military "canteen tenant" system.',
      url: 'fl9',
      renewLicense: true
    },
    {
      titleText: 'FL-9A',
      descText: 'License for retail vend of run obtained at concessional rate of duty.',
      url: 'fl9a',
      renewLicense: true
    },
    {
      titleText: 'HM - 1',
      descText: 'Applicant - Application for License H.M - 1',
      url: 'hm1',
      renewLicense: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
