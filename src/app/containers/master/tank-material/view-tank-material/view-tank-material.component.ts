import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TankMaterialService } from '@app/services';

@Component({
  selector: 'app-view-tank-material',
  templateUrl: './view-tank-material.component.html',
  styleUrls: ['./view-tank-material.component.scss']
})
export class ViewTankMaterialComponent implements OnInit {
  departmentObject: any;
  isModified: any;

  constructor(
    private route: ActivatedRoute,
    private tankMaterialService: TankMaterialService,
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
    this.tankMaterialService.getTankMaterialById(id).subscribe((responceData: any) => {
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
