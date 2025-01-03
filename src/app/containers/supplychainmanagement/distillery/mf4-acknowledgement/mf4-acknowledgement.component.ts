import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-mf4-acknowledgement',
  templateUrl: './mf4-acknowledgement.component.html',
  styleUrls: ['./mf4-acknowledgement.component.css']
})
export class Mf4AcknowledgementComponent implements OnInit, OnDestroy {

  searchValue = false;
  molassestypeData: any;
  mf4partonelist = [];
  formSubmitted = false;
  mf4searchdata: any;
  searchmf4Obj: any = {
    gatepassno: ''
  };
  mf6partonelist: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private distileryService: DistileryService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getlist();
    // this.getMF6PartoneList();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }

  getlist() {
    this.distileryService.getMF4Acklist().subscribe((responceData: any) => {
      this.mf4partonelist = responceData.data;
      this.refreshTabIns();
    });
  }

  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }

  searchmf4(form) {

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const id = this.searchmf4Obj.gatepassno;
      const data = '?mf4GatePassNo=' + id;
      this.distileryService.getgatedata(data).subscribe((responceData: any) => {
        if (responceData['status'] === 's') {
          this.mf4searchdata = responceData.data;
          if (responceData.errorCode == 200) {
            this.searchValue = true;
            this.mf4searchdata = responceData.data;
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error')
          }
        }
      });
    }
  }

  resetKey() {
    this.searchmf4Obj = {
      date: '',
      gatePassNo: '',
    };
    // this.getMF6PartoneList();
  }

  updatemf4(id) {
    // let data ='?id=' + id;
    const data = id;
    this.distileryService.update(data).subscribe((responceData: any) => {
      // this.mf4searchdata = responceData.data;
      // this.refreshTabIns();
      if (responceData['status'] == 's') {
        this.alert.showSuccess('Updated Record Successfully', 'Success');
        this.getlist();
        sessionStorage.removeItem("formdata");
        this.searchValue = false;
        console.log(responceData);
      } else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    });
  }

  search(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      this.searchValue = true;
    }
  }

  navigate(id) {
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/edit', id]);
  }

  clear() {
    this.searchmf4Obj.gatepassno = ''
    this.searchValue = false;
    this.getlist();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
