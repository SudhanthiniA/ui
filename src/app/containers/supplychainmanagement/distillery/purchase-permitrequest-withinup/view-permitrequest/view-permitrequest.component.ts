import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { PurchaseprmtreqwtinupService} from '@app/services'
@Component({
  selector: 'app-view-permitrequest',
  templateUrl: './view-permitrequest.component.html',
  styleUrls: ['./view-permitrequest.component.scss']
})
export class ViewPermitrequestComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private purchasepmtwtinup:PurchaseprmtreqwtinupService
  ) { }
  viewpurchasepermitobj: any={
    // sellerdist: '',
    // reqspiritbl: '',
    // spirittype: '',
    // purpose: '',
    // instcapacityportable: '',
    // instcapacityindustrial: '',
    // prodqualport: '',
    // prodqualindustrial: '',
    // purchaseimport: '',
    // purchaseimport1: '',
  }
  addedit : any;
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getimportpermitById(params.id);
        this.viewpurchasepermitobj.id = params.id;
        // this.editId = params.id
        // this.addedit = 'Edit';
       
      }
      else{
       this.getimportpermitById()
      }
    });
      this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  getimportpermitById(id?) {
    if(id){
    console.log(id)
    this.purchasepmtwtinup.getpurmitreq(id).subscribe(responceData => {
      if(responceData.status =='s'){
        this.viewpurchasepermitobj = responceData['data'];
        console.log( this.viewpurchasepermitobj);
      }
    });
  }
    else{
      this.viewpurchasepermitobj = JSON.parse(sessionStorage.getItem('formdata'));

    }
  }
}
