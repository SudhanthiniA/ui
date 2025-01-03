import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewreturnasset',
  templateUrl: './viewreturnasset.component.html',
  styleUrls: ['./viewreturnasset.component.scss']
})
export class ViewreturnassetComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
