import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addqrcodewastage',
  templateUrl: './addqrcodewastage.component.html',
  styleUrls: ['./addqrcodewastage.component.scss']
})
export class AddqrcodewastageComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;

  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
