import { Component, OnInit } from '@angular/core';
import { LicenseConstants } from '@app/containers/licencemgnt/license.constants';
const {
  LICENSE_URL, BOND_WAREHOUSE_2A_SUBCATEGORY_DESC, BOND_WAREHOUSE_2A_SUBCATEGORY,
  BOND_WAREHOUSE_2B_SUBCATEGORY_DESC, BOND_WAREHOUSE_2B_SUBCATEGORY,
  BOND_WAREHOUSE_2C_SUBCATEGORY_DESC, BOND_WAREHOUSE_2C_SUBCATEGORY,
  BOND_WAREHOUSE_2D_SUBCATEGORY_DESC, BOND_WAREHOUSE_2D_SUBCATEGORY
} = LicenseConstants;

@Component({
  selector: 'app-bwfl-landing',
  templateUrl: './bwfl-landing.component.html',
  styleUrls: ['./bwfl-landing.component.scss']
})
export class BwflLandingComponent implements OnInit {

  LicConst = LicenseConstants;
  bondWarehouseUrl = LICENSE_URL.WAREHOUSE;

  bwflLicenseObjs = [
    {
      titleText: BOND_WAREHOUSE_2A_SUBCATEGORY_DESC,
      descText: 'Bonded Warehouse For Foreign Liquor For Canteen Service Department(BWFL)',
      url: this.bondWarehouseUrl + BOND_WAREHOUSE_2A_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: BOND_WAREHOUSE_2B_SUBCATEGORY_DESC,
      descText: 'Bonded Warehouse for Beer',
      url: this.bondWarehouseUrl + BOND_WAREHOUSE_2B_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: BOND_WAREHOUSE_2C_SUBCATEGORY_DESC,
      descText: 'Bonded WareHouse For Wine',
      url: this.bondWarehouseUrl + BOND_WAREHOUSE_2C_SUBCATEGORY,
      renewLicense: false
    },
    {
      titleText: BOND_WAREHOUSE_2D_SUBCATEGORY_DESC,
      descText: 'Bonded Warehouse for Low Alcoholic Beverages (LAB)',
      url: this.bondWarehouseUrl + BOND_WAREHOUSE_2D_SUBCATEGORY,
      renewLicense: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
