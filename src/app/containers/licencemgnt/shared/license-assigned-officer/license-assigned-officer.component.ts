import { Component, OnInit, Input } from '@angular/core';

interface SiteVisitOfficer {
  applicationNumber: string;
  districtCode: string;
  districtDesc: string;
  roleCode: string;
  roleDesc: string;
  userEmail: string;
  userName: string;
  name: string;
  isProceed: string;
  designationCode: string;
  designationDesc: boolean;
}

@Component({
  selector: 'app-license-assigned-officer',
  templateUrl: './license-assigned-officer.component.html',
  styleUrls: ['./license-assigned-officer.component.scss']
})
export class LicenseAssignedOfficerComponent implements OnInit {

  @Input()
  public siteVisitOfficer: SiteVisitOfficer;

  constructor() { }

  ngOnInit() {
  }

}
