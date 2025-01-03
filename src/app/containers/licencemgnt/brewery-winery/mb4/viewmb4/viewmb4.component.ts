import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb4',
  templateUrl: './viewmb4.component.html',
  styleUrls: ['./viewmb4.component.scss']
})
export class Viewmb4Component implements OnInit {
  
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  constructor() { }

  ngOnInit() {
  }

}
