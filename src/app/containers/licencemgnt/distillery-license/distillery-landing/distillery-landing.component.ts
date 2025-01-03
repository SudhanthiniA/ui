import { Component, OnInit } from '@angular/core';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';

@Component({
  selector: 'app-distillery-landing',
  templateUrl: './distillery-landing.component.html',
  styleUrls: ['./distillery-landing.component.scss']
})
export class DistilleryLandingComponent implements OnInit {


  LicConst = LicenseConstants;
  distilleryUrl = this.LicConst.LICENSE_URL.DISTILLERY;

  distilleryLicenceObjs = [
    {
      titleText: this.LicConst.DISTI_BOTTL_CLB1_SUBCATEGORY_DESC,
      descText: 'Distillery out side U.P',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_CLB1_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_CLB2_SUBCATEGORY_DESC,
      descText: 'Bottling Licence',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_CLB2_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_DS1_SUBCATEGORY_DESC,
      descText: 'License for Denaturation of Rectified Spirit/Absolute Alcohol in the distillery premises',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_DS1_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL1_SUBCATEGORY_DESC,
      descText: '(duty paid- stock of distillery/Brewery)',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL1_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL1A_SUBCATEGORY_DESC,
      descText: '(duty paid- stock of distillery/Brewery)',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL1A_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL3_SUBCATEGORY_DESC,
      descText: 'License for the bottling of Indian made spirit/beer/wine in bond without payment of duty overseas after payment of duty',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL3_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL3A_SUBCATEGORY_DESC,
      descText: 'License for the bottling of Indian made foreign liquor(Lease License)',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL3A_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL16_SUBCATEGORY_DESC,
      descText: 'License for the wholesale vend of denatured spirit.',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL16_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL17_SUBCATEGORY_DESC,
      descText: 'License for retail sale of desnatured spirit',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL17_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL32_SUBCATEGORY_DESC,
      descText: 'Application to establish a distillery',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL32_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL39_SUBCATEGORY_DESC,
      descText: 'License for the possession of specially denatured spirit for use in industries in which alcohol is destroyed or converted chemically in the process into other product such as Ether, Styrene, Butadien, etc.',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL39_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL40_SUBCATEGORY_DESC,
      descText: 'License for the possession of specially denatured spirit for use in industries in which alcohol is used only as a solvent or processing agent and the product does not contain alcohol, which is genarally recovered for re-use such as Cellulose, Pectine, etc.',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL40_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL41_SUBCATEGORY_DESC,
      descText: 'License for the possession of specially denatured spirit for use in industries in which alcohol is used only as a solvent or processing agent and the product does not contain alcohol, which is genarally recovered for re-use such as Cellulose, Pectine, etc.',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL41_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_FL49_SUBCATEGORY_DESC,
      descText: 'License to run Pharmacy',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_FL49_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_PD1_SUBCATEGORY_DESC,
      descText: 'Licence to work a distillery in government premises',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_PD1_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_PD2_SUBCATEGORY_DESC,
      descText: 'License to work a distillery in private premises',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_PD2_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_PD32_SUBCATEGORY_DESC,
      descText: 'Application to establish a distillery',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_PD32_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_PD33_SUBCATEGORY_DESC,
      descText: 'Application to establish a distillery',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_PD33_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: this.LicConst.DISTI_BOTTL_PD34_SUBCATEGORY_DESC,
      descText: 'Licence to Run a distillery',
      url: this.distilleryUrl + this.LicConst.DISTI_BOTTL_PD34_SUBCATEGORY,
      renewLicense: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
