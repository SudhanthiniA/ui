import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WholesaleLicenseRenewalService } from '@app/services/wholesale';

@Component({
  selector: 'app-viewlicenserenewal',
  templateUrl: './viewlicenserenewal.component.html',
  styleUrls: ['./viewlicenserenewal.component.scss']
})
export class ViewlicenserenewalComponent implements OnInit {
  listvalue:any;
  constructor(
    private route: ActivatedRoute,
    private wholesaleLicenseRenewalService: WholesaleLicenseRenewalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['Id']) {
        // console.log(params['Id'])
        let params1 = params['Id'];
        console.log(params1);
        
        this.getbyId(params1)
        // this.show=false
      }
    });
    this.listvalue = JSON.parse(sessionStorage.getItem('formdata'));
  }
  getbyId(id) {  
    // let Id= {
    //   id : id
    // }
    this.wholesaleLicenseRenewalService.getByIdlicense(id).toPromise().then((response: any) => {
      // if (response.status== true) {
      console.log(response);
      // response.results.forEach((element,index) => {
        this.listvalue = response;
      // }); 
      // }
    }).catch((err: any) => {
    });
  } 
}
