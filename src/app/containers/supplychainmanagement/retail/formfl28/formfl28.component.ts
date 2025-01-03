import { Component, OnInit } from '@angular/core';
import { FormFl28Service } from '@app/services/retails';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormFl28Config } from '@app/config/retail/formfl28-config';
import { FormFl28 } from '@app/models/retails';
@Component({
  selector: 'app-formfl28',
  templateUrl: './formfl28.component.html',
  styleUrls: ['./formfl28.component.css']
})
export class Formfl28Component implements OnInit {

  constructor(
    private service: FormFl28Service,
    private router: Router) { }
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  // public titleSection = FormFl28Config.titleSection.list;
  // public breadcrumbs = FormFl28Config.breadcrumbs;
  public columns = FormFl28Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl28>();
  public actionBtnBasedOnCond = {
    edit: {
      column: "status",
      condition: "DRAFT",
    },
  };
  ngOnInit() {
    this.getFormFl28();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl28/view/' + event.id]);
   }
   onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl28/edit/' + event.id]);
  }
   handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getFormFl28(pageNo, pageSize);
  }
  getFormFl28(pageNo = 0, pageSize = 5) {
    this.service.getFormFl28().subscribe((resp) => {
      this.dataSource.data = resp;
    //  this.totalCount = resp.data.totalElements;
    });
  }
}
