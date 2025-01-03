import { Component, OnInit } from '@angular/core';
import { SalesLedgerService } from '@app/services/retails/salesLedger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addsalesledger',
  templateUrl: './addsalesledger.component.html',
  styleUrls: ['./addsalesledger.component.scss']
})
export class AddsalesledgerComponent implements OnInit {
  formSubmitted = false;
  salesLedgerForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: SalesLedgerService) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.salesLedgerForm = this.formBuilder.group({
      date: ['', Validators.required],
      openingBalance650: ['', Validators.required],
      openingBalance500: ['', Validators.required],
      openingBalance355: ['', Validators.required],
      openingBalance330: ['', Validators.required],
      openingBalance275: ['', Validators.required],
      openingBalanceWine: ['', Validators.required],
      newPurchase650: ['', Validators.required],
      newPurchase500: ['', Validators.required],
      newPurchase355: ['', Validators.required],
      newPurchase330: ['', Validators.required],
      newPurchase275: ['', Validators.required],
      newPurchaseWine: ['', Validators.required],
      totalStock650: ['', Validators.required],
      totalStock500: ['', Validators.required],
      totalStock355: ['', Validators.required],
      totalStock330: ['', Validators.required],
      totalStock275: ['', Validators.required],
      totalStockWine: ['', Validators.required],
      sales650: ['', Validators.required],
      sales500: ['', Validators.required],
      sales355: ['', Validators.required],
      sales330: ['', Validators.required],
      sales275: ['', Validators.required],
      salesWine: ['', Validators.required],
      closingBalance650: [''],
      closingBalance500: [''],
      closingBalance355: [''],
      closingBalance330: [''],
      closingBalance275: [''],
      closingBalanceWine: ['']
    });
  }

  addSalesLedger(salesLedgerForm) {
    this.formSubmitted = false;
    if (salesLedgerForm.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addSalesLedger(salesLedgerForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/salesledger/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
