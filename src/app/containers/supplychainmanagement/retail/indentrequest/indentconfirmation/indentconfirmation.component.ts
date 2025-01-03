import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indentconfirmation',
  templateUrl: './indentconfirmation.component.html',
  styleUrls: ['./indentconfirmation.component.scss']
})
export class IndentconfirmationComponent implements OnInit {
  billAmount: string;
  indentNo: string;
  id: string;

  constructor() { }

  ngOnInit() {
    this.indentNo = sessionStorage.getItem('indentNo');
    this.billAmount = sessionStorage.getItem('billamount');
    this.id = sessionStorage.getItem('id');
  }

}
