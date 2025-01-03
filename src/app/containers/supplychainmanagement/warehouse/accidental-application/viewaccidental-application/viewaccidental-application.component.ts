import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccidentalService } from '@app/services/ware-house/accidental.service';
import { DatePipe } from '@angular/common';
import { AlertService, ApiService } from '@app/services';

@Component({
  selector: 'app-viewaccidental-application',
  templateUrl: './viewaccidental-application.component.html',
  styleUrls: ['./viewaccidental-application.component.scss']
})
export class ViewaccidentalApplicationComponent implements OnInit {
  accidentrespObj: any;
  editId: any;
  accidentsObj: any;
  formSubmitted = false;

  constructor(  private route: ActivatedRoute,
    private datepipe: DatePipe,
    private router: Router,
    private alert: AlertService,
    private accident: AccidentalService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('paramid', params);
      if (params.Id) {
        this.getById(params.Id);
        // this.BrandNewObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }
    });
  }

  getById(id) {
    this.accident.getbyaccid(id)
    .subscribe((resp: any) => {
      if (resp.status == 's') {
        this.accidentrespObj = resp.data
        console.log();
      }
      //this.accidentrespObj = resp.data
    })
  }

}

