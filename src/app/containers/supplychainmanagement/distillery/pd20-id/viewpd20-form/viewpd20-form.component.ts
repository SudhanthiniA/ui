import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{Pd20Service} from '@app/services/distillery';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewpd20-form',
  templateUrl: './viewpd20-form.component.html',
  styleUrls: ['./viewpd20-form.component.scss']
})
export class Viewpd20FormComponent implements OnInit {
  Pd20Obj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd20Service: Pd20Service,
    private apiservice:ApiService,
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd20requestById(params.id);
        this.Pd20Obj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getPd20requestById(id) {
    const url = 'Pd20LIst'+'/'+id
    this.Pd20Service.get(url).then((responceData: any) => {
      this.Pd20Obj = responceData;
      console.log(this.Pd20Obj);
    })
  }
}
