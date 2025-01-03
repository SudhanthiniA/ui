import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { AlertService } from '@app/services';
import { StockInService } from '@app/services/retails';

@Component({
  selector: 'app-addstockin',
  templateUrl: './addstockin.component.html',
  styleUrls: ['./addstockin.component.scss']
})
export class AddstockinComponent implements OnInit {
  stockinFormGroup: any;
  damageBottle = false;
  missingBottle = false;
  formSubmitted = false;
  productList = [];
  receivedBottlesDetails: any;
  damageBottlesListArray: any;
  gridDamage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private stockService: StockInService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.buildFormGrp();
    this.damageBottleArrayValidation();
    this.route.params.subscribe(params => {
      if (params.code) {
        setTimeout(() => {
          this.getById(params.code);
        }, 100);
        console.log(params.code);
      }
    });
  }

  buildFormGrp() {
    this.stockinFormGroup = this.formBuilder.group({
      transportPassNumber: [''],
      indentNumber: [''],
      unitName: [''],
      unitAddress: [''],
      location: [''],
      noofBottlesRequested: [''],
      NoofBottlesReceived: [''],
      totalBottlesRequested: [''],
      totalBottlesSentByWholesaler: [''],
      totalAmount: [''],
      damageBottlesCount: [''],
      missingBottlesCount: [''],
      receivedBottlesList: this.formBuilder.array([
        this.addFormGroupReceivedBottles()
      ]),
      damageBottlesList: this.formBuilder.array([
        this.addFormGroupDamageBottles()
      ])
    });
  }

  addFormGroupReceivedBottles(): FormGroup {
    return this.formBuilder.group({ productName: '', size: '', case: '', bottle: '', total: '', id: 0 });
  }

  addFormGroupDamageBottles(): FormGroup {
    return this.formBuilder.group({
      damagedOrMissing: ['', Validators.required],
      size: ['', Validators.required],
      quantity: ['', Validators.required],
      productId: ['', Validators.required],
    })
  }

  getById(code) {
    this.stockinFormGroup.patchValue({
      transportPassNumber: 'TRA23922',
      indentNumber: 27,
      unitName: 'ABC Marketing',
      unitAddress: '3 / 6 1st Cross Street, Sector 34, Lucknow - 324123',
      location: 'Lucknow',
      noofBottlesRequested: 13000,
      NoofBottlesReceived: 12000,
      totalBottlesRequested: 26000,
      totalBottlesSentByWholesaler: 26000,
      totalAmount: 50000
    });

    this.receivedBottlesDetails = [
      {
        productName: 'Jack Daniels (Black)',
        id: 1,
        size: 750,
        case: 1,
        bottle: 10,
        total: 450000
      },
      {
        productName: 'Jhonny Walker (White)	',
        id: 2,
        size: 750,
        case: 1,
        bottle: 10,
        total: 350000
      }
    ];
    const recBotDetArr = this.receivedBottlesDetails;
    for (let i = 0; i < recBotDetArr.length; i++) {
      this.productList.push({ productId: recBotDetArr[i].id, productname: recBotDetArr[i].productName })
      const selectedCtrl = this.stockinFormGroup.get('receivedBottlesList')['controls'][i];
      selectedCtrl.patchValue({
        productName: recBotDetArr[i].productName,
        size: recBotDetArr[i].size,
        case: recBotDetArr[i].case,
        bottle: recBotDetArr[i].bottle,
        total: recBotDetArr[i].total,
        id: recBotDetArr[i].id
      });
      if ((recBotDetArr.length - 1) > i) {
        (this.stockinFormGroup.get('receivedBottlesList') as FormArray).push(this.addFormGroupReceivedBottles());
      }
    }
  }

  getPresFormLength() {
    return (this.stockinFormGroup.get('damageBottlesList') as FormArray).length;
  }

  bottlesStatus(event, id) {
    const flag = event.target.checked;
    if (id === 1) {
      this.damageBottle = (flag === true) ? true : false;
    } else {
      this.missingBottle = (flag === true) ? true : false;
    }
    this.damageBottleArrayValidation();
  }


  addItem() {
    (this.stockinFormGroup.get('damageBottlesList') as FormArray).push(this.addFormGroupDamageBottles());
    this.damageBottleArrayValidation();
  }

  damageBottleArrayValidation() {
    this.damageBottlesListArray = this.stockinFormGroup.get('damageBottlesList')['controls'];
    console.log(this.damageBottlesListArray);
    for (let j = 0; j < this.damageBottlesListArray.length; j++) {
      if (this.damageBottle === false && this.missingBottle === false) {
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['productId'].clearValidators();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['productId'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['damagedOrMissing'].clearValidators();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['damagedOrMissing'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['size'].clearValidators();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['size'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['quantity'].clearValidators();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['quantity'].updateValueAndValidity();
        this.formSubmitted = false;
      } else {
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['productId'].setValidators([Validators.required]);
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['productId'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['damagedOrMissing'].setValidators([Validators.required]);
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['damagedOrMissing'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['size'].setValidators([Validators.required]);
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['size'].updateValueAndValidity();
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['quantity'].setValidators([Validators.required]);
        this.stockinFormGroup.controls['damageBottlesList'].controls[j].controls['quantity'].updateValueAndValidity();
      }
    }
    console.log(this.stockinFormGroup);
  }

  deleteRow(idx) {
    (this.stockinFormGroup.get('damageBottlesList') as FormArray).removeAt(idx);
  }

  addProductId(i, event) {
    const selectedCtrl = this.stockinFormGroup.get('damageBottlesList')['controls'][i];
    selectedCtrl.patchValue({
      productId: event.target.value
    });
    this.calAmout(selectedCtrl.productId, event, i);
  }

  calAmout(proId, event, i) {
    const quantity = parseInt(event.target.value, 10);
    console.log(quantity);
    console.log(proId);
    console.log(this.stockinFormGroup.get('damageBottlesList')['controls'])
    const selected = this.stockinFormGroup.get('damageBottlesList')['controls'][i];
    console.log(selected);
    let damageBottlesCount = this.stockinFormGroup.get('damageBottlesCount').value;
    let missingBottlesCount = this.stockinFormGroup.get('missingBottlesCount').value;
    const damageormissingId = parseInt(selected.value.damagedOrMissing);

    if (proId !== '') {
      const selectedObj = this.receivedBottlesDetails.find(pro => pro.id == proId);
      console.log(selectedObj);

      let selectedObjs = [];
      selectedObjs = this.stockinFormGroup.value.damageBottlesList.filter(dm => dm.damagedOrMissing == damageormissingId);
      console.log(selectedObjs);
      let pre = [];
      selectedObjs.forEach((ele: any, index) => {
        pre.push(ele.quantity);
      });
      let prepatch = pre.reduce((a, b) => a - b, 0) * -1;
      console.log(prepatch);

      if (damageormissingId === 1) {
        if (quantity > damageBottlesCount || prepatch > damageBottlesCount) {
          event.target.value = '';
          this.alert.showError('Damage Bottle count should not exceed quantity', '');
        }
      }
      else if (damageormissingId === 2) {
        if (quantity > missingBottlesCount || prepatch > missingBottlesCount) {
          event.target.value = '';
          this.alert.showError('Missing Bottle count should not exceed quantity', '');
        }
      }
    }
  }

  addStockIn(form) {
    this.formSubmitted = true;
    this.damageBottleArrayValidation();
    let damageBottlesCount = this.stockinFormGroup.get('damageBottlesCount').value;
    damageBottlesCount = damageBottlesCount === '' ? 0 : damageBottlesCount;
    let missingBottlesCount = this.stockinFormGroup.get('missingBottlesCount').value;
    missingBottlesCount = missingBottlesCount === '' ? 0 : missingBottlesCount;
    let damageQty = 0;
    let missingQty = 0;

    console.log(parseInt(this.stockinFormGroup.value.damageBottlesCount));
    const postParam = {
      damagedBottles: this.stockinFormGroup.value.damageBottlesCount,
      missingBottles: this.stockinFormGroup.value.missingBottlesCount,
      transportPass: this.stockinFormGroup.value.transportPassNumber,
      indentReqId: this.stockinFormGroup.value.indentNumber,
      unitAddress: this.stockinFormGroup.value.unitAddress,
      unitName: this.stockinFormGroup.value.unitName,
      location: this.stockinFormGroup.value.location,
      noOfBottlesReceived: this.stockinFormGroup.value.NoofBottlesReceived,
      noOfBottlesRequested: this.stockinFormGroup.value.noofBottlesRequested,
      receivedBottles: this.stockinFormGroup.value.NoofBottlesReceived,
      stockInDate: '',
      totalBottlesReceived: '',
      totalBottlesRequested: this.stockinFormGroup.value.totalBottlesRequested,
      recStockInDetList: []
    };

    const arrList = this.stockinFormGroup.get('receivedBottlesList')['controls'];
    const arrDataList = this.stockinFormGroup.get('damageBottlesList')['controls'];

    for (let i = 0; i < arrList.length; i++) {
      if (arrList[i].value.productName !== '') {
        const li = {
          noOfcases: arrList[i].value.case,
          productId: arrList[i].value.id,
          productName: arrList[i].value.productName,
          quantity: arrList[i].value.bottle,
          size: arrList[i].value.size,
          totalAmt: arrList[i].value.total,
          stockInReturn: []
        }
        for (let j = 0; j < arrDataList.length; j++) {
          console.log(' ---> ' + arrList[i].value.id + ' - ' + arrDataList[j].value.productId);
          if (parseInt(arrList[i].value.id, 10) === parseInt(arrDataList[j].value.productId, 10)) {
            li.stockInReturn.push({
              markDamage: (arrDataList[j].value.damagedOrMissing === '1') ? true : false,
              markMissing: (arrDataList[j].value.damagedOrMissing === '2') ? true : false,
              quantity: arrDataList[j].value.quantity
            });
            if (arrDataList[j].value.damagedOrMissing === '1') {
              damageQty = damageQty + parseInt(arrDataList[j].value.quantity, 10);
            } else if (arrDataList[j].value.damagedOrMissing === '2') {
              missingQty = missingQty + parseInt(arrDataList[j].value.quantity, 10);
            }
          }
        }
        postParam.recStockInDetList.push(li);
      }
    }

    if (this.damageBottle === true) {
      this.stockinFormGroup.controls['damageBottlesCount'].setValidators([Validators.required]);
      this.stockinFormGroup.controls['damageBottlesCount'].updateValueAndValidity();
      this.formSubmitted = true;
    } else {
      this.stockinFormGroup.controls['damageBottlesCount'].clearValidators();
      this.stockinFormGroup.controls['damageBottlesCount'].updateValueAndValidity();
      this.formSubmitted = false;
    }

    if (this.missingBottle === true) {
      this.stockinFormGroup.controls['missingBottlesCount'].setValidators([Validators.required]);
      this.stockinFormGroup.controls['missingBottlesCount'].updateValueAndValidity();
    } else {
      this.stockinFormGroup.controls['missingBottlesCount'].clearValidators();
      this.stockinFormGroup.controls['missingBottlesCount'].updateValueAndValidity();
    }

    if (form.valid === true) {
      if (parseInt(damageBottlesCount, 10) !== damageQty) {
        this.alert.showError('Damage Bottle count not mached quantity value', '');
      } else if (parseInt(missingBottlesCount, 10) !== missingQty) {
        this.alert.showError('Missing Bottle count not mached quantity value', '');
      } else {
        const modalRef = this.modalService.open(CommonPopupComponent);
        modalRef.result.then(respData => {
          if (respData) {
            (this.stockService.addStockIn(postParam)).subscribe((responceData: any) => {
              if (responceData.status === 's') {
                this.alert.showSuccess(responceData.userDisplayMesg, 'success');
                this.router.navigate(['/supplychainmanagement/retail/stockin']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
          }
        }).catch(err => {
          console.log('\n err...', err);
        });
      }
    } else {
      this.formSubmitted = true;
    }
  }
}