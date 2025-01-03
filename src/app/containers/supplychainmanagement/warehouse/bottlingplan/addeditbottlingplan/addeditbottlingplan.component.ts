import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ApiService, LiquorTypeService, LicenseTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-addeditbottlingplan',
  templateUrl: './addeditbottlingplan.component.html',
  styleUrls: ['./addeditbottlingplan.component.scss']
})
export class AddeditbottlingplanComponent implements OnInit {

  bottlingprodplan: any = {
    botteldate: '',
    mappunmap: '',
    liquortype: '',
    licencetype: '',
    licenceno: '',
    palnid: '',
    brand: '',
    size: '',
    noofcases: '',
    quantitybl: '',
    packagetype: '',
    noofbottlepercase: '',
    plannednoofbottles: '',
    etin: 'KF001',
    gtin: 'KF001',
    tankMaterial: "TNK001",
    tankName: "Tank 2",
    tankRegistration: "string"
  }
  productobj: any = {
    palnid: '',
    brand: '',
    size: '',
    noofcases: '',
    quantitybl: '',
    packagetype: '',
    noofbottlepercase: '',
    plannednoofbottles: ''

  }

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
    private warehouseNewbrandService: WarehouseNewbrandService

  ) { }

  ngOnInit() {
    this.getliquertype();
    this.getlicencetype();
    this.getLicensee();
    this.getPackagetype();
    this.getBrandMaster();
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
        this.bottlingprodplan.botteldate = this.bottledata.planDate,
          this.bottlingprodplan.mappunmap = this.bottledata.mapId,
          this.bottlingprodplan.liquortype = this.bottledata.liquorTypeId,
          this.bottlingprodplan.licencetype = this.bottledata.licenceTypeId,
          this.bottlingprodplan.licenceno = this.bottledata.licenceNumber,
          this.bottlingprodplan.palnid = this.bottledata.planId,
          this.bottlingprodplan.brand = this.bottledata.brandId,
          this.bottlingprodplan.size = this.bottledata.sizeId,
          this.bottlingprodplan.noofcases = this.bottledata.noOfCases,
          this.bottlingprodplan.quantitybl = this.bottledata.quantity,
          this.bottlingprodplan.packagetype = this.bottledata.packageTypeId,
          this.bottlingprodplan.noofbottlepercase = this.bottledata.nofBottlePerCase,
          this.bottlingprodplan.plannednoofbottles = this.bottledata.plannedNofBottles,
          this.bottlingprodplan.etin = 'KF001',
          this.bottlingprodplan.gtin = 'KF001'
          this.bottlingprodplan.botteldate = this.datePipe.transform(this.bottlingprodplan.botteldate, 'yyyy-MM-dd');
//this.Bwfl4Obj.bwfl4date = this.datepipe.transform(this.Bwfl4Obj.bwfl4date, 'yyyy-MM-dd');
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
  getlicencetype() {
    this.licensetypeService.getLicenseType().subscribe((responceData: any) => {
      console.log(responceData);
      this.licenceTypeList = responceData.data;
    });
  }
  getLicensee() {
    this.licenseeService.getLicensee().subscribe((responceData: any) => {
      this.licenseeData = responceData.data;
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


  saveData(data, method) {
    this.formSubmitted = false;
    if (data.valid == false) {
      this.formSubmitted = true;
    } else {

      const postingData = {

        "brandId": this.bottlingprodplan.brand,
        "entityId": 7,
        "etin": this.bottlingprodplan.etin,
        "gtin": this.bottlingprodplan.gtin,
        "id": this.viewId? this.viewId:0,
        "isactive": true,
        "licenceNumber": this.bottlingprodplan.licenceno,
        "licenceTypeId": this.bottlingprodplan.licencetype,
        "liquorTypeId": this.bottlingprodplan.liquortype,
        "mapId": this.bottlingprodplan.mappunmap,
        "noOfCases": this.bottlingprodplan.noofcases,
        "nofBottlePerCase": this.bottlingprodplan.noofbottlepercase,
        "packageTypeId": this.bottlingprodplan.packagetype,
        "planDate": this.bottlingprodplan.botteldate,
        "planId": this.bottlingprodplan.palnid,
        "plannedNofBottles": this.bottlingprodplan.plannednoofbottles,
        "productionLine": 'Tetra Line',
        "quantity": this.bottlingprodplan.quantitybl,
        "sizeId": this.bottlingprodplan.size,
        "status": method,
        "tankMaterial": 'this.bottlingprodplan',
        "tankName": 'Tank 2',
        "tankRegistration": 'TNK001',
        "workflowRemarks": 'this.bottlingprodplan',
        "workflowStage": 'this.bottlingprodplan'
      }

      if (this.viewId) {
      this.bottlingplanservice.updateplan(postingData)
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bottling/list']);
        } else {
          this.alert.showError(resp.userDisplayMesg, 'error');
        }
      })
     } else {
      this.bottlingplanservice.postbottlingplan(postingData)
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.alert.showSuccess(resp.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/warehouse/bottling/list']);
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
