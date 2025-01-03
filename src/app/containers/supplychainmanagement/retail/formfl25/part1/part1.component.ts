import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL25Part1Config } from '@app/config/retail/formfl25part1-config';
import { FormFL25Part1 } from '@app/models/retails';
import { Router } from '@angular/router';
import { FormFL25Part1Service } from '@app/services/retails/formfl25part1.service';
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL25Part1Config.titleSection.list;
  public breadcrumbs = FormFL25Part1Config.breadcrumbs;
  public columns = FormFL25Part1Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL25Part1>();
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  constructor(
    private service: FormFL25Part1Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL21();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25/part1/view/' + event.id]);
  }

  onEdit(event) {
     this.router.navigate(['/supplychainmanagement/retail/formfl25/part1/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL21();
  }

  getFormFL21() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL25Part1[];
    });
  }
}
