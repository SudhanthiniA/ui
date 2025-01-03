import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewbottlingplan',
  templateUrl: './viewbottlingplan.component.html',
  styleUrls: ['./viewbottlingplan.component.scss']
})
export class ViewbottlingplanComponent implements OnInit {

  @ViewChild('modifyModal', { static: false }) modifyModal;
  

  constructor() { }

  ngOnInit() {
  }
  modifyRequest() {
    this.modifyModal.show()
  }

}
