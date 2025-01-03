import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcl11',
  templateUrl: './viewcl11.component.html',
  styleUrls: ['./viewcl11.component.scss']
})
export class Viewcl11Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  constructor() { }

  ngOnInit() {
   
  }

}
