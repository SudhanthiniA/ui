import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertService,
  DistileryService,
  MasterapiService,
  PreviewService
  // CommonService
} from '@app/services';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonService } from '@app/services/common.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  selectedtableitems = [];
  dropdowsntablesettings = {};
  otProdctionObj: any = {}

  // tanklist =[];
  otproductionForm: FormGroup;
  otproductionformtable: FormGroup;
  tankList: any[] = [];
  gradelist: any[] = [];
  editflag = false;
  otGridClick = false;

  ottableobj: any = {
    rawmaterialTypeId: '',
    tankRegId: '',
    availableCapacity: '',
    estimatedQuantity: ''
  };

  findnumberoftanks: any[] = [];
  userdesignation: any[] = [];
  // table declaration 
  tabledata: any = [];
  otproductiondata = [];
  formSubmitted = false;
  curDate = new Date();
  openstock: any;
  editId: any;
  tableflag = false;

  rawmateriallist: any = [];
  addedit: any;
  otTableRowIndex: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private masterapiService: MasterapiService,
    private datePipe: DatePipe,
    private alert: AlertService,
    private distileryService: DistileryService,
    private commonService: CommonService,
    private previews: PreviewService,

  ) { }

  async ngOnInit() {
    // this.getAllrawmaterials();
    // await this.getOpenstock();
    // this.getuserdeignation();
    this.getAllTankGrades();
    this.getusesoftanks();
    this.buildPrescriptionFormGrp();
    this.buildtabledata();
    this.otproductionForm.patchValue({
      date: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getOtproductionbyId(params.id);
        // this.otProdctionObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';
      }else{
        if(this.previews.setData){
          this.otproductionForm.patchValue(this.previews.setData);
          this.tabledata = this.previews.setData.otrawmetireldetails;  
          this.selectedItems = this.previews.setData.usageoftanks;

        }
        
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    // this.buildPrescriptionFormGrp();
  }

  buildPrescriptionFormGrp() {
    this.otproductionForm = this.formBuilder.group({
      date: ['', Validators.required],
      otnumber: [''],
      productionstartdate: ['', Validators.required],
      fermenterFillingCount: ['', Validators.required],
      noofyeastvissels: ['', Validators.required],
      noofpreferment: ['', Validators.required],
      noofferement: ['', Validators.required],
      noofrecivers: ['', Validators.required],
      usageoftanks: [[], Validators.required],
    });
  }
  buildtabledata() {
    this.otproductionformtable = this.formBuilder.group({
      rawmaterialTypeId: [''],
      tankRegId: [''],
      availableCapacity: [''],
      estimatedQuantity: ['']
    });
  }

  public addEmptyCtrl(): void {
    (this.otproductionForm.get('rawMaterialDetails') as FormArray).push(this.addFormGroupTable());
  }

  public getPresFormLength(): number {
    return (this.otproductionForm.get('rawMaterialDetails') as FormArray).length;
  }

  addNewRow(rowId) {
    this.addEmptyCtrl();
  }

  public removeSelectedRow(idx: number) {
    (this.otproductionForm.get('rawMaterialDetails') as FormArray).removeAt(idx);
  }

  addFormGroupTable(data?: any): FormGroup {
    return this.formBuilder.group({
      rawMaterialTypeId: [data && data.rawMaterialTypeId || '', Validators.required],
      availableCapacity: [data && data.availableCapacity],
      estimatedQuantity: [data && data.estimatedQuantity || '', Validators.required],
      tankRegId: [data && data.tankRegId || '', Validators.required]
    });
  }

  gettabledata(form) {

    if (form.value === false) {
      this.formSubmitted = true;
    }
    console.log('form data', form.value);
    const formdata = form.value;
    const rawmeteriladata = this.gradelist;
    const tankdata = this.tankList;

    const rawmeterial = {
      id: form.value.rawmaterialTypeId,
      name: rawmeteriladata.find(data => data.id == form.value.rawmaterialTypeId).name
    };
    const tankdetails = {
      id: form.value.tankRegId,
      name: tankdata.find(data => data.id == form.value.tankRegId).tankName
    };

    console.log('rawmeterial--->>>', rawmeterial);
    console.log('tankdetls-->>', tankdetails);

    if (this.editId) {
      const updatedata = {
        availableCapacity: formdata.availableCapacity,
        estimatedQuantity: formdata.estimatedQuantity,
        rawMaterialTypeId: formdata.rawmaterialTypeId,
        tankRegId: formdata.tankRegId
      }
      if (this.otGridClick) {

        this.tabledata.splice(this.otTableRowIndex, 1, {
          rawmaterialTypeId: rawmeterial,
          tankRegId: tankdetails,
          estimatedQuantity: form.value.estimatedQuantity
        }); // For Grid View Update Records

        // this.otproductiondata.push(updatedata);
        this.otproductiondata.splice(this.otTableRowIndex, 1, {
          rawMaterialTypeId: rawmeterial.id,
          tankRegId: tankdetails.id,
          estimatedQuantity: form.value.estimatedQuantity
        })
        this.clear(form);
        console.log('update data --->>', this.otproductiondata);

      } else {
        this.tabledata.push({
          rawmaterialTypeId: rawmeterial,
          tankRegId: tankdetails,
          estimatedQuantity: form.value.estimatedQuantity
        });
        this.otproductiondata.push(updatedata);
        this.clear(form);
        console.log('update time table details -->>', this.otproductiondata);
      }
    } else {
      if (this.otGridClick) {
        this.tabledata.splice(this.otTableRowIndex, 1, {
          rawmaterialTypeId: rawmeterial,
          tankRegId: tankdetails,
          estimatedQuantity: form.value.estimatedQuantity
        }); // For Grid View Update Records
        const data = {
          availableCapacity: formdata.availableCapacity,
          estimatedQuantity: formdata.estimatedQuantity,
          rawMaterialTypeId: formdata.rawmaterialTypeId,
          tankRegId: formdata.tankRegId
        }
        this.otproductiondata.push(data);
        this.clear(form);

      } else {
        this.tabledata.push({
          rawmaterialTypeId: rawmeterial,
          tankRegId: tankdetails,
          estimatedQuantity: form.value.estimatedQuantity
        });
        console.log('table data -->>>', this.tabledata);
        console.log('form data -->>>', formdata);

        form.reset();
        const data = {
          availableCapacity: formdata.availableCapacity,
          estimatedQuantity: formdata.estimatedQuantity,
          rawMaterialTypeId: formdata.rawmaterialTypeId,
          tankRegId: formdata.tankRegId
        };
        this.otproductiondata.push(data);
        this.clear(form);
      }
    }
  }

  removeSelectedRows(i, data) {
    console.log('index of table-->>', i);
    console.log('data of table --->>', data);
    this.tabledata.splice(i, 1);
    this.otproductiondata.splice(i, 1)
    console.log('after removed -->>', this.tabledata);
    console.log('after removed -->>', this.otproductiondata);
  }

  bindelements(i, data) {
    this.editflag = true;
    this.otGridClick = true;
    this.otTableRowIndex = i;
    console.log('data of table -->>', data);

    this.ottableobj.rawmaterialTypeId = data.rawmaterialTypeId.id,
    this.ottableobj.tankRegId = data.tankRegId.id,
    this.ottableobj.estimatedQuantity = data.estimatedQuantity;
    this.molassesTypes(this.ottableobj.rawmaterialTypeId);
    this.getTankDetails(data);
  }

  clear(data) {
    this.otGridClick = false;
    this.editflag = false;
    data.reset();
  }

  saveData(form, status) {

    const otusagedtank = [];
    this.selectedItems.forEach((item => {
      otusagedtank.push(item.id);
    }));

    console.log('payload of otdata --->>>', this.otproductionForm);

    const payload = {
      estimatedStartDate: form.value.productionstartdate,
      fermenterCount: form.value.noofferement,
      fermenterFillingCount: form.value.fermenterFillingCount,
      planDate: form.value.date,
      preFermenterCount: form.value.noofpreferment,
      receiverCount: form.value.noofrecivers,
      yeastVesselsCount: form.value.noofyeastvissels,
      // otRawMaterialDetailsList: form.value.rawMaterialDetails,
      otRawMaterialDetailsList: this.otproductiondata,
      otTankRegIds: otusagedtank,
      active: status
    };
    this.formSubmitted = false;

    console.log('form data -->>', form.valid);
    // console.log('otproductionata -->>',this.otproductiondata.length);
    // console.log('table data -->>',this.tabledata.length);
    
    
    if(this.editId){
      if(this.tabledata.length ==0 ){
        console.log('table data -->>',this.tabledata.length);
        this.tableflag = true;
      }
    }else{
      if(this.otproductiondata.length ==0){
        console.log('otproductionata -->>',this.otproductiondata.length);
        this.tableflag = true;
      }
    }

    
    if (form.valid === false || this.tableflag) {
      this.formSubmitted = true;
      if(this.tableflag){
        this.alert.showError('Production Plan Should Not Empty', 'error');
        this.tableflag = false;
      }
    } else {
      if (this.editId) {
        payload['id'] = this.editId;
        payload['otNumber'] = form.value.otnumber;
        this.distileryService.updateotProddata(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            sessionStorage.removeItem('formdata');
            this.router.navigate(['/supplychainmanagement/distillery/otproductionplan/list']);
            console.log(responceData);
          } else {
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      } else {

        console.log(payload, 'msggggggggggggggggggggg');
        this.distileryService.addotProddata(payload).subscribe(responceData => {
          if (responceData['status'] === 's') {
            this.alert.showSuccess(responceData['userDisplayMesg'], 'Success');
            this.router.navigate(['/supplychainmanagement/distillery/otproductionplan/list']);
          } else {
            console.log(responceData);
            this.alert.showError(responceData['userDisplayMesg'], 'error');
          }
        });
      }
    }
  }

  previewcategory(form) {
    // sessionStorage.setItem('formdata', JSON.stringify(this.otProdctionObj));
    this.router.navigate(['/supplychainmanagement/distillery/mf6-part-one/preview']);
  }

  molassesTypes(data) {
    console.log('id of dropdown-->>', data);
    let id;
    if (this.editId) {
      if (this.editflag) {
        id = data;
      } else {
        id = data.value;
      }
    } else {
      id = data.value;
    }
    this.dropdowsntablesettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'tankName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    // if(id != ''){
    //   this.otproductiondata.find(item =>item.rawMaterialTypeId == id)
    //   return true
    // }
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

  getTankDetails(data) {
    let id;
    if (this.editId) {
      if (this.editflag) {
        id = data.tankRegId.id
        console.log('data --->>>', data);
        console.log('id of edit -->>', id);
      } else {
        id = data.value;
      }

    } else {
      if (this.editflag) {
        id = data.tankRegId.id;
      } else {
        id = data.value;
      }
    }
    if (id !== '') {
      this.distileryService.getcurrentStockBytankid(id).subscribe((responceData: any) => {
        if (responceData.status === 's') {
          // this.otproductionformtable.patchValue({
          //   availableCapacity: responceData.data.availableCapacity,
          // });
          this.ottableobj.availableCapacity = responceData.data.openingBalance;
          this.editflag = false;
        } else {
          this.alert.showError(responceData.userDisplayMesg, 'error');
        }
      });
    }
  }

  inWords(num, data?: any) {
    return this.commonService.convertToWords(num, data);
  }

  checkingvalue(pres, form) {
    // console.log(this.otproductionForm.get('stockInDetail')['controls'])
    if (pres > this.ottableobj.availableCapacity) {
      this.alert.showError('Please Enter less than or equal of Available Capacity', 'error');
      this.ottableobj.estimatedQuantity = ''
    }
  }

  checkyeastcount(form) {
    if (form.get('noofyeastvissels').value > form.get('fermenterFillingCount').value) {
      this.alert.showError('Please Enter less than or equal of Fermenter Filling Count', 'error');
      (form.get('noofyeastvissels').reset());
    }
  }

  getOtproductionbyId(id) {
    this.distileryService.getotProdbyid(id).subscribe(responceData => {
      this.otProdctionObj = responceData['data'];
      this.otproductionForm.patchValue({
        date: this.datePipe.transform(this.otProdctionObj.planDate, 'yyyy-MM-dd'),
        otnumber: this.otProdctionObj.otNumber,
        productionstartdate: this.datePipe.transform(this.otProdctionObj.estimatedStartDate, 'yyyy-MM-dd'),
        fermenterFillingCount: this.otProdctionObj.fermenterFillingCount,
        noofyeastvissels: this.otProdctionObj.yeastVesselsCount,
        noofpreferment: this.otProdctionObj.preFermenterCount,
        noofferement: this.otProdctionObj.fermenterCount,
        noofrecivers: this.otProdctionObj.receiverCount,
      });

      let usagetanks = [];
      usagetanks = this.otProdctionObj.otTankDetailsList.map(item => {
        return {
          id: item.tankId || '',
          tankName: item.tankName || ''
        };
      });
      console.log('tanks of usage --->..', usagetanks);

      this.selectedItems = usagetanks;
      let otrawmeterialdata;
      let updatetimeotdata;

      otrawmeterialdata = this.otProdctionObj.otRawMaterialDetailsList.map(data => {
        return {
          tankRegId: {
            id: data.tankRegistration.id,
            name: data.tankRegistration.tankName
          },
          rawmaterialTypeId: {
            id: data.rawMaterial.id,
            name: data.rawMaterial.name
          },
          estimatedQuantity: data.estimatedQuantity
        };
      });
      this.tabledata = otrawmeterialdata;
      console.log('otrawmeterialdata ------------>>', this.tabledata);
      console.log('ot table data ---->>>', otrawmeterialdata);
      updatetimeotdata = this.otProdctionObj.otRawMaterialDetailsList.map(data =>{
        return {
          tankRegId:data.tankRegistration.id,
          rawMaterialTypeId:data.rawMaterial.id,
          estimatedQuantity:data.estimatedQuantity
        }
      });
      this.otproductiondata = updatetimeotdata;
      console.log('otproduction data in get time ===>>',this.otproductiondata);
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

  getusesoftanks() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'tankName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.distileryService.getusagetanks().subscribe((responceData: any) => {
      if (responceData.status === 's') {
        this.dropdownList = responceData.data;
        console.log('show items--->>', this.dropdownList);
      }
    });
  }

  onItemSelect(item: any) {
    console.log(item.id);
    console.log(this.selectedItems);
  }

  onSelectAll(items: any) {
    console.log('msggggggg', items);
    this.selectedItems = items;
    console.log(this.selectedItems);
  }

  onItemDeSelect(item: any) {
    console.log('msg', item);
    console.log(this.selectedItems);
  }

  otpriview(formdata){
    console.log('formdata ===>>',formdata.value);
    let previewdata = {
         "date":formdata.value.date,
         "fermenterFillingCount":formdata.value.fermenterFillingCount,
         "noofferement": formdata.value.noofferement,
         "noofpreferment":formdata.value.noofpreferment,
         "noofrecivers":formdata.value.noofrecivers,
         "noofyeastvissels": formdata.value.noofyeastvissels,
         "otnumber": formdata.value.otnumber,
         "productionstartdate":formdata.value.productionstartdate,
         "usageoftanks":formdata.value.usageoftanks,
         "otrawmetireldetails":this.tabledata
    }
    
    console.log('preview data -->>',previewdata);
    
    this.formSubmitted = false;
    if (formdata.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      this.previews.setData = previewdata;
      this.router.navigate(['/supplychainmanagement/distillery/otproductionplan/preview']);
    }
  }

}
