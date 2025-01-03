import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { GenderService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';


@Component({
  selector: 'app-addeditgender',
  templateUrl: './addeditgender.component.html',
  styleUrls: ['./addeditgender.component.scss']
})
export class AddeditgenderComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  genderObj: any = {
    code: '',
    name: '',
    isActive: true
  };
  formSubmitted = false;
  editId: any;
  date: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private genderService: GenderService,
              private alert: AlertService) {

   }

  ngOnInit() {
    this.genderObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.genderService.getGenderById(id).subscribe((responceData: any) => {
      this.genderObj = responceData.data;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addgender(genderForm) {
    this.formSubmitted = false;
    if (genderForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.genderObj.code,
        name: this.genderObj.name,
        modifiedBy: sessionStorage.getItem('loggeduser'),
        isActive: this.genderObj.isActive
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
      if (respData) {
    ((this.editId) ? this.genderService.updateGender(postParam) : this.genderService.addGender(postParam))
      .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/gender/list']);
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
