import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb6',
  templateUrl: './viewmb6.component.html',
  styleUrls: ['./viewmb6.component.scss']
})
export class Viewmb6Component implements OnInit {
  registrationObj: any;
  
  
  constructor() { }

  ngOnInit() {

    this.registrationObj = JSON.parse(sessionStorage.getItem('formdata'));
  }


}
