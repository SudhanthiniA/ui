import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('loginOutPopup', { static: false }) loginOutPopup;

  constructor() { }

  ngOnInit() {
  }
  onLogoutClick() { this.loginOutPopup.show(); }


}

