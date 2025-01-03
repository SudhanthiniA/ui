import { Component, OnInit } from '@angular/core';
import { AccountPurchaserService } from '@app/services/retails/accountPurchaser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addpurchaser',
  templateUrl: './addpurchaser.component.html',
  styleUrls: ['./addpurchaser.component.scss']
})
export class AddpurchaserComponent implements OnInit {
  formSubmitted = false;
  accountPurchaserForm : FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: AccountPurchaserService) { }

    ngOnInit() {
      this.buildFormGrp();
    }

    buildFormGrp() {
      this.accountPurchaserForm = this.formBuilder.group({
        receiptDate: ['', Validators.required],
        permitNumber: ['', Validators.required],
        pincode: ['', Validators.required],
        name: ['', Validators.required],
        licenseNo: ['', Validators.required],
        passGrantedforImport: ['', Validators.required],
        quantityReceivedList: this.formBuilder.array([
          this.addFormGroupQuantityReceived()
        ])
      });
    }

    addFormGroupQuantityReceived(): FormGroup {
      return this.formBuilder.group({
        brandName: ['', Validators.required],
        batchNo: ['', Validators.required],
        bottles: ['', Validators.required],
        quantity: ['', Validators.required],
        pints: ['', Validators.required],
        remarks: ['']
      })
    }

    addAccountPurchaser(accountPurchaserForm) {
      this.formSubmitted = false;
      if (accountPurchaserForm.invalid) {
        this.formSubmitted = true;
      }
      else {
        const modalRef = this.modalService.open(CommonPopupComponent);
        console.log(modalRef.result)
        modalRef.result.then(respData => {
          if (respData) {
            this.service.addAccountPurchaser(accountPurchaserForm.value).subscribe((response: any) => {
              this.router.navigate(['/supplychainmanagement/retail/accountpurchaser/list']);
  
              this.alert.showSuccess(response.userDisplayMesg, 'Success');
            })
          }
        }).catch(err => {
          console.log('\n err...', err);
        });
      }
    }
  }
  