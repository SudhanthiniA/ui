import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deostockavailability',
  templateUrl: './deostockavailability.component.html',
  styleUrls: ['./deostockavailability.component.scss']
})
export class DeostockavailabilityComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
