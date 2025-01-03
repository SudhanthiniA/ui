import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-orderrequestfromwholesale',
  templateUrl: './orderrequestfromwholesale.component.html',
  styleUrls: ['./orderrequestfromwholesale.component.scss']
})
export class OrderrequestfromwholesaleComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiService, public router: Router) { }

  orderrequestwholesaleList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];

  ngOnInit() {
    this.getorderrequestwholesaleList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getorderrequestwholesaleList() {
    this.apiService.get('orderrequestfromwholesalelist').then(responceData => {
      console.log(responceData);
      this.orderrequestwholesaleList = responceData;
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
    this.router.navigate(['/supplychainmanagement/distillery/orderrequestfromwholesale/view', id]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
