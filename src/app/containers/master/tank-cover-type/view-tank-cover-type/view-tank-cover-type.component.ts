import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TankCoverTypeService } from '@app/services';


@Component({
  selector: 'app-view-tank-cover-type',
  templateUrl: './view-tank-cover-type.component.html',
  styleUrls: ['./view-tank-cover-type.component.scss']
})
export class ViewTankCoverTypeComponent implements OnInit {
  tankCoverObj: any;
  isModified: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tankCoverService: TankCoverTypeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTankCoverById(params.id);
      }
    });
  }

  getTankCoverById(id) {
    this.tankCoverService.getTankCoverById(id).subscribe((responceData: any) => {
      this.tankCoverObj = responceData.data;
      const createdDate = this.datePipe.transform(this.tankCoverObj.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.tankCoverObj.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
    });
  }

}
