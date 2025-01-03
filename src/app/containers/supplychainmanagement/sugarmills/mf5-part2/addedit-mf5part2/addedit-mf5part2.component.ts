import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, PreviewService, Mf5Part2Service, CommonService } from '@app/services';

@Component({
  selector: 'app-addedit-mf5part2',
  templateUrl: './addedit-mf5part2.component.html',
  styleUrls: ['./addedit-mf5part2.component.scss']
})
export class AddeditMf5part2Component implements OnInit {
  mf5part2Obj: any = {
    serialNoOfTank: '',
    tankType: '',
    capacity: '',
    dimensionsPage: '',
    dimensions: '',
    reqdate: '',
    openStock: '',
    quantity: '',
    brix: '',
    totalSugar: '',
    transferFromTank: '',
    molassesTotal: '',
    nameOfDistillery: '',
    quantitySuppliedMolasses: '',
    nameOfOsShops: '',
    nameOfIndUnits: '',
    quantitySupplied: '',
    soldToTrade: '',
    quantitySuppliedTotal: '',
    closingBalance: '',
    layer: '',
    analyseBrix: '',
    percentageOfTotalSugar: '',
    remarks: '',
    status: 1,
    partName: 'Part2'
  };
  addedit: any;
  editId: any;
  formSubmitted: boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private mf5Part2Service: Mf5Part2Service,
    private preview: PreviewService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.mf5part2Obj = this.preview.setData;
      }
    });
  }

  setData(id) {
    this.mf5Part2Service.getMf5Part2ById(id).subscribe((responceData: any) => {
      this.mf5part2Obj = responceData.data;
      this.caltotalmolasses();
      this.calQtySupplied();
      this.mf5part2Obj.nameOfIndUnits = Number(this.mf5part2Obj.nameOfIndUnits);
    });
  }

  saveData(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      return false;
    }
    if (this.editId) {
      this.mf5part2Obj[`modifiedBy`] = 'Admin';
      this.mf5part2Obj[`method`] = method;
      this.mf5part2Obj[`id`] = this.editId;
    } else {
      this.mf5part2Obj[`createdBy`] = 'Admin';
      this.mf5part2Obj[`method`] = method;
    }

    (
      (this.editId) ? this.mf5Part2Service.updateMf5Part2(this.mf5part2Obj) :
        this.mf5Part2Service.addMf5Part2(this.mf5part2Obj)
    ).subscribe((responceData: any) => {
      this.handleResponse(responceData)
    });

  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part2/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  caltotalmolasses() {
    this.mf5part2Obj.molassesTotal = this.mf5part2Obj.openStock - this.mf5part2Obj.brix;
  }

  calQtySupplied() {
    this.mf5part2Obj.quantitySuppliedTotal = this.mf5part2Obj.quantitySupplied;
    this.mf5part2Obj.closingBalance = this.mf5part2Obj.openStock - this.mf5part2Obj.quantitySupplied;
  }

  previewcategory(form) {
    this.preview.setData = form.value;
    this.router.navigate(['supplychainmanagement/sugarmills/mf5-part2/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
