import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  @ViewChild('editDetails', { static: false }) editDetails;
  @ViewChild('viewDetails', { static: false }) viewDetails;
  @ViewChild('finalDetails', { static: false }) finalDetails;
  // @ViewChild('spiritDetails', { static: false }) spiritDetails;

  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
  editDetail() {
    this.editDetails.show()
  }
  viewDetail() {
    this.viewDetails.show()
  }
  finalDetail() {
    this.finalDetails.show()
  }
  // spiritDetail() {
  //   this.spiritDetails.show()
  // }
}