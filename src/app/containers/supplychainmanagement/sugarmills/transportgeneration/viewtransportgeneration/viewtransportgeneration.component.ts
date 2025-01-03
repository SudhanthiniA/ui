import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TransportGenService,AlertService } from '@app/services';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { PreviewService } from '@appServices/preview.service';

@Component({
  selector: 'app-viewtransportgeneration',
  templateUrl: './viewtransportgeneration.component.html',
  styleUrls: ['./viewtransportgeneration.component.scss']
})

export class ViewtransportgenerationComponent implements OnInit {

  transportpassFormGroup: FormGroup;
  viewId: any;
  curDate = new Date();
  addedit: string;
  viewData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private TransportGenService: TransportGenService,
    private formBuilder: FormBuilder,
    private preview: PreviewService
  ) { }

  ngOnInit() {
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  buildPrescriptionFormGrp() {
    this.transportpassFormGroup = this.formBuilder.group({
      passGenerationDate: [''],
      season: [''],
      gatePassNumber: [''],
      supplyType: [''],
      sugarMillName: [''],
      sugarmillAddrs1: [''],
      delivered: [''],
      passbookNumber: [''],
      orderId: [''],
      orderNoDate: [''],
      distName: [''],
      stockName: [''],
      address: [''],
      vechicleNumber: [''],
      driverName: [''],
      route: [''],
      tankwiseGross: [''],
      tankwiseTare: [''],
      tankwiseNet: [''],
      created_by: [''],
      created_on: [''],
      modified_by: [''],
      modified_on: [''],
      remarks: [''],
      status: [''],
      tankDetail: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      tank: data && data.tank || '',
      grade: data && data.grade || '',
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: data && data.quantity || '',
    });
  }
  setData(id?: any) {
    if (id) {
      this.TransportGenService.getTransGenById(id).subscribe((responceData: any) => {
          this.viewData = responceData.data;
      })
    } else {
      this.viewData = this.preview.setData;
    }
  }

  approveTransGen(status) {
    const postParam = {
      id: this.viewId,
      status,
      remarks: this.transportpassFormGroup.value.remarks
    };
    this.TransportGenService.approveTransGen(postParam).subscribe(responceData => {
      if (responceData.status == 's') {
        this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
        this.router.navigate(['/supplychainmanagement/sugarmills/transportgeneration/list']);
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    })
  }
  
}
