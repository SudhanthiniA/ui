import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewv2',
  templateUrl: './viewv2.component.html',
  styleUrls: ['./viewv2.component.scss']
})
export class Viewv2Component implements OnInit {
  registrationObj: any;
  

  constructor() { }

  ngOnInit() {
    this.registrationObj  = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
