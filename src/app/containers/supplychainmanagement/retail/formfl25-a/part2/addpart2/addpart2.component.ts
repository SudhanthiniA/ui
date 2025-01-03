import { Component, OnInit } from '@angular/core';
import { FormFL25APart2Service } from '@app/services/retails/formfl25Apart2.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addpart2',
  templateUrl: './addpart2.component.html',
  styleUrls: ['./addpart2.component.scss']
})
export class Addpart2Component implements OnInit {
  formSubmitted = false;
  partForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: FormFL25APart2Service) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.partForm = this.formBuilder.group({
      receiptAccount: ['', Validators.required],
      receiptDate: ['', Validators.required],
      passNumber: ['', Validators.required],
      importerName: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      street: ['', Validators.required],
      quantityReceived: ['', Validators.required],
      remarks: ['', Validators.required]
    });
  }

  addForm(partForm) {
    this.formSubmitted = false;
    if (partForm.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addForm25aPart2(partForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part2/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
