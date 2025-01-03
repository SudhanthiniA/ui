import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactiondetails',
  templateUrl: './transactiondetails.component.html',
  styleUrls: ['./transactiondetails.component.scss']
})
export class TransactiondetailsComponent implements OnInit {
  transactionDetails = [
    {id: 1, productName: 'Jack Daniels (Black)', size: '750 ml', quantity: 1, price: '4500.00', amount: '4500.00'},
    {id: 2, productName: 'Jhonny Walker (White)', size: '750 ml', quantity: 1, price: '3500.00', amount: '3500.00'},
    {id: 3, productName: 'Bacardi Lemon', size: '750 ml', quantity: 1, price: '800.00', amount: '800.00'},
    {id: 4, productName: 'Signature', size: '750 ml', quantity: 1, price: '800.00', amount: '800.00'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
