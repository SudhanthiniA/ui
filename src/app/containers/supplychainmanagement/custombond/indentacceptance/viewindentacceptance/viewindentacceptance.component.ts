import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{IndentAcceptanceService} from '@app/services/wholesale';
import {AlertService, ApiService} from '@app/services'

@Component({
  selector: 'app-viewindentacceptance',
  templateUrl: './viewindentacceptance.component.html',
  styleUrls: ['./viewindentacceptance.component.scss']
})
export class ViewindentacceptanceComponent implements OnInit {
  constructor(
    ) {}
  ngOnInit() {
    }
 }
