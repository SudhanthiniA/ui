import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewid3',
  templateUrl: './viewid3.component.html',
  styleUrls: ['./viewid3.component.scss']
})
export class Viewid3Component implements OnInit {
  ID3Form:any;
  constructor() { }

  ngOnInit() {
    this.ID3Form = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
