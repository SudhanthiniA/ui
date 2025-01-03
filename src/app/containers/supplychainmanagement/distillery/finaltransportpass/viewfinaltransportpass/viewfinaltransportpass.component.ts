import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewfinaltransportpass',
  templateUrl: './viewfinaltransportpass.component.html',
  styleUrls: ['./viewfinaltransportpass.component.scss']
})
export class ViewfinaltransportpassComponent implements OnInit {
  @ViewChild('generateModal', { static: false }) generateModal;
  constructor() { }

  ngOnInit() {
  }
  generatePass() {
    this.generateModal.show()
  }
}
