import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewv1',
  templateUrl: './viewv1.component.html',
  styleUrls: ['./viewv1.component.scss']
})
export class Viewv1Component implements OnInit {
  registrationObj: any = JSON.parse(sessionStorage.getItem('formdata'));

  constructor() { }

  ngOnInit() {
  }

}
