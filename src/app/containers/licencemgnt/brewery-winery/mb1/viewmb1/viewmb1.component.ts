import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb1',
  templateUrl: './viewmb1.component.html',
  styleUrls: ['./viewmb1.component.scss']
})
export class Viewmb1Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
