import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  STForm:any;
  constructor() { }

  ngOnInit() {
    this.STForm = JSON.parse(sessionStorage.getItem('formdata'));
  }

}
