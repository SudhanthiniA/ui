import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addbrandlabel',
  templateUrl: './addbrandlabel.component.html',
  styleUrls: ['./addbrandlabel.component.scss']
})
export class AddbrandlabelComponent implements OnInit {
  @ViewChild('receiptModal', { static: false }) receiptModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.receiptModal.show()
  }

}
