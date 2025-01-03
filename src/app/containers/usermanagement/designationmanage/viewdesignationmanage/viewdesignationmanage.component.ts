import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserManagmentService } from '@app/services/usermanagement';

@Component({
  selector: 'app-viewdesignationmanage',
  templateUrl: './viewdesignationmanage.component.html',
  styleUrls: ['./viewdesignationmanage.component.scss']
})
export class ViewdesignationmanageComponent implements OnInit {
  designationObj: any = {};

  constructor(
    private userManageService: UserManagmentService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDesignationById(params.id);
      }
    });
  }
  
  getDesignationById(id) {
    this.userManageService.getdesignationById(id)
      .subscribe((resp: any) => {
        this.designationObj = resp.content;
      });
  }
}
