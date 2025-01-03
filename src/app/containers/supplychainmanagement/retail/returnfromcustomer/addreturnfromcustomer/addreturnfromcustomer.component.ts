import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addreturnfromcustomer',
  templateUrl: './addreturnfromcustomer.component.html',
  styleUrls: ['./addreturnfromcustomer.component.scss']
})
export class AddreturnfromcustomerComponent implements OnInit {
  showProductDetail: boolean;
  retunObj: any = {};
  formSubmitted = false;
  productDetails = [
    {id: 1, dateTime: '12Jan2021 14:45:48', productName: 'Jhonny Walker (Black)', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹3500.00'},
    {id: 2, dateTime: '12Jan2021 14:45:54', productName: 'Jhonny Walker (White)', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹3500.00'},
    {id: 3, dateTime: '12Jan2021 14:56:33', productName: 'Bacardi Lemon', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹800.00'},
    {id: 4, dateTime: '12Jan2021 14:58:53', productName: 'Signature', packageType: 'Bottle', size: '750 ml', quantity: 1, amount: '₹800.00'},
    {id: 5, dateTime: '12Jan2021 14:59:45', productName: 'Kingfisher (Strong)', packageType: 'Bottle', size: '650 ml', quantity: 1, amount: '₹200.00'},
  ]
  constructor(
    private router: Router,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.showProductDetail = false;
  }

  getDetails()
  {
    this.showProductDetail = true;
  }

  scanQR(addForm) {
    this.formSubmitted = true;
    console.log(addForm.valid);
    if (addForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
      this.router.navigate(['/supplychainmanagement/retail/returnfromcustomer/returnconfirmation']);
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
