import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ApiService, LiquorTypeService, LicenseTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-addbottlingprodplannew',
  templateUrl: './addbottlingprodplannew.component.html',
  styleUrls: ['./addbottlingprodplannew.component.scss']
})
export class AddbottlingprodplannewComponent implements OnInit {

  formSubmitted = false;
  tabledata = [];
  rawmaterialList: any = [];
  licenceTypeList: any = [];
  licenseeData: any = [];
  packagetypeData: any = [];
  brandlists: any = [];
  viewId: any;
  bottledata: any;
  sizelist: any;

  bottlingprodplan: any = {
    brandId:'',
    domaidID:'2',
    edp: 'Atla',
    entityId: 7,
    etin: 'ABC',
    gtin: 'EDF',
    // id:'',
    isactive:true,
    licenceNumber: 'LN856654556524',
    licenceTypeId:'',
    liquorSubTypeId: '',
    liquorTypeId: '',
    mapId: '',
    noOfBottlePerCase: 20,
    noOfBottles: '',
    noOfCases: 20,
    nofBottlePerCase:'',
    packageTypeId: '',
    parentUnitName: 'BLUE OCEAN BEVERAGES PRIVATE LIMITED',
    planDate: '',
    planId: '',
    plannedNofBottles: '',
    productionLine: '',
    quantity:'',
    quantityAL: 1000,
    quantityBL: 5000,
    sizeId:'',
    stageDesc: '',
    status: '',
    strength: 'WELCOME',
    supplyTypeID: 23,
    tankMaterial:'',
    tankName: '',
    tankRegistration: '',
    workflowRemarks:'',
    workflowStage: ''
  }
  subliquortype: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private apiservice: ApiService,
    private liquorTypeService: LiquorTypeService,
    private licensetypeService: LicenseTypeService,
    private licenseeService: LicenseeService,
    private packageService: PackageTypeService,
    private brandService: BrandMasterService,
    private bottlingplanservice: WarehousebottlingplanService,
    private alert: AlertService,
    private subliquorService: SubLiquorTypeService,
    private warehouseNewbrandService: WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.getliquertype();
    this.getPackagetype();
    this.getBrandMaster();
    this.getSubLiquorType();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.setData(this.viewId);
      }
    });
  }

  setData(id) {
    this.bottlingplanservice.getplanbyid(id)
      .subscribe((resp: any) => {
        this.bottledata = resp.data;
      })
  }
  getliquertype() {
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
    });

    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });
  }
  getPackagetype() {
    this.packageService.allPackageTypes().subscribe((responceData: any) => {
      this.packagetypeData = responceData.data;
    });
  }
  getBrandMaster() {
    this.brandService.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
      });
  }
  getSubLiquorType() {
    this.subliquorService.getSubLiquorType().subscribe((resp) => {
      this.subliquortype = resp.data;
    });
  }

  saveData(data, method) {
    this.formSubmitted = false;
    if (data.valid == false) {
      this.formSubmitted = true;
    } else {

      const postingData = {

        brandId:this.bottlingprodplan.brandId,
        domaidID:this.bottlingprodplan.domaidID,
        edp: this.bottlingprodplan.edp,
        entityId: 7,
        etin: this.bottlingprodplan.etin,
        gtin: this.bottlingprodplan.gtin,
        id: this.viewId? this.viewId:0,
        isactive:true,
        licenceNumber: this.bottlingprodplan.licenceNumber,
        licenceTypeId:this.bottlingprodplan.licenceTypeId,
        liquorSubTypeId: this.bottlingprodplan.liquorSubTypeId,
        liquorTypeId: this.bottlingprodplan.liquorTypeId,
        mapId: this.bottlingprodplan.mapId,
        noOfBottlePerCase: this.bottlingprodplan.noOfBottlePerCase,
        noOfBottles: this.bottlingprodplan.noOfBottles,
        noOfCases: this.bottlingprodplan.noOfCases,
        nofBottlePerCase:this.bottlingprodplan.nofBottlePerCase,
        packageTypeId: this.bottlingprodplan.packageTypeId,
        parentUnitName:  this.bottlingprodplan.parentUnitName,
        planDate: this.bottlingprodplan.planDate,
        planId: this.bottlingprodplan.planId,
        plannedNofBottles: this.bottlingprodplan.plannedNofBottles,
        productionLine: this.bottlingprodplan.productionLine,
        quantity:this.bottlingprodplan.quantity,
        quantityAL:this.bottlingprodplan.quantityAL,
        quantityBL: this.bottlingprodplan.quantityBL,
        sizeId:this.bottlingprodplan.sizeId,
        stageDesc: this.bottlingprodplan.stageDesc,
        status: this.bottlingprodplan.status,
        strength: this.bottlingprodplan.strength,
        supplyTypeID:this.bottlingprodplan.supplyTypeID,
        tankMaterial: this.bottlingprodplan.tankMaterial,
        tankName: this.bottlingprodplan.tankName,
        tankRegistration: this.bottlingprodplan.tankRegistration,
        workflowRemarks:this.bottlingprodplan.workflowRemarks,
        workflowStage: this.bottlingprodplan.workflowStage
      }

      if (this.viewId) {
      this.bottlingplanservice.updateplan(postingData)
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bottlingprodplannew/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'error');
        }
      })
     } else {
      this.bottlingplanservice.postbottlingplan(postingData)
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bottlingprodplannew/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'error');
        }
      })
     }
    }
  }
  calbottles() {
    let findobj = this.sizelist.find(x => x.id == this.bottlingprodplan.size).desc;
    console.log(findobj)
    this.bottlingprodplan.plannednoofbottles = this.bottlingprodplan.noofcases * this.bottlingprodplan.noofbottlepercase;
    this.bottlingprodplan.quantitybl = (this.bottlingprodplan.plannednoofbottles * parseInt(findobj))/1000
    if(this.bottlingprodplan.plannednoofbottles >= 500000) {
      this.alert.showError('Planeed Bottles wont be excess of 500000' , 'error');
      this.bottlingprodplan.plannednoofbottles ='';
    }
  }
}
