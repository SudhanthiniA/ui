import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  Mf5Part3Service,
  PreviewService,
  CommonService
} from '@app/services';

@Component({
  selector: 'app-addeditmf5-part3',
  templateUrl: './addeditmf5-part3.component.html',
  styleUrls: ['./addeditmf5-part3.component.scss']
})
export class Addeditmf5Part3Component implements OnInit {
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
    partName: 'Part3'
  };
  editId: any;
  formSubmitted: boolean;
  constructor(
    private route: ActivatedRoute,
    private preview: PreviewService,
    private router: Router,
    private mf5Part3Service: Mf5Part3Service,
    private alert: AlertService,
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
    this.mf5Part3Service.getMf5Part3ById(id).subscribe((responceData: any) => {
      this.mf5part2Obj = responceData.data;
    });
  }

  saveData(method, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
      return false;
    }
    if (this.editId) {
      this.mf5part2Obj[`method`] = method;
      this.mf5part2Obj[`id`] = this.editId;
    } else {
      this.mf5part2Obj[`method`] = method;
      this.mf5part2Obj[`createdBy`] = 'Admin';
    }

    (
      (this.editId) ? this.mf5Part3Service.updateMf5Part3(this.mf5part2Obj) :
        this.mf5Part3Service.addMf5Part3(this.mf5part2Obj)
    ).subscribe((responceData: any) => {
      this.handleResponse(responceData)
    });
  }

  handleResponse(responceData: any) {
    if (responceData.status === 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/mf5-part3/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  caltotalmolasses() {
    this.mf5part2Obj.molassestotal = this.mf5part2Obj.openstock;
  }

  calQtySupplied() {
    const {
      nameodindunits = 0,
      quantitysupplied = 0,
      soldtotrade = 0,
      openstock = 0,
      quantitysuppliedtotal = 0
    } = this.mf5part2Obj;
    this.mf5part2Obj.quantitysuppliedtotal = nameodindunits + quantitysupplied + soldtotrade;
    this.mf5part2Obj.closingbalance = openstock - quantitysuppliedtotal;
  }

  previewcategory(form) {
    this.preview.setData = form.value;
    this.router.navigate(['supplychainmanagement/sugarmills/mf5-part3/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
