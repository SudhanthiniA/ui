import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-updategeoaddress',
  templateUrl: './updategeoaddress.component.html',
  styleUrls: ['./updategeoaddress.component.scss']
})
export class UpdategeoaddressComponent implements OnInit {

  @ViewChild('modifyModal1', { static: false }) modifyModal1;

  constructor() { }
  
  ngOnInit() {
  }
  modifyRequest1() {
    this.modifyModal1.show()
  }
}
