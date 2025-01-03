import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleModelService, PatternService, AlertService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '../../../../../_shared/common-popup/common-popup.component'

@Component({
  selector: 'app-addeditvehiclemodel',
  templateUrl: './addeditvehiclemodel.component.html',
  styleUrls: ['./addeditvehiclemodel.component.scss']
})
export class AddeditvehiclemodelComponent implements OnInit {
  addedit: any;
  curDate = new Date();
  name: any;
  vehicleList: Array<any> = [];
  vehicleObj: any = {
    code: '',
    model: '',
    status: true
  };
  editId: any;
  formSubmitted = false;
  addedithead: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
    private alert: AlertService,
    public patternService: PatternService,
    private vehiclemodelService: VehicleModelService
  ) { }

  ngOnInit() {
    this.vehicleObj.isActive = true;
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.addedithead = this.router.url.includes('add') == true ?
      'Enter Below Details to Add vehicle' : 'Enter Below Details to Edit vehicle';
  }

  setData(id) {
    this.vehiclemodelService.getVehicleModelById(id).subscribe(responceData => {
      console.log(responceData);
      this.vehicleObj = responceData.data
    });
  }

  addvehicle(vehicleForm) {
    this.formSubmitted = true;
    const postParam = {
      id: this.editId,
      code: this.vehicleObj.code,
      model: this.vehicleObj.model,
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
          console.log(postParam);
          ((this.editId) ? this.vehiclemodelService.putVehicleModel(postParam) : this.vehiclemodelService.addVehicleModel(postParam))
            .subscribe(responceData => {
              if (responceData.status == 's') {
                this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
                this.router.navigate(['/master/vehiclemodel/list']);
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
    this.router.navigate(['master/vehiclemodel/list']);
  }

}
