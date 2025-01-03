import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewreturnfromcustomer',
  templateUrl: './viewreturnfromcustomer.component.html',
  styleUrls: ['./viewreturnfromcustomer.component.scss']
})
export class ViewreturnfromcustomerComponent implements OnInit {
  productDetails = [
    {id: 1, dateTime: '12Jan2021 14:45:48', productName: 'Jhonny Walker (Black)', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹3500.00'},
    {id: 2, dateTime: '12Jan2021 14:45:54', productName: 'Jhonny Walker (White)', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹3500.00'},
    {id: 3, dateTime: '12Jan2021 14:56:33', productName: 'Bacardi Lemon', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹800.00'},
    {id: 4, dateTime: '12Jan2021 14:58:53', productName: 'Signature', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹800.00'},
    {id: 5, dateTime: '12Jan2021 14:59:45', productName: 'Kingfisher (Strong)', packageType: 'Bottle', size: '650 ml', quantity: 1, amount: '₹200.00'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
