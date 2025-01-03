import { Component, OnInit, Input } from '@angular/core';

interface AppliBwflParentDetail {
  addressIdentifier: string;
  unitName: string;
}

@Component({
  selector: 'app-application-bwfl-parent-details',
  templateUrl: './application-bwfl-parent-details.component.html',
  styleUrls: ['./application-bwfl-parent-details.component.scss']
})
export class ApplicationBwflParentDetailsComponent implements OnInit {

  @Input()
  public cardTitle: string;

  @Input()
  public appliBwflParentDetail: AppliBwflParentDetail;

  constructor() { }

  ngOnInit() {
  }

}
