import { Component, OnInit } from '@angular/core';
import { FormFL25APart1Service } from '@app/services/retails/formfl25Apart1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addpart1',
  templateUrl: './addpart1.component.html',
  styleUrls: ['./addpart1.component.scss']
})
export class Addpart1Component implements OnInit {
  formSubmitted = false;
  partForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: FormFL25APart1Service) { }

  ngOnInit() {
    this.buildFormGrp();
  }

  buildFormGrp() {
    this.partForm = this.formBuilder.group({
      date: [''],
      hourofInspection: ['', Validators.required],
      inspectorName: ['', Validators.required],
      pectionNote: ['', Validators.required],
      breachesDeteched: ['', Validators.required]
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
          this.service.addFormFL25Apart1(partForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl25-a/part1/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
