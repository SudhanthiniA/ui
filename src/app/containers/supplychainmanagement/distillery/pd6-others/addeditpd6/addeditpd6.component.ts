import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';

@Component({
  selector: 'app-addeditpd6',
  templateUrl: './addeditpd6.component.html',
  styleUrls: ['./addeditpd6.component.scss']
})
export class Addeditpd6Component implements OnInit {

  date: any;
  curDate = new Date();
  editId: any;
  // isdisabled=false;
  formSubmitted = false;
  addedit: any;
  Pd6Obj: any = {
    date: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private apiService: ApiService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.Pd6Obj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd6requestById(params.id);
        this.Pd6Obj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  getPd6requestById(id) {
    const url = 'Pd6list' + '/' + id;
    this.apiService.get(url).then((responceData: any) => {
      this.Pd6Obj = responceData;
      console.log(this.Pd6Obj);
    });
  }

  addPd6Details(form, status) {

    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          date: this.Pd6Obj.date,
          tenthsOfInch: this.Pd6Obj.tenthsOfInch,
          wetInches: this.Pd6Obj.wetInches,
          tableOfDimention: this.Pd6Obj.tableOfDimention,
          status
        };
        const url = 'Pd6list/' + this.editId;
        paramdpd['id'] = this.editId;
        this.apiService.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd6/list']);
        });
      } else {
        const paramdpd = {
          date: this.Pd6Obj.date,
          tenthsOfInch: this.Pd6Obj.tenthsOfInch,
          wetInches: this.Pd6Obj.wetInches,
          tableOfDimention: this.Pd6Obj.tableOfDimention,
          status
        };
        const url = 'Pd6list';
        this.apiService.post(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record created successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/pd6/list']);
        });
      }
    }
  }

  previewpd6(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.Pd6Obj));
    this.router.navigate(['/supplychainmanagement/distillery/pd6/preview']);
  }

}
