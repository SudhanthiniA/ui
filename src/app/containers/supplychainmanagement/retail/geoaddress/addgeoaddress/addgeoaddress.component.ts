import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-addgeoaddress',
  templateUrl: './addgeoaddress.component.html',
  styleUrls: ['./addgeoaddress.component.scss']
})
export class AddgeoaddressComponent implements OnInit {
  @ViewChild('modifyModal', { static: false }) modifyModal;

  constructor() { }
  
  ngOnInit() {
  }
  modifyRequest() {
    this.modifyModal.show()
  }
}
