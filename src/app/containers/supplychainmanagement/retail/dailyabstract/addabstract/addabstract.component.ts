import { Component, OnInit } from '@angular/core';
import { DailyAbstractService, } from '@app/services/retails/dailyAbstract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addabstract',
  templateUrl: './addabstract.component.html',
  styleUrls: ['./addabstract.component.scss']
})
export class AddabstractComponent implements OnInit {
  formSubmitted = false;
  dailyAbstractForm : FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: DailyAbstractService
    ) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.dailyAbstractForm = this.formBuilder.group({
      date: ['', Validators.required],
      openingBalanceWBGRForeignManufracturer: [''],
      receiptsWBGRForeignManufracturer: ['', Validators.required],
      salesWBGRForeignManufracturer: ['', Validators.required],
      closingBalanceWBGRForeignManufracturer: [''],
      openingBalanceWBGRIndianManufracturer: [''],
      receiptsWBGRIndianManufracturer: ['', Validators.required],
      salesWBGRIndianManufracturer: ['', Validators.required],
      closingBalanceWBGRIndianManufracturer: [''],
      openingBalanceOtherSpirits1: [''],
      receiptsOtherSpirits1: ['', Validators.required],
      salesOtherSpirits1: ['', Validators.required],
      closingBalanceOtherSpirits1: [''],
      openingBalance: [''],
      receipts: ['', Validators.required],
      sales: ['', Validators.required],
      closingBalance: [''],
      openingBalanceBeerofForeignManufracturer: [''],
      receiptsBeerofForeignManufracturer: ['', Validators.required],
      salesBeerofForeignManufracturer: ['', Validators.required],
      closingBalanceBeerofForeignManufracturer: [''],
      openingBalanceBeerofIndianManufracturer: [''],
      receiptsBeerofIndianManufracturer: ['', Validators.required],
      salesBeerofIndianManufracturer: ['', Validators.required],
      closingBalanceBeerofIndianManufracturer: [''],
      openingBalanceOtherSpirits2: [''],
      receiptsOtherSpirits2: ['', Validators.required],
      salesOtherSpirits2: ['', Validators.required],
      closingBalanceOtherSpirits2: [''],
    });
  }

  addDailyAbstract(dailyAbstractForm) {
    this.formSubmitted = false;
    if (dailyAbstractForm.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addDailyAbstract(dailyAbstractForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/dailyabstract/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
