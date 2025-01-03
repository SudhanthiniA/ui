import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-bottlingindentdetail',
  templateUrl: './bottlingindentdetail.component.html',
  styleUrls: ['./bottlingindentdetail.component.scss']
})
export class BottlingindentdetailComponent implements OnInit {

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
        this.getall(params.id);
      } else {
      }
    });
  }


  getall(id){
    this.apiservice.get('bottlingIndent/'+id,).then(res =>{
      console.log('res',res); 
      this.getviewdata = res;    
    });
  }
}
