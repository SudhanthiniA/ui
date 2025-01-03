import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewst3',
  templateUrl: './viewst3.component.html',
  styleUrls: ['./viewst3.component.scss']
})
export class Viewst3Component implements OnInit {
  st3Obj:any;
  constructor() { }

  ngOnInit() {
    this.st3Obj = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
