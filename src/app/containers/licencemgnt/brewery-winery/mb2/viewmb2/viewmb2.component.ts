import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmb2',
  templateUrl: './viewmb2.component.html',
  styleUrls: ['./viewmb2.component.scss']
})
export class Viewmb2Component implements OnInit {

  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
 
  constructor() { }


  ngOnInit() {
  }

}
