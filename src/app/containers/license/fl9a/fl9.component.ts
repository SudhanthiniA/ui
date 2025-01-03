import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CategoryService } from '@app/services/helpdesk/category.service';

@Component({
  selector: 'app-fl9',
  templateUrl: './fl9.component.html',
  styleUrls: ['./fl9.component.scss']
})
export class Fl9Component implements OnInit {
  categorylist: any;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alert: AlertService,
    private categorys: CategoryService

  ) { }

  ngOnInit() {
    this.getcategory();
  }
  getcategory() {
    this.categorys.getallcategory().subscribe((responceData: any) => {
      this.categorylist = (responceData.status === 's') ? responceData.data : [];
    });
  }
  viewcategory(cdata) {
    this.router.navigate(['/helpdeskmaster/category/view', cdata.id]);
  }
}
