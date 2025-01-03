import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-viewdispatch',
  templateUrl: './viewdispatch.component.html',
  styleUrls: ['./viewdispatch.component.scss']
})
export class ViewdispatchComponent implements OnInit {
  viewId: any;
  categoryObj: any;

  constructor( private activatedroute: ActivatedRoute, private apiservice: ApiService) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getbyid(params.Id);
      }
    });
  }
  getbyid(id) {
    this.apiservice.get('dispatch/' + id).then(responceData => {
      console.log(responceData);
      this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
