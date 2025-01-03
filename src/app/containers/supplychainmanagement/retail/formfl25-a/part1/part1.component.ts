import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Form25APart1Config } from '@app/config/retail/form25Apart1-config';
import { FormFl25APart3 } from '@app/models/retail/formfl25apart3';
import { Router } from '@angular/router';
import { FormFL25APart1Service } from '@app/services/retails/formfl25Apart1.service';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = Form25APart1Config.titleSection.list;
  public breadcrumbs = Form25APart1Config.breadcrumbs;
  public columns = Form25APart1Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl25APart3>();

  constructor(private service: FormFL25APart1Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL25part1();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part1/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part1/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25part1();
  }

  getFormFL25part1() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFl25APart3[];
    });
  }

}
