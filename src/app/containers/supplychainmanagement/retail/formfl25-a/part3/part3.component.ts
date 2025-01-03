import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Form25APart3Config } from '@app/config/retail/form25Apart3-config';
import { FormFl25APart3 } from '@app/models/retail/formfl25apart3';
import { Router } from '@angular/router';
import { FormFL25APart3Service } from '@app/services/retails/formfl25Apart3.service';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.scss']
})
export class Part3Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = Form25APart3Config.titleSection.list;
  public breadcrumbs = Form25APart3Config.breadcrumbs;
  public columns = Form25APart3Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl25APart3>();

  constructor(private service: FormFL25APart3Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL25part3();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part3/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part3/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25part3();
  }

  getFormFL25part3() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFl25APart3[];
    });
  }

}
