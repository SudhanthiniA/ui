import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indentrequest',
  templateUrl: './indentrequest.component.html',
  styleUrls: ['./indentrequest.component.scss']
})
export class IndentrequestComponent implements OnInit {
  indentreq: any;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiservice.get('indentrequest').then((resp: any) => {
      this.indentreq = resp;
    });
  }

  navigate(id) {
    this.router.navigate(['supplychainmanagement/bonds/indentrequest/view', id]);
  }

}
