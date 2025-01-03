import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenderService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { GenderConfig } from '@app/config/table-config/gender-config';
import { Gender } from '@app/models/master';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = GenderConfig.titleSection.list;
  public breadcrumbs = GenderConfig.breadcrumbs;
  public columns = GenderConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Gender>();
  genderlist: any;
  genderObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  constructor(
    private router: Router, 
    private genderService: GenderService
  ) { }

  ngOnInit() {
    this.getgenderlist();
  }

  onEdit(event) {
    // console.log('onEdit', event);
    this.router.navigate(['/master/gender/edit/' + event.id]);
  }

  onView(event) {
    // console.log('onView', event);
    this.router.navigate(['/master/gender/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // const isSearchRes = event.isSearchRes;
    this.getgenderlist(pageNo, pageSize);
  }

  getgenderlist(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        code: this.genderObj.code ? this.genderObj.code : null,
        name: this.genderObj.name ? this.genderObj.name : null,
        isActive: this.genderObj.isActive ? JSON.parse(this.genderObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.genderService.searchGender(searchObj).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Gender[];
    });
  }

  searchGender() {
    this.getgenderlist();
  }
  
  resetKey() {
    this.genderObj = {
      code: '',
      name: '',
      isActive: true,
    };
    this.getgenderlist();
  }
}
