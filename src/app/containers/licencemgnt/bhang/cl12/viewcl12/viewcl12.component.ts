import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcl12',
  templateUrl: './viewcl12.component.html',
  styleUrls: ['./viewcl12.component.scss']
})
export class Viewcl12Component implements OnInit {
  cl12Obj:any;
  constructor() { }

  ngOnInit() {
    this.cl12Obj = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
