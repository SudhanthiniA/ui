import { Component, OnInit } from '@angular/core';
import {UpdateExpiryService} from '@appServices/index';
import {AlertService} from '@appServices/index'

@Component({
  selector: 'app-updateexpiry',
  templateUrl: './updateexpiry.component.html',
  styleUrls: ['./updateexpiry.component.css']
})
export class UpdateexpiryComponent implements OnInit {

 
  constructor(
    private updateExpiryService:UpdateExpiryService,
    private alert:AlertService
  ) { }

  ngOnInit() {
  }

 

}
