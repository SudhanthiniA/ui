import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tankremovelview',
  templateUrl: './tankremovelview.component.html',
  styleUrls: ['./tankremovelview.component.scss']
})
export class TankremovelviewComponent implements OnInit {

  addedit: string;
  tankregobj: any = [];
  constructor() { }

  ngOnInit() {
  }

}
