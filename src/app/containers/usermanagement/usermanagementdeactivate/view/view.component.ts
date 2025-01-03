import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @ViewChild('activateData', { static: false }) activateData;
  constructor() { }

  ngOnInit() {
  }

  activate() {
    this.activateData.show()
  }
}
