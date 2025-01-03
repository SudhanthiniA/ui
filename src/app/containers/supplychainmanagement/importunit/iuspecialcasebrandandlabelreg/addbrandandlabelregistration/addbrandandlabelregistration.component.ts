import { Component, OnInit, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addbrandandlabelregistration',
  templateUrl: './addbrandandlabelregistration.component.html',
  styleUrls: ['./addbrandandlabelregistration.component.scss']
})
export class AddbrandandlabelregistrationComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  rejectConfirmation() {
    this.rejectModal.show()
  }
  constructor() { }

  ngOnInit() {
  }
}
