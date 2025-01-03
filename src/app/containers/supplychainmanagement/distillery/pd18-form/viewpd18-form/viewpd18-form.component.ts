import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{Pd18Service} from '@app/services/distillery';
import {ApiService} from '@app/services'

@Component({
  selector: 'app-viewpd18-form',
  templateUrl: './viewpd18-form.component.html',
  styleUrls: ['./viewpd18-form.component.scss']
})
export class Viewpd18FormComponent implements OnInit {
  Pd18Obj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd18Service: Pd18Service,
    private apiservice:ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd18requestById(params.id);
        this.Pd18Obj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
  }
  getPd18requestById(id) {
    const url = 'Pd18List'+'/'+id
    this.Pd18Service.get(url).then((responceData: any) => {
      this.Pd18Obj = responceData;
      console.log(this.Pd18Obj);
    })
  }
}
