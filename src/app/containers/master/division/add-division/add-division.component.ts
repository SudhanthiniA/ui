import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, DivisionService, PatternService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss']
})
export class AddDivisionComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  divisionObj: any = {
    divisionCode: '',
    divisionName: '',
    active: true
  };
  formSubmitted = false;
  editId: any;
  date: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private divisionService: DivisionService,
    public patternService: PatternService,
    private alert: AlertService) {
  }

  ngOnInit() {
    this.divisionObj.active = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.divisionService.getDivisionById(id).subscribe((responceData: any) => {
      this.divisionObj = responceData.data;
    });
  }

  removeFirstSpace(e) {
    const x = (e.which) ? e.which : e.keyCode;
    if (e.which === 32 && e.target.selectionStart === 0) {
      return false;
    }
  }

  adddivision(divisionForm) {
    this.formSubmitted = false;
    if (divisionForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        divisionCode: this.divisionObj.divisionCode,
        divisionName: this.divisionObj.divisionName,
        modifiedBy: sessionStorage.getItem('loggeduser'),
        active: this.divisionObj.active
      };
      if (this.editId) {
        postParam['id'] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.divisionService.updateDivision(postParam) : this.divisionService.addDivision(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/division/list']);
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
