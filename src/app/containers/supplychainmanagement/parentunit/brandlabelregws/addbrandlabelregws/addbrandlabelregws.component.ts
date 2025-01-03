import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-addbrandlabelregws',
  templateUrl: './addbrandlabelregws.component.html',
  styleUrls: ['./addbrandlabelregws.component.scss']
})
export class AddbrandlabelregwsComponent implements OnInit {

  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }

}
