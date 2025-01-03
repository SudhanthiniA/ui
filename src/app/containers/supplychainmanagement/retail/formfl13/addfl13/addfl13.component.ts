import { Component, OnInit } from '@angular/core';
import { FormFL13Service, } from '@app/services/retails/formfl13.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, LicenseTypeService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addfl13',
  templateUrl: './addfl13.component.html',
  styleUrls: ['./addfl13.component.scss']
})
export class Addfl13Component implements OnInit {
  formSubmitted = false;
  licenseTypes: any;
  fl13Form: FormGroup;
  editId: any;

  localities = [
    { id: 1, name: 'Locality 1' },
    { id: 2, name: 'Locality 2' },
    { id: 3, name: 'Locality 3' },
  ]

  constructor(private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private service: FormFL13Service,
    private licenseService: LicenseTypeService) { }

  ngOnInit() {
    this.buildFormGrp();
    this.getLicenseType();
  }

  buildFormGrp() {
    this.fl13Form = this.formBuilder.group({
      licenseeName: ['', Validators.required],
      licenseType: ['', Validators.required],
      type: [''],
      locality: ['', Validators.required],
      licenseFeesAdvance: ['', Validators.required],
      rate1: ['', Validators.required],
      licenseFeeonSpirit: ['', Validators.required],
      rate2: ['', Validators.required],
      licenseFeeonBeer: ['', Validators.required],
      totalAmount: [''],
    });
  }

  getLicenseType() {
    this.licenseService.getLicenseType().subscribe((responceData: any) => {
      this.licenseTypes = responceData.data;
    })
  }

  calculateAmount() {
    let licenseFeeonSpirit = this.fl13Form.get('licenseFeeonSpirit').value;
    let licenseFeeonBeer = this.fl13Form.get('licenseFeeonBeer').value;
    let totalAmount = licenseFeeonSpirit + licenseFeeonBeer;
    this.fl13Form.controls["totalAmount"].setValue(totalAmount);
  }

  addFL13(fl13Form) {
    // let form = this.fl13Form.value
    this.formSubmitted = false;
    if (fl13Form.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      this.fl13Form.controls["type"].setValue('Separate Permises');
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addForm13(fl13Form.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl13/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
