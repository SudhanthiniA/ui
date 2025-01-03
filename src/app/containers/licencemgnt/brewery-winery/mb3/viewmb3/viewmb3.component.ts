import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb3',
  templateUrl: './viewmb3.component.html',
  styleUrls: ['./viewmb3.component.scss']
})
export class Viewmb3Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
