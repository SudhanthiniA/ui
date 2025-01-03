import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL25Part4Config } from '@app/config/retail/formfl25part4-config';
import { FormFL25Part4 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL25Part4Service } from '@app/services/retails/formfl25part4.service';
@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.scss']
})
export class Part4Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL25Part4Config.titleSection.list;
  public breadcrumbs = FormFL25Part4Config.breadcrumbs;
  public columns = FormFL25Part4Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL25Part4>();
  constructor(
    private service: FormFL25Part4Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL25Part4();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25/part4/view/' + event.id]);
  }

  onEdit(event) {
    // this.router.navigate(['/supplychainmanagement/retail/formfl21/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25Part4();
  }

  getFormFL25Part4() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL25Part4[];
    });
  }
}
