import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Form25APart4Config } from '@app/config/retail/form25Apart4-config';
import { FormFl25APart4 } from '@app/models/retail/formfl25apart4';
import { Router } from '@angular/router';
import { FormFL25APart4Service } from '@app/services/retails/formfl25Apart4.service';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.scss']
})
export class Part4Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = Form25APart4Config.titleSection.list;
  public breadcrumbs = Form25APart4Config.breadcrumbs;
  public columns = Form25APart4Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl25APart4>();

  constructor(private service: FormFL25APart4Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL25part4();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part4/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part4/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25part4();
  }

  getFormFL25part4() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFl25APart4[];
    });
  }

}
