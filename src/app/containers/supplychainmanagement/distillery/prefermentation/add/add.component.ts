import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {
  PrefermentationService,
  AlertService,
  DistileryService,
  MasterapiService,
  CommonService
} from '@app/services';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  prefermentation: FormGroup;
  formSubmitted = false;
  otnumberlist: any[] = [];
  otfieldflag = false;
  prefermentorobjlist: any[] = []
  prefermentorvessalist: any[] = [];
  vessalreferencenolist: any[] = [];
  yeastvessaltankobj: any = {};
  tankList: any[] = [];
  gradelist: any[] = [];
  editflag = false;
  editId: any;
  prefermentorobj: any = {
    molassesQty: '',
    prefermentationTankId: '',
    setupDateTime: '',
    status: '',
    yeastQty: '',
    yeastVesselId: '',
    molassesTankId: '',
    molassesTypeId: '',
    otYeastProcessId: '',
    yeastVesselsCount: '',
    otProductionPlanId: '',
    preparedBrothQty: '',
    availableCapacity: '',
    yeastAvailableCapacity: '',
    yeastvessalname: '',
    preFermenterCount: '',
    prefermentvessalcapacity: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private prefermentationservice: PrefermentationService,
    private alert: AlertService,
    private modalService: NgbModal,
    private masterapiService: MasterapiService,
    private distileryService: DistileryService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.getotnumber();
    this.getAllTankGrades();
    // this.buildPrescriptionFormGrp();
  }

  getotnumber() {
    this.prefermentationservice.getotnumber().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumberlist = responceData.data;
      }
    });
  }

  getotdetails(id) {
    if (id !== '') {
      const otobj = this.otnumberlist.find(item => item.id == id);
      const otnum = otobj.otNumber;
      this.getprefermentorvessalnyitid(id);
      this.prefermentorobj.yeastAvailableCapacity = '';
      this.prefermentorobj.yeastVesselId = '';
      this.prefermentorobj.yeastvessalname = '';
      this.prefermentorobj.yeastVesselId ='';
      this.prefermentorobj.yeastQty = '';
      this.prefermentorobj.prefermentvessalcapacity = '';
      this.prefermentorobj.preparedBrothQty ='';
      this.prefermentorobj.prefermentationTankId ='';
      // this.getYeastvesaal(id);
      this.prefermentationservice.getotmumberdetails(otnum).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.prefermentorobj.yeastVesselsCount = responceData.data.yeastVesselsCount;
          this.prefermentorobj.preFermenterCount = responceData.data.preFermenterCount;
        }
      });
      this.getYeastrefNo(otnum);
    } else {
      this.prefermentorobj.yeastVesselsCount = '';
      this.prefermentorobj.preFermenterCount = '';
      this.prefermentorvessalist = [];
      this.vessalreferencenolist = [];


    }
  }

  getprefermentorvessalnyitid(id) {
    this.prefermentationservice.getprefermentorvessalbyotid(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.prefermentorvessalist = responceData.data;

      }
    });
  }

  getYeastrefNo(otnum) {
    this.prefermentationservice.getYeastreferenceNo(otnum).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.vessalreferencenolist = responceData.data;
      }
    });
  }

  getYeastvesaal(id) {
    if (id !== "") {
      
      this.prefermentationservice.getyeastrefIdbyyeastdata(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.yeastvessaltankobj = responceData.data;
          // this.prefermentorobj.yeastAvailableCapacity = this.yeastvessaltankobj.producedQty;
          this.prefermentorobj.yeastVesselId = this.yeastvessaltankobj.tankRegistration.id;
          this.prefermentorobj.yeastvessalname = this.yeastvessaltankobj.tankRegistration.tankName;
          this.getvessalstock(this.prefermentorobj.yeastVesselId);
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
          // this.prefermentorobj.yeastAvailableCapacity = '';
          this.prefermentorobj.yeastVesselId = '';
          this.prefermentorobj.yeastvessalname = '';
        }
      });
    } else {
      this.prefermentorobj.yeastAvailableCapacity = '';
      this.prefermentorobj.yeastVesselId = '';
      this.prefermentorobj.yeastvessalname = '';
      this.prefermentorobj.yeastVesselId ='';
      this.prefermentorobj.yeastQty = '';
    }
  }

  getvessalstock(id) {
    this.prefermentationservice.getstockvessal(id).subscribe((responseData: any) => {
      if (responseData.status === 's') {
        this.yeastvessaltankobj = responseData.data;
        this.prefermentorobj.yeastAvailableCapacity = this.yeastvessaltankobj.openingBalance;
      } else {
        this.alert.showError(responseData.userDisplayMesg, 'error');
        this.prefermentorobj.yeastAvailableCapacity = '';
      }
    });
  }

  getvessalcapacity(id) {
    if (id !== '') {
      this.prefermentorobj.prefermentvessalcapacity = '';
      this.prefermentorobj.preparedBrothQty ='';
      this.prefermentationservice.getstockvessal(id).subscribe((responseData: any) => {
        if (responseData.status === 's') {
          const prefermentvessaltankobj = responseData.data;
          this.prefermentorobj.prefermentvessalcapacity = prefermentvessaltankobj.tankCapacity;
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
          this.prefermentorobj.prefermentvessalcapacity = '';
        }
      });
    }
  }

  checkQuantity(value) {
    // console.log(this.otproductionForm.get('stockInDetail')['controls'])
    if (value > this.prefermentorobj.prefermentvessalcapacity) {
      this.alert.showError('Please Enter less than or equal of Pre-fermentor Vessal Capacity', 'error');
      this.prefermentorobj.preparedBrothQty = ''
    }
  }

  buildPrescriptionFormGrp() {
    this.prefermentation = this.formBuilder.group({
      OTnumber: ['', Validators.required],
      numberofyesat: [''],
      noofprefermenter: [''],
      prefermentationdata: this.formBuilder.array([
        this.addFormGroupTable()
      ])
    });
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      PreFermenterFillingSerialNo: data && data.PreFermenterFillingSerialNo || '',
      PreFrementerNumber: data && data.PreFrementerNumber || '',
      DateandTimeofSetup: data && data.DateandTimeofSetup || '',
      RawMaterialType: data && data.RawMaterialType || '',
      // tankId: data && data.tankId || data && data.gradeId || '',
      molasisserialno: data && data.molasisserialno || '',
      molasystype: data && data.molasystype || '',
      quantityofmolasis: data && data.quantityofmolasis || '',
      brothprepared: data && data.brothprepared || '',
    });
  }

  public addEmptyCtrl(): void {
    (this.prefermentation.get('prefermentationdata') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.prefermentation.get('prefermentationdata') as FormArray).length;
  }

  addNewRow(rowId) {
    const length = this.getPresFormLength();
    if (length === (rowId + 1)) {
      this.addEmptyCtrl();
    }
  }

  public removeSelectedRow(idx: number) {
    (this.prefermentation.get('prefermentationdata') as FormArray).removeAt(idx);
  }

  savedata(data) {
    console.log('form data --->>>', data.value);
    console.log('ts data -->.', this.prefermentation.value);
  }

  saveprefermenation(form, method) {
    console.log('form validation ==>>',form.valid);
    
    this.formSubmitted = false;
    const payload = {
      molassesQty: this.prefermentorobj.molassesQty,
      prefermentationTankId: +(this.prefermentorobj.prefermentationTankId),
      setupDateTime: this.prefermentorobj.setupDateTime,
      yeastQty: this.prefermentorobj.yeastQty,
      yeastVesselId: +(this.prefermentorobj.yeastVesselId),
      molassesTankId: +(this.prefermentorobj.molassesTankId),
      molassesTypeId: +(this.prefermentorobj.molassesTypeId),
      otYeastProcessId: +(this.prefermentorobj.otYeastProcessId),
      otProductionPlanId: +(this.prefermentorobj.otProductionPlanId),
      preparedBrothQty: this.prefermentorobj.preparedBrothQty,
    };

    let total = parseInt(this.prefermentorobj.molassesQty) + parseInt(this.prefermentorobj.yeastQty)
    if(total > this.prefermentorobj.prefermentvessalcapacity){
      this.alert.showError('(yeast + molasses) quantity should be less than or equal to the Pre-fermentor Vessel Capacity', 'error');
      // this.prefermentorobj.yeastQty = ''
      // this.prefermentorobj.molassesQty = ''
      return

    }


    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          const Pre = this.prefermentationservice;
          if (this.editId) {
            payload[`status`] = method;
            payload['id'] = this.editId;
          } else {
            payload[`status`] = method;
          }

          ((this.editId) ? this.prefermentationservice.updatepreFermentationdata(payload) :
            this.prefermentationservice.addpreFermentationdata(payload)
          ).subscribe((responceData: any) => {
            this.handleResponse(responceData, form);
          });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  handleResponse(responceData: any, form) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      form.reset();
      if (responceData.data.id != '') {
        this.prefermentorobj.otProductionPlanId = responceData.data.otProductionPlan.id;
        this.getotdetails(this.prefermentorobj.otProductionPlanId);
        this.otfieldflag = true;
      }
      this.prefermentorobjlist.push(responceData.data);
      // this.router.navigate(['/supplychainmanagement/distillery/tankregistration/list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  clear(form) {
    form.reset();
  }

  molassesTypes(data) {
    console.log('id of dropdown-->>', data);
    const id = data.value;

    this.distileryService.gettanksbyid(id).subscribe((resp: any) => {
      if (resp.status == 's') {
        console.log(resp.data);
        if (resp.data) {
          this.tankList = resp.data;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.gradelist = responceData.data;
        this.editflag = false;
      }
    });
  }

  getTankDetails(data) {
    let id;
    if (this.editflag) {
      id = data.tankRegId.id
      console.log('data --->>>', data);
    } else {
      id = data.value;
    }
    if(id != ''){
      this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.prefermentorobj.availableCapacity = responceData.data.openingBalance;
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });

    }

   
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  checkingmolassesquantityvalue(molassesquantity) {
    if (molassesquantity > this.prefermentorobj.availableCapacity) {
      this.alert.showError('Please Enter less than or equal of Molasses Available Quantity', 'error');
      this.prefermentorobj.molassesQty = ''
    }
    // if (molassesquantity > this.prefermentorobj.prefermentvessalcapacity) {
    //   this.alert.showError('Please Enter less than or equal of Pre-fermentor Vessal Capacity', 'error');
    //   this.prefermentorobj.molassesQty = ''
    // }
    // let total = this.prefermentorobj.molassesQty + this.prefermentorobj.yeastQty
    // if(total > this.prefermentorobj.prefermentvessalcapacity){
    //   this.alert.showError('Please Enter less than or equal of Pre-fermentor Vessal Capacity', 'error');
    //   this.prefermentorobj.yeastQty = ''
    //   this.prefermentorobj.molassesQty = ''

    // }
  }

  checkingyeastquantityvalue(yeastquantity) {
    if (yeastquantity > this.prefermentorobj.yeastAvailableCapacity) {
      this.alert.showError('Please Enter less than or equal of Yeast Available Quantity', 'error');
      this.prefermentorobj.yeastQty = ''
    }
    // if (yeastquantity > this.prefermentorobj.prefermentvessalcapacity) {
    //   this.alert.showError('Please Enter less than or equal of Pre-fermentor Vessal Capacity', 'error');
    //   this.prefermentorobj.yeastQty = ''
    // }
 
  }

}
