import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewb19',
  templateUrl: './viewb19.component.html',
  styleUrls: ['./viewb19.component.scss']
})
export class Viewb19Component implements OnInit {

  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));
  
  constructor() { }
  
  ngOnInit() {
  }

}
