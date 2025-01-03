import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LicenceService, LicenseTypeService, AlertService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-addlicence',
  templateUrl: './addlicence.component.html',
  styleUrls: ['./addlicence.component.scss']
})
export class AddlicenceComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  categoryObj: any = {
    code: '',
    name: '',
    type: '',
    status: true
  };
  formSubmitted = false;
  licence_type: any;
  editId: any;
  licenseTypeDropDownSettings: IDropdownSettings;
  searchValue = null;
  licenseTypeRequired = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private alert: AlertService,
    private licenceTypeService: LicenseTypeService,
    public patternService: PatternService,
    private licenceService: LicenceService) { }

  ngOnInit() {
    this.getLicenseType(null);
    this.categoryObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.licenseTypeDropDownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.licenceService.getLicenceById(id).subscribe((resp: any) => {
      this.categoryObj = resp.data;
      console.log(this.categoryObj, '====sample====');
      this.categoryObj.licenseTypeObj = resp.data.type ? [{ id: resp.data.type, name: resp.data.type }] : null;
      this.licenseTypeRequired = true;
      console.log(this.categoryObj.licenseTypeObj, '====sample====');
    });
  }

  onItemSelect(item: any) {
    this.licenseTypeRequired = true;
  }

  onItemDeselect(item: any) {
    this.licenseTypeRequired = false;
  }

  onFilterChange(item: any) {
    if (item.length > 2) {
      this.searchValue = item;
      this.getLicenseType(this.searchValue);
    } else {
      this.searchValue = null;
      this.getLicenseType(this.searchValue);
    }
  }

  onDropDownClose() {
    if (this.searchValue !== null) {
      this.searchValue = null;
      this.getLicenseType(this.searchValue);
    }
  }

  getLicenseType(licenseTypeName){
    const requestParam = {
      filters: { name: licenseTypeName, isActive: true },
      pageNo: 0, paginationSize: 10
    };
    this.licenceTypeService.searchLicenseType(requestParam).subscribe((resp: any) => {
      if (resp.errorCode === 200) {
      this.licence_type = resp.data.contents;
      }
    });
  }

  addlicence(categoryForm) {
    this.formSubmitted = false;
      if (categoryForm.valid === false || this.licenseTypeRequired === false) {
        this.formSubmitted = true;
      } else {
    const postParam = {
      code: this.categoryObj.code,
      name: this.categoryObj.name,
      type: this.categoryObj.licenseTypeObj ? this.categoryObj.licenseTypeObj[0].name : null,
      id: this.editId,
      isActive: this.categoryObj.isActive
    };
    console.log(postParam); if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.licenceService.putLicence(postParam) : this.licenceService.addLicence(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'success');
                this.router.navigate(['/master/licencemaster/list']);
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
}
