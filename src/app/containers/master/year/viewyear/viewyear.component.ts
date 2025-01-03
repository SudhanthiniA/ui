import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YearMasterService } from '@app/services';

@Component({
  selector: 'app-viewyear',
  templateUrl: './viewyear.component.html',
  styleUrls: ['./viewyear.component.scss']
})
export class ViewyearComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  yearObj: any = {
    name: '',
    startMonth: '',
    endMonth: '',
    active: true,
    status: true,
  };
  date: any;
  editId: any;
  formSubmitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private yearService: YearMasterService
  ) { }

  ngOnInit() {
    this.yearObj.status = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.getYearById(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'View';
  }

  getYearById(id) {
    this.yearService.getYearById(id).subscribe((responceData: any) => {
      console.log(responceData)
      this.yearObj = responceData.data;
      if (responceData.status) {
        this.yearObj.active = 'Active';

      } else {
        this.yearObj.active = 'InActive';
      }
    });
  }
}
