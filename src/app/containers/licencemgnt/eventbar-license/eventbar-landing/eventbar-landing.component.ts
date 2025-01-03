import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbar-landing',
  templateUrl: './eventbar-landing.component.html',
  styleUrls: ['./eventbar-landing.component.scss']
})
export class EventbarLandingComponent implements OnInit {

  licenceObjs = [
    {
      titleText: 'FL-11',
      descText: 'Event Bar Licence (Previously known as Ocassional Licence)',
      url: '/licencemgnt/eventbarlicense/FL11',
      renewLicense: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
