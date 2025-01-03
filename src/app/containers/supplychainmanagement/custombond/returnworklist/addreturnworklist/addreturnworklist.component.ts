import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { ReturnWorklistService } from '@app/services/wholesale/return-worklist.service';

@Component({
  selector: 'app-addreturnworklist',
  templateUrl: './addreturnworklist.component.html',
  styleUrls: ['./addreturnworklist.component.scss']
})
export class AddreturnworklistComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
   
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    
  }
 
}
