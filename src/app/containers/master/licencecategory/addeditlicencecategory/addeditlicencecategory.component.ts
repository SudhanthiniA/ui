import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { LicenseCategotyService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';


@Component({
  selector: 'app-addeditlicencecategory',
  templateUrl: './addeditlicencecategory.component.html',
  styleUrls: ['./addeditlicencecategory.component.scss']
})
export class AddeditlicencecategoryComponent implements OnInit {

  licencecategoryObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alert: AlertService,
    private licenseService: LicenseCategotyService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.licencecategoryObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getlicencecategoryById(params.id);
        this.licencecategoryObj.id = params.id;
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

  addlicencecategory(licencecategoryForm) {
    this.formSubmitted = false;
    if (licencecategoryForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.licencecategoryObj.code,
        name: this.licencecategoryObj.name,
        isActive: this.licencecategoryObj.isActive
      };
      if (this.licencecategoryObj.id) {
        postParam['id'] = this.licencecategoryObj.id;
      }

     // this.licenseService.updateLicense(postParam)
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
        ((this.licencecategoryObj.id) ? this.licenseService.updateLicense(postParam) : this.licenseService.addLicense(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/licencecategory/list']);

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

  getlicencecategoryById(id) {
    this.licenseService.getLicenseById(id).subscribe((responceData: any) => {
      this.licencecategoryObj = responceData.data;
    });
  }

}
