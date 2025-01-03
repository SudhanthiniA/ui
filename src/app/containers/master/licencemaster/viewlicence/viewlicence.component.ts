import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LicenceService } from '@app/services';

@Component({
  selector: 'app-viewlicence',
  templateUrl: './viewlicence.component.html',
  styleUrls: ['./viewlicence.component.scss']
})
export class ViewlicenceComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  isModified: any;
  date: any;
  editId: any;
  formSubmitted = false;
  categoryObj: any = {};

  constructor(private datePipe: DatePipe,
    private router: Router,
    private route: ActivatedRoute,
    private licenceService: LicenceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.setData(params.Id);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  setData(id) {
    this.licenceService.getLicenceById(id).subscribe((responceData: any) => {
      this.categoryObj = responceData.data;
      const createdDate = this.datePipe.transform(this.categoryObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.categoryObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
      if (responceData.data.active) {
        this.categoryObj.active = 'Active';

      } else {
        this.categoryObj.active = 'InActive';
      }
    });
  }
}
