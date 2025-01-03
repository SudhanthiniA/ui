import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService } from '@app/services';
import { BreakageEntryService } from '@app/services';

@Component({
  selector: 'app-addbreakageentry',
  templateUrl: './addbreakageentry.component.html',
  styleUrls: ['./addbreakageentry.component.scss']
})
export class AddbreakageentryComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('rejectModal', { static: false }) rejectModal;
  @ViewChild('caseDetails', { static: false }) caseDetails;
  @ViewChild('bottleDamagedQR', { static: false }) bottleDamagedQR;
  @ViewChild('bottleDamagedQRun', { static: false }) bottleDamagedQRun;
  @ViewChild('casesMissing', { static: false }) casesMissing;
  @ViewChild('casesDamagedQR', { static: false }) casesDamagedQR;
  @ViewChild('casesDamagedQRun', { static: false }) casesDamagedQRun;
  @ViewChild('moreBreakage', { static: false }) moreBreakage;
  @ViewChild('BreakageEntryForm', { static: false }) BreakageEntryForm;

  barCodeValue: any;
  date: any;
  curDate = new Date();

  editId: any;
  formSubmitted = false;
  addedit: any;
  BreakageEntryObj: any = {
    date: '',
    // brand:'',
    // liquorType:'',
    // subLiquorType:'',
    // packageType:'',
    // packageSize:'',
    // AvailableBottle:'',
    // issueType:'',
    // damageType:'',
    // noOfCasesDamaged:'',
    // noOfBottlesDamaged:'',
    // noOfCasesMissing:'',
    // noOfBottlesMissing:''
  };
  allStock = true;
  bottleMissing = false;
  bottlesDamaged = false;
  caseMissing = false;
  casesDamaged = false;
  listOfBreakageEntry: any = [];
  breakageListMerged: any = [];
  arrList: any[] = [];
  totalMisssingDamges: any = {
    totalnoOfBottlesMissing: 0,
    totalnoOfBottlesDamaged: 0,
    totalnoOfCasesMissing: 0,
    totalnoOfCasesDamaged: 0
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private breakageEntrySer: BreakageEntryService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.allStockorBand('allStock')
    this.BreakageEntryObj.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getRollOverStockrequestById(params.id);
        this.BreakageEntryObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  getRollOverStockrequestById(id) {
    const url = 'BreakagEentryList' + '/' + id
    this.breakageEntrySer.get(url).then((responceData: any) => {
      this.BreakageEntryObj = responceData;
      console.log(this.BreakageEntryObj);
    });
  }


  addBreakageEntryDetails(form, status) {


    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {

          Brand: this.BreakageEntryObj.Brand,
          Package: this.BreakageEntryObj.Package,
          Size: this.BreakageEntryObj.Size,
          BatchNo: this.BreakageEntryObj.BatchNo,
          AvailableBottle: this.BreakageEntryObj.AvailableBottle,
          BreakageType: this.BreakageEntryObj.BreakageType,
          Breakage: this.BreakageEntryObj.Breakage,
          StockBottle: this.BreakageEntryObj.StockBottle,
          status
        };
        const url = 'BreakagEentryList/' + this.editId;
        paramdpd['id'] = this.editId;
        this.breakageEntrySer.patch(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record Updated successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/wholesale/breakageentry/list']);

        })
      } else {
        if (this.BreakageEntryObj.damageType === "QR Readable") {
          this.bottleDamQR()
        }
        const paramdpd = {

          Brand: this.BreakageEntryObj.Brand,
          Package: this.BreakageEntryObj.Package,
          Size: this.BreakageEntryObj.Size,
          BatchNo: this.BreakageEntryObj.BatchNo,
          AvailableBottle: this.BreakageEntryObj.AvailableBottle,
          BreakageType: this.BreakageEntryObj.BreakageType,
          Breakage: this.BreakageEntryObj.Breakage,
          StockBottle: this.BreakageEntryObj.StockBottle,
          status
        };
        const url = 'BreakagEentryList';

        this.breakageEntrySer.post(url, paramdpd).then((responceData: any) => {
          this.alert.showSuccess('Record created successfully', 'Success');
          this.router.navigate(['/supplychainmanagement/wholesale/breakageentry/list']);
        })
      }
    }
  }


  allStockorBand(eventValue) {
    if (eventValue === "allStock") {
      this.allStock = true;
      this.breakageEntrySer.getAllStockinAvail().subscribe((responceData: any) => {
        if (responceData.status === "s") {
          this.BreakageEntryObj.AvailableBottle = responceData.data;
        } else {
          this.alert.showError("Error", responceData.userDisplayMesg);
        }
      })
    } else {
      this.allStock = false;
      this.BreakageEntryObj.AvailableBottle = 0;

    }
  }


  getAvailBottles() {
    let data = {
      brandNameCode: "KF001",
      liquorTypeCode: "LTC001",
      liquorSubTypeCode: "LSTC001",
      packageTypeCode: "PTC001",
      packageSizeCode: "PSC001"
    }
    this.breakageEntrySer.getAllAvaiBottles(data).subscribe((responceData: any) => {
      if (responceData.status === "s") {
        this.BreakageEntryObj.AvailableBottle = responceData.data;
      } else {
        this.alert.showError("Error", responceData.userDisplayMesg);
      }
    })
  }

  issueTypeSelect(event) {
    let eventValue = event.target.value;
    if (eventValue === "Bottle Missing") {
      this.bottleMissing = true;
      this.bottlesDamaged = false;
      this.caseMissing = false;
      this.casesDamaged = false;
    }
    if (eventValue === "Bottles Damaged") {
      this.bottleMissing = false;
      this.bottlesDamaged = true;
      this.caseMissing = false;
      this.casesDamaged = false;
    }
    if (eventValue === "Cases Missing") {
      this.bottleMissing = false;
      this.bottlesDamaged = false;
      this.caseMissing = true;
      this.casesDamaged = false;
    }
    if (eventValue === "Cases Damaged") {
      this.bottleMissing = false;
      this.bottlesDamaged = false;
      this.caseMissing = false;
      this.casesDamaged = true;
    }
  }

  scanBottleMissing(event) {
    let eventValue = event;
    let scannedBottles = this.BreakageEntryObj && this.BreakageEntryObj.noOfBottlesScanned ? this.BreakageEntryObj.noOfBottlesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedBottles) {
          this.BreakageEntryObj.noOfBottlesScanned = (this.BreakageEntryObj.noOfBottlesScanned ? 
            this.BreakageEntryObj.noOfBottlesScanned : 0) + 1;
          this.BreakageEntryObj.bottlesToBeScanned = this.BreakageEntryObj.noOfBottlesMissing - this.BreakageEntryObj.noOfBottlesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum");
        }
      } else {
        this.alert.showWarning("Note", "Plz enter Missing Count");
      }
    } else {
      this.alert.showError("Error", "Please Enter data");
    }

  }

  scanDamagedQR(event) {
    let eventValue = event;
    let scannedBottles = this.BreakageEntryObj && this.BreakageEntryObj.noOfBottlesScanned ? this.BreakageEntryObj.noOfBottlesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedBottles) {
          this.BreakageEntryObj.noOfBottlesScanned = (this.BreakageEntryObj.noOfBottlesScanned ?
            this.BreakageEntryObj.noOfBottlesScanned : 0) + 1;
          this.BreakageEntryObj.bottlesToBeScanned = this.BreakageEntryObj.noOfBottlesDamaged - this.BreakageEntryObj.noOfBottlesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum");
        }
      } else {
        this.alert.showWarning("Note", "Plz Enter Damaged Count");
      }
    } else {
      this.alert.showError("Error", "Please Enter data");
    }

  }


  scanDamagedQRunRe(event) {
    let eventValue = event;
    let scannedBottles = this.BreakageEntryObj && this.BreakageEntryObj.noOfBottlesScanned ? this.BreakageEntryObj.noOfBottlesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedBottles) {
          this.BreakageEntryObj.noOfBottlesScanned = (this.BreakageEntryObj.noOfBottlesScanned ?
            this.BreakageEntryObj.noOfBottlesScanned : 0) + 1;
          this.BreakageEntryObj.bottlesToBeScanned = this.BreakageEntryObj.noOfBottlesDamaged - this.BreakageEntryObj.noOfBottlesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum");
        }
      } else {
        this.alert.showWarning("Note", "Plz Enter Damaged Count");
      }
    } else {
      this.alert.showError("Error", "Please Enter data");
    }

  }

  scanCaseMissing(event) {
    let eventValue = event;
    let scannedCases = this.BreakageEntryObj && this.BreakageEntryObj.noOfCasesScanned ? this.BreakageEntryObj.noOfCasesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedCases) {
          this.BreakageEntryObj.noOfCasesScanned = (this.BreakageEntryObj.noOfCasesScanned ?
            this.BreakageEntryObj.noOfCasesScanned : 0) + 1;
          this.BreakageEntryObj.casesToBeScanned = this.BreakageEntryObj.noOfCasesMissing - this.BreakageEntryObj.noOfCasesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum");
        }
      } else {
        this.alert.showWarning("Note", "Plz enter Missing Cases");
      }
    } else {
      this.alert.showError("Error", "Please Enter data");
    }

  }

  scanDamagedCasesQR(event) {
    let eventValue = event;
    let scannedCases = this.BreakageEntryObj && this.BreakageEntryObj.noOfCasesScanned ? this.BreakageEntryObj.noOfCasesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedCases) {
          this.BreakageEntryObj.noOfCasesScanned = (this.BreakageEntryObj.noOfCasesScanned ?
            this.BreakageEntryObj.noOfCasesScanned : 0) + 1;
          this.BreakageEntryObj.casesToBeScanned = this.BreakageEntryObj.noOfCasesDamaged - this.BreakageEntryObj.noOfCasesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum")
        }
      } else {
        this.alert.showWarning("Note", "Plz enter Damaged Cases")
      }
    } else {
      this.alert.showError("Error", "Please Enter data")
    }
  }

  scanDamagedCasesQRunRe(event) {
    let eventValue = event;
    let scannedCases = this.BreakageEntryObj && this.BreakageEntryObj.noOfCasesScanned ? this.BreakageEntryObj.noOfCasesScanned : 0;
    if (this.barCodeValue) {
      if (eventValue > 0) {
        if (eventValue > scannedCases) {
          this.BreakageEntryObj.noOfCasesScanned = (this.BreakageEntryObj.noOfCasesScanned ?
            this.BreakageEntryObj.noOfCasesScanned : 0) + 1;
          this.BreakageEntryObj.casesToBeScanned = this.BreakageEntryObj.noOfCasesDamaged - this.BreakageEntryObj.noOfCasesScanned;
        } else {
          this.alert.showWarning("Note", "Reached Maximum");
        }
      } else {
        this.alert.showWarning("Note", "Plz enter Damaged Cases");
      }
    } else {
      this.alert.showError("Error", "Please Enter data");
    }
  }


  addtoList(event) {
    this.listOfBreakageEntry.push({ ...this.BreakageEntryObj });
    this.BreakageEntryObj = { date: new Date() }
    this.mergeAllDamages()
    this.calculatetotalMissingDamages()
    console.log(event);
    event.hide()
    this.curDate = new Date();

    this.allStockorBand('allStock')
  }

  calculatetotalMissingDamages() {
    let totalnoOfBottlesMissing = 0;
    let totalnoOfBottlesDamaged = 0;
    let totalnoOfCasesMissing = 0;
    let totalnoOfCasesDamaged = 0
    this.listOfBreakageEntry.forEach(ele => {
      totalnoOfBottlesMissing = totalnoOfBottlesMissing + (ele.noOfBottlesMissing ? ele.noOfBottlesMissing : 0)
      totalnoOfBottlesDamaged = totalnoOfBottlesDamaged + (ele.noOfBottlesDamaged ? ele.noOfBottlesDamaged : 0)
      totalnoOfCasesMissing = totalnoOfCasesMissing + (ele.noOfCasesMissing ? ele.noOfCasesMissing : 0)
      totalnoOfCasesDamaged = totalnoOfCasesDamaged + (ele.noOfCasesDamaged ? ele.noOfCasesDamaged : 0)
    })
    this.totalMisssingDamges.totalnoOfBottlesMissing = totalnoOfBottlesMissing;
    this.totalMisssingDamges.totalnoOfBottlesDamaged = totalnoOfBottlesDamaged;
    this.totalMisssingDamges.totalnoOfCasesMissing = totalnoOfCasesMissing;
    this.totalMisssingDamges.totalnoOfCasesDamaged = totalnoOfCasesDamaged;
  }

  mergeAllDamages() {

    this.breakageListMerged = this.listOfBreakageEntry.reduce((mergedArr, curObj) => {
      let issueDamageBasis = mergedArr.find(e => e.issueType === curObj.issueType && e.damageType === curObj.damageType);
      if (!issueDamageBasis) {
        mergedArr.push(Object.assign({}, curObj))
      } else {
        if (curObj.noOfBottlesMissing) {
          issueDamageBasis.noOfBottlesMissing += curObj.noOfBottlesMissing;
        }
        if (curObj.noOfCasesMissing) {
          issueDamageBasis.noOfCasesMissing += curObj.noOfCasesMissing;
        }
        if (curObj.noOfCasesDamaged) {
          issueDamageBasis.noOfCasesDamaged += curObj.noOfCasesDamaged;
        }
        if (curObj.noOfBottlesDamaged) {
          issueDamageBasis.noOfBottlesDamaged += curObj.noOfBottlesDamaged;
        }
      }
      return mergedArr;
    }, []);
  }

  findModal() {

    if (this.BreakageEntryObj.damageType === "QR Readable" && this.BreakageEntryObj.issueType === "Bottles Damaged") {
      this.bottleDamQR();
    }
    if (this.BreakageEntryObj.damageType === "QR Unreadable" && this.BreakageEntryObj.issueType === "Bottles Damaged") {
      this.bottleDamQRun();
    }
    if (this.BreakageEntryObj.damageType === "QR Readable" && this.BreakageEntryObj.issueType === "Cases Damaged") {
      this.casesDamQR();
    }
    if (this.BreakageEntryObj.damageType === "QR Unreadable" && this.BreakageEntryObj.issueType === "Cases Damaged") {
      this.casesDamQRun();
    }
    if (this.BreakageEntryObj.issueType === "Cases Missing") {
      this.casesMiss();
    }
    if (this.BreakageEntryObj.issueType === "Bottle Missing") {
      this.caseModal();
    }


  }

  addConfirmation() {
    this.exampleModalCenter.show()
  }
  rejectConfirmation() {
    this.rejectModal.show()
  }
  caseModal() {
    this.caseDetails.show()
  }
  bottleDamQR() {
    this.bottleDamagedQR.show()
  }
  bottleDamQRun() {
    this.bottleDamagedQRun.show()
  }
  casesMiss() {
    this.casesMissing.show()
  }
  casesDamQR() {
    this.casesDamagedQR.show()
  }
  casesDamQRun() {
    this.casesDamagedQRun.show()
  }
  breakageDetails() {
    this.moreBreakage.show()
  }
}
