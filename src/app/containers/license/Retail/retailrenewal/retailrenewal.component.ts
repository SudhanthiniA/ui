import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-retailrenewal',
  templateUrl: './retailrenewal.component.html',
  styleUrls: ['./retailrenewal.component.scss']
})
export class RetailrenewalComponent implements OnInit {
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  constructor() { }

  ngOnInit() {
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
