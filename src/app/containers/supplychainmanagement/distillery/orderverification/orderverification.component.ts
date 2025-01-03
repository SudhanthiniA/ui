import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-orderverification',
  templateUrl: './orderverification.component.html',
  styleUrls: ['./orderverification.component.scss']
})
export class OrderverificationComponent implements OnInit {



  selected: any;
  dateselected: any = moment().format('LLLL');

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  orderverificationlist: any;
  constructor( private router: Router, private datepipe: DatePipe, private apiService: ApiService) { }

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


  getCategory() {
    this.apiService.get('orderverificationlist').then(responceData => {
      console.log(responceData);
      this.orderverificationlist = responceData;
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

  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/distillery/orderverification/view', id]);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
