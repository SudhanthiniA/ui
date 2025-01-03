import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService,RollOverNonRecognisedService} from '@app/services';

@Component({
  selector: 'app-addrollovernonrecognised',
  templateUrl: './addrollovernonrecognised.component.html',
  styleUrls: ['./addrollovernonrecognised.component.scss']
})
export class AddrollovernonrecognisedComponent implements OnInit {
 
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private RollOverNonRecognisedService: RollOverNonRecognisedService,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
  }
}

