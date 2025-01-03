import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewbreakageentry',
  templateUrl: './viewbreakageentry.component.html',
  styleUrls: ['./viewbreakageentry.component.scss']
})
export class ViewbreakageentryComponent implements OnInit {
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
