import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{Pd2Service} from '@app/services/distillery';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewpd2',
  templateUrl: './viewpd2.component.html',
  styleUrls: ['./viewpd2.component.scss']
})
export class Viewpd2Component implements OnInit {
  Pd2Obj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd2Service: Pd2Service,
    private apiservice:ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd2requestById(params.id);
        this.Pd2Obj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getPd2requestById(id) {
    const url = 'Pd2List'+'/'+id
    this.Pd2Service.get(url).then((responceData: any) => {
      this.Pd2Obj = responceData;
      console.log(this.Pd2Obj);
    })
  }
}
