import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TankShapeService } from '@app/services';

@Component({
  selector: 'app-view-tank-shape',
  templateUrl: './view-tank-shape.component.html',
  styleUrls: ['./view-tank-shape.component.scss']
})
export class ViewTankShapeComponent implements OnInit {
  departmentObject: any;
  isModified: any;
  constructor(
    private route: ActivatedRoute,
    private tankShapeService: TankShapeService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getTankShapeById(params.id);
      }
    });
  }

  getTankShapeById(id) {
    this.tankShapeService.getTankShapeById(id).subscribe((responceData: any) => {
      this.departmentObject = responceData.data;
      const createdDate = this.datePipe.transform(this.departmentObject.createdDate, 'yyyy-MM-dd HH:mm:ss');
      const modifiedDate = this.datePipe.transform(this.departmentObject.modifiedDate, 'yyyy-MM-dd HH:mm:ss');
      if (createdDate === modifiedDate || modifiedDate === 'null') {
        this.isModified = false;
      } else {
        this.isModified = true;
      }
    });
  }
}
