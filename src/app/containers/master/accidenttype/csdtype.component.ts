import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { CategoryService } from '@app/services/helpdesk/category.service';

@Component({
  selector: 'app-csdtype',
  templateUrl: './csdtype.component.html',
  styleUrls: ['./csdtype.component.scss']
})
export class CategoryComponent implements OnInit {
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
