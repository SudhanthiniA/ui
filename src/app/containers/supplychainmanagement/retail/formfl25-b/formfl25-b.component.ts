import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormFl25bService } from '@app/services/retails/formfl25b.service';
import { FormFl25B } from '@app/models/retails';
import { FormFl25BConfig } from '@app/config/retail/formFl25b-config';
@Component({
  selector: 'app-formfl25-b',
  templateUrl: './formfl25-b.component.html',
  styleUrls: ['./formfl25-b.component.css']
})
export class Formfl25BComponent implements OnInit {
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFl25BConfig.titleSection.list;
  public breadcrumbs = FormFl25BConfig.breadcrumbs;
  public columns = FormFl25BConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl25B>();
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };
  constructor(
    private fl25bService: FormFl25bService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFl25b()
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-b/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-b/edit/' + event.id]);
  }
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFl25b();
  }
  getFormFl25b() {
    this.fl25bService.getFormFl25B().subscribe((resp) => {
      this.dataSource.data = resp as FormFl25B[];
    });
  }
}
