import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewstockin',
  templateUrl: './viewstockin.component.html',
  styleUrls: ['./viewstockin.component.scss']
})
export class ViewstockinComponent implements OnInit {
  missingBottlesDetails = [
    {id: 1, productName: 'Jack Daniels (Black)', size: '750 ml', quantity: 1, price: '4500.00', damaged: 'Damaged'},
    {id: 2, productName: 'Jhonny Walker (White)', size: '750 ml', quantity: 1, price: '3500.00', damaged: 'Damaged'}
  ]
  receivedBottlesDetails = [
    {id: 1, productName: 'Jack Daniels (Black)', size: '750 ml', case: 1, bottle: 10, total: '45,00,00.00'},
    {id: 2, productName: 'Jhonny Walker (White)', size: '750 ml', case: 1, bottle: 10, total: '35,00,00.00'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
