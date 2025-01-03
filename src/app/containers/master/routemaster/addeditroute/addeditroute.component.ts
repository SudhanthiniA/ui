import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { RouteService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';

@Component({
  selector: 'app-addeditroute',
  templateUrl: './addeditroute.component.html',
  styleUrls: ['./addeditroute.component.scss']
})
export class AddeditrouteComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  liquorList: any;
  subBrandObj: any = {
    routeCode: '',
    routeName: '',
    isActive: '',
    duration: '',
    routeTo: '',
    routeFrom: '',
    wastage: '',
  };
  date: any;

  editId: any;
  formSubmitted = false;
  brandList: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private routeService: RouteService,
    private modalService: NgbModal,
    private alert: AlertService) {
  }

  ngOnInit() {

    this.subBrandObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else {
        this.subBrandObj.isActive = true;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id) {
    this.routeService.getRouteById(id).subscribe((responceData: any) => {
      this.subBrandObj = responceData.data;
    });
  }
  addSubbrand(subBrandForm) {
    this.formSubmitted = false;
    if (subBrandForm.valid === false) {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        this.subBrandObj[`id`] = this.editId;
      }
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.routeService.updateRoute(this.subBrandObj) : this.routeService.addRoute(this.subBrandObj))
            .subscribe((responceData: any) => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
                this.router.navigate(['/master/routemaster/list']);
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
  navigateliquorList() {
    this.router.navigate(['/master/routemaster/list']);
  }
}
