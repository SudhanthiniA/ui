import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {PurchagerequestService} from '@app/services'

@Component({
  selector: 'app-viewpurchaserequest',
  templateUrl: './viewpurchaserequest.component.html',
  styleUrls: ['./viewpurchaserequest.component.scss']
})
export class ViewpurchaserequestComponent implements OnInit {

  purchaserequestObject: any = {};
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private PurchagerequestSrv:PurchagerequestService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpurchaserequestById(params.id);
        this.purchaserequestObject.id = params.id;
      } else {
        this.getpurchaserequestById();
      }
    });
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';
  }

  getpurchaserequestById(id?){
    if(id){
    this.PurchagerequestSrv.getpurchagebyid(id).subscribe((response:any)=>{
      if(response.status =='s'){
        this.purchaserequestObject = response.data;
      }
    })
  }else{
    this.purchaserequestObject = JSON.parse(sessionStorage.getItem('formdata'));

  }
  }
}
