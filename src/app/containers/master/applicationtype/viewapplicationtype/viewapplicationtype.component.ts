import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicantTypeService } from '@app/services';

@Component({
  selector: 'app-viewapplicationtype',
  templateUrl: './viewapplicationtype.component.html',
  styleUrls: ['./viewapplicationtype.component.scss']
})
export class ViewapplicationtypeComponent implements OnInit {
  addedit: any;
  applicanttypeObj: any = {
    code: '',
    type: '',
    status: true
  };
  editId: any;
  // statId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private applicanttypeService: ApplicantTypeService
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
    this.applicanttypeService.getApplicantTypeById(id)
      .subscribe((resp: any) => {
        this.applicanttypeObj = resp.data;
        if (resp.data.active) {
          this.applicanttypeObj.active = 'Active';
        } else {
          this.applicanttypeObj.active = 'InActive';
        }
      });
  }
}
