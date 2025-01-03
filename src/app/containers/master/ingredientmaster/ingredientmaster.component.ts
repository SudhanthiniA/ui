import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { IngredientService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientConfig } from '@app/config/table-config/ingredient-config';
import { Ingredient } from '@app/models/master';

@Component({
  selector: 'app-ingredientmaster',
  templateUrl: './ingredientmaster.component.html',
  styleUrls: ['./ingredientmaster.component.scss']
})
export class IngredientmasterComponent implements OnInit {

  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = IngredientConfig.titleSection.list;
  public breadcrumbs = IngredientConfig.breadcrumbs;
  public columns = IngredientConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<Ingredient>();
  IngridentList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  ingredientObj: any = {
    code: '',
    name: '',
    active: true,
  };
  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private ingredientService: IngredientService) { }

  ngOnInit() {
    this.getIngredient();
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');

  }
  onEdit(event) {
    this.router.navigate(['/master/ingrediantmaster/edit/' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/master/ingrediantmaster/view/' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getIngredient(pageNo, pageSize);
  }
 
  getIngredient(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const objtest = {
      filters: {
        code: this.ingredientObj.code ? this.ingredientObj.code : null,
        name: this.ingredientObj.name ? this.ingredientObj.name : null,
        isActive: this.ingredientObj.active ? JSON.parse(this.ingredientObj.active) : null,
      },
      pageNo,
      paginationSize
    };
    this.ingredientService.searchIngredient(objtest).subscribe((responceData: any) => {
      this.totalCount = responceData.data.totalElements;
      this.dataSource.data = responceData.data.contents as Ingredient[];
    });
  }
  searchIngredient() {
    this.getIngredient();
  }

  resetKey() {
    this.ingredientObj = {
      code: '',
      name: '',
      active: true,
    };
    this.getIngredient();
  }

}
