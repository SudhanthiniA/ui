import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@app/services';

@Component({
  selector: 'app-viewindentrequest',
  templateUrl: './viewindentrequest.component.html',
  styleUrls: ['./viewindentrequest.component.scss']
})
export class ViewindentrequestComponent implements OnInit {
  viewId: any;
  categoryObj: any;

  constructor(private activatedroute: ActivatedRoute, private apiservice: ApiService, private route: Router) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getbyid(params.Id);
      }
    });
  }
  getbyid(id) {
    this.apiservice.get('indentrequest/' + id).then(responceData => {
      console.log(responceData);
      this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  approve() {
    this.categoryObj.status = 'Approve';
    this.apiservice.patch('indentrequest/' + this.viewId, this.categoryObj).then(responceData => {
      console.log(responceData);
      this.route.navigate(['supplychainmanagement/bonds/indentrequest/list']);
      // this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  reject() {
    this.categoryObj.status = 'Reject';
    this.apiservice.patch('indentrequest/' + this.viewId, this.categoryObj).then(responceData => {
      console.log(responceData);
      this.route.navigate(['supplychainmanagement/bonds/indentrequest/list']);
      // this.categoryObj = responceData;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
}
