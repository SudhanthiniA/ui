import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallotmentapproval',
  templateUrl: './viewallotmentapproval.component.html',
  styleUrls: ['./viewallotmentapproval.component.scss']
})
export class ViewallotmentapprovalComponent implements OnInit {

  constructor() { }

  search = '';
  at = true;
  bindData: any[];

  // Fetch product_name   --start
  fetch: any;
  name: string;
  price = 0;
  qty = 0;
  btn = 0;
  fetchPro: any = {
    user_name: '',
  };

  showLeble = false;
  displayList = [];
  lebleList = [
    { id: 1, name: 'Season Year'},
    { id: 2, name: 'Request Date'},
    { id: 3, name: 'Allotment Id'},
    { id: 4, name: 'Validity'},
    { id: 5, name: 'Entity Name'},
    { id: 6, name: 'Requester Name'},
    { id: 7, name: 'Requested Quantity for Reserved Molasses(LQtl)'},
    { id: 8, name: 'Reserved'},
    { id: 9, name: 'Unreserved'},
    { id: 10, name: 'Total'},
    { id: 11, name: 'Total Allotment'},
    { id: 12, name: 'Utilised Quantity'},
    { id: 13, name: 'Under Approval'},
    { id: 14, name: 'Pending'}
  ];

  ngOnInit() {
  }

  getLeble(e) {
    if (e.target.value.indexOf('@') !== -1) {
      const arr = e.target.value.split('@');
      let lastValue = arr[arr.length - 1];
      lastValue = lastValue.trim();
      this.displayList = this.lebleList.filter(x => x.name.toLowerCase().includes(lastValue.toLowerCase()));
      if (this.displayList.length > 0) {
        this.showLeble = true;
      } else {
        this.showLeble = false;
      }
    } else {
      this.showLeble = false;
    }
  }

  addValue(val) {
    const remarksInp = document.getElementById('remarks') as HTMLTextAreaElement;
    const arrNew = remarksInp.value.split('@');
    let strValue = '';
    for (let i = 0; i <= (arrNew.length - 1); i++) {
      if (arrNew[i] !== '') {
        strValue = strValue + ' @' + arrNew[i];
      }
    }
    remarksInp.value = strValue + ' @' + val;
    remarksInp.value = remarksInp.value.trim() + ' ';
    this.showLeble = false;
    remarksInp.focus();
  }

  fetchproduct(value) {
    if (!value) { return; }
    this.name =  value.replace(/\b\w/g, l => l.toUpperCase());
    this.fetchPro.user_name = this.name;
    value = this.fetchPro;
    console.log(value);
    if (value.user_name == '@') {
      this.search = '';
      this.bindData = [
        { user_name: 'Season year' },
        { user_name: 'Request date' },
        { user_name: 'Alootment id' },
        { user_name: 'Validity' }
      ];
    }
    // else{
    //   this.bindData = []
    // }
    // this.product.fetchProduct(value).subscribe(res => {
    //   this.fetch = res
    //   if (!this.fetch[0]) {
    //     return this.not_exist = false
    //   }
    //   else {
    //     this.not_exist = true;
    //     this.btn = 1;
    //     this.price = this.fetch[0].retail_price;
    //     this.qty = this.fetch[0].quantity;
    //   }
    // })
  }

}
