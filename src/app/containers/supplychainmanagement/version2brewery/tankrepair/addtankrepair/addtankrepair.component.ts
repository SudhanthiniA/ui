import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService,TankregistartionService,MasterapiService,PreviewService } from '@app/services';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { apiUrls } from '@appEnv/apiurls';
import { formatDate } from '@angular/common';

interface Post {
  startDate: Date;
}
@Component({
  selector: 'app-addtankrepair',
  templateUrl: './addtankrepair.component.html',
  styleUrls: ['./addtankrepair.component.scss']
})
export class AddtankrepairComponent implements OnInit {

  post: Post = {
    startDate: new Date(Date.now())
  }
  customRadioInline1= false;
  Pd25Form:FormGroup;
  formSubmitted = false;
  editId: any;
  addedit: string;
  tankObj: any;
  tankreqObj: any = {
    requestDate:[formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
    repairType: '',
    customRadioInline1: 'Radio1',
    tankName: '',
    capacity: '',
    spiritType: '',
    reasonForRepair: '',
    specification: '',
    durationOfrepair: ''
    
  };
  tankList: any;
  constructor( private router: Router,
    private alert: AlertService,
   private modalService: NgbModal,
    private TankRegistrationService: TankregistartionService,
    private route: ActivatedRoute,private masterapiService: MasterapiService,private preview: PreviewService) { }

    
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
       } else if (this.preview.setData) {
          this.tankreqObj = this.preview.setData;
        
      } 
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    this.masterapiService.get(`${apiUrls.getAllTank}`).then((responceData: any) => {
      this.tankList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  setData(id?) {
    if (id) {
      this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {
        this.tankreqObj = responceData.data;
        this.tankreqObj.customRadioInline1 === 'Radio1' ? this.customRadioInline1 = true : this.customRadioInline1 = false;
      })
    }
  }
 
  clickedevent(value) {
    
    if (value === 'Radio1') {
      this.customRadioInline1  = true;
    } else if (value === 'Radio2') {
      this.customRadioInline1  = false;
    } 
  }
  addtankconvertion(Pd25Form,method) {
    this.formSubmitted = false;
    if (Pd25Form.valid === false) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          if (this.editId) {
            const postParam = {
              id: this.editId,
              requestDate: this.tankreqObj.requestDate,
              repairType: this.tankreqObj.repairType,
              tankName:this.tankreqObj.tankName,
              capacity: this.tankreqObj.capacity,
              spiritType:this.tankreqObj.spiritType,
              reasonForRepair:this.tankreqObj.reasonForRepair,
              specification:this.tankreqObj.specification,
              durationOfrepair:this.tankreqObj.durationOfrepair,
             
              status: method,
              modifiedBy: 'Admin',
            };
            this.TankRegistrationService.updateTanReg(postParam).subscribe((responseData: any) => {
              this.handleResponse(responseData)
            })
          } else {
            const postParam = {
              requestDate: this.tankreqObj.requestDate,
              repairType: this.tankreqObj.repairType,
              customRadioInline1:this.tankreqObj.customRadioInline1,
              tankName:this.tankreqObj.tankName,
              capacity: this.tankreqObj.capacity,
              spiritType:this.tankreqObj.spiritType,
              reasonForRepair:this.tankreqObj.reasonForRepair,
              specification:this.tankreqObj.specification,
              durationOfrepair:this.tankreqObj.durationOfrepair,
              status: method,
              createdBy: 'Admin',
            };
            this.TankRegistrationService.addTanReg(postParam).subscribe((responseData: any) => {
              this.handleResponse(responseData)
            })
          }
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/distillery/tankrepair/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }
  navigatetankPreview(form) {
    this.preview.setData = form.value;
    this.router.navigate(['/supplychainmanagement/distillery/tankrepair/view']);
  }
}
