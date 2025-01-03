import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saleallocatedmonth',
  templateUrl: './saleallocatedmonth.component.html',
  styleUrls: ['./saleallocatedmonth.component.scss']
})
export class SaleallocatedmonthComponent implements OnInit {
  salesAllocated = [
    {month: 'February',targetSales: '10,000', actualSales: '8,000', percentage: '80%'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
