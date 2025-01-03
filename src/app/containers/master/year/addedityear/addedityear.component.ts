import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services';
import { YearMasterService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addedityear',
  templateUrl: './addedityear.component.html',
  styleUrls: ['./addedityear.component.scss']
})
export class AddedityearComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  yearObj: any = {
    name: '',
    startMonth: '',
    endMonth: '',
    isActive: true,
    status: true,
  };
  formSubmitted = false;
  editId: any;
  date: any;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private yearService: YearMasterService,
    private alert: AlertService) {
  }

  ngOnInit() {
    this.yearObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.yearService.getYearById(id).subscribe((responceData: any) => {
      this.yearObj = responceData.data;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  addyear(yearForm) {
      this.formSubmitted = true;
        const postParam = {
          name: this.yearObj.name,
          startMonth: this.yearObj.startMonth,
          endMonth: this.yearObj.endMonth,
          id: this.editId,
          isActive: this.yearObj.isActive,
        };
        if (this.editId) {
          postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (yearForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
        ((this.editId) ? this.yearService.putYear(postParam) : this.yearService.addYear(postParam))
        .subscribe((responceData: any) => {
          if (responceData.status == 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
            this.router.navigate(['/master/year/list']);
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
