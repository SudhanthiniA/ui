import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstockin',
  templateUrl: './viewstockin.component.html',
  styleUrls: ['./viewstockin.component.scss']
})
export class ViewstockinComponent implements OnInit {
stockInObj: any = {
    transportPassDetails: {
      transportPassNumber: 'TRA23922',
      issuedDate: '20-Apr-2021',
      numberOfIndents: '4',
      transportPass: 'transpass.pdf',
    },
    licenseTypeDetails: {
      licenseType: 'BWFL2A',
      unitName: 'Anhueser',
      unitAddress: 'Plot No. 12,xyz nagar, Karnataka, Bangalore, Bangalore, Shivaji nagar, Majestic, 500001',
    },
    indentNumberDetails: [
      {
        indentNumber: '6234723922',
        indentDate: '20-Mar-2021',
        noofCasesRequested: '20',
        noofBottlesRequested: '200',
        noofCasesSupplied: '20',
        totalNumberOfBottlesSupplied: '200'
      },
      {
        indentNumber: '6234723923',
        indentDate: '22-Mar-2021',
        noofCasesRequested: '30',
        noofBottlesRequested: '300',
        noofCasesSupplied: '30',
        totalNumberOfBottlesSupplied: '300'
      }
    ],
    totalNoOfCasesRequested: 50,
    noOfBottlesRequested: 500,
    noOfCasesSupplied: 50,
    noOfBottlesSupplied: 500,
    permitArray: [
      {brandName: 'Jack Daniels (Black)', packageSize: '750 ml', PackageType: 'Glass Bottle',
      totalNoOfCasesRequested: 500, noofBottlesRequested: 5000, noofCasesSupplied: 500, noOfBottlesSupplied: 5000},
      {brandName: 'Johnny Walker (White)', packageSize: '750 ml', PackageType: 'Glass Bottle',
      totalNoOfCasesRequested: 500, noofBottlesRequested: 5000, noofCasesSupplied: 500, noOfBottlesSupplied: 5000},
      {brandName: 'Bacardi Lemon', packageSize: '750 ml', PackageType: 'Glass Bottle',
      totalNoOfCasesRequested: 500, noofBottlesRequested: 5000, noofCasesSupplied: 500, noOfBottlesSupplied: 5000},
      {brandName: 'Signature', packageSize: '750 ml', PackageType: 'Glass Bottle',
      totalNoOfCasesRequested: 500, noofBottlesRequested: 5000, noofCasesSupplied: 500, noOfBottlesSupplied: 5000},
      {brandName: 'Kingfisher(Strong)', packageSize: '750 ml', PackageType: 'Glass Bottle',
      totalNoOfCasesRequested: 500, noofBottlesRequested: 5000, noofCasesSupplied: 500, noOfBottlesSupplied: 5000}
    ],
    totalDamagedCases: 1,
    totalDamagedBottles: 2,
    totalMissingCases: 1,
    totalMissingBottles: 1,
    receivedDate: '20-Mar-2021',
    receivedBy: 'user',
    damageDetails: 2
  };
  constructor() { }
  ngOnInit() {
  }

}
