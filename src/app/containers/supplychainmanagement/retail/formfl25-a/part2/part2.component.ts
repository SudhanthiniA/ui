import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Form25APart2Config } from '@app/config/retail/form25Apart2-config';
import { FormFl25APart3 } from '@app/models/retail/formfl25apart3';
import { Router } from '@angular/router';
import { FormFL25APart2Service } from '@app/services/retails/formfl25Apart2.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  formData: any;
  formObj: any = {};
  pageNo = 0;
  public actionKeys = ['view', 'edit'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = Form25APart2Config.titleSection.list;
  public breadcrumbs = Form25APart2Config.breadcrumbs;
  public columns = Form25APart2Config.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<FormFl25APart3>();

  constructor(private service: FormFL25APart2Service, private router: Router) { }

  ngOnInit() {
    this.getFormFL25part2();
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part2/view/' + event.id]);
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part2/edit/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    // const pageNo = event.currentPage;
    // const pageSize = event.pageSize;
    this.getFormFL25part2();
  }

  getFormFL25part2() {
    this.service.get().subscribe((resp: any) => {
      this.formData = resp;
      console.log(this.formData);
      this.dataSource.data = resp as FormFl25APart3[];
    });
  }

}