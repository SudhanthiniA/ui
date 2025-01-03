import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL25Part3Config } from '@app/config/retail/formfl25part3-config';
import { FormFL25Part3 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL25Part3Service } from '@app/services/retails/formfl25part3.service';
@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.scss']
})
export class Part3Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL25Part3Config.titleSection.list;
  public breadcrumbs = FormFL25Part3Config.breadcrumbs;
  public columns = FormFL25Part3Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL25Part3>();
  constructor(
    private service: FormFL25Part3Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL25Part3();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25/part3/view/' + event.id]);
  }

  onEdit(event) {
     this.router.navigate(['/supplychainmanagement/retail/formfl25/part3/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25Part3();
  }

  getFormFL25Part3() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL25Part3[];
    });
  }
}
