import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StockadjustmentService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-stockadjustment',
  templateUrl: './stockadjustment.component.html',
  styleUrls: ['./stockadjustment.component.css']
})
export class StockadjustmentComponent implements OnInit {


  constructor(
    private stockAdjustmentService:StockadjustmentService,
    private router: Router
  ) { }




  ngOnInit() {
     }

 

}
