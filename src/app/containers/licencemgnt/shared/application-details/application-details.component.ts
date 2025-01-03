import { Component, Input } from '@angular/core';

interface ApplicationDetail {
  financialYear: string;
  applicationDate: string;
  licenseSubCategory: string;
  entityFirmDesc: string;
}

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent {

  @Input()
  public applicationDetail: ApplicationDetail;

}
