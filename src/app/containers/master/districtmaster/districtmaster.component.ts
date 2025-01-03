import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MasterapiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-districtmaster',
  templateUrl: './districtmaster.component.html',
  styleUrls: ['./districtmaster.component.scss']
})
export class DistrictmasterComponent implements OnInit, OnDestroy {

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  districtList: any;
  districtObj: any = {
    code : '',
    name : '',
    status : true
  };
  constructor(
    private router: Router,
    private datepipe: DatePipe,
    private masterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.getDistricts();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
  }
  navigateView(id) {
    this.router.navigate(['master/district/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['master/district/edit', id]);
  }
  getDistricts() {
    this.masterapiService.get(apiUrls.getAllDistrict).then((responceData: any) => {
      this.districtList = responceData.data;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  searchDistrict() {
    const searchobj = {
      filters: {
        code: this.districtObj.code ? this.districtObj.code : null,
        name: this.districtObj.name ? this.districtObj.name : null,
      },
      pageNo: 0,
      paginationSize: 10
    };
    this.masterapiService.post(apiUrls.searchDistrict, searchobj).then((responceData: any) => {
      this.districtList = responceData.data.contents;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
