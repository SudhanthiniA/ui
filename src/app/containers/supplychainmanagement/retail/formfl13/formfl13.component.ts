import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL13Config } from '@app/config/retail/formfl13-config';
import { FormFL13 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL13Service } from '@app/services/retails/formfl13.service';

@Component({
  selector: 'app-formfl13',
  templateUrl: './formfl13.component.html',
  styleUrls: ['./formfl13.component.css']
})
export class Formfl13Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL13Config.titleSection.list;
  public breadcrumbs = FormFL13Config.breadcrumbs;
  public columns = FormFL13Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL13>();

  constructor(private service: FormFL13Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL13();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl13/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl13/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL13();
  }

  getFormFL13() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFL13[];
    });
  }

}
