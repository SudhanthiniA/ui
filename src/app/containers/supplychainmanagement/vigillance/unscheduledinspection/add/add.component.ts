import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('entityModal', { static: false }) entityModal;

  constructor() { }

  ngOnInit() {
  }

  entityConfirmation() {
    this.entityModal.show()
  }
}
