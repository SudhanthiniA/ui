import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LicenseeService } from '@app/services';

@Component({
  selector: 'app-view-licensee',
  templateUrl: './view-licensee.component.html',
  styleUrls: ['./view-licensee.component.scss']
})
export class ViewLicenseeComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  date: any;
  editId: any;
  formSubmitted = false;
  licenseeObj: any = {};
  isModified: any;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private licenseeService: LicenseeService, 
    private datePipe: DatePipe) { }

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
    this.licenseeService.getLicenseeById(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.licenseeObj = responceData.data;
      const createdDate = this.datePipe.transform(this.licenseeObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.licenseeObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
      if (responceData.data.active) {
        this.licenseeObj.active = 'Active';
      } else {
        this.licenseeObj.active = 'InActive';
      }
    });
  }
}
