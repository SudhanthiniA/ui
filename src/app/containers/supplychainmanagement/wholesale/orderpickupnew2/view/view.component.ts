import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('moreInvalid', { static: false }) moreInvalid;
  constructor() { }

  ngOnInit() {
  }
  invalidDetails() {
    this.moreInvalid.show()
  }
}
