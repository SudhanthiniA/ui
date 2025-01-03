import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';
@Component({
  selector: 'app-vieworderverification',
  templateUrl: './vieworderverification.component.html',
  styleUrls: ['./vieworderverification.component.scss']
})
export class VieworderverificationComponent implements OnInit {


  editId: any;

  constructor(private route: ActivatedRoute, private apiservice: ApiService) { }
  orderObj: any = {

    };
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
  }
  setData(id) {
    this.apiservice.get('orderverificationlist/' + id).then(responceData => {
      console.log(responceData);
      this.orderObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
