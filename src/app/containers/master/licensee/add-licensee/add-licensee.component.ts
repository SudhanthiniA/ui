import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenceService, LicenseeService, LicenseTypeService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-add-licensee',
  templateUrl: './add-licensee.component.html',
  styleUrls: ['./add-licensee.component.scss']
})
export class AddLicenseeComponent implements OnInit {
  licenseeObject: any = {
    code: '',
    name: '',
    type: '',
    isActive: true,
    licenseName: '',
  };
  editId: any;
  licencetypeData: any;
  licencenameData: any;
  formSubmitted = false;
  addedit: any;
  curDate = new Date();

  constructor(private router: Router,
    private licenceService: LicenceService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private licenseeService: LicenseeService,
    private licenseTypeService: LicenseTypeService,
    public patternService: PatternService,
    private alert: AlertService) { }

  ngOnInit() {
    this.licenseeObject.licencename = '';
    this.licenseTypeService.getLicenseType().subscribe((resp: any) => {
      this.licencetypeData = resp.data;
    });
    this.licenceService.getLicence().subscribe((resp: any) => {
      this.licencenameData = resp.data;
    });
    this.licenseeObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.licenseeService.getLicenseeById(id).subscribe((responceData: any) => {
      this.licenseeObject = responceData.data;
    });
  }

  addlicensee(licenseeForm) {
    this.formSubmitted = true;
    const postParam = {
      code: this.licenseeObject.code,
      name: this.licenseeObject.name,
      type: this.licenseeObject.type,
      isActive: this.licenseeObject.isActive,
      licenseName: this.licenseeObject.licenseName,
      id: this.editId
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (licenseeForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.licenseeService.putLicensee(postParam) : this.licenseeService.addLicensee(postParam)).subscribe((responceData: any) => {
            if (responceData.status === 's') {
              this.alert.showSuccess(responceData.userDisplayMesg, 'success');
              this.router.navigate(['/master/licensee/list']);
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

  removeFirstSpace(e) {
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }
}
