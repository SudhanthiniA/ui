import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addgrievanceform',
  templateUrl: './addgrievanceform.component.html',
  styleUrls: ['./addgrievanceform.component.scss']
})
export class AddgrievanceformComponent implements OnInit {
  @ViewChild('receiptModal', { static: false }) receiptModal;

  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.receiptModal.show()
  }
}
