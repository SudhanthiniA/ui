import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;

  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
