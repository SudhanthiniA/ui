import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewst2',
  templateUrl: './viewst2.component.html',
  styleUrls: ['./viewst2.component.scss']
})
export class Viewst2Component implements OnInit {
  ST2Form:any;
  constructor() { }

  ngOnInit() {
    this.ST2Form = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
