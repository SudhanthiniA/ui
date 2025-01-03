import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DipMasterService } from '@app/services';

@Component({
  selector: 'app-viewdip',
  templateUrl: './viewdip.component.html',
  styleUrls: ['./viewdip.component.scss']
})
export class ViewdipComponent implements OnInit {
  dipId: any;
  dipObj: any;
  isModified: any;
  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private dipService: DipMasterService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDepartmentById(params.id);
        this.dipId = params.id;
      }
    });
  }

  getDepartmentById(id) {
    this.dipService.getDipById(id).subscribe(responceData => {
      this.dipObj = responceData.data;
      const createdDate = this.datePipe.transform(this.dipObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.dipObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
    });
  }
}
