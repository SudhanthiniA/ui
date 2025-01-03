import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcl9',
  templateUrl: './viewcl9.component.html',
  styleUrls: ['./viewcl9.component.scss']
})
export class Viewcl9Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  constructor() { }

  ngOnInit() {
   
  }

}
