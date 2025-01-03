import { Component, OnInit } from '@angular/core';
import { FormFL24Service, } from '@app/services/retails/formfl24.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, DistrictMasterService, LocationmasterService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addfl24',
  templateUrl: './addfl24.component.html',
  styleUrls: ['./addfl24.component.scss']
})
export class Addfl24Component implements OnInit {
  formSubmitted = false;
  locations: any;
  districts: any;
  fl24Form: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private alert: AlertService,
    private service: FormFL24Service,
    private district: DistrictMasterService,
    private location: LocationmasterService) { }

  ngOnInit() {
    this.buildFormGrp();
    this.getDistrict();
    this.getLocation();
  }

  buildFormGrp() {
    this.fl24Form = this.formBuilder.group({
      permitNo: ['', Validators.required],
      permitDate: ['', Validators.required],
      importerName: ['', Validators.required],
      importerAddress: ['', Validators.required],
      location: ['', Validators.required],
      district: ['', Validators.required],
      descriptofSpirit: ['', Validators.required],
      quantity: ['', Validators.required],
      amount1: ['', Validators.required],
      receiptNumber1: ['', Validators.required],
      receiptDate1: ['', Validators.required],
      amount2: ['', Validators.required],
      receiptNumber2: ['', Validators.required],
      receiptDate2: ['', Validators.required],
      remarks: ['', Validators.required],
    });
  }

  getLocation() {
    this.location.getLocations().subscribe((responceData: any) => {
      this.locations = responceData.data;
    })
  }

  getDistrict() {
    this.district.getAllDistrict().subscribe((responceData: any) => {
      this.districts = responceData.data;
    })
  }

  addFL24(fl24Form) {
    this.formSubmitted = false;
    if (fl24Form.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addForm24(fl24Form.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/formfl24/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
