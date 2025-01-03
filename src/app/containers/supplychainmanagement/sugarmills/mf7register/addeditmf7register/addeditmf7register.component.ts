import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, FortnightyStatementService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-addeditmf7register',
  templateUrl: './addeditmf7register.component.html',
  styleUrls: ['./addeditmf7register.component.scss']
})
export class Addeditmf7registerComponent implements OnInit {
  mf7regobj: any = {
    date: '',
    noOfStorageTanks: '',
    qtyOfMolassesTanks: '',
    depthOfMolassesTanksCms: '',
    dipInCms: '',
    tankNumber: '',
    brixPercentage: '',
    ttlReducedSugarTopLayer: '',
    ttlReducedSugarMiddleLayer: '',
    ttlReducedSugarBottomLayer: '',
    nameOfAnalyst: '',
    declaration:''
  };
  editId: any;
  formSubmitted;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private FortnightyStatementService: FortnightyStatementService,
    private alert: AlertService,
    private preview: PreviewService,
  ) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      }
      else if (this.preview.setData) {
        this.mf7regobj = this.preview.setData
      }
    });
  }

  setData(id) {
    this.FortnightyStatementService.getFortnightyId(id).subscribe((responseData: any) => {
      if (responseData.status === 's') {
        this.mf7regobj = responseData.data;
        const date = this.datepipe.transform(this.mf7regobj.date, 'yyyy-MM-dd');
        this.mf7regobj.date = date;
      } else {
        this.alert.showError(responseData.userDisplayMesg, 'error');
      }
    })
  }

  submitsave(sampleDetailForm, status) {
    this.formSubmitted = false;
    if (sampleDetailForm.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
      return false;
    } 
    const FortnightyStatementService = this.FortnightyStatementService;
      if (this.editId) {
        this.mf7regobj[`id`] = this.editId;
        this.mf7regobj[`status`] = status;
      } else {
        this.mf7regobj[`status`] = status;
      }
      ((this.editId) ? FortnightyStatementService.updateFortnighty(this.mf7regobj) : FortnightyStatementService.addFortnighty(this.mf7regobj)).subscribe((responceData: any) => {
        this.handleResponse(responceData)
      })
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/mf7register/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewcategory(form) {
    this.preview.setData = form.value;
    this.router.navigate(['supplychainmanagement/sugarmills/mf7register/preview']);
  }
}
