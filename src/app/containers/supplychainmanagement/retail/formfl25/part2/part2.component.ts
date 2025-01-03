import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormFL25Part2Config } from '@app/config/retail/formfl25part2-config';
import { FormFL25Part2 } from '@app/models/retail/formfl25part2';
import { Router } from '@angular/router';
import { FormFL25Part2Service } from '@app/services/retails/formfl25part2.service';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = FormFL25Part2Config.titleSection.list;
  public breadcrumbs = FormFL25Part2Config.breadcrumbs;
  public columns = FormFL25Part2Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFL25Part2>();
  public actionBtnBasedOnCond = {
    edit: {
      column: 'status',
      condition: 'DRAFT',
    },
  };
  constructor(
    private service: FormFL25Part2Service,
    private router: Router
  ) { }

  ngOnInit() {
    this.getFormFL21();
  }
  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25/part2/view/' + event.id]);
  }

  onEdit(event) {
     this.router.navigate(['/supplychainmanagement/retail/formfl25/part2/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL21();
  }

  getFormFL21() {
    this.service.get().subscribe((resp: any) => {
      this.dataSource.data = resp as FormFL25Part2[];
    });
  }
}
