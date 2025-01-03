import { Component, OnInit } from '@angular/core';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

const {
  LICENSE_URL,
  WHOLESALE_FL2_SUBCATEGORY, WHOLESALE_FL2_SUBCATEGORY_DESC,
  WHOLESALE_FL2A_SUBCATEGORY, WHOLESALE_FL2A_SUBCATEGORY_DESC,
  WHOLESALE_FL2B_SUBCATEGORY, WHOLESALE_FL2B_SUBCATEGORY_DESC,
  WHOLESALE_CL2_SUBCATEGORY, WHOLESALE_CL2_SUBCATEGORY_DESC,
  WHOLESALE_ID3_SUBCATEGORY, WHOLESALE_ID3_SUBCATEGORY_DESC,
} = LicenseConstants;

@Component({
  selector: 'app-wholesale-landing',
  templateUrl: './wholesale-landing.component.html',
  styleUrls: ['./wholesale-landing.component.scss']
})
export class WholesaleLandingComponent implements OnInit {

  LicConst = LICENSE_URL.WHOLESALE;

  wholesaleLicenseObjs = [
    {
      titleText: WHOLESALE_FL2_SUBCATEGORY_DESC,
      descText: 'License for wholesale vend offoreign liquor (other than denatured spirit) to licensed wholesale and retail vendors and to bonafide clubs and masses.',
      url: LICENSE_URL.WHOLESALE + WHOLESALE_FL2_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: WHOLESALE_FL2A_SUBCATEGORY_DESC,
      descText: 'License for wholesale vend of foreign liquor(other than denatured spirit) to licensed military wholesale and retail vendors',
      url: LICENSE_URL.WHOLESALE + WHOLESALE_FL2A_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: WHOLESALE_FL2B_SUBCATEGORY_DESC,
      descText: 'License For Wholesale For Beer Only',
      url: LICENSE_URL.WHOLESALE + WHOLESALE_FL2B_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: WHOLESALE_CL2_SUBCATEGORY_DESC,
      descText: 'License for the wholesale vend of country spirit in districts under the contract distillery system',
      url: LICENSE_URL.WHOLESALE + WHOLESALE_CL2_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: WHOLESALE_ID3_SUBCATEGORY_DESC,
      descText: 'License for the wholesale supply of Bhang under the contract supply system',
      url: LICENSE_URL.WHOLESALE + WHOLESALE_ID3_SUBCATEGORY,
      renewLicense: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
