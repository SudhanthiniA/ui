import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL42Config } from '@app/config/retail/formfl42-config';
import { FormFL42 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL42Service } from '@app/services/retails/formfl42.service';

@Component({
  selector: 'app-formfl42',
  templateUrl: './formfl42.component.html',
  styleUrls: ['./formfl42.component.css']
})
export class Formfl42Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL42Config.titleSection.list;
  public breadcrumbs = FormFL42Config.breadcrumbs;
  public columns = FormFL42Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL42>();

  constructor(private service: FormFL42Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL42();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl42/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl42/add']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL42();
  }

  getFormFL42() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFL42[];
    });
  }
}
