import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewmwbreakageentry',
  templateUrl: './viewmwbreakageentry.component.html',
  styleUrls: ['./viewmwbreakageentry.component.scss']
})
export class ViewmwbreakageentryComponent implements OnInit {
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
