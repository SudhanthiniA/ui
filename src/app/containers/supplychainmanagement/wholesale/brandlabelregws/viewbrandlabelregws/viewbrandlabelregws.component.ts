import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-viewbrandlabelregws',
  templateUrl: './viewbrandlabelregws.component.html',
  styleUrls: ['./viewbrandlabelregws.component.scss']
})
export class ViewbrandlabelregwsComponent implements OnInit {
  @ViewChild('rejectModal', { static: false }) rejectModal;
  constructor() { }

  ngOnInit() {
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
}
