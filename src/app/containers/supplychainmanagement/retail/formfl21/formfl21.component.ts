import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL21Config } from '@app/config/retail/formfl21-config';
import { FormFL21 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL30Service } from '@app/services/retails/formfl30.service';
@Component({
  selector: 'app-formfl21',
  templateUrl: './formfl21.component.html',
  styleUrls: ['./formfl21.component.css']
})
export class Formfl21Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL21Config.titleSection.list;
  public breadcrumbs = FormFL21Config.breadcrumbs;
  public columns = FormFL21Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL21>();
  constructor(
    private service: FormFL30Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL21();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl21/view/' + event.id]);
  }

  onEdit(event) {
    //this.router.navigate(['/supplychainmanagement/retail/formfl21/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL21();
  }

  getFormFL21() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL21[];
    });
  }
}
