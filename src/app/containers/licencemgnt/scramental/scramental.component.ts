import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scramental',
  templateUrl: './scramental.component.html',
  styleUrls: ['./scramental.component.scss']
})
export class ScramentalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')
  }

}
