import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import {ApiService,RollOverStockService} from '@app/services';
@Component({
  selector: 'app-addrolloverstock',
  templateUrl: './addrolloverstock.component.html',
  styleUrls: ['./addrolloverstock.component.scss']
})
export class AddrolloverstockComponent implements OnInit {
 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
   
  ) { }

  ngOnInit() {
    }
  
}
