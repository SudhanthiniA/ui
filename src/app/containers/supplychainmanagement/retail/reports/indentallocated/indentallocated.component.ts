import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indentallocated',
  templateUrl: './indentallocated.component.html',
  styleUrls: ['./indentallocated.component.scss']
})
export class IndentallocatedComponent implements OnInit {

  indentAllocated = [
    {month: 'February',indentAllocated: '1,000', indentReceived: '800', percentage: '80%'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
