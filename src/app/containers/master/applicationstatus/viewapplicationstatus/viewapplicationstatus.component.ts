import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApplicantStatusService } from '@app/services';

@Component({
  selector: 'app-viewapplicationstatus',
  templateUrl: './viewapplicationstatus.component.html',
  styleUrls: ['./viewapplicationstatus.component.scss']
})
export class ViewapplicationstatusComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  applicantstatusObj: any = {
    code: '',
    name: '',
    status: true
  };
  isModified: any;
  editId: any;

  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private applicantStatusService: ApplicantStatusService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.applicantStatusService.getApplicantStatusById(id)
      .subscribe((resp: any) => {
        this.applicantstatusObj = resp.data;
        const createdDate = this.datePipe.transform(this.applicantstatusObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
        const modifiedDate = this.datePipe.transform(this.applicantstatusObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
        if (createdDate === modifiedDate || modifiedDate === 'null') {
          this.isModified = false;
        } else {
          this.isModified = true;
        }
        if (resp.data.active) {
          this.applicantstatusObj.active = 'Active';

        } else {
          this.applicantstatusObj.active = 'InActive';
        }
      });
  }
}