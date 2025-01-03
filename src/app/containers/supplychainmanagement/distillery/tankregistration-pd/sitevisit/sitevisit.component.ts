import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService } from '@app/services';

@Component({
  selector: 'app-sitevisit',
  templateUrl: './sitevisit.component.html',
  styleUrls: ['./sitevisit.component.scss']
})
export class SitevisitComponent implements OnInit {
  @ViewChild('caseDetails', { static: false }) caseDetails;
  constructor() { }

  ngOnInit() {
  }
  caseModal() {
    this.caseDetails.show()
  }

}
