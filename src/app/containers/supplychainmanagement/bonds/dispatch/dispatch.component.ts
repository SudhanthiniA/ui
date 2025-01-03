import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss']
})
export class DispatchComponent implements OnInit {
  dispatcharray: any;

  constructor(private apiservice: ApiService, private route: Router) { }

  ngOnInit() {
    this.apiservice.get('dispatch').then((resp: any) => {
      this.dispatcharray = resp;
    });
  }

  navigate(id) {
    this.route.navigate(['supplychainmanagement/bonds/dispatch/view', id]);
  }
}
