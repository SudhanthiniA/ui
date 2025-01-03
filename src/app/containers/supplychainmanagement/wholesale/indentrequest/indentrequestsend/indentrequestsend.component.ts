import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-indentrequestsend',
  templateUrl: './indentrequestsend.component.html',
  styleUrls: ['./indentrequestsend.component.scss']
})
export class IndentrequestsendComponent implements OnInit {

  indentNo: string;
  indentDate: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.indentNo = sessionStorage.getItem('indentNo');
    debugger
    this.indentDate = sessionStorage.getItem('indentDate');
  }

  onOk() {
    sessionStorage.removeItem('indentReq')
    this.router.navigate(['/supplychainmanagement/wholesale/indentrequestnew/list'])
  }

}
