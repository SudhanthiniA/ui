import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  rejectConfirmation() {
    this.rejectModal.show()
  }
  constructor() { }

  ngOnInit() {
  }

}
