import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-transferofdistillation',
  templateUrl: './transferofdistillation.component.html',
  styleUrls: ['./transferofdistillation.component.scss']
})
export class TransferofdistillationComponent implements OnInit, OnDestroy {
  stockinData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTransferofdistillation();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getTransferofdistillation() {
    this.apiService.get('transferofdistillationlist').then(responceData => {
      console.log(responceData);
      this.stockinData = responceData;
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
