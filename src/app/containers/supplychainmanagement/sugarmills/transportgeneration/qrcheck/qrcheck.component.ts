import { Component, OnInit,ViewChild} from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-qrcheck',
  templateUrl: './qrcheck.component.html',
  styleUrls: ['./qrcheck.component.scss']
})
export class QrcheckComponent implements OnInit {
  transportObj: any ={
    transportId: ''
  }
  transportGenList: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

}
