import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brewery-winery',
  templateUrl: './brewery-winery.component.html',
  styleUrls: ['./brewery-winery.component.scss']
})
export class BreweryWineryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('formdata')
  }

}
