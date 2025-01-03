import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{Pd17Service} from '@app/services/distillery';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-view-pd17',
  templateUrl: './view-pd17.component.html',
  styleUrls: ['./view-pd17.component.scss']
})
export class ViewPd17Component implements OnInit {
  Pd17Obj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd17Service: Pd17Service,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd17requestById(params.id);
        this.Pd17Obj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getPd17requestById(id) {
    const url = 'Pd17list'+'/'+id
    this.Pd17Service.get(url).then((responceData: any) => {
      this.Pd17Obj = responceData;
      console.log(this.Pd17Obj);
    })
  }
}
