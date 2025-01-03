import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcl10a',
  templateUrl: './viewcl10a.component.html',
  styleUrls: ['./viewcl10a.component.scss']
})
export class Viewcl10aComponent implements OnInit {
  ClForm:any
  constructor() { }

  ngOnInit() {
    this.ClForm=JSON.parse(sessionStorage.getItem('formdata'))
  }

}
