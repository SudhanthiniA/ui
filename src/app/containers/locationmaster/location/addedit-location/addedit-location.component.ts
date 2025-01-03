import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { AlertService, LocationmasterService, PatternService } from '@app/services';

@Component({
  selector: 'app-addedit-location',
  templateUrl: './addedit-location.component.html',
  styleUrls: ['./addedit-location.component.scss']
})
export class AddeditLocationComponent implements OnInit {

  countryData: any;
  stateData: any;
  locationObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  editId: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locServ: LocationmasterService,
    private alert: AlertService,
    private modalService: NgbModal,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.getCountry();
    this.locationObject.isActive = true;
    this.locationObject.country = '';
    this.locationObject.state = '';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getLocationById(params.Id);
        this.editId = params.Id;
        this.addedit = 'Edit';
      }
    });
  }

  getCountry() {
    this.locServ.getAllCountry().subscribe(resp => this.countryData = resp.data);
  }

  getState(id) {
    this.locServ.getStateByCountryid(id).subscribe((resp: any) => this.stateData = resp.data);
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addlocation(locationForm) {
    this.formSubmitted = false;
    if (locationForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        locCode: this.locationObject.locCode,
        locationCode: this.locationObject.locationCode,
        locationName: this.locationObject.locationName,
        country: this.locationObject.country,
        state: this.locationObject.state,
        isActive: this.locationObject.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.locServ.updateLocation(postParam) : this.locServ.addLocation(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/location/location/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getLocationById(id) {
    this.locServ.getLocationById(id).subscribe((resp: any) => {
      this.locationObject = resp.data;
      this.getState(resp.data.country);
    });
  }

}
