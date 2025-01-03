import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SubcategoryService } from '@app/services/helpdesk/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dateselected: any = moment().format('LLLL');
  list: any;
  createObj: any = {
    category: '',
    subcategory: ''
  }
  sub: any;
  cat: any;
  constructor(private Service: SubcategoryService, private router: Router) { }

  ngOnInit() {
    this.getallsubcategory();
    this.getcat();
  }
  getallsubcategory() {
    this.Service.getAllSubcategoryList().subscribe((resp: any) => {
      this.list = resp.data;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  navigateView(id) {

    this.router.navigate(['/helpdeskmaster/subcategory/view', id]);
  }
  clearfilter() {
    this.createObj = {
    };
    this.getallsubcategory();
  }
  getsub($event) {
    console.log($event.target.value);
    this.Service.getByIdcategory($event.target.value).subscribe((responceData: any) => {
      this.sub = (responceData.status === 's') ? responceData.data : [];
    });
    const rest = this.cat.filter(x => x.id === $event.target.value)[0];
    this.createObj.subcategory = rest.categoryName;
  }

  getcat() {
    this.Service.getallcategory().subscribe((responceData: any) => {
      console.log(responceData);
      this.cat = (responceData.status === 's') ? responceData.data : [];
    });
  }
  searchsubcategory() {
    const postdata = {
      "filters": {"categoryid":parseInt(this.createObj.category),"subCategoryName":this.createObj.subcategory,"isActive":1},  
      "pageNo": 0,
      "paginationSize": 0
    }
     
    this.Service.searchsubcategory(postdata).subscribe((resp: any) => {
      this.list = (resp.status === 's') ? resp.data ? resp.data.contents : [] : [];

      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
}
