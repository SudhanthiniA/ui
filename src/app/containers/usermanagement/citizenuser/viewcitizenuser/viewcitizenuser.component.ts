import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewcitizenuser',
  templateUrl: './viewcitizenuser.component.html',
  styleUrls: ['./viewcitizenuser.component.scss']
})
export class ViewcitizenuserComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
