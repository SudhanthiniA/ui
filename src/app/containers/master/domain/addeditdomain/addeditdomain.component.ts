import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { DomainService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditdomain',
  templateUrl: './addeditdomain.component.html',
  styleUrls: ['./addeditdomain.component.scss']
})
export class AddeditdomainComponent implements OnInit {

  domainObject: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit: any;
  id: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private domainService: DomainService,
    private datePipe: DatePipe,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.domainObject.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getDomainById(params.id);
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

  adddomain(entityForm) {
    this.formSubmitted = false;
    if (entityForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.domainObject.code,
        name: this.domainObject.name,
        isActive: this.domainObject.isActive
      };
      if (this.domainObject.id) {
        postParam['id'] = this.domainObject.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.domainObject.id) ? this.domainService.updateDomain(postParam) : this.domainService.addDomain(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/domain/list']);
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

  getDomainById(id) {
    this.domainService.getdomainById(id).subscribe((responceData: any) => {
      this.domainObject = responceData.data;
    });
  }

}
