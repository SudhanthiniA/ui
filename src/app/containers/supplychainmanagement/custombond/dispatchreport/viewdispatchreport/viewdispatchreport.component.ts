import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { WholesaleDispatchService, AlertService } from '@app/services';
@Component({
  selector: 'app-viewdispatchreport',
  templateUrl: './viewdispatchreport.component.html',
  styleUrls: ['./viewdispatchreport.component.scss']
})
export class ViewdispatchreportComponent implements OnInit {

  constructor(  private formBuilder: FormBuilder,
    private wholesaleDispatchService:WholesaleDispatchService,
    
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
   
  }
 
}
