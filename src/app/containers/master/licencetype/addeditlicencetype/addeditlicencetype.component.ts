import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { LicenseTypeService, LiquorCategoryService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditlicencetype',
  templateUrl: './addeditlicencetype.component.html',
  styleUrls: ['./addeditlicencetype.component.scss']
})
export class AddeditlicencetypeComponent implements OnInit {

  addedit: any;
  liquorList: any;
  curDate = new Date();
  name: any;
  licencetypeList: Array<any> = [];
  licencetypeObj: any = {
    code: '',
    name: '',
    type: '',
    isActive: true
  };
  date: any;
  editId: any;
  addedithead: any;
  formSubmitted = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private datepipe: DatePipe,
              private liquorService: LiquorCategoryService,
              private licensetypeService: LicenseTypeService,
              private modalService: NgbModal,
              private alert: AlertService) {
  }

  ngOnInit() {
    this.getliquordata();
    this.licencetypeObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead =
      this.router.url.includes('add') == true ? 'Enter Below Details to Add Licence Type' : 'Enter Below Details to Edit Licence Type';


  }

  getliquordata() {
    this.liquorService.getAllLiquor().subscribe((responceData: any) => {
      console.log(responceData);
      this.liquorList = responceData.data;
    });

  }

  setData(id) {
    this.licensetypeService.getLicenseTypeById(id).subscribe((responceData: any) => {
      this.licencetypeObj = responceData.data;
    });
  }
  addlicencetype(licencetypeForm) {
    this.formSubmitted = false;
    if (licencetypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        // id: this.editId,
        code: this.licencetypeObj.code,
        name: this.licencetypeObj.name,
        type: this.licencetypeObj.type,
        modifiedBy: 'Admin',
        isActive: this.licencetypeObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }

      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.licensetypeService.updateLicenseType(postParam) : this.licensetypeService.addLicenseType(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/licencetype/list']);
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
  navigateLicenceTypeList() {
    this.router.navigate(['master/licencetype/list']);
  }

}
