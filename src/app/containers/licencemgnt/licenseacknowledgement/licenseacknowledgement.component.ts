import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licenseacknowledgement',
  templateUrl: './licenseacknowledgement.component.html',
  styleUrls: ['./licenseacknowledgement.component.scss']
})
export class LicenseacknowledgementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')

  }

}
