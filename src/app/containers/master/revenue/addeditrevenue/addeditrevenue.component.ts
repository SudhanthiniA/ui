import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { RevenueService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditrevenue',
  templateUrl: './addeditrevenue.component.html',
  styleUrls: ['./addeditrevenue.component.scss']
})
export class AddeditrevenueComponent implements OnInit {

  revenueObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  addedit = 'Add';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private revenueService: RevenueService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.revenueObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getrevenueById(params.id);
        this.revenueObj.id = params.id;
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

  addrevenue(revenueForm) {
    this.formSubmitted = false;
    if (revenueForm.valid === false) {
      this.formSubmitted = true;
    } else {
      const postParam = {
        code: this.revenueObj.code,
        stages: this.revenueObj.stages,
        isActive: this.revenueObj.isActive
      };
      if (this.revenueObj.id) {
        postParam['id'] = this.revenueObj.id;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.revenueObj.id) ? this.revenueService.updateRevenue(postParam) : this.revenueService.addRevenue(postParam))
            .subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'success');
                this.router.navigate(['/master/revenue/list']);
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

  getrevenueById(id) {
    this.revenueService.getRevenueById(id).subscribe((responceData: any) => {
      this.revenueObj = responceData.data;
    });
  }
}
