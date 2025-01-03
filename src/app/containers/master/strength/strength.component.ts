import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LiquorCategoryService, StrengthService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { StrengthConfig } from '@app/config/table-config/strength-config';
import { Strength } from '@app/models/master';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent implements OnInit {
  strengthObj: any = {
    code: '',
    strength: '',
    category: '',
    isActive: true
  };
  strengthList: any;
  liquorCategoryList: any;
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;

  public titleSection = StrengthConfig.titleSection.list;
  public breadcrumbs = StrengthConfig.breadcrumbs;
  public columns = StrengthConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Strength>();

  constructor(
    private router: Router,
    private strengthService: StrengthService,
    private liquorService: LiquorCategoryService
  ) { }

  ngOnInit() {
    this.getStrengthList();
    this.liquorCategory();
  }

  liquorCategory() {
    this.liquorService.getAllLiquor().subscribe((responceData: any) => {
      console.log(responceData);
      this.liquorCategoryList = responceData.data;
    });
  }

  onEdit(event) {
    this.router.navigate(['/master/strength/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/strength/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getStrengthList(pageNo, pageSize);
  }

  getStrengthList(pageNo = 0, paginationSize = 5) {
    const objtest = {
      filters: {
        code: this.strengthObj.code ? this.strengthObj.code : null,
        name: this.strengthObj.strength ? this.strengthObj.strength : null,
        isActive: this.strengthObj.isActive ? JSON.parse(this.strengthObj.isActive) : null,
      },
      pageNo,
      paginationSize
    };
    this.strengthService.searchStrength(objtest).subscribe((responceData: any) => {
      if (responceData.errorCode === 200) {
        this.totalCount = responceData.data.totalElements;
        console.log(responceData.data, '-------sample----------');
        this.dataSource.data = responceData.data.contents as Strength[];
      }
    });
  }

  searchStrength() {
    this.getStrengthList();
  }

  resetForm() {
    this.strengthObj = {
      code: '',
      name: '',
      isActive: true
    };
  }
}
