import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewst1',
  templateUrl: './viewst1.component.html',
  styleUrls: ['./viewst1.component.scss']
})
export class Viewst1Component implements OnInit {
  STForm:any;
  constructor() { }

  ngOnInit() {
    this.STForm = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
