import { Component, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, StockadjustmentService } from '@app/services';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs-compat';
import * as moment from 'moment';

@Component({
  selector: 'app-addstockadjustment',
  templateUrl: './addstockadjustment.component.html',
  styleUrls: ['./addstockadjustment.component.scss']
})
export class AddstockadjustmentComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private alert: AlertService,
    private formbuilder: FormBuilder,
    private stockadjustmentService:StockadjustmentService
  ) { }

  ngOnInit() {
    
  }
  
}
