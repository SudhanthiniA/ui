import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-approvalmatrix',
  templateUrl: './approvalmatrix.component.html',
  styleUrls: ['./approvalmatrix.component.scss']
})
export class ApprovalmatrixComponent implements OnInit {

  getviewdata:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private apiservice : ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getallapproved(params.id);
      } else {
      }
    });
  }

  getallapproved(id){
    this.apiservice.get('bottlingIndent/'+id,).then(res =>{
      console.log('res',res); 
      this.getviewdata = res;    
    });
  }

}
