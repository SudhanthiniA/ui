import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewb1',
  templateUrl: './viewb1.component.html',
  styleUrls: ['./viewb1.component.scss']
})
export class Viewb1Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
