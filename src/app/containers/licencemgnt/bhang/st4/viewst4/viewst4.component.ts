import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewst4',
  templateUrl: './viewst4.component.html',
  styleUrls: ['./viewst4.component.scss']
})
export class Viewst4Component implements OnInit {
  ST4Form:any;
  constructor() { }

  ngOnInit() {
    this.ST4Form = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
