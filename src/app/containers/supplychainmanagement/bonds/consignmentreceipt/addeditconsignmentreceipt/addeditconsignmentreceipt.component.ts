import { Component, OnInit } from '@angular/core';
import { ApiService } from '@app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addeditconsignmentreceipt',
  templateUrl: './addeditconsignmentreceipt.component.html',
  styleUrls: ['./addeditconsignmentreceipt.component.scss']
})
export class AddeditconsignmentreceiptComponent implements OnInit {

  constructor(private apiservice: ApiService, private router: Router) { }
  indent = {
    indentnumber: '',
    recieptnumber: '',
    productname: '',
    consigment: '',
    date: '',
    consigmenttype: '',
  };
  ngOnInit() {
  }
  save() {
    const postingData = {
      indentnumber: this.indent.indentnumber,
    recieptnumber: this.indent.recieptnumber,
    productname: this.indent.productname,
    consigment: this.indent.consigment,
    date: this.indent.date,
    consigmenttype: this.indent.consigmenttype,
    created_on: new Date(),
    created_by: 'Admin',
    modified_on: new Date(),
    modified_by: 'Admin',
    };

    this.apiservice.post('consignmentreciept', postingData).then((data: any) => {
      this.router.navigate(['/supplychainmanagement/bonds/consignmentreceipt/list']);
    });
  }
}
