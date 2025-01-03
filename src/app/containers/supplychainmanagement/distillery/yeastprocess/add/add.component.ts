import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  DistileryService,
  YeastprocessService,
  MasterapiService,
  RawMaterialService,
  PrefermentationService,
  PreviewService,
  CommonService
} from '@app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  yeastprocessForm: FormGroup;
  tankList: any[] = [];
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  rawmateriallist: any = [];
  addedit: any;
  gradelist: any;
  otnumberlist: any[] =[];
  yeastveesel: any;
  yeastvessaltanks: any[] = [];
  previewObj: any ={

  }
  otnumber:any;
  yeastvessalname:any;
  molassestype: any;
  molassestankname: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private alert: AlertService,
    private rawmaterialmaster: RawMaterialService,
    private prefermentservice: PrefermentationService,
    private distileryService: DistileryService,
    private yeastprocess: YeastprocessService,
    private commonService: CommonService,
    private preview: PreviewService
  ) { }

  async ngOnInit() {
    this.getAllTankGrades();
    await this.getotnumber();
    this.buildPrescriptionFormGrp();

    this.route.params.subscribe(params => {
     if (params.id) {
        this.editId = params.id;
        this.getbyiddata(this.editId);
      }else if (this.preview.setData) {
        this.yeastprocessForm.patchValue(this.preview.setData);
        this.molassesTypes(this.yeastprocessForm.get('molassestype').value);
        this.getyeastveesel(this.yeastprocessForm.get('otnumber').value);
      
      }
        
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

 

  buildPrescriptionFormGrp() {
    this.yeastprocessForm = this.formBuilder.group({
      otnumber: ['', Validators.required],
      yeastvesselno: ['', Validators.required],
      noofyeastvessels: [''],
      availableCapacity: [''],
      yeastVessalCapacity: [''],
      molassestype: ['', Validators.required],
      tankserialno: ['', Validators.required],
      molasisquantity: ['', Validators.required],
      qtyoffermentedsugar: ['', Validators.required]
    });
  }

  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.gradelist = responceData.data;
      }
    });
  }

 async getotnumber() {
    await this.yeastprocess.getotnumber().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.otnumberlist = responceData.data;
      }
    });
  }

  getyeastveesel(id) {
 

    
    if (id !== '') {
      this.getyeastvesaltanks(id);
     
     
      // if(this.otnumberlist){
        // this.otnumber= this.commonService.getDropDownText(id, this.otnumberlist)[0].otNumber;
        let  otobj = this.otnumberlist.find(item => item.id == id);
        var otnum = otobj.otNumber;

     
      this.prefermentservice.getotmumberdetails(otnum).subscribe((responceData: any) => {
       
        if (responceData.status === 's') {
          this.yeastprocessForm.patchValue({
            noofyeastvessels: responceData.data.yeastVesselsCount
          });
        }
      });
      // }
      this.yeastprocessForm.get('yeastvesselno').reset();
      this.yeastprocessForm.get('yeastVessalCapacity').reset();
      this.yeastprocessForm.get('qtyoffermentedsugar').reset();
 
  
    } else {
      this.yeastprocessForm.patchValue({
        noofyeastvessels: ''
      });
      this.yeastvessaltanks = [];
      this.yeastprocessForm.get('yeastvesselno').reset();
      this.yeastprocessForm.get('yeastVessalCapacity').reset();
      this.yeastprocessForm.get('qtyoffermentedsugar').reset();
     
    }
  }

  getyeastvesaltanks(id) {
    if (id !== '') {
      this.yeastprocess.getvessalbyotplanid(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.yeastvessaltanks = responceData.data;
        }
      });
    }
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      rawmaterialTypeId: [data && data.rawmaterialTypeId || '', Validators.required],
      quantity: [data && data.quantity || '', Validators.required],
      rawmaterialtankRegId: [data && data.rawmaterialtankRegId || '', Validators.required]
    });
  }

  saveData(form, status) {

    const payload = {
      fermentedSugarQuantity: form.value.qtyoffermentedsugar,
      molassesQuantity: form.value.molasisquantity,
      molassesTankId: form.value.tankserialno,
      molassesTypeId: form.value.molassestype,
      otProductionPlanId: form.value.otnumber,
      productionStatus: status,
      yeastVesselId: form.value.yeastvesselno
    };

    if (form.get('molasisquantity').value > form.get('yeastVessalCapacity').value) {
      this.alert.showError('Please Enter Molasses Quantity less than or equal of Yeast Vessal Capacity', 'error');
      // (form.get('molasisquantity').reset());
      return
    }
    this.formSubmitted = false;
    if (form.valid === false && status === 'SUBMITTED') {
      this.formSubmitted = true;
    } else {
      if (this.editId) {
        payload['id'] = this.editId;
        console.log(payload, 'msggggggggggggggggggggg');
        this.yeastprocess.updateyeastdata(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/supplychainmanagement/distillery/yeastprocess/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      } else {
        console.log(payload, 'msggggggggggggggggggggg');
        this.yeastprocess.createdata(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/yeastprocess/list']);
          } else {
            console.log(responceData);
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/preview']);
  }

  getbyiddata(data) {
    let yeastObj: any;
    const id = '?id=' + data;
    this.yeastprocess.getyeaseldata(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        yeastObj = responceData.data;
        this.getyeastveesel(yeastObj.otProductionPlanEntity.id);
        console.log('data of view------->>>', responceData);
        this.yeastprocessForm.patchValue({
          otnumber: responceData.data.otProductionPlanEntity.id,
          yeastvesselno: responceData.data.yeastVesselId,
          noofyeastvessels: responceData.data.otProductionPlanEntity.yeastVesselsCount,
          // rawmeterialtype: responceData.data.molassesTypeId,
          molassestype: responceData.data.molassesTypeId,
          tankserialno: responceData.data.molassesTankEntity.id,
          molasisquantity: responceData.data.molassesQuantity,
          qtyoffermentedsugar: responceData.data.fermentedSugarQuantity
        });

        
        this.getvessalcapacity(yeastObj.yeastVesselId);
        this.molassesTypes(yeastObj.molassesTypeId);
        this.getTankDetailss(yeastObj.molassesTankEntity.id);
      }
    });
  }

  molassesTypes(id) {
    // if(this.gradelist){
      // this.molassestype = this.commonService.getDropDownText(id, this.gradelist)[0].name; 

    // } 
    this.yeastprocess.gettanksbyid(id).subscribe((resp: any) => {
      if (resp.status === 's') {
        console.log(resp.data);
        if (resp.data) {
          this.tankList = resp.data;
        } else {
          this.tankList = [];
        }
      }
    });
  }

  getTankDetailss(data) {
    if (data !== '') {
      // if(this.tankList.length > 0){
        // this.molassestankname = this.commonService.getDropDownText(data, this.tankList)[0].tankName;

      // }

      this.distileryService.getcurrentStockBytankid(data).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          this.yeastprocessForm.patchValue({
            availableCapacity: responceData.data.openingBalance,
          });
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }
  }

  getvessalcapacity(id) {
    if (id !== '') {
      // this.yeastvessalname = this.commonService.getDropDownText(id, this.yeastvessaltanks)[0].tankName;
      this.prefermentservice.getstockvessal(id).subscribe((responseData: any) => {
        if (responseData.status === 's') {
          this.yeastprocessForm.patchValue({
            yeastVessalCapacity: responseData.data.tankCapacity,
          });
        } else {
          this.alert.showError(responseData.userDisplayMesg, 'error');
        }
      });
    }
  }

  checkQuantity(form) {
    // console.log(this.otproductionForm.get('stockInDetail')['controls'])
    if (form.get('qtyoffermentedsugar').value > form.get('yeastVessalCapacity').value) {
      this.alert.showError('Please Enter less than or equal of Yeast Vessal Capacity', 'error');
      (form.get('qtyoffermentedsugar').reset());
    }
  }

  checkingvalues(form) {
    if (form.get('molasisquantity').value > form.get('availableCapacity').value) {
      this.alert.showError('Please Enter less than or equal of Available Capacity', 'error');
      (form.get('molasisquantity').reset());
    }
   
  }

  getTankDetails(id, pres) {
    const tableList = this.yeastprocessForm.value.rawMaterialDetails;
    let occuranceCount = 0;
    let i = 0;
    for (const item of tableList) {
      if (id === item.rawmaterialTypeId) {
        occuranceCount = occuranceCount + 1;
      }
    }
    if (occuranceCount > 1) {
      i = i + 1;
      this.alert.showError('Tank is already Selected', 'error');
      // this.removeSelectedRow(i);
      return;
    } else {
      this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
        // debugger;
        if (responceData.status === 's') {
          pres.patchValue({
            availablebalance: responceData.data.availableCapacity,

            brix: responceData.data ? responceData.data.brix : '',
            trs: responceData.data ? responceData.data.trs : '',
            // gradeName: this.gradeData
          });
          // this.addEmptyCtrl();
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }
  }

  checkingvalue(pres) {
    // console.log(this.yeastprocessForm.get('stockInDetail')['controls'])
    if (pres.get('quantity').value > pres.get('availablebalance').value) {
      this.alert.showError('Please Enter less than or equal of Available Capacity', 'error');
      (pres.get('quantity').reset());
    }

    if (pres.get('quantity').value > this.yeastprocessForm.get('quantityWeightByMen').value) {

      this.alert.showError('Please Enter less than or equal of Quantity Weight by men Calculation(Qtl)', 'error');
      (pres.get('quantity').reset());
    }
    let sum = 0;
    this.yeastprocessForm.get('rawMaterialDetails')['controls'].forEach((x: any) => {
      if (x.value.quantity > 0) {
        sum += parseInt(x.value.quantity);
      }
      if (sum > this.yeastprocessForm.get('quantityWeightByMen').value) {
        this.alert.showError('Please Enter less than or equal of Quantity Weight by men Calculation(Qtl)', 'error');
        (x.get('quantity').reset());
      }
    });
  }

  getTankDetailsbyid(id, array) {
    this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
      if (responceData.status === 's') {
        array[0].patchValue({
          availablebalance: responceData.data.availableCapacity,
          brix: responceData.data ? responceData.data.brix : '',
          trs: responceData.data ? responceData.data.trs : '',
          // gradeName: this.gradeData
        });
        // this.addEmptyCtrl();
      } else {
        this.alert.showError(responceData.userDisplayMesg, 'error');
      }
    });
  }

  getAllrawmaterials() {
    this.rawmaterialmaster.allRawMaterial().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.rawmateriallist = responceData.data;
      }
    });
  }

  setPreview(form){
    this.formSubmitted = false;
    if (this.yeastprocessForm.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.preview.setData = form;
      if(this.editId != ''){
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/yeastprocess/preview']);
    }

  }

}
