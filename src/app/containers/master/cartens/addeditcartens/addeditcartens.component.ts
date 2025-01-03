import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '@app/services';
import { CartonService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditcartens',
  templateUrl: './addeditcartens.component.html',
  styleUrls: ['./addeditcartens.component.scss']
})
export class AddeditcartensComponent implements OnInit {

  cartonsObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartonService: CartonService,
    private modalService: NgbModal,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.cartonsObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getcartonsById(params.id);
        this.cartonsObj.id = params.id;
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
  getcartonsById(id) {
    this.cartonService.getcartonsById(id).subscribe((responceData: any) => {
      this.cartonsObj = responceData.data;
    });
  }
  addartons(cartonsForm) {
    this.formSubmitted = false;
    if (cartonsForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.cartonsObj.code,
        details: this.cartonsObj.details,
        size: this.cartonsObj.size,
        noOfBottles: this.cartonsObj.noOfBottles,
        isActive: this.cartonsObj.isActive
      };
      if (this.cartonsObj.id) {
        postParam['id'] = this.cartonsObj.id;
      } else {}
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
          if (respData) {
        ( (this.cartonsObj.id) ? this.cartonService.updateCartons(postParam) : this.cartonService.addCartons(postParam)  )
        .subscribe((responceData: any) => {
          if (responceData.status === 's') {
            this.alert.showSuccess(responceData.userDisplayMesg, 'success');
            this.router.navigate(['/master/cartons/list']);
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
