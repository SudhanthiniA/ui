import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '@app/services';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.scss']
})
export class ViewDepartmentComponent implements OnInit {
  departmentObject: any;
  departmentId: any;
  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDepartmentById(params.id);
        this.departmentId = params.id;
      }
    });
  }

  getDepartmentById(id) {
    this.departmentService.getDepartmentById(id).subscribe((resp: any) => {
      this.departmentObject = resp.data;
      if (resp.data.active) {
        this.departmentObject.active = 'Active';
      } else {
        this.departmentObject.active = 'InActive';
      }
    });
  }
}
