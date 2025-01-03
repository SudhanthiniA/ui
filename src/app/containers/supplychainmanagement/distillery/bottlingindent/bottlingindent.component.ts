import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-bottlingindent',
  templateUrl: './bottlingindent.component.html',
  styleUrls: ['./bottlingindent.component.scss']
})
export class BottlingindentComponent implements OnInit {

  allindentdata:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private apiservice : ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.getall(params.id);
      } else {
      }
    });
   this. getall();
  }


  getall(){
    this.apiservice.get('bottlingIndent',).then(res =>{
      console.log('res',res); 
      this.allindentdata = res;    
    });
  }
}
