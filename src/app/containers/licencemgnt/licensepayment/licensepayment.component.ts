import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licensepayment',
  templateUrl: './licensepayment.component.html',
  styleUrls: ['./licensepayment.component.scss']
})
export class LicensepaymentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')

  }

}
