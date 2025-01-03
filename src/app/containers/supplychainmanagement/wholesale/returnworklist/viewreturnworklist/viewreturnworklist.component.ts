import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReturnWorklistService } from '@app/services/wholesale/return-worklist.service';

@Component({
  selector: 'app-viewreturnworklist',
  templateUrl: './viewreturnworklist.component.html',
  styleUrls: ['./viewreturnworklist.component.scss']
})
export class ViewreturnworklistComponent implements OnInit {
  listvalue:any;
  constructor(
    private route: ActivatedRoute,
    private returnlist: ReturnWorklistService
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
    this.returnlist.getById(id).toPromise().then((response: any) => {
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
