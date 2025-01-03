import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewfl36',
  templateUrl: './viewfl36.component.html',
  styleUrls: ['./viewfl36.component.scss']
})
export class Viewfl36Component implements OnInit {
  @ViewChild('confirmModal', { static: false }) confirmModal;
  

  constructor() { }

  ngOnInit() {
  }
  confirmConfirmation() {
    this.confirmModal.show()
  }
}
