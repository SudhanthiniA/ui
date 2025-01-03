import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL24Config } from '@app/config/retail/formfl24-config';
import { FormFL24 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL24Service } from '@app/services/retails/formfl24.service';

@Component({
  selector: 'app-formfl24',
  templateUrl: './formfl24.component.html',
  styleUrls: ['./formfl24.component.css']
})
export class Formfl24Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL24Config.titleSection.list;
  public breadcrumbs = FormFL24Config.breadcrumbs;
  public columns = FormFL24Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL24>();

  constructor(private service: FormFL24Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL24();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl24/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl24/add']);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL24();
  }

  getFormFL24() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFL24[];
    });
  }
}
