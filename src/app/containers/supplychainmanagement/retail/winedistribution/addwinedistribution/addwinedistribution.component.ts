import { Component, OnInit } from '@angular/core';
import { WineDistruibutionService, } from '@app/services/retails/wineDistribution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService, StatemasterService, DistrictMasterService } from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addwinedistribution',
  templateUrl: './addwinedistribution.component.html',
  styleUrls: ['./addwinedistribution.component.scss']
})
export class AddwinedistributionComponent implements OnInit {
  formSubmitted = false;
  states:any;
  districts:any;
  wineDistributionForm: FormGroup;

  localities = [
    { id: 1, name: 'Locality 1' },
    { id: 2, name: 'Locality 2' },
  ]
  sizes = [
    { id: 1, name: '750 ML' },
    { id: 2, name: '350 ML' },
  ]
  policeStations = [
    { id: 1, name: 'Police Station 1' },
    { id: 2, name: 'Police Station 2' },
  ]
  wards = [
    { id: 1, name: 'Ward 1' },
    { id: 2, name: 'Ward 2' },
  ]
  municipalAreas = [
    { id: 1, name: 'Ward 1' },
    { id: 2, name: 'Ward 2' },
  ]
  urbanRurals = [
    { id: 1, name: 'Urban' },
    { id: 2, name: 'Rural' },
  ]
  tehsils = [
    { id: 1, name: 'Tehsil 1' },
    { id: 2, name: 'Tehsil 2' },
  ]

  constructor(
    private state : StatemasterService,
    private district : DistrictMasterService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private router: Router,
    private alert: AlertService,
    private service: WineDistruibutionService
  ) { }

  ngOnInit() {
    this.createFormGrp();
    this.getState();
  }

  createFormGrp() {
    this.wineDistributionForm = this.formBuilder.group({
      receivedDate: ['', Validators.required],
      transportPassNumber: ['', Validators.required],
      tpQRCodeNumber: ['', Validators.required],
      nameOfRetailShop: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      tehsil: ['', Validators.required],
      urbanRural: ['', Validators.required],
      municipalArea: ['', Validators.required],
      ward: ['', Validators.required],
      policeStation: ['', Validators.required],
      Locality: ['', Validators.required],
      street: ['', Validators.required],
      applicationNumber: ['', Validators.required],
      nameOfBrand: ['', Validators.required],
      intensity: ['', Validators.required],
      size: ['', Validators.required],
      wineCount: ['', Validators.required]
    })
  }

  getState() {
    this.state.getState().subscribe((responceData: any) => {
      this.states = responceData.data;
    })
  }

  getDistrict($event){
    let id = $event.target.value;
        this.district.getDistrictsByStateid(id).subscribe((responceData: any) => {
      this.districts = responceData.data;
    });
  }

  addWineDistribution(wineDistributionForm) {
    this.formSubmitted = false;
    if (wineDistributionForm.invalid) {
      this.formSubmitted = true;
    }
    else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          this.service.addWineDistribution(wineDistributionForm.value).subscribe((response: any) => {
            this.router.navigate(['/supplychainmanagement/retail/winedistribution/list']);

            this.alert.showSuccess(response.userDisplayMesg, 'Success');
          })
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
}
