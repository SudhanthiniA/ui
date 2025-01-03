import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-orderrequestfromwarehouse',
  templateUrl: './orderrequestfromwarehouse.component.html',
  styleUrls: ['./orderrequestfromwarehouse.component.scss']
})
export class OrderrequestfromwarehouseComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiService, public router: Router) { }

  orderrequestwarehouseList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];

  ngOnInit() {
    this.getorderrequestwarehouseList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getorderrequestwarehouseList() {
    this.apiService.get('orderrequestfromwarehouselist').then(responceData => {
      console.log(responceData);
      this.orderrequestwarehouseList = responceData;
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
    this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwarehouse/view', id]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
