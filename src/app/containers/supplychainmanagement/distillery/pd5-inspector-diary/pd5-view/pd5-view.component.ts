import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import{Pd5Service} from '@app/services/distillery';
import {ApiService} from '@app/services'


@Component({
  selector: 'app-pd5-view',
  templateUrl: './pd5-view.component.html',
  styleUrls: ['./pd5-view.component.scss']
})
export class Pd5ViewComponent implements OnInit {
  Pd5Obj:any={}
  addedit:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private Pd5Service: Pd5Service,
    private apiservice:ApiService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd5requestById(params.id);
        this.Pd5Obj.id = params.id;
       
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'view';
    console.log('router url--->>',this.addedit);
    

  }
  getPd5requestById(id) {
    const url = 'Pd5List'+'/'+id
    this.Pd5Service.get(url).then((responceData: any) => {
      this.Pd5Obj = responceData;
      console.log(this.Pd5Obj);
    })
  }
}
