import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-licenseacknowledge',
  templateUrl: './licenseacknowledge.component.html',
  styleUrls: ['./licenseacknowledge.component.scss']
})
export class LicenseacknowledgeComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
