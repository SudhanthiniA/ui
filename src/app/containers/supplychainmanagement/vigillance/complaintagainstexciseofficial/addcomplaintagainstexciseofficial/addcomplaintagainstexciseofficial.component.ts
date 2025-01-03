import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-addcomplaintagainstexciseofficial',
  templateUrl: './addcomplaintagainstexciseofficial.component.html',
  styleUrls: ['./addcomplaintagainstexciseofficial.component.scss']
})
export class AddcomplaintagainstexciseofficialComponent implements OnInit {
  @ViewChild('entityModal', { static: false }) entityModal;

  constructor() { }

  ngOnInit() {
  }
  entityConfirmation() {
    this.entityModal.show()
  }
}
