import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;

  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }

}
