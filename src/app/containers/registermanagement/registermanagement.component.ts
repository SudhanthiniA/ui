import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-registermanagement',
  templateUrl: './registermanagement.component.html',
  styleUrls: ['./registermanagement.component.scss']
})
export class RegistermanagementComponent implements OnInit, OnDestroy {


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  registerdetails: any;
  constructor( private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.getRegisterDetails();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getRegisterDetails() {
    this.apiService.get('registration').then(responceData => {
      console.log(responceData);
      this.registerdetails = responceData;
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
    this.router.navigate(['register/view', id]);
  }
  navigateEdit(id) {
    this.router.navigate(['register/edit', id]);
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
