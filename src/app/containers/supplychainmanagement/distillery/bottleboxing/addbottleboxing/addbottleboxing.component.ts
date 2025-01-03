import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, DistileryService } from '@app/services';

@Component({
  selector: 'app-addbottleboxing',
  templateUrl: './addbottleboxing.component.html',
  styleUrls: ['./addbottleboxing.component.scss']
})
export class AddbottleboxingComponent implements OnInit {

  showButton = false;
  boxingObj: any = {};
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  addedit: any;
  bottlingPlans: any;
  applicationNumber: any;
  licenceformslist: any[] = [{ id: 1, name: 'F.L-3 License' }, { id: 2, name: 'F.L-3A License' }, { id: 3, name: 'CL License' }];
  statuslist: any[] = [{ id: 1, name: 'Boxing Done' }, { id: 2, name: 'Boxing Pending' }];
  logshow: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private distService: DistileryService,
    private alert: AlertService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      if (params.Id) {
        this.editId = params.Id
        this.setData(this.editId);
      } else {
        this.setData();
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  setData(id?) {
    if (id) {
      this.distService.getboxingProcessId(id).subscribe((resp: any) => {
        const data = resp.content;
        this.boxingObj = data;
        this.logshow = data.boxingProcessList;
        console.log(this.logshow, 'logs');
        const date = data.bottlingProductionPlan.bottlingPlanDetails.requestDate
        this.boxingObj.date = this.datePipe.transform(date, 'dd-MM-yyyy');
        this.boxingObj.planId = data.bottlingProductionPlan.applicationNumber
        this.boxingObj.year = 'Molasses Year (2020-21)'
        this.boxingObj.bottlingId = data.bottlingProductionPlan.id
        this.getapplicationnumber();
        this.boxingObj.liquorType = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.liquorTypeValue
        this.boxingObj.brandName = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.brandName
        this.boxingObj.packageSize = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.packageSizeName
        this.boxingObj.noOfCases = data.bottlingProductionPlan.bottlingPlanDetails.numberOfCases
        this.boxingObj.noOfBottles = data.bottlingProductionPlan.bottlingPlanDetails.numberOfBottles
        this.boxingObj.bottlesPerCase = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.cartonSize
        this.boxingObj.etin = data.bottlingProductionPlan.bottlingPlanDetails.brandDetails.parentEtin
        this.boxingObj.gtin = data.bottlingProductionPlan.bottlingPlanDetails.labelDetails.gtin
        this.boxingObj.totQuantity = data.bottlingProductionPlan.bottlingPlanDetails.quantityBL
        this.boxingObj.casesPending = data.casesPendingforTransfer
        if (this.boxingObj.casesPending >= 1) {
          this.showButton = true;
        }
        this.boxingObj.pendingQuantity = data.pendingQuantity
        this.boxingObj.transWarehouse = data.casesTransferredToWarehouse
        this.boxingObj.transferQuantity = data.transferredQuantity
        this.boxingObj.casesScanned = data.noOfCasesScanned
        this.boxingObj.bottleScanned = data.noOfBottleScanned
        this.boxingObj.status = data.scanStatus
        // this.boxingObj.wasQuantity = data.bottlingProductionPlan.bottlingPlanDetails.wastageQuantityBL;
      });
    }
  }

  getapplicationnumber() {
    this.distService.getAppNumber('BP').subscribe((res: any) => {
      this.boxingObj.boxingId = res.content;
    })
  }

  updateWastage(boxingForm) {
    this.formSubmitted = true;
    if (boxingForm.valid) {
      this.distService.updateWastage(this.boxingObj.wasQuantity, this.boxingObj.bottlingId)
        .subscribe((resp: any) => {
          if (resp.responseCode == 200) {
            this.alert.showSuccess(resp.responseMessage, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/bottleboxing/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'error');
          }
        });
    }
  }

  transferWarehouse( status) {
    const postParam = {
      bottledQuantityBL: this.boxingObj.totQuantity,
      bottlingProductionPlanId: this.boxingObj.bottlingId,
      molassesYear: this.boxingObj.year,
      referenceNumber: this.boxingObj.boxingId,
      requestedDate: this.boxingObj.date,
      status: status
    }
    // if (boxingForm.valid) {
      this.distService.transferWarehouse(postParam)
        .subscribe((resp: any) => {
          if (resp.responseCode == 200) {
            this.alert.showSuccess(resp.responseMessage, 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/bottleboxing/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'error');
          }
        });
      // }
  }

}
