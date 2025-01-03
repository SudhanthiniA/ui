import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb5',
  templateUrl: './viewmb5.component.html',
  styleUrls: ['./viewmb5.component.scss']
})
export class Viewmb5Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
