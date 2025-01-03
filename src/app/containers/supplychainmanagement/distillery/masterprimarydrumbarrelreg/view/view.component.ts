import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
