import { Component, OnInit } from '@angular/core';
import { FormFL25APart4Service } from '@app/services/retails/formfl25Apart4.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addpart4',
  templateUrl: './addpart4.component.html',
  styleUrls: ['./addpart4.component.scss']
})
export class Addpart4Component implements OnInit {
  formSubmitted = false;
  partForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: FormFL25APart4Service) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.partForm = this.formBuilder.group({
      date: ['', Validators.required],
      sales: ['', Validators.required],
      date2: ['', Validators.required],
      openingBalanceQts: ['', Validators.required],
      openingBalancePints: ['', Validators.required],
      receiptsNips: ['', Validators.required],
      receiptsQts: ['', Validators.required],
      salesPints: ['', Validators.required],
      salesNip: ['', Validators.required],
      openingBalanceNip1: ['', Validators.required],
      openingBalanceQts1: ['', Validators.required],
      openingBalancePts1: ['', Validators.required],
      receiptsNips1: ['', Validators.required],
      receiptsBottles: ['', Validators.required],
      salesBottles: ['', Validators.required],
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
          this.service.addFormFL25Apart4(partForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part4/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
