import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, PatternService, VehicleMakeService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditvehicle',
  templateUrl: './addeditvehicle.component.html',
  styleUrls: ['./addeditvehicle.component.scss']
})
export class AddeditvehicleComponent implements OnInit {

  addedit: any;
  curDate = new Date();
  name: any;
  vehicleList: Array<any> = [];
  vehicleObj: any = {
    code: '',
    makemodel: '',
    isActive: true
  };
  editId: any;
  formSubmitted = false;
  addedithead: any;
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router,
    private vehicleMakeService: VehicleMakeService,
    private alert: AlertService,
    public patternService: PatternService,
  ) {
  }

  ngOnInit() {
    this.vehicleObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') == true ? 'Enter Below Details to Add vehicle' : 'Enter Below Details to Edit vehicle';
  }

  setData(id) {
    this.vehicleMakeService.getVehicleMakeById(id).subscribe(responceData => {
      console.log(responceData);
      this.vehicleObj = responceData.data;
    });
  }

  addvehicle(vehicleForm) {
    this.formSubmitted = true;
    const postParam = {
      id: parseInt(this.editId),
      code: this.vehicleObj.code,
      makeModel: this.vehicleObj.makeModel,
      modifiedBy: 'Admin',
      isActive: this.vehicleObj.isActive
    };
    if (this.editId) {
      postParam['modifiedBy'] = sessionStorage.getItem('loggeduser');
      postParam['id'] = this.editId;
    } else {
      postParam['createdBy'] = sessionStorage.getItem('loggeduser');
    }
    if (vehicleForm.valid) {
      const modalRef = this.modalService.open(CommonPopupComponent);
      console.log(modalRef.result)
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.vehicleMakeService.putVehicleMake(postParam) : this.vehicleMakeService.addVehicleMake(postParam))
            .subscribe(responceData => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
                this.router.navigate(['/master/vehiclemake/list']);
              } else {
                this.alert.showError(responceData['userDisplayMesg'], 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  navigatevehicleList() {
    this.router.navigate(['master/vehiclemake/list']);
  }
}
