import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addbrandlabelregbrew',
  templateUrl: './addbrandlabelregbrew.component.html',
  styleUrls: ['./addbrandlabelregbrew.component.scss']
})
export class AddbrandlabelregbrewComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
