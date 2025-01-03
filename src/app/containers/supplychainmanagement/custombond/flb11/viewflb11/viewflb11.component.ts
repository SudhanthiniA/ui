import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewflb11',
  templateUrl: './viewflb11.component.html',
  styleUrls: ['./viewflb11.component.scss']
})
export class Viewflb11Component implements OnInit {
  @ViewChild('generateDetails', { static: false }) generateDetails;
  constructor() { }

  ngOnInit() {
  }
  generateModal() {
    this.generateDetails.show()
  }
}
