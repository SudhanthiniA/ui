import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
