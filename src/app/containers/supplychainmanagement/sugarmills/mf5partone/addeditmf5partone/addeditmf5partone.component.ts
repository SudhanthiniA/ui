import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, Mf5Part1Service, PreviewService, CommonService } from '@app/services';

@Component({
  selector: 'app-addeditmf5partone',
  templateUrl: './addeditmf5partone.component.html',
  styleUrls: ['./addeditmf5partone.component.scss']
})
export class Addeditmf5partoneComponent implements OnInit {

  mffpartoneObj: any = {
    requestDate: '',
    openStockByAccount: '',
    totalDispatchOfMolasses: '',
    molassesRecivedOnNewsesson: '',
    dispatchMolassesOnDistellerys: '',
    dispatchMolassesOnOsShops: '',
    dispatchMolassesOnIndustrialUnits: '',
    tradeAfterRelease: '',
    quantityFree: '',
    quantityLevy: '',
    total: '',
    totalSugarQuantity: '',
    remarks: '',
    status: 1,
    createdBy: 'Admin',
    updatedBy: 'Admin',
  };
  addedit: any;
  editId: any;
  formSubmitted: boolean;

  constructor(
    private route: ActivatedRoute,
    private alert: AlertService,
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private mf5Part1Service: Mf5Part1Service,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.mffpartoneObj.requestDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.setData(this.editId);
      } else if (this.preview.setData) {
        this.mffpartoneObj = this.preview.setData;
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  caltotalmolasses() {
    this.mffpartoneObj.total = this.mffpartoneObj.openStockByAccount + this.mffpartoneObj.molassesRecivedOnNewsesson;
  }

  calculatedispatchofmolasses() {
    const {
      dispatchMolassesOnDistellerys = 0,
      dispatchMolassesOnOsShops = 0,
      dispatchMolassesOnIndustrialUnits = 0,
      tradeAfterRelease = 0
    } = this.mffpartoneObj;
    this.mffpartoneObj.totalDispatchOfMolasses = dispatchMolassesOnDistellerys + dispatchMolassesOnOsShops +
      dispatchMolassesOnIndustrialUnits + tradeAfterRelease;
    this.mffpartoneObj.totalSugarQuantity = this.mffpartoneObj.totalDispatchOfMolasses - this.mffpartoneObj.total;
  }

  setData(id) {
    this.mf5Part1Service.getMf5PartOneById(id).subscribe((responceData: any) => {
      this.mffpartoneObj = responceData.data;
      this.mffpartoneObj.requestDate = this.datepipe.transform(responceData.data.requestDate, 'yyyy-MM-dd');
    })
  }
  saveData(form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
      return false;
    }
    if (this.editId) {
      this.mffpartoneObj[`updatedBy`] = 'Admin';
      this.mffpartoneObj[`id`] = this.editId;
    } else {
      this.mffpartoneObj[`createdBy`] = 'Admin';
    }
    (
      (this.editId) ? this.mf5Part1Service.updateMf5PartOne(this.mffpartoneObj) : 
      this.mf5Part1Service.addMf5PartOne(this.mffpartoneObj)
    ).subscribe((responceData: any) => {
      this.handleResponse(responceData)
    });
  }

  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['/supplychainmanagement/sugarmills/mf5/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  previewcategory(form) {
    this.preview.setData = form.value;
    this.router.navigate(['supplychainmanagement/sugarmills/mf5/preview']);
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }
}
