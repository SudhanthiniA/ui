import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewbrandandlabelregistration',
  templateUrl: './viewbrandandlabelregistration.component.html',
  styleUrls: ['./viewbrandandlabelregistration.component.scss']
})
export class ViewbrandandlabelregistrationComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  rejectConfirmation() {
    this.rejectModal.show()
  }
  constructor() { }

  ngOnInit() {
  }

}
