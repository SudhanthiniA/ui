import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-requitionofrawmaterial',
  templateUrl: './requitionofrawmaterial.component.html',
  styleUrls: ['./requitionofrawmaterial.component.scss']
})
export class RequitionofrawmaterialComponent implements OnInit, OnDestroy {


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  rawmaterials: any;
  selected: any;
  dateselected: any = moment().format('LLLL');

  constructor(private router: Router, private datepipe: DatePipe, private apiService: ApiService) { }

  ngOnInit() {
    this.getCategory();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    const date = this.datepipe.transform(new Date(), 'dd-MMM-yyyy');
  }

  navigateView() {
    this.router.navigate(['/supplychainmanagement/distillery/requitionofrawmaterial/view', 1]);
  }

  getCategory() {
    this.apiService.get('reqrawlist').then(responceData => {
      console.log(responceData);
      this.rawmaterials = responceData;
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

}
