import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pd11IssuesService } from '@app/services';
@Component({
  selector: 'app-view-pd11',
  templateUrl: './view-pd11.component.html',
  styleUrls: ['./view-pd11.component.scss']
})
export class ViewPd11Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private pd11service: Pd11IssuesService
  ) { }
  addedit: any;
  Pd11Obj: any = {
  };
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd11ById(params.id);
        this.Pd11Obj.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';

      } else {
        this.getPd11ById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }
  getPd11ById(id?) {
    if (id) {

      this.pd11service.getPd11issuesById(id).subscribe((responceData: any) => {
        this.Pd11Obj = responceData.data;
      })
    } else {
      this.Pd11Obj = JSON.parse(sessionStorage.getItem('formdata'));

    }
  }
}
