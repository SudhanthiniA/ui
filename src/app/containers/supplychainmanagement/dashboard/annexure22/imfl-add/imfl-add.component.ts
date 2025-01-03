import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-imfl-add',
  templateUrl: './imfl-add.component.html',
  styleUrls: ['./imfl-add.component.scss']
})
export class ImflAddComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;

  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }

}
