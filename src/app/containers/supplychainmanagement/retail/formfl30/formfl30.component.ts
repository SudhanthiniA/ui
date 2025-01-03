import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL30Config } from '@app/config/retail/formfl30-config';
import { FormFL30 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL30Service } from '@app/services/retails/formfl30.service';
@Component({
  selector: 'app-formfl30',
  templateUrl: './formfl30.component.html',
  styleUrls: ['./formfl30.component.css']
})
export class Formfl30Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL30Config.titleSection.list;
  public breadcrumbs = FormFL30Config.breadcrumbs;
  public columns = FormFL30Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL30>();
  constructor(
    private service: FormFL30Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL30();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl30/view/' + event.id]);
  }

  onEdit(event) {
    //this.router.navigate(['/supplychainmanagement/retail/formfl30/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL30();
  }

  getFormFL30() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL30[];
    });
  }
}
