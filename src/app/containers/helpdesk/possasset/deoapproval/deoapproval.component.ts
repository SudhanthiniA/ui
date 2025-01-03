import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-deoapproval',
  templateUrl: './deoapproval.component.html',
  styleUrls: ['./deoapproval.component.scss']
})
export class DeoapprovalComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
