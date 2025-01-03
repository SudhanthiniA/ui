import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormFl35Service } from '@app/services/retails/formfl35.service';
import { FormFl35 } from '@app/models/retails';
import { FormFl35Config } from '@app/config/retail/formfl35-config';
@Component({
  selector: 'app-formfl35',
  templateUrl: './formfl35.component.html',
  styleUrls: ['./formfl35.component.css']
})
export class Formfl35Component implements OnInit {
  form35Data: any;
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  // public titleSection = FormFL13Config.titleSection.list;
  // public breadcrumbs = FormFL13Config.breadcrumbs;
  public columns = FormFl35Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl35>();
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };

  constructor(
    private fl35Service: FormFl35Service,
    private router: Router) { }

  ngOnInit() {
    this.getFormFl35();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl35/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl35/edit/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFl35();
  }
  getFormFl35() {
    this.fl35Service.getFormFl35().subscribe((resp) => {
      this.dataSource.data = resp as FormFl35[];
    });
  }
}
