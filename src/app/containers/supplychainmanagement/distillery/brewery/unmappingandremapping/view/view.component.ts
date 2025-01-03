import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('caseDetails', { static: false }) caseDetails;

  constructor() { }

  ngOnInit() {
  }
  caseModal() {
    this.caseDetails.show()
  }

}
