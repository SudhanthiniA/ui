import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { apiUrls } from '@appEnv/apiurls';
import {
  TransportGenService,
  StockInService,
  DistileryService,
  MasterapiService,
  AlertService,
  CommonService
} from '@app/services';

@Component({
  selector: 'app-mf4-recieddistillery-edit',
  templateUrl: './mf4-recieddistillery-edit.component.html',
  styleUrls: ['./mf4-recieddistillery-edit.component.scss']
})
export class Mf4RecieddistilleryEditComponent implements OnInit {

  addpdobj: any;
  date: any;
  curDate = new Date();
  name: any;
  mf4Form: any;
  editId: any;
  trsvalue: any;
  errorflag = false;
  errorquantity = false;
  availabulecapacity: any;
  stockFormGroup: FormGroup;
  // isdisabled=false;
  formSubmitted = false;
  stockformSubmitted = false;
  fielddesible = false;
  tankGradeList: any = [];
  addedit: any;
  sugarmillNameList: any = [];
  supplyTypedata = [];
  tankList: any;
  getautodata: any;
  recivedby: any;
  currentdate = new Date();
  mf4recievedistillery: any = {
    gatepass: '',
    mf4date: '',
    season: '',
    address: '',
    deliver: '',
    passNo: '',
    orderId: '',
    ordernodate: '',
    distName: '',
    address1: '',
    description: '',
    vehicleNumber: '',
    driverName: '',
    route: '',
    gross: '',
    tare: '',
    net: '',
    tank: '',
    tankgrade: '',
    tankTrs: '',
    tankBrix: '',
    tankQuantity: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private distileryService: DistileryService,
    private datePipe: DatePipe,
    private transportGenService: TransportGenService,
    private stockInService: StockInService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    // this.getTankLists();
    this.recivedby = localStorage.getItem('EntityType');
    this.sugarmillname();
    // this.molassesTypes();
    this.getsupplytype();
    this.getAllTankGrades();
    this.buildPrescriptionFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        // this.getmf4RequestById(params.id);
        this.getmf4data(params.id);
        // this.getmf4data();
        this.mf4recievedistillery.id = params.id;
        this.editId = params.id;
        console.log('params--->>', params.id);
        // this.addedit = 'Edit';
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }

  buildPrescriptionFormGrp() {
    this.stockFormGroup = this.formBuilder.group({
      recieveby: [this.recivedby, Validators.required],
      recieveOn: [this.datePipe.transform(this.currentdate, 'yyyy-MM-dd'), Validators.required],
      recieveGross: ['', Validators.required],
      recieveTare: ['', Validators.required],
      recieveMolassis: ['', Validators.required],
      receivedTrs: ['', Validators.required],
      receivedBrix: ['', Validators.required],
      gradeId: ['', Validators.required],
      inspName: ['', Validators.required],
      inspDate: [this.datePipe.transform(this.currentdate, 'yyyy-MM-dd'), Validators.required],
      // stockInDetail: this.formBuilder.array([
      //   this.addFormGroupTable()
      // ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      trs: data && data.trs || '',
      brix: data && data.brix || '',
      quantity: data && data.quantity || '',
      gradeId: data && data.gradeId || '',
      tankRegid: data && data.tankRegid || data && data.tankRegid || '',
      totalcapacity: data && data.totalcapacity || '',
      availableCapacity: data && data.availableCapacity || '',
      occupiedCapacity: data && data.occupiedCapacity || '',
      // tankname: data && data.assetName || '',
    });
  }

  public addEmptyCtrl(): void {
    (this.stockFormGroup.get('stockInDetail') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.stockFormGroup.get('stockInDetail') as FormArray).length;
  }

  addNewRow(rowId) {
    const length = this.getPresFormLength();
    if (length == (rowId + 1)) {
      this.addEmptyCtrl();
    }
  }

  public removeSelectedRow(idx: number) {
    (this.stockFormGroup.get('stockInDetail') as FormArray).removeAt(idx);
  }

  molassesTypes(id) {
    this.stockInService.gettanksbyid(id).subscribe((resp: any) => {
      // alert('msg');
      if (resp.status === 's') {
        console.log(resp.data);
        // this.tankList = resp.data.registeredTankByGradeList
        if (resp.data) {
          this.tankList = resp.data.registeredTankByGradeList;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  addapi(form, status) {
    this.formSubmitted = false;
    const payload = {
      mstockTransferId: this.editId,
      receivedGross: this.stockFormGroup.value.recieveGross,
      receivedTare: this.stockFormGroup.value.recieveTare,
      netReceivedMolasses: this.stockFormGroup.value.recieveMolassis,
      receivedTrs: this.stockFormGroup.value.receivedTrs,
      receivedBrix: this.stockFormGroup.value.receivedBrix,
      nameOfInspector: this.stockFormGroup.value.inspName,
      inspectionDate: this.stockFormGroup.value.inspDate,

    };
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      this.distileryService.addmf4data(payload).subscribe(responceData => {
        if (responceData.status === 's') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          console.log(responceData);
          this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/list']);
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }
  }

  sugarmillname() {
    this.transportGenService.getAllSugarMilllName().subscribe((responceData: any) => {
      this.sugarmillNameList = responceData.data;
    });
  }

  getsupplytype() {
    this.masterapiService.get(apiUrls.supplytype).then((responceData: any) => {
      this.supplyTypedata = responceData.data;
      console.log('supplytype--->>>', this.supplyTypedata);

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }

  getmf4data(id) {

    // if (lenghtofvalue > 10) {
    this.distileryService.getautodata(id).subscribe(responceData => {
      if (responceData.errorCode === 200) {

        this.getautodata = responceData.data;

        console.log('getautodata----->>>', this.getautodata);
        this.mf4recievedistillery.gatepass = this.getautodata.gatePassNumber;
        this.mf4recievedistillery.supplyType = this.getautodata.supplyType;
        this.mf4recievedistillery.millName = this.getautodata.sugarMillName;
        this.mf4recievedistillery.mf4date = this.datePipe.transform(this.getautodata.mf4Date, 'yyyy-MM-dd');
        this.mf4recievedistillery.tankTrs = this.getautodata.trs;
        this.mf4recievedistillery.vehicleNumber = this.getautodata.vehicleNumber;
        this.mf4recievedistillery.tankBrix = this.getautodata.brix;
        this.mf4recievedistillery.season = this.getautodata.season;
        this.mf4recievedistillery.address1 = this.getautodata.distAddrs1;
        this.mf4recievedistillery.orderId = this.getautodata.orderNumber;
        this.mf4recievedistillery.ordernodate = this.datePipe.transform(this.getautodata.orderDate, 'yyyy-MM-dd');
        this.mf4recievedistillery.distName = this.getautodata.distName;
        this.mf4recievedistillery.address = this.getautodata.sugarmillAddrs1;
        this.mf4recievedistillery.description = '';
        this.mf4recievedistillery.route = this.getautodata.routeNo;
        this.mf4recievedistillery.gross = this.getautodata.gross;
        this.mf4recievedistillery.tare = this.getautodata.tare;
        this.mf4recievedistillery.net = this.getautodata.net;
        this.mf4recievedistillery.tank = '';
        this.mf4recievedistillery.tankgrade = this.getautodata.gradeId;
        this.mf4recievedistillery.tankQuantity = this.getautodata.quantity;
        this.mf4recievedistillery.driverName = this.getautodata.driverName;
      }
      // this.molassesTypes();
    });
  }

  previewcategory(form) {
    sessionStorage.setItem('mf4reciveobj', JSON.stringify(this.mf4recievedistillery));
    sessionStorage.setItem('mf4filledobj', JSON.stringify(form.value));
    this.router.navigate(['/supplychainmanagement/distillery/mf4-receivedbydistillery/preview']);
  }

  gettrs(trs) {
    console.log('trs --->>', trs);
    this.trsvalue = trs;
  }

  getbrix(brix) {
    console.log('brix', brix);
    const total = brix + this.trsvalue;
    if (total > 100) {
      this.errorflag = true;
    } else {
      this.errorflag = false;
    }
  }

  getquantity(quantity) {
    console.log('quanity--->>', quantity);
    if (quantity > this.availabulecapacity) {
      this.errorquantity = true;
    } else {
      this.errorquantity = false;
    }
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

}
