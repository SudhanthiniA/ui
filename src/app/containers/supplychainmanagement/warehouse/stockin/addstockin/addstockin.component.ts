import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService, BreakageEntryService, WarehouseTrnsportPassGenService, WholesaleDispatchService, WholesaleStockinService, WholesaleTrasportpassCancelService } from '@app/services';
import { DispatchService } from '@app/services/ware-house/dispatch.service';
import { WarehouseStockInService } from '@app/services/ware-house/warehouse-stockin.service'
import { analytics } from 'firebase';


@Component({
  selector: 'app-addstockin',
  templateUrl: './addstockin.component.html',
  styleUrls: ['./addstockin.component.scss']
})
export class AddstockinComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('rejectModal', { static: false }) rejectModal;
  @ViewChild('caseDetails', { static: false }) caseDetails;
  @ViewChild('bottleDamagedQR', { static: false }) bottleDamagedQR;
  @ViewChild('bottleDamagedQRun', { static: false }) bottleDamagedQRun;
  @ViewChild('casesMissing', { static: false }) casesMissing;
  @ViewChild('casesDamagedQR', { static: false }) casesDamagedQR;
  @ViewChild('casesDamagedQRun', { static: false }) casesDamagedQRun;
  @ViewChild('tabRef', { static: false }) tabRef;
  barcodescan;
  bottleMatchingQrCodes = [];
  damBottleMatQrCodes = []
  damagedMissingProductDetailList = []
  qrcodetailsobj: any = {
    transportPassDetails: [
      {
        transportPassNumber: "TRA23922",
        issuedDate: "20-Apr-2021",
        numberOfIndents: "3",
        transportPass: "transpass.pdf",
      }
    ],
    licenseTypeDetails: [
      {
        licenseType: "BWFL2A",
        unitName: "Anhueser",
        unitAddress: "Plot No. 12,xyz nagar, Karnataka, Bangalore, Bangalore, Shivaji nagar, Majestic, 500001",
      }
    ],
    indentNumberDetails: [
      {
        indentNumber: "6234723922",
        indentDate: "20-Mar-2021",
        noofCasesRequested: "600",
        noofBottlesRequested: "6000",
        noofCasesSupplied: "200",
        totalNumberOfBottlesSupplied: "2000",
        stockindetails: [{
          brandname: 'Kingfisher',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "300",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "300"
        }, {
          brandname: 'Redwine',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "50",
          noofBottlesRequested: "500",
          noofCasesSupplied: "50",
          totalNumberOfBottlesSupplied: "500"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "35",
          noofBottlesRequested: "350",
          noofCasesSupplied: "35",
          totalNumberOfBottlesSupplied: "350"
        }]


      },

      {
        indentNumber: "6238975655",
        indentDate: "20-apr-2021",
        noofCasesRequested: "60",
        noofBottlesRequested: "600",
        noofCasesSupplied: "60",
        totalNumberOfBottlesSupplied: "600",
        stockindetails: [{
          brandname: 'Greenlabel',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }, {
          brandname: 'Redwine',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }]


      }, {
        indentNumber: "6232229992",
        indentDate: "20-apr-2021",
        noofCasesRequested: "200",
        noofBottlesRequested: "2000",
        noofCasesSupplied: "200",
        totalNumberOfBottlesSupplied: "2000",
        stockindetails: [{
          brandname: 'Signature',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "200",
          noofBottlesRequested: "200",
          noofCasesSupplied: "10",
          totalNumberOfBottlesSupplied: "100"
        }, {
          brandname: 'IB',
          packagetype: 'Glass',
          packagesize: '750ml',
          noofCasesRequested: "36",
          noofBottlesRequested: "360",
          noofCasesSupplied: "40",
          totalNumberOfBottlesSupplied: "400"
        }, {
          brandname: 'Bacardi',
          packagetype: 'Glass',
          packagesize: '900ml',
          noofCasesRequested: "20",
          noofBottlesRequested: "200",
          noofCasesSupplied: "20",
          totalNumberOfBottlesSupplied: "200"
        }]


      }

    ]
  }
  isdisabled = false;
  stockinformOne;
  isdamagedORnott: any;
  stockinformtwo: FormGroup;
  stockreqObj = {
    recievedDate: '',
    recievedBy: ''
  }
  stockinobj = {
    isstype: '',
    damagetype: '',
    damagecases: '',
    missingcases: '',
    missingbottle: '',
    damagebottle: '',
    recieveddate: '',
    recievedby: ''
  }
  issueType = [{ id: 1, isstype: "BOTTLE_MISSING" },
  { id: 2, isstype: "BOTTLES_DAMAGED" },
  { id: 3, isstype: "CASES_MISSING" },
  { id: 4, isstype: "CASES_DAMAGED" }]
  damagedType = [{ id: 1, isstype: "QR_READABLE" },
  { id: 2, isstype: "QR_UNREADABLE" },
  { id: 3, isstype: "Barcode Readable" },
  { id: 4, isstype: "Barcode Unreadable" }]
  damagedmissing = [];
  isdammiss = true;
  damagedbottle = true;
  missbottles = true;
  misscases = true;
  damagedcases = true
  isdamagedmissing: boolean;
  formSubmitted: boolean;
  indentdetails: any;

  BreakageEntryObj: any = {
    date: new Date(),
    missingBottlesQrCodes: '',
    issueType: '',
    damageType: '',
    noOfCasesDamaged: '',
    noOfBottlesDamaged: '',
    noOfCasesMissing: '',
    noOfBottlesMissing: '',
    barCode: '',
    qrCode: '',
    noOfBottlesScanned: '',
    bottlesToBeScanned: '',
    noOfCasesScanned: '',
    casesToBeScanned: ''
  };
  listOfBreakageEntry: any = [];
  curDate = new Date();
  barCodeValue: any;
  allStock: boolean = true;

  bottleMissing: boolean = false;
  bottlesDamaged: boolean = false;
  caseMissing: boolean = false;
  casesDamaged: boolean = false;

  bottleMissingUnreadable: boolean = false;
  bottlesDamagedReadable: boolean = false;
  bottlesDamagedUnreadable: boolean = false;
  caseMissingUnreadable: boolean = false;
  casesDamagedReadable: boolean = false;
  casesDamagedUnreadable: boolean = false;

  damageTypeMandatory: boolean = false;
  bottleFlag: boolean = false;
  caseFlag: boolean = false;

  noofindents: any;
  indentDetailss: any;
  licenseNumber: any;

  breakageListMerged: any = [];
  totalMisssingDamges: any = {
    totalnoOfBottlesMissing: 0,
    totalnoOfBottlesDamaged: 0,
    totalnoOfCasesMissing: 0,
    totalnoOfCasesDamaged: 0
  };
  qrCodesList: any;
  damagedMissingProductDetails: any = [];
  bottleDamQrUnCodes: any;
  ifDamageMissingFlag: boolean = false;
  barCode: any;
  indentNo: any;
  stockinObj: any;

  barDetObj: any = {};
  scanDet: any = {};
  misObj: any = {};
  damObj: any = {};


  bottleQrCodes: any;
  bottleMissingScannedObj: any;
  stockInDetails: any;

  bottlesDamagedQRReadableQrCodes: any = [];
  bottlesDamagedQRReadableList: any[];
  stockinFormTwo: any;
  isDamageType: boolean;

  constructor(public WholesaleStockinService: WholesaleStockinService,
    private wholesaleTrasportpassCancelService: WholesaleTrasportpassCancelService,
    private datePipe: DatePipe,
    private router: Router, private alert: AlertService,
    private BreakageEntryService: BreakageEntryService,
    public WStockInService: WarehouseStockInService,
    // private dispatchService: WholesaleDispatchService,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private dispatchService: DispatchService,
    //public WStockInService:WarehouseStockInService

  ) { }

  ngOnInit() {
  }

  getindentdetails() {
    this.WStockInService.getAllStockinDetails(this.barcodescan).subscribe((response: any) => {
      if (response.responseCode == 200) {
        this.stockinObj = response.content;
        this.noofindents = 1;

        this.stockinObj.indentOrderPickUpDetailsLst.map((ele, i) => {
          ele.barcodes.map((el, j) => {
            this.barDetObj[el.barcode] = {
              indentNo: ele.indentNo,
              scanedFlag: false,
              stockInQrCodeList: [],
              QRcodeList: el.qrcodes.map((e, k) => {
                return e.qrcode
              })
            }
          })
        });

        console.log(this.barDetObj);


        this.stockInDetails = this.stockinObj.indentOrderPickUpDetailsLst.map((ele, i) => {
          return {
            missingBottlesDetObj: {
              "productLibrary": {
                "packageSizeCode": "PC002",
                "packageSizeValue": "string",
                "packageTypeCode": "PC002",
                "packageTypeValue": "string",
                "parentEtin": "RS003500LT0SinC222.0"
              },
              damagedMissingBottlesList: [],
              damagedMissingCasesList: []
            },
            stockInProductList: {
              dutyFee: 0,
              noOfBottlesDispatched: 0,
              noOfBottlesRequested: 0,
              noOfCasesDispatched: 0,
              noOfCasesRequested: 0,
              productLibrary: {
                packageSizeCode: "PC002",
                packageSizeValue: "string",
                packageTypeCode: "PC002",
                packageTypeValue: "string",
                parentEtin: "RS003500LT0SinC222.0"
              },
              stockInProductBarCodeList: ele.barcodes.map((el, j) => {
                return {
                  barCode: el.barcode,
                  id: 0,
                  stockInQrCodeList: el.qrcodes.map((qr, k) => {
                    return {
                      qrCode: qr.qrcode,
                      id: 0
                    }
                  })
                }
              })
            }
          }
        })
      }
      else {
        this.alert.showError(response.userDisplayMesg, 'error');
      }
    })
  }

  getIndent(indentNo, nav?) {
    let postParam = {
      transportNo: this.barcodescan,
      indentNo: indentNo
    }
    this.dispatchService.getIndentbyid(postParam).subscribe((responceData: any) => {
      if (responceData.status === "s") {
        this.indentDetailss = responceData.data
        // this.IndentDtlsCalz(this.indentDetails)
        if (nav == 'nav') {
          this.tabRef.select(indentNo);
        }

      }
    })
  }

  damagedormiss(val) {
    if (val == 'Bottle Damaged') {
      this.isdammiss = true;
      this.damagedbottle = true;
      this.missbottles = false;
      this.damagedcases = true;
      this.misscases = false;
      this.stockinformtwo.reset()
    } else if (val == "CASES_DAMAGED") {
      this.isdammiss = true;
      this.damagedcases = true;
      this.damagedbottle = false;
      this.misscases = false
      this.missbottles = false;
      this.stockinformtwo.reset()

    } else if (val == 'CASES_MISSING') {
      this.isdammiss = true;
      this.damagedbottle = false;
      this.damagedcases = false;
      this.misscases = true;

      this.stockinformtwo.reset()

    } else if (val == "BOTTLE_MISSING") {
      this.missbottles = true;
      this.isdammiss = true;
      this.misscases = true;
      this.damagedcases = false;
      this.damagedbottle = false;

    } else if (val == '') {
      this.missbottles = true;
      this.isdammiss = true;
      this.misscases = true;
      this.damagedcases = true;
      this.damagedbottle = true;
    }
  }

  savedamaged() {
    console.log(this.stockinobj);
    let damagedmissing = {}
    damagedmissing = {
      'issuetype': this.stockinobj.isstype,
      'damagetype': this.stockinobj.damagetype,
      'noofdamagedcases': this.stockinobj.damagecases,
      'noofmiscases': this.stockinobj.missingcases,
      'noofdamagebottles': this.stockinobj.damagebottle,
      'noofmissbottles': this.stockinobj.missingbottle
    }
    this.damagedmissing.push(damagedmissing);
    damagedmissing = {};
    this.stockinobj.missingbottle = '';
    this.stockinobj.damagebottle = '';
    this.stockinobj.missingcases = '';
    this.stockinobj.damagecases = '';
    console.log(this.stockinobj);

  }

  clear() {
    this.stockinobj = {
      isstype: '',
      damagetype: '',
      damagecases: '',
      missingcases: '',
      missingbottle: '',
      damagebottle: '',
      recieveddate: '',
      recievedby: ''
    }
  }

  savestockin() {
    // stockInProductList
    this.formSubmitted = false;
    console.log('form', this.stockinformOne);
    let stockinInside;
    let stockInDetails = [];
    let stockInProductList = [];
    let producLibrary = {}
    const payload = {
      "createdBy": 0,
      "createdDate": "2021-06-18T06:46:48.949Z",
      "entityAddress": "string",
      "entityName": "string",
      "id": 0,
      "isAnyDamages": true,
      "issuedDate": "2021-06-18T06:46:48.949Z",
      "licenseType": "string",
      "modifiedBy": 0,
      "modifiedDate": "2021-06-18T06:46:48.949Z",
      "receivedBy": "string",
      "status": "INITIATE",
      "stockInDate": "2021-06-18T06:46:48.949Z",
      "stockInDetailsList": '',
      "totalBottlesDamaged": this.totalMisssingDamges.totalnoOfBottlesDamaged,
      "totalBottlesMissing": this.totalMisssingDamges.totalnoOfBottlesMissing,
      "totalCasesDamaged": this.totalMisssingDamges.totalnoOfCasesDamaged,
      "totalCasesMissing": this.totalMisssingDamges.totalnoOfCasesMissing,
      "totalNoOfIndents": 0,
      "totalReceivedBottles": 0,
      "totalReceivedCases": 0,
      "transportationPassNo": "transportPasss",
      "vehicleAgency": "Raj Agency",
      "vehicleDriver": "Ramkumar",
      "vehicleNumber": "AP 2533"
    }

    console.log(this.barDetObj);
    console.log(this.scanDet);

    let stockInDetList: any = Object.keys(this.scanDet).map((indentNo, i) => {
      // console.log('indentNo::', indentNo);
      return {
        damagedMissingProductDetailList: Object.keys(this.scanDet[indentNo]).map((issueType, j) => {
          console.log('issueType::', issueType);
          return {
            issueTypeCode: this.scanDet[indentNo][issueType]['issueDeatils'].issueTypeCode,
            issueTypeValue: this.scanDet[indentNo][issueType]['issueDeatils'].issueTypeValue,
            damagedTypeCode: this.scanDet[indentNo][issueType]['issueDeatils'].damagedTypeCode,
            damagedTypeValue: this.scanDet[indentNo][issueType]['issueDeatils'].damagedTypeValue,
            noOfDamagedBottles: this.scanDet[indentNo][issueType]['issueDeatils'].noOfDamagedBottles,
            noOfDamagedCases: this.scanDet[indentNo][issueType]['issueDeatils'].noOfDamagedCases,
            noOfMissingBottles: this.scanDet[indentNo][issueType]['issueDeatils'].noOfMissingBottles,
            noOfMissingCases: this.scanDet[indentNo][issueType]['issueDeatils'].noOfMissingCases,
            damagedMissingCasesList: Object.keys(this.scanDet[indentNo][issueType]).map((barcode, k) => {
              console.log('barcode::', barcode);
              if (barcode != 'issueDeatils') {
                return {
                  barCode: barcode,
                  damagedMissingBottlesList: this.scanDet[indentNo][issueType][barcode].map((qrcode, l) => {
                    return { qrCode: qrcode }
                  })
                }
              }
            }).filter(item => item !== undefined),
            "productLibrary": {
              "brandNameCode": "string",
              "brandNameValue": "string",
              "categoryCode": "string",
              "categoryValue": "string",
              "edpCode": "string",
              "edpValue": "string",
              "id": 0,
              "liquorSubTypeCode": "string",
              "liquorSubTypeDescCode": "string",
              "liquorSubTypeDescValue": "string",
              "liquorSubTypeValue": "string",
              "liquorTypeCode": "string",
              "liquorTypeValue": "string",
              "modifiedBy": 0,
              "modifiedDate": "2021-07-02T03:02:01.876Z",
              "packageSizeCode": "string",
              "packageSizeValue": "string",
              "packageTypeCode": "string",
              "packageTypeValue": "string",
              "parentEtin": "string",
              "strengthCode": "string",
              "strengthValue": "string"
            },
          }
        }),
        stockInProductList: [{
          dutyFee: 0,
          noOfBottlesDispatched: 0,
          noOfBottlesRequested: 0,
          noOfCasesDispatched: 0,
          noOfCasesRequested: 0,
          "productLibrary": {
            "brandNameCode": "string",
            "brandNameValue": "string",
            "categoryCode": "string",
            "categoryValue": "string",
            "edpCode": "string",
            "edpValue": "string",
            "id": 0,
            "liquorSubTypeCode": "string",
            "liquorSubTypeDescCode": "string",
            "liquorSubTypeDescValue": "string",
            "liquorSubTypeValue": "string",
            "liquorTypeCode": "string",
            "liquorTypeValue": "string",
            "modifiedBy": 0,
            "modifiedDate": "2021-07-02T03:02:01.876Z",
            "packageSizeCode": "string",
            "packageSizeValue": "string",
            "packageTypeCode": "string",
            "packageTypeValue": "string",
            "parentEtin": "string",
            "strengthCode": "string",
            "strengthValue": "string"
          },
          stockInProductBarCodeList: Object.keys(this.barDetObj).map((barcode, m) => {
            let indentNo = this.barDetObj[barcode].indentNo;
            if (this.barDetObj[barcode].scanedFlag) {
              return {
                barCode: barcode,
                stockInQrCodeList: this.barDetObj[barcode].stockInQrCodeList.map((qrcode, n) => {
                  console.log('qrcode::', qrcode);
                  return { qrCode: qrcode }
                })
              }
            } else {
              // if (!this.scanDet[indentNo].hasOwnProperty('CASES_MISSING')) {
              //   return {
              //     barCode: barcode,
              //     stockInQrCodeList: this.barDetObj[barcode].QRcodeList.map((qrcode, n) => {
              //       console.log('qrcode::', qrcode);
              //       return { qrCode: qrcode }
              //     })
              //   }
              // }

            }
          })
        }],
        importPermitIndentRequest: {
          indentNo: "IMP11624023959563"
        }
      }
    });

    console.log(stockInDetList[0].damagedMissingProductDetailList[0].damagedMissingCasesList);


    payload.stockInDetailsList = stockInDetList;
    console.log(payload);
    this.WStockInService.addStockin(payload).subscribe((resp: any) => {
      if (resp.status == "s") {
        this.alert.showSuccess(resp.userDisplayMesg);
        this.router.navigate(['supplychainmanagement/warehouse/stockin/list']);
      } else {
        this.alert.showError(resp.userDisplayMesg, 'Error');
      }
    })
  }

  getIndentt(indentno) {
    this.tabRef.select(indentno);
  }

  isdamagedORnot(status) {
    if (status == 'yes') {
      this.isdisabled = true;
      console.log(this.tabRef)
      console.log('this.tabRe');
      this.tabRef.select('damagedetails');
      setTimeout(() => {
        if (this.tabRef.activeId == "indentdatils") {
          this.tabRef.select('damagedetails');
        }
      }, 100);
      this.isdamagedmissing = true;
      this.rejectModal.hide()
    } else {
      this.ifDamageMissingFlag = false;
      this.rejectModal.hide()
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
    this.BreakageEntryService.getAllAvaiBottles(data).subscribe((responceData: any) => {
      if (responceData.status === "s") {
        this.BreakageEntryObj.AvailableBottle = responceData.data
      } else {
        this.alert.showError(responceData.userDisplayMesg)
      }
    })
  }

  issueTypeSelect(event) {
    const issueType = event.target.value;
    this.BreakageEntryObj.damageType = '';
    this.clearInput();
    this.checkIssueDamageType();
    if (issueType == 'BOTTLES_DAMAGED' || issueType == 'CASES_DAMAGED') {
      this.damageTypeMandatory = true;
      this.isDamageType = true;
    } else {
      this.damageTypeMandatory = false;
      this.isDamageType = false;
    }
    if (issueType == 'BOTTLE_MISSING' || issueType == 'BOTTLES_DAMAGED') {
      this.bottleFlag = true;
      this.caseFlag = false;
    } else {
      this.bottleFlag = false;
      this.caseFlag = true;
    }
  }

  damageTypeSelect() {
    this.clearInput();
    this.checkIssueDamageType();
  }

  clearInput() {
    this.BreakageEntryObj.noOfBottlesMissing = '';
    this.BreakageEntryObj.noOfBottlesDamaged = '';
    this.BreakageEntryObj.noOfCasesMissing = '';
    this.BreakageEntryObj.noOfCasesDamaged = '';
    this.BreakageEntryObj.bottlesToBeScanned = '';
    this.BreakageEntryObj.noOfBottlesScanned = '';
    this.BreakageEntryObj.noOfCasesScanned = '';
    this.BreakageEntryObj.casesToBeScanned = '';
    this.BreakageEntryObj.barCode = '';
    this.BreakageEntryObj.qrCode = '';
  }

  checkIssueDamageType() {
    this.bottleMissing = false;
    this.bottlesDamaged = false;
    this.caseMissing = false;
    this.casesDamaged = false;
    this.bottleMissingUnreadable = false;
    this.bottlesDamagedUnreadable = false;
    this.bottlesDamagedReadable = false;
    this.caseMissingUnreadable = false;
    this.casesDamagedUnreadable = false;
    this.casesDamagedReadable = false;
    let issueType = this.BreakageEntryObj.issueType;
    let damageType = this.BreakageEntryObj.damageType;
    if (issueType == 'BOTTLE_MISSING') {
      this.bottleMissing = true;
      this.bottleMissingUnreadable = (damageType == 'QR_UNREADABLE') ? true : false;
    } else if (issueType == 'BOTTLES_DAMAGED') {
      this.bottlesDamaged = true;
      this.bottlesDamagedReadable = (damageType == 'QR_READABLE') ? true : false;
      this.bottlesDamagedUnreadable = (damageType == 'QR_UNREADABLE') ? true : false;
    } else if (issueType == 'CASES_MISSING') {
      this.caseMissing = true;
      this.caseMissingUnreadable = (damageType == 'BARCODE_UNREADABLE') ? true : false;
    } else if (issueType == 'CASES_DAMAGED') {
      this.casesDamaged = true;
      this.casesDamagedReadable = (damageType == 'BARCODE_READABLE') ? true : false;
      this.casesDamagedUnreadable = (damageType == 'BARCODE_UNREADABLE') ? true : false;
    }
  }

  bottleMissingScanBarCode() {
    const barCode = this.BreakageEntryObj.barCode;
    if (!this.barDetObj.hasOwnProperty(barCode)) {
      console.log(barCode);
      this.alert.showError("Please Enter valid barcodes");
    } else {
      if (this.barDetObj.hasOwnProperty(barCode)) {
        let indentNo = this.barDetObj[barCode].indentNo;
        let flag = false;
        for (let issueType in this.scanDet[indentNo]) {
          if (this.scanDet[indentNo][issueType].hasOwnProperty(barCode)) {
            flag = true;
            this.BreakageEntryObj.barCode = '';
          }
        }
        (flag) ? this.alert.showError("Barcode already scanned") : this.alert.showSuccess("Barcode scanned successfully");
      }

    }
  }

  bottleMissingScanQRCodes() {

    if ((this.BreakageEntryObj.qrCode) && (this.BreakageEntryObj.barCode)) {

      let barCode = this.BreakageEntryObj.barCode;
      let qrCode = this.BreakageEntryObj.qrCode;
      if (this.barDetObj.hasOwnProperty(barCode)) {
        let scanedBar = this.barDetObj[barCode];
        if (scanedBar.QRcodeList.includes(qrCode)) {
          let indentNo = scanedBar.indentNo;
          if (this.scanDet[indentNo]) {
            if (this.scanDet[indentNo].hasOwnProperty('BOTTLE_MISSING')) {
              if (this.BreakageEntryObj.bottlesToBeScanned > this.BreakageEntryObj.noOfBottlesMissing) {
                if (this.scanDet[indentNo].BOTTLE_MISSING.hasOwnProperty(barCode)) {
                  if (this.scanDet[indentNo].BOTTLE_MISSING[barCode].includes(qrCode)) {
                    let item = this.scanDet[indentNo].BOTTLE_MISSING[barCode].filter(e => e !== qrCode);
                    this.scanDet[indentNo].BOTTLE_MISSING[barCode] = item;
                    this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                    console.log('3', this.scanDet[indentNo]);
                    this.alert.showSuccess("QR code scanned successfully");
                  } else {
                    this.alert.showError("QR code already scanned");
                  }
                } else {
                  this.scanDet[indentNo].BOTTLE_MISSING[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
                  this.barDetObj[barCode].scanedFlag = true;
                  this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                  console.log('2', this.scanDet[indentNo]);
                  this.alert.showSuccess("QR code scanned successfully");
                }
              } else {
                this.alert.showWarning("Note", "Reached Maximum")
              }

            } else {
              this.scanDet[indentNo]['BOTTLE_MISSING'] = {
                issueDeatils: {
                  issueTypeCode: "BOTTLE_MISSING",
                  issueTypeValue: "Bottle Missing",
                  noOfMissingBottles: this.BreakageEntryObj.noOfBottlesMissing
                }
              }
              this.scanDet[indentNo].BOTTLE_MISSING[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
              this.barDetObj[barCode].scanedFlag = true;
              this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
              console.log('1', this.scanDet[indentNo]);
              this.alert.showSuccess("QR code scanned successfully");
            }
          } else {
            this.scanDet[indentNo] = {
              BOTTLE_MISSING: {
                issueDeatils: {
                  issueTypeCode: "BOTTLE_MISSING",
                  issueTypeValue: "Bottle Missing",
                  noOfMissingBottles: this.BreakageEntryObj.noOfBottlesMissing
                }
              }
            };
            this.scanDet[indentNo].BOTTLE_MISSING[barCode] = scanedBar.QRcodeList.filter(e => e != qrCode);
            let t2 = this.scanDet[indentNo].BOTTLE_MISSING[barCode].length;
            // console.log(t2);
            this.barDetObj[barCode].scanedFlag = true;
            this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
            console.log('1', this.scanDet[indentNo]);
            //  console.log(this.barDetObj[barCode].stockInQrCodeList.length);
            this.alert.showSuccess("QR code scanned successfully");
          }
          this.BreakageEntryObj.bottlesToBeScanned = this.scanDet[indentNo].BOTTLE_MISSING[barCode].length;
          this.BreakageEntryObj.noOfBottlesScanned = this.barDetObj[barCode].stockInQrCodeList.length;
          console.log(this.barDetObj[barCode].stockInQrCodeList.length);
        } else {
          this.alert.showError("Please Enter valid QR Codes")
        }
      } else {
        this.alert.showError("Please Enter valid barcodes")
      }
    } else {
      this.alert.showError("Please Enter valid Barcode and QR Codes")
    }
  }
  bottleMissingScanQRUnreadable() {


    if ((this.BreakageEntryObj.qrCode) && (this.BreakageEntryObj.barCode)) {

      let barCode = this.BreakageEntryObj.barCode;
      let qrCode = this.BreakageEntryObj.qrCode;
      if (this.barDetObj.hasOwnProperty(barCode)) {
        let scanedBar = this.barDetObj[barCode];
        if (scanedBar.QRcodeList.includes(qrCode)) {
          let indentNo = scanedBar.indentNo;
          if (this.scanDet[indentNo]) {
            if (this.scanDet[indentNo].hasOwnProperty('BOTTLE_MISSING_QR_UNREADABLE')) {
              if (this.BreakageEntryObj.bottlesToBeScanned > this.BreakageEntryObj.noOfBottlesMissing) {
                if (this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE.hasOwnProperty(barCode)) {
                  if (this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode].includes(qrCode)) {
                    let item = this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode].filter(e => e !== qrCode);
                    this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode] = item;
                    this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                    console.log('3', this.scanDet[indentNo]);
                    this.alert.showSuccess("QR code scanned successfully");
                  } else {
                    this.alert.showError("QR code already scanned");
                  }
                } else {
                  this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
                  this.barDetObj[barCode].scanedFlag = true;
                  this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                  console.log('2', this.scanDet[indentNo]);
                  this.alert.showSuccess("QR code scanned successfully");
                }
              } else {
                this.alert.showWarning("Note", "Reached Maximum")
              }

            } else {
              this.scanDet[indentNo]['BOTTLE_MISSING_QR_UNREADABLE'] = {
                issueDeatils: {
                  issueTypeCode: "BOTTLE_MISSING",
                  issueTypeValue: "Bottle Missing",
                  noOfMissingBottles: this.BreakageEntryObj.noOfBottlesMissing
                }
              }
              this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
              this.barDetObj[barCode].scanedFlag = true;
              this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
              console.log('1', this.scanDet[indentNo]);
              this.alert.showSuccess("QR code scanned successfully");
            }
          } else {
            this.scanDet[indentNo] = {
              BOTTLE_MISSING_QR_UNREADABLE: {
                issueDeatils: {
                  issueTypeCode: "BOTTLE_MISSING",
                  issueTypeValue: "Bottle Missing",
                  damagedTypeCode: "QR_UNREADABLE",
                  damagedTypeValue: "Qr UnReadable",
                  noOfMissingBottles: this.BreakageEntryObj.noOfBottlesMissing
                }
              }
            };
            this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode] = scanedBar.QRcodeList.filter(e => e != qrCode);
            let t2 = this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode].length;
            // console.log(t2);
            this.barDetObj[barCode].scanedFlag = true;
            this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
            console.log('1', this.scanDet[indentNo]);
            //  console.log(this.barDetObj[barCode].stockInQrCodeList.length);
            this.alert.showSuccess("QR code scanned successfully");
          }
          this.BreakageEntryObj.bottlesToBeScanned = this.scanDet[indentNo].BOTTLE_MISSING_QR_UNREADABLE[barCode].length;
          this.BreakageEntryObj.noOfBottlesScanned = this.barDetObj[barCode].stockInQrCodeList.length;
          console.log(this.barDetObj[barCode].stockInQrCodeList.length);
         // this.BreakageEntryObj.noOfBottlesMissing = this.BreakageEntryObj.noOfBottlesMissing + this.BreakageEntryObj.noOfBottlesDamaged;
        } else {
          this.alert.showError("Please Enter valid QR Codes")
        }
      } else {
        this.alert.showError("Please Enter valid barcodes")
      }
    } else {
      this.alert.showError("Please Enter valid Barcode and QR Codes")
    }
  }
  addBottleMissing(form, type) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      // display pupose
      if (form.value.issueType == 'BOTTLE_MISSING' && form.value.damageType == 'QR_UNREADABLE') {
        this.BreakageEntryObj.noOfBottlesMissing = this.BreakageEntryObj.noOfBottlesMissing + this.BreakageEntryObj.noOfBottlesDamaged;
        this.BreakageEntryObj.noOfBottlesDamaged = '';
      } else if(form.value.issueType == 'CASES_MISSING' && form.value.damageType == 'BARCODE_UNREADABLE') {
        this.BreakageEntryObj.noOfCasesMissing = this.BreakageEntryObj.noOfCasesMissing + this.BreakageEntryObj.noOfCasesDamaged;
        this.BreakageEntryObj.noOfCasesDamaged = '';
      }
      this.listOfBreakageEntry.push({ ...this.BreakageEntryObj });
      this.BreakageEntryObj = { date: new Date() }
      this.mergeAllDamages();
      this.calculatetotalMissingDamages();
      this.curDate = new Date();
     // this.BreakageEntryObj.issueType = '';
     // this.BreakageEntryObj.damageType = '';
      this.clearInput();
      this.checkIssueDamageType();
      //this.formSubmitted = false;
      form.resetForm();
    }
  }

  bottlesDamagedQRReadable(event) {

    if (this.BreakageEntryObj.qrCode) {
      let QRflag = true;
      let qrCode = this.BreakageEntryObj.qrCode;
      for (let barCode in this.barDetObj) {
        console.log('barCode::', barCode);
        let scanedBar = this.barDetObj[barCode];
        if (scanedBar.QRcodeList.includes(qrCode)) {
          console.log('scanedBar.QRcodeList::', scanedBar.indentNo);
          let indentNo = scanedBar.indentNo;
          if (this.scanDet[indentNo]) {
            console.log('indentNo::', scanedBar.indentNo);
            if (this.scanDet[indentNo].hasOwnProperty('BOTTLES_DAMAGED')) {
              if (this.BreakageEntryObj.noOfBottlesDamaged > this.BreakageEntryObj.noOfBottlesScanned) {
                if (this.scanDet[indentNo].BOTTLES_DAMAGED.hasOwnProperty(barCode)) {
                  if (this.scanDet[indentNo].BOTTLES_DAMAGED[barCode].includes(qrCode)) {
                    this.alert.showError("QRcode already scanned");
                  } else {
                    this.scanDet[indentNo].BOTTLES_DAMAGED[barCode].push(qrCode);
                    this.barDetObj[barCode].stockInQrCodeList = this.barDetObj[barCode].stockInQrCodeList.filter(e => e != qrCode);
                    console.log('4', this.scanDet[indentNo]);
                    this.alert.showSuccess("QR code scanned successfully");
                  }
                } else {
                  this.scanDet[indentNo].BOTTLES_DAMAGED[barCode] = [qrCode];
                  this.barDetObj[barCode].scanedFlag = true;
                  this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList.filter(e => e != qrCode);
                  console.log('3', this.scanDet[indentNo]);
                }
              } else {
                this.alert.showWarning("Note", "Reached Maximum")
              }
            } else {
              this.scanDet[indentNo]['BOTTLES_DAMAGED'] = {
                issueDeatils: {
                  issueTypeCode: "BOTTLES_DAMAGED",
                  issueTypeValue: "Bottle Damaged",
                  noOfDamagedBottles: this.BreakageEntryObj.noOfDamagedBottles
                }
              }
              this.scanDet[indentNo].BOTTLES_DAMAGED[barCode] = [qrCode];
              this.barDetObj[barCode].scanedFlag = true;
              this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList.filter(e => e != qrCode);
              console.log('2', this.scanDet[indentNo]);
              this.alert.showSuccess("QR code scanned successfully");
            }
          } else {
            this.scanDet[indentNo] = {
              BOTTLES_DAMAGED: {
                issueDeatils: {
                  issueTypeCode: "BOTTLES_DAMAGED",
                  issueTypeValue: "Bottle Damaged",
                  noOfDamagedBottles: this.BreakageEntryObj.noOfDamagedBottles
                }
              }
            };
            this.scanDet[indentNo].BOTTLES_DAMAGED[barCode] = [qrCode];
            this.barDetObj[barCode].scanedFlag = true;
            this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList.filter(e => e != qrCode);
            console.log('1', this.scanDet[indentNo]);
            this.alert.showSuccess("QR code scanned successfully");
          }
          this.BreakageEntryObj.bottlesToBeScanned = this.barDetObj[barCode].stockInQrCodeList.length;
          this.BreakageEntryObj.noOfBottlesScanned = this.scanDet[indentNo].BOTTLES_DAMAGED[barCode].length;
          QRflag = false;
        }
      }
      if (QRflag) {
        this.alert.showError("Please Enter valid QR Codes")
      }
    } else {
      this.alert.showError("Please Enter valid QR Codes")
    }
  }

  // bottle damage qr unreadable
  BottleDamScanBarCode() {
    const barCode = this.BreakageEntryObj.barCode;
    if (!this.barDetObj.hasOwnProperty(this.BreakageEntryObj.barCode)) {
      console.log(this.BreakageEntryObj.barCode);
      this.alert.showError("Please Enter valid barcodes")
    } else {
      if (this.barDetObj.hasOwnProperty(barCode)) {
        let indentNo = this.barDetObj[barCode].indentNo;
        let flag = false;
        for (let issueType in this.scanDet[indentNo]) {
          if (this.scanDet[indentNo][issueType].hasOwnProperty(barCode)) {
            flag = true;
            this.BreakageEntryObj.barCode = '';
          }
        }
        (flag) ? this.alert.showError("Barcode already scanned") : this.alert.showSuccess("Barcode scanned successfully");
      }
    }
  }

  BottleDamScanQRunRe(event) {
    if ((this.BreakageEntryObj.qrCode) && (this.BreakageEntryObj.barCode)) {

      let barCode = this.BreakageEntryObj.barCode;
      let qrCode = this.BreakageEntryObj.qrCode;
      if (this.barDetObj.hasOwnProperty(barCode)) {
        let scanedBar = this.barDetObj[barCode];
        if (scanedBar.QRcodeList.includes(qrCode)) {
          let indentNo = scanedBar.indentNo;
          if (this.scanDet[indentNo]) {
            if (this.scanDet[indentNo].hasOwnProperty('BOTTLES_DAMAGED_QR_UNReadable')) {
              if (this.BreakageEntryObj.bottlesToBeScanned > this.BreakageEntryObj.noOfBottlesDamaged) {
                if (this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable.hasOwnProperty(barCode)) {
                  if (this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode].includes(qrCode)) {
                    let item = this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode].filter(e => e !== qrCode);
                    this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode] = item;
                    this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                    console.log('3', this.scanDet[indentNo]);
                    this.alert.showSuccess("QR code scanned successfully");
                  } else {
                    this.alert.showError("QRcode already scanned");
                  }
                } else {
                  this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
                  this.barDetObj[barCode].scanedFlag = true;
                  this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
                  console.log('2', this.scanDet[indentNo]);

                }
              } else {
                this.alert.showWarning("Note", "Reached Maximum")
              }
            } else {
              this.scanDet[indentNo]['BOTTLES_DAMAGED_QR_UNReadable'] = {
                issueDeatils: {
                  issueTypeCode: "BOTTLES_DAMAGED",
                  issueTypeValue: "Bottle Damaged",
                  damagedTypeCode: "QR_UNREADABLE",
                  damagedTypeValue: "Qr UnReadable",
                  noOfDamagedBottles: this.BreakageEntryObj.noOfDamagedBottles
                }
              }
              this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode] = scanedBar.QRcodeList.filter(e => e !== qrCode);
              this.barDetObj[barCode].scanedFlag = true;
              this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
              console.log('1', this.scanDet[indentNo]);
              this.alert.showSuccess("QR code scanned successfully");
            }

          } else {
            this.scanDet[indentNo] = {
              BOTTLES_DAMAGED_QR_UNReadable: {
                issueDeatils: {
                  issueTypeCode: "BOTTLES_DAMAGED",
                  issueTypeValue: "Bottle Damaged",
                  damagedTypeCode: "QR_UNREADABLE",
                  damagedTypeValue: "Qr UnReadable",
                  noOfDamagedBottles: this.BreakageEntryObj.noOfDamagedBottles
                }
              }
            };
            this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode] = scanedBar.QRcodeList.filter(e => e != qrCode);
            this.barDetObj[barCode].scanedFlag = true;
            this.barDetObj[barCode].stockInQrCodeList.push(qrCode);
            console.log('1', this.scanDet[indentNo]);
            this.alert.showSuccess("QR code scanned successfully");
          }
          this.BreakageEntryObj.bottlesToBeScanned = this.scanDet[indentNo].BOTTLES_DAMAGED_QR_UNReadable[barCode].length;
          this.BreakageEntryObj.noOfBottlesScanned = this.barDetObj[barCode].stockInQrCodeList.length;
        } else {
          this.alert.showError("Please Enter valid QR Codes")
        }
      } else {
        this.alert.showError("Please Enter valid barcodes")
      }
    } else {
      this.alert.showError("Please Enter valid Barcode and QR Codes")
    }
  }

  scanCaseMissing(event) {
    let caseMissingObj = [];
    let barCode = this.BreakageEntryObj.barCode;
    if (this.barDetObj.hasOwnProperty(barCode)) {
      let scanedBar = this.barDetObj[barCode];
      let indentNo = scanedBar.indentNo;
      if (this.scanDet[scanedBar.indentNo]) {
        if (this.scanDet[indentNo].hasOwnProperty('CASES_MISSING')) {
        let barcodeMatc = Object.keys(this.scanDet[scanedBar.indentNo]['CASES_MISSING']).map(e => { return e })
        if (barcodeMatc[1] != barCode) {
          this.alert.showError("Barcode already scanned");
        } else {
          this.scanDet[indentNo].CASES_MISSING[barCode] = this.barDetObj[barCode].QRcodeList;
          console.log(this.scanDet);
          this.alert.showSuccess("Barcode scanned successfully");
        } } else {
          this.scanDet[indentNo]['CASES_MISSING'] = {
              issueDeatils: {
                issueTypeCode: "CASES_MISSING",
                issueTypeValue: "Cases Missing",
                noOfMissingCases: this.BreakageEntryObj.noOfCasesMissing
              }
          };
          for (let barCodeNew in this.barDetObj) {
            if (barCodeNew != barCode) {
              this.scanDet[indentNo].CASES_MISSING[barCodeNew] = this.barDetObj[barCodeNew].QRcodeList;
              this.alert.showSuccess("Barcode scanned successfully");
            }
          }
          this.barDetObj[barCode].scanedFlag = true;
          this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList;
          console.log('1', this.scanDet[indentNo]);
          this.alert.showSuccess("Barcode scanned successfully");
        }
      } else {
        this.scanDet[indentNo] = {
          CASES_MISSING: {
            issueDeatils: {
              issueTypeCode: "CASES_MISSING",
              issueTypeValue: "Cases Missing",
              noOfMissingCases: this.BreakageEntryObj.noOfCasesMissing
            }
          }
        };
        for (let barCodeNew in this.barDetObj) {
          if (barCodeNew != barCode) {
            this.scanDet[indentNo].CASES_MISSING[barCodeNew] = this.barDetObj[barCodeNew].QRcodeList;
            this.alert.showSuccess("Barcode scanned successfully");
          }
        }
        this.barDetObj[barCode].scanedFlag = true;
        this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList;
        console.log('1', this.scanDet[indentNo]);
        this.alert.showSuccess("Barcode scanned successfully");
      }
      for (let issueType in this.scanDet[indentNo]) {
        console.log(issueType);
        if (issueType == 'CASES_MISSING') {
          caseMissingObj.push(this.scanDet[indentNo][issueType])
        }
      }
      this.BreakageEntryObj.noOfCasesScanned = caseMissingObj.length;
      this.BreakageEntryObj.casesToBeScanned = (Object.keys(this.barDetObj).length) - (caseMissingObj.length);
    } else {
      this.alert.showError("Please Enter valid barcodes")
    }

  }
  caseMissingBarcodeUnreadable() {
    let barCode = this.BreakageEntryObj.barCode;
    if (this.barDetObj.hasOwnProperty(this.BreakageEntryObj.barCode)) {
      let scanedBar = this.barDetObj[barCode];
      let indentNo = scanedBar.indentNo;
      if (this.scanDet[scanedBar.indentNo]) {
        let barcodeMatc = Object.keys(this.scanDet[scanedBar.indentNo]['CASES_MISSING_BARCODE_UNREADABLE']).map(e => { return e })
        if (barcodeMatc[1] != barCode) {
          this.alert.showError("Barcode already scanned");
        } else {
          this.scanDet[indentNo].CASES_MISSING_BARCODE_UNREADABLE[barCode] = this.barDetObj[barCode].QRcodeList;
          console.log(this.scanDet);
          this.alert.showSuccess("Barcode scanned successfully");
        }
      } else {
        this.scanDet[indentNo] = {
          CASES_MISSING_BARCODE_UNREADABLE: {
            issueDeatils: {
              issueTypeCode: "CASES_MISSING",
              issueTypeValue: "Cases Missing",
              noOfMissingCases: this.BreakageEntryObj.noOfCasesMissing
            }
          }
        };
        for (let barCodeNew in this.barDetObj) {
          if (barCodeNew != barCode) {
            this.scanDet[indentNo].CASES_MISSING_BARCODE_UNREADABLE[barCodeNew] = this.barDetObj[barCodeNew].QRcodeList;
            this.alert.showSuccess("Barcode scanned successfully");
          }
        }
        this.barDetObj[barCode].scanedFlag = true;
        this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList;
        console.log('1', this.scanDet[indentNo]);
        this.alert.showSuccess("Barcode scanned successfully");
      }
      this.BreakageEntryObj.noOfCasesScanned = Object.keys(this.scanDet[indentNo]).length;
      this.BreakageEntryObj.casesToBeScanned = (Object.keys(this.barDetObj).length) - (Object.keys(this.scanDet[indentNo]).length);
    } else {
      this.alert.showError("Please Enter valid barcodes")
    }
  }
  scanDamagedCasesQR(event) {
    let caseMissingObj=[];
    let barCode = this.BreakageEntryObj.barCode;
    if (this.barDetObj.hasOwnProperty(barCode)) {
      let scanedBar = this.barDetObj[barCode];
      let indentNo = scanedBar.indentNo;
      if (this.scanDet[scanedBar.indentNo]) {
        let barcodeMatc = Object.keys(this.scanDet[scanedBar.indentNo]['CASES_DAMAGE']).map(e => { return e })
        if (barcodeMatc[1] == barCode) {
          this.alert.showError("Barcode already scanned");
        } else {
          this.scanDet[indentNo].CASES_DAMAGE[barCode] = this.barDetObj[barCode].QRcodeList;
          console.log(this.scanDet);
          this.alert.showSuccess("Barcode scanned successfully");
        }
      } else {
        this.scanDet[indentNo] = {
          CASES_DAMAGE: {
            issueDeatils: {
              issueTypeCode: "CASES_DAMAGE",
              issueTypeValue: "Cases DAMAGE",
              damagedTypeCode: "BARCODE_READABLE",
              damagedTypeValue: "BARCODE_READABLE",
              noOfCasesDamaged: this.BreakageEntryObj.noOfCasesDamaged
            }
          }
        };
        for (let barCodeNew in this.barDetObj) {
          if (barCodeNew == barCode) {
            this.scanDet[indentNo].CASES_DAMAGE[barCodeNew] = this.barDetObj[barCodeNew].QRcodeList;
          }
          if(barCodeNew != barCode) {
            this.barDetObj[barCodeNew].scanedFlag = true;
            this.barDetObj[barCodeNew].stockInQrCodeList = scanedBar.QRcodeList;
          }
        }
        console.log('1', this.scanDet);
        this.alert.showSuccess("Barcode scanned successfully");
      }
      for (let issueType in this.scanDet[indentNo]) {
        console.log(issueType);
        if (issueType == 'CASES_DAMAGE') {
          caseMissingObj.push(this.scanDet[indentNo][issueType])
        }
      }
      this.BreakageEntryObj.noOfCasesScanned = caseMissingObj.length;
      this.BreakageEntryObj.casesToBeScanned = (Object.keys(this.barDetObj).length) - (caseMissingObj.length);
    } else {
      this.alert.showError("Please Enter valid barcodes")
    }
  }

  scanDamagedCasesQRunRe(event) {
    let caseMissingObj=[];
    let barCode = this.BreakageEntryObj.barCode;
    if (this.barDetObj.hasOwnProperty(this.BreakageEntryObj.barCode)) {
      let scanedBar = this.barDetObj[barCode];
      let indentNo = scanedBar.indentNo;
      if (this.scanDet[scanedBar.indentNo]) {
        let barcodeMatc = Object.keys(this.scanDet[scanedBar.indentNo]['CASES_DAMAGED_BARCODE_UNREADABLE']).map(e => { return e })
        if (barcodeMatc[1] != barCode) {
          this.alert.showError("Barcode already scanned");
        } else {
          this.scanDet[indentNo].CASES_DAMAGED_BARCODE_UNREADABLE[barCode] = this.barDetObj[barCode].QRcodeList;
          console.log(this.scanDet);
          this.alert.showSuccess("Barcode scanned successfully");
        }
      } else {
        this.scanDet[indentNo] = {
          CASES_DAMAGED_BARCODE_UNREADABLE: {
            issueDeatils: {
              issueTypeCode: "CASES_DAMAGED",
              issueTypeValue: "Cases Damaged",
              damagedTypeCode: "BARCODE_UNREADABLE",
              damagedTypeValue: "BARCODE_UNREADABLE",
              noOfMissingCases: this.BreakageEntryObj.noOfCasesMissing
            }
          }
        };
        for (let barCodeNew in this.barDetObj) {
          if (barCodeNew != barCode) {
            this.scanDet[indentNo].CASES_DAMAGED_BARCODE_UNREADABLE[barCodeNew] = this.barDetObj[barCodeNew].QRcodeList;
            this.alert.showSuccess("Barcode scanned successfully");
          }
        }
        this.barDetObj[barCode].scanedFlag = true;
        this.barDetObj[barCode].stockInQrCodeList = scanedBar.QRcodeList;
        console.log(this.barDetObj);
        console.log('1', this.scanDet);
        this.alert.showSuccess("Barcode scanned successfully");
      }
      this.BreakageEntryObj.noOfCasesScanned = Object.keys(this.scanDet[indentNo]).length;
      this.BreakageEntryObj.casesToBeScanned = (Object.keys(this.barDetObj).length) - (Object.keys(this.scanDet[indentNo]).length);
    } else {
      this.alert.showError("Please Enter valid barcodes")
    }
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
    this.totalMisssingDamges.totalnoOfBottlesMissing = totalnoOfBottlesMissing
    this.totalMisssingDamges.totalnoOfBottlesDamaged = totalnoOfBottlesDamaged
    this.totalMisssingDamges.totalnoOfCasesMissing = totalnoOfCasesMissing
    this.totalMisssingDamges.totalnoOfCasesDamaged = totalnoOfCasesDamaged
  }

  mergeAllDamages() {

    this.breakageListMerged = this.listOfBreakageEntry.reduce((mergedArr, curObj) => {
      let issueDamageBasis = mergedArr.find(e => e.issueType === curObj.issueType && e.damageType === curObj.damageType)
      if (!issueDamageBasis) {
        mergedArr.push(Object.assign({}, curObj))
        console.log(mergedArr);
      }
      else {
        if (curObj.noOfBottlesMissing) {
          issueDamageBasis.noOfBottlesMissing += curObj.noOfBottlesMissing
        }
        if (curObj.noOfCasesMissing) {
          issueDamageBasis.noOfCasesMissing += curObj.noOfCasesMissing
        }
        if (curObj.noOfCasesDamaged) {
          issueDamageBasis.noOfCasesDamaged += curObj.noOfCasesDamaged
        }
        if (curObj.noOfBottlesDamaged) {
          issueDamageBasis.noOfBottlesDamaged += curObj.noOfBottlesDamaged
        }
      }
      return mergedArr
    }, [])
  }

  findModal() {

    if (this.BreakageEntryObj.damageType === "QR_READABLE" &&
      this.BreakageEntryObj.issueType === "BOTTLES_DAMAGED") {
      this.bottleDamQR()
    } if (this.BreakageEntryObj.damageType === "QR_UNREADABLE" &&
      this.BreakageEntryObj.issueType === "BOTTLES_DAMAGED") {
      this.bottleDamQRun()
    } if (this.BreakageEntryObj.damageType === "BARCODE_READABLE" &&
      this.BreakageEntryObj.issueType === "CASES_DAMAGED") {
      this.casesDamQR()
    } if (this.BreakageEntryObj.damageType === "BARCODE_UNREADABLE" &&
      this.BreakageEntryObj.issueType === "CASES_DAMAGED") {
      this.casesDamQRun()
    } if (this.BreakageEntryObj.issueType === "CASES_MISSING") {
      this.casesMiss()
    } if (this.BreakageEntryObj.issueType === "BOTTLE_MISSING") {
      this.caseModal()
    }
    this.BreakageEntryObj.barCode = '';
    this.BreakageEntryObj.qrCode = '';
    this.BreakageEntryObj.noOfBottlesScanned = '';
    this.BreakageEntryObj.bottlesToBeScanned = '';
    this.BreakageEntryObj.noOfBottlesMissing = '';
    this.BreakageEntryObj.noOfBottlesDamaged = '';
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

  scanBottleDamQRUn() {
    let findBarCode = this.stockinObj.barcodes.find((x, i) => x.barcodes);
    console.log(findBarCode);
    if (!findBarCode) {
      this.alert.showError("Please Enter valid barcodes")
    } else {
      this.bottleDamQrUnCodes = findBarCode.qrcodes;
      console.log(this.bottleDamQrUnCodes);

    }
  }
}
