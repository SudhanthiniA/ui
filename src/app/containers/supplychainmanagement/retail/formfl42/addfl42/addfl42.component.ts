import { Component, OnInit } from '@angular/core';
import { FormFL42Service, } from '@app/services/retails/formfl42.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addfl42',
  templateUrl: './addfl42.component.html',
  styleUrls: ['./addfl42.component.scss']
})
export class Addfl42Component implements OnInit {
  formSubmitted = false;
  fl42Form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private alert: AlertService,
    private service: FormFL42Service) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.fl42Form = this.formBuilder.group({
      date: ['', Validators.required],
      openingBalance: [''],
      fromWhereReceived: ['', Validators.required],
      permitNo: ['', Validators.required],
      permitDate: ['', Validators.required],
      quantity: ['', Validators.required],
      total: [''],
      quantityIssuedFor: ['', Validators.required],
      closingBalance: ['', Validators.required],
      remarks: ['', Validators.required],
    });
  }

  addFL42(fl42Form) {
    this.formSubmitted = false;
    if (fl42Form.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addForm42(fl42Form.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl42/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

}
