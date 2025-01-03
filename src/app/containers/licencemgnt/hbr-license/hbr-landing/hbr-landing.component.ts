import { Component, OnInit } from '@angular/core';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

@Component({
  selector: 'app-hbr-landing',
  templateUrl: './hbr-landing.component.html',
  styleUrls: ['./hbr-landing.component.scss']
})
export class HBRLandingComponent implements OnInit {

  LicConst = LicenseConstants;

  licenceObjs = [
    {
      titleText: this.LicConst.HBR_FL6_SUBCATEGORY_DESC,
      descText: 'Hotel Bar Licence',
      url: '/licencemgnt/hbr/' + this.LicConst.HBR_FL6_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.HBR_FL7_SUBCATEGORY_DESC,
      descText:'Restaurants Bar Licence',
      url: '/licencemgnt/hbr/' + this.LicConst.HBR_FL7_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.HBR_FL7A_SUBCATEGORY_DESC,
      descText: 'Club Bar Licence',
      url: '/licencemgnt/hbr/' + this.LicConst.HBR_FL7A_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.HBR_FL8_SUBCATEGORY_DESC,
      descText: 'License for retail vend of foreign liqor(other than denatured spirit)at railway refreshment rooms or in dinning cars.',
      url: '/licencemgnt/hbr/' + this.LicConst.HBR_FL8_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.HBR_FLAL1_SUBCATEGORY_DESC,
      descText: 'Airport Bar Licence',
      url: '/licencemgnt/hbr/' + this.LicConst.HBR_FLAL1_SUBCATEGORY,
      renewLicense: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
