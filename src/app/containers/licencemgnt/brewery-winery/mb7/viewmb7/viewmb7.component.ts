import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb7',
  templateUrl: './viewmb7.component.html',
  styleUrls: ['./viewmb7.component.scss']
})
export class Viewmb7Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
