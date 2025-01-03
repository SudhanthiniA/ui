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
  dispatchbyid: any;
  productsdetails: any;

  constructor(  private formBuilder: FormBuilder,
    private wholesaleDispatchService:WholesaleDispatchService,
    private alert:AlertService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
      let id = params.id
        this.getDetailsById(id);
      }
      
    });
  }
  getDetailsById(id){
    this.wholesaleDispatchService.getDispatchByIdd(id).subscribe((resp: any) => { 
      console.log(resp);
      
      if(resp.status== "s"){
       this.dispatchbyid=resp.data
       this.productsdetails = this.dispatchbyid.transportPassDetails.orderpickUp[0].orderPickUpProductDetails
       console.log('products',this.productsdetails )
    }
    else{
      this.alert.showError(resp.userDisplayMesg, 'error');
    }
    })
  }
}
