import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addlabelrequest',
  templateUrl: './addlabelrequest.component.html',
  styleUrls: ['./addlabelrequest.component.scss']
})
export class AddlabelrequestComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
