import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{WholesaleStockOutService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewstockout',
  templateUrl: './viewstockout.component.html',
  styleUrls: ['./viewstockout.component.scss']
})
export class ViewstockoutComponent implements OnInit {
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}
    ngOnInit() {
       }
   
}

