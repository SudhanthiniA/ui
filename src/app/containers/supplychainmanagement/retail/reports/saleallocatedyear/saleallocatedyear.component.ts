import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saleallocatedyear',
  templateUrl: './saleallocatedyear.component.html',
  styleUrls: ['./saleallocatedyear.component.scss']
})
export class SaleallocatedyearComponent implements OnInit {
  salesAllocated = [
    {years: '2021',targetSales: '10,00,000', actualSales: '8,00,000', percentage: '80%'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
