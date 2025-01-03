import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcl8',
  templateUrl: './viewcl8.component.html',
  styleUrls: ['./viewcl8.component.scss']
})
export class Viewcl8Component implements OnInit {
  cl8Obj:any;
  constructor() { }

  ngOnInit() {
    this.cl8Obj = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
