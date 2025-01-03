import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { LabelregestrationService } from '@app/services/ware-house';

@Component({
  selector: 'app-makepayment',
  templateUrl: './makepayment.component.html',
  styleUrls: ['./makepayment.component.scss']
})
export class MakepaymentComponent implements OnInit {
  allpayments: any;

  constructor( private labelregestrationservice : LabelregestrationService,) { }
  brandData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getpayments()
  }

  getpayments() {
    this.labelregestrationservice.getalllabelrequest().subscribe((resp: any) => {
      this.allpayments = resp.data
    })
  }   
}
