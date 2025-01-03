import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { PackageTypeService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditpackagetype',
  templateUrl: './addeditpackagetype.component.html',
  styleUrls: ['./addeditpackagetype.component.scss']
})
export class AddeditpackagetypeComponent implements OnInit {

  packagetypeObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService: PackageTypeService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.packagetypeObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpackagetypeById(params.id);
        this.id = params.id;
        this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addpackagetype(packagetypeForm) {
    this.formSubmitted = false;
    console.log(packagetypeForm.valid);
    if (packagetypeForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.packagetypeObject.code,
        name: this.packagetypeObject.name,
        modifiedBy: 'Admin',
        isActive: this.packagetypeObject.isActive
      };
      if (this.packagetypeObject.id) {
        postParam['id'] = this.packagetypeObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.packagetypeObject.id) ? this.packageService.updatePackageType(postParam) : this.packageService.addPackageType(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/packagetype/list']);
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

  getpackagetypeById(id) {
    this.packageService.getPackageById(id).subscribe((responceData: any) => {
      this.packagetypeObject = responceData.data;
    });
  }

}
