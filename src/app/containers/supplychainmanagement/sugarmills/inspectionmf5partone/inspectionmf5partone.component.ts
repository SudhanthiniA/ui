import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SugarmillapiService } from '@app/services';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inspectionmf5partone',
  templateUrl: './inspectionmf5partone.component.html',
  styleUrls: ['./inspectionmf5partone.component.scss']
})
export class Inspectionmf5partoneComponent implements OnInit, OnDestroy {

  constructor(  private router: Router, private datepipe: DatePipe, private apiService: SugarmillapiService) { }

  inspectionmf5partoneList: any;
  selected: any;
  dateselected: any = moment().format('LLLL');
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  locationlist = [{id: 1, name: 'UAE'}, {id: 2, name: 'kenya'}];

  ngOnInit() {
    this.getMF5Part1();
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
    this.router.navigate(['/supplychainmanagement/sugarmills/inspectionmf5/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/inspectionmf5/edit', id]);
  }
  getMF5Part1() {
    this.apiService.get('mF5Part1register/getAllMF5Part1Register/').then((responceData: any) => { // inspection
      console.log(responceData);
      this.inspectionmf5partoneList = responceData.data;
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
