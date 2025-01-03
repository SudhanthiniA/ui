import { Component, OnInit, Input } from '@angular/core';

interface LicenseComment {
  designation: string;
  comments: string;
  createdDate: string;
}

@Component({
  selector: 'app-application-logs',
  templateUrl: './application-logs.component.html',
  styleUrls: ['./application-logs.component.scss']
})
export class ApplicationLogsComponent implements OnInit {

  @Input()
  public licenseComments: [LicenseComment];

  @Input()
  public checkList: any;

  @Input()
  public isOfficier: any;

  constructor() { }

  ngOnInit() {    
  }

  getCheckListLogInfo(comment, idx) {

    
    const { level: commentOfficerLevel, designation } = comment;
    let officerCheckListApiData = (this.checkList) ? this.checkList.find((resp: any) => resp.level === commentOfficerLevel) : {};
    officerCheckListApiData = (officerCheckListApiData && officerCheckListApiData.length > 1) ?
      officerCheckListApiData[idx] : officerCheckListApiData;

    let isCustomerComment = true;
    let totCheckListCount = 0;
    let apprCheckListCount = 0;
    let checListstatus =''
    const unApprDocCodeArr = [];

    if (this.checkList && officerCheckListApiData) {
      isCustomerComment = false;
      officerCheckListApiData.checkListDocument.forEach(element => {
        totCheckListCount++;
        if (element.isVerified === true) {
          apprCheckListCount++;
        } else {
          unApprDocCodeArr.push(element.documentDesc);
        }
      });
    }
   
    checListstatus =(totCheckListCount !== apprCheckListCount)? "Partially Verified":"All Verified"

    return { isCustomerComment, totCheckListCount, apprCheckListCount, unApprDocCodeArr,checListstatus };
  }

}
