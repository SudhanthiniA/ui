import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, CountrymasterService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  countryObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountrymasterService,
    private alert: AlertService,
    private modalService: NgbModal,
    public patternService: PatternService
  ) { }

  ngOnInit() {
    this.countryObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getCountryById(params.id);
        this.countryObject.id = params.id;
        this.addedit = 'Edit';
      }
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addcountry(countryForm) {
    this.formSubmitted = false;
    if (countryForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.countryObject.code,
        countryCode: this.countryObject.countryCode,
        shortName: this.countryObject.shortName,
        currency: this.countryObject.currency,
        id: this.countryObject.id,
        countryName: this.countryObject.countryName,
        isActive: this.countryObject.isActive
      };
      if (this.countryObject.id) {
        postParam['id'] = this.countryObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
    ((this.countryObject.id) ? this.countryService.putCountry(postParam) : this.countryService.addCountry(postParam))
          .subscribe((resp: any) => {
            if (resp.status == 's') {
              this.alert.showSuccess(resp.userDisplayMesg, 'Success');
              this.router.navigate(['/location/country/list']);
              console.log(resp);
            } else {
              this.alert.showError(resp.userDisplayMesg, 'error');
            }
          });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  getCountryById(id) {
    this.countryService.getCountryById(id)
      .subscribe((resp: any) => {
        this.countryObject = resp.data;
      });
  }

}
