import { Component, OnInit, ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{BreakageEntryService} from '@app/services/wholesale';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewbreakageentry',
  templateUrl: './viewbreakageentry.component.html',
  styleUrls: ['./viewbreakageentry.component.scss']
})
export class ViewbreakageentryComponent implements OnInit {
   
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  BreakageEntryObj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private BreakageEntryService: BreakageEntryService,
    private apiservice:ApiService) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getBreakageEntryById(params.id);
        this.BreakageEntryObj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getBreakageEntryById(id) {
    const url = 'BreakagEentryList'+'/'+id
    this.BreakageEntryService.get(url).then((responceData: any) => {
      this.BreakageEntryObj = responceData;
      console.log(this.BreakageEntryObj);
    })
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
