import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mwsubindent',
  templateUrl: './mwsubindent.component.html',
  styleUrls: ['./mwsubindent.component.scss']
})
export class MwsubindentComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  constructor() { }

  ngOnInit() {
  }
  addRegistration() {
    this.exampleModalCenter.show()
}
}
