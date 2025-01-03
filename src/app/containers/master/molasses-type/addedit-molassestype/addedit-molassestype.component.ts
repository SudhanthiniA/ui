import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { MolassesTypeService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addedit-molassestype',
  templateUrl: './addedit-molassestype.component.html',
  styleUrls: ['./addedit-molassestype.component.scss']
})
export class AddeditMolassestypeComponent implements OnInit {
  molassesObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  Id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private molasessType: MolassesTypeService,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.molassesObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.getMolassesById(params.Id);
        this.Id = params.Id;
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

  addmolasses(molassesForm) {
    this.formSubmitted = false;
    if (molassesForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.molassesObject.code,
        name: this.molassesObject.name,
        minTrs: this.molassesObject.minTrs,
        maxTrs: this.molassesObject.maxTrs,
        isActive: this.molassesObject.isActive
      };
      if (this.molassesObject.id) {
        postParam['id'] = this.molassesObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.molassesObject.id) ? this.molasessType.updateMolassesType(postParam) : this.molasessType.addMolassesType(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/molasses-type/list']);
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

  getMolassesById(id) {
    this.molasessType.getMolassesById(id).subscribe((responceData: any) => {
      this.molassesObject = responceData.data;
    });
  }

}
