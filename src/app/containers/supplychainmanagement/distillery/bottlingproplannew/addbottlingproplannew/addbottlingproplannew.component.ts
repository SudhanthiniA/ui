import { Component, OnInit, ViewChild, AfterViewInit,ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbPanelChangeEvent, NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import {
  LiquorTypeService,
  DistileryService,
  LicenseTypeService,
  LicenseeService,
  PackageTypeService,
  BrandMasterService,
  AlertService,
  WarehouseNewbrandService,
  TankregistartionService,
  PreviewService,
  WorkflowcofigService
} from '@app/services';
import { DropdownConfigService } from '@app/services';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addbottlingproplannew',
  templateUrl: './addbottlingproplannew.component.html',
  styleUrls: ['./addbottlingproplannew.component.scss']
})
export class AddbottlingproplannewComponent implements OnInit {

  bottlingprodForm: FormGroup;
  @ViewChild('dtPicker20', { static: true }) pickerInput: ElementRef;
  @ViewChild('myaccordion', { static: true }) accordion: NgbAccordion;
  customRadioInline1 = false;
  formSubmitted = false;
  editId: any;
  addedit: string;
  tankObj: any;
  workflowobj: any;
  liqourtypecode: any;
  bppapplicationnumber: any;
  bppObj: any = {}
  liquortypeList: any = [];
  licenceTypeList: any = [];
  licenseeData: any = [];
  packagetypeData: any = [];
  brandlists: any = [];
  sizelist: any[] = [];
  subliquortype: any[] = [];
  supplytype: any[] = [];
  domainlist: any[] = [];
  strengthList: any[] = [];
  edpList: any[] = [];
  etinList: any[] = [];
  tankList: any[] = [];
  tankUsageList: any[] = [];
  tankRawMaterialList: any[] = [];
  brandDetailsList: any[] = [];
  brandDetailsId: any;
  packageSizeList: any[] = [];
  productionlistdata =[];
  productionvalue:any;

  licenseTypes: any[] = [];
  isEDit:boolean = false;
  onClick: boolean = false;

  now = new Date();
  public min = new Date()
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  // minDate = new Date(this.now.setDate(this.now.getDate() - 1));
  maxDate = new Date(this.now.setDate(this.now.getDate() + 2));
  // public maxDate = moment(this.now, '').subtract;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private liquorTypeService: LiquorTypeService,
    private licensetypeService: LicenseTypeService,
    private licenseeService: LicenseeService,
    private packageService: PackageTypeService,
    private brandService: BrandMasterService,
    private alert: AlertService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private modalService: NgbModal,
    private preview: PreviewService,
    private distilleryService: DistileryService,
    private workflowService: WorkflowcofigService,
    private subliquorService: SubLiquorTypeService,
    private brandregservice: OutofupbrandService,
    private service: DropdownConfigService,
  ) { }


   ngOnInit() {
    // this.getproducationlist();
    this.getformcontrol();
    this.dropdownload();
    
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.editId = params.Id;
        this.isEDit = true;
        this.setData(this.editId);
      }
    });

    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
    // this.isEDit?this.setData(this.editId):this.dropdownload();

  }

  dropdownload(){
    this.getLicenseType();
    this.getTankUsageList();
    this.getworkflow();
    this.getapplicationnumber();
    this.getproducationlist();
    
  }


  // ngAfterViewInit() {
  //   this.bottlingprodForm.patchValue({
  //     // requestDateandtime: new Date(),
  //     // requestDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  //   })
  // }


  getLicenseType() {
    this.distilleryService.getTempLicense().subscribe((resp: any) => {
      this.licenseTypes = resp.content;
    });
  }

  async getlicensedata(data,onclick) {

    var findedData = this.licenseTypes.find(i => i.LicenseType === data);
    if (typeof findedData === 'undefined') {
      this.bottlingprodForm.patchValue({
        licenseNo: '',
        address: '',
        domain: '',
        supplyType: '',
        strength: '',
        edp: '',
        etin: '',
        gtin: '',
        liquorType: '',
        liquorsubtype: '',
        brandname: '',
        packagesize: '',
        packageType: '',
        bottlecases:'',
        noOfBottles:'',
        cases:''

      })
      
      this.sizelist = [];
      this.packagetypeData = [];
      // this.calNoCasesBLAL(this.bottlingprodForm.get('noOfBottles').value);
      this.calNoCasesBLAL(this.bottlingprodForm.get('cases').value);
      return null;
    }
    this.bottlingprodForm.patchValue({
      licenseNo: findedData.LicenseNumber,
      address: findedData.Address

    })
    this.getliquertype();
   if(!this.editId || onclick == true){
    this.bottlingprodForm.patchValue({
      domain: '',
      supplyType: '',
      strength: '',
      edp: '',
      etin: '',
      gtin: '',
      liquorType: '',
      liquorsubtype: '',
      brandname: '',
      packagesize: '',
      packageType: '',
      bottlecases:'',
      noOfBottles:'',
      cases:''

    })
    this.sizelist = [];
    this.packagetypeData = [];
    // this.calNoCasesBLAL(this.bottlingprodForm.get('noOfBottles').value);
    this.calNoCasesBLAL(this.bottlingprodForm.get('cases').value);

   }
   
    const data1 = '?licenseNumber=' + this.bottlingprodForm.get('licenseNo').value
    // this.getBrandDropdow(data1);
    return findedData;
  }

  getTankUsageList() {
    this.distilleryService.getTankUsageall().subscribe((resp: any) => {
      this.tankUsageList = resp.data;
    });
  }

  getproducationlist() {
    this.service.getDropdownByKey('PRODUCTION_LINE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
            this.productionlistdata = resp.data.downDropDownMasterValueList;
        }
      });
  }

  getTankRawMaterialList(code) {
    if (code != '') {
      this.bottlingprodForm.patchValue({
        tankRegistration: '',
        tankName: '',
        tankRawMaterialId: ''

      })
      this.tankList = [];
      this.distilleryService.getAllTankRawMaterialbasedOnTankuasagetype(code).subscribe((resp: any) => {
        this.tankRawMaterialList = resp.data;
      });

    } else {
      this.bottlingprodForm.patchValue({
        tankRegistration: '',
        tankName: '',
        tankRawMaterialId: ''

      })
      this.tankList = [];
      this.tankRawMaterialList = []

    }

  }

  getTankList(id) {
    if (id != '') {
      this.bottlingprodForm.patchValue({
        tankRegistration: '',
        tankName: '',

      })
      this.distilleryService.getAllTankbasedOnTankRawmaterial(id).subscribe((resp: any) => {
        this.tankList = resp.content;
      });

    } else {
      this.bottlingprodForm.patchValue({
        tankRegistration: '',
        tankName: '',

      })
      this.tankList = []

    }

  }

  getTankRegNo(id) {
    let tankApplicatioNo = this.tankList.find(item => item.tankRegistrationDetails.id === parseInt(id));
    if (typeof tankApplicatioNo === 'undefined') {
      this.bottlingprodForm.patchValue({
        tankRegistration: ''
      })

      return null;
    }
    this.bottlingprodForm.patchValue({
      tankRegistration: tankApplicatioNo.applicationNumber
    })
  
  }

  getFormCntr(element) {
    return this.bottlingprodForm.get(element);
  }


  getformcontrol() {
    this.bottlingprodForm = this.formBuilder.group({
      requestDateandtime: [new Date(),Validators.required],
      // requestDate: ['', Validators.required],
      distillerytype: [''],
      licenseType: ['', Validators.required],
      licenseNo: [''],
      liquorType: ['', Validators.required],
      liquorsubtype: ['', Validators.required],
      brandname: ['', Validators.required],
      packagesize: ['', Validators.required],
      packageType: ['', Validators.required],
      bottlecases: [''],
      domain: [''],
      supplyType: [''],
      strength: [''],
      edp: [''],
      etin: [''],
      gtin: [''],
      tank: ['BOTTLING'],
      tankName: ['', Validators.required],
      tankRegistration: [''],
      // noOfBottles: ['', Validators.required],
      noOfBottles:[''],
      cases: ['',Validators.required],
      quantity: [''],
      quantityAl: [''],
      production: [''],
      bottleType: [''],
      address: [''],
      tankRawMaterialId: ['', Validators.required]
    });
    this.getTankRawMaterialList(this.bottlingprodForm.get('tank').value);

  }

  getapplicationnumber() {
    this.distilleryService.getapplicationnumbers('BPP').subscribe((res: any) => {
      this.bppapplicationnumber = res.content;
    })
  }

  getworkflow() {
    this.workflowService.getworkflowbydesignation('DISTILLERY', 'DISTILLERY_BOTTLING_PRO_PLAN').subscribe((resp: any) => {
      this.workflowobj = resp.content;
    })
  }


   setData(id?) {
   
      this.distilleryService.getPBBById(id).subscribe((responceData: any) => {
       if(responceData.responseCode == 200){
        this.bppObj = responceData.content;
        console.log(this.bppObj, '=========edit only===========')

           this.editFuncal();
          
           const selectedDate = this.datePipe.transform(this.bppObj.bottlingPlanDetails.requestDate,'yyyy-MM-dd')
       
        // this.getlicensedata(this.bppObj.licenseType);
        // this.getsizelist(this.bppObj.bottlingPlanDetails.brandDetails.id);
        // this.getSubLiquorType(this.bppObj.bottlingPlanDetails.brandDetails.liquorTypeCode);
       this.bottlingprodForm.patchValue({
       
         licenseType:this.bppObj.licenseType,
         liquorType:this.bppObj.bottlingPlanDetails.brandDetails.liquorTypeCode,
         noOfBottles: this.bppObj.bottlingPlanDetails.numberOfBottles,
         cases: this.bppObj.bottlingPlanDetails.numberOfCases,
         quantity: this.bppObj.bottlingPlanDetails.quantityBL,
         quantityAl: this.bppObj.bottlingPlanDetails.quantityAL,
        //  requestDate:this.datePipe.transform(this.bppObj.bottlingPlanDetails.requestDate,'yyyy-MM-dd'),
         requestDateandtime:this.datePipe.transform(this.bppObj.bottlingPlanDetails.requestDate, 'yyyy-MM-dd'),
        //  requestDateandtime:this.bppObj.bottlingPlanDetails.requestDate,
         brandname:this.bppObj.bottlingPlanDetails.brandDetails.brandCode,
         domain: this.bppObj.bottlingPlanDetails.brandDetails.domainCode,
         supplyType: this.bppObj.bottlingPlanDetails.brandDetails.supplyTypeCode,
         strength: this.bppObj.bottlingPlanDetails.brandDetails.brandStrength,
         edp: this.bppObj.bottlingPlanDetails.brandDetails.edp,
         etin: this.bppObj.bottlingPlanDetails.brandDetails.parentEtin,
         liquorsubtype:this.bppObj.bottlingPlanDetails.brandDetails.subLiquorTypeCode,      
         distillerytype:this.bppObj.bottlingPlanDetails.distilleryType,
         tankRegistration: this.bppObj.bottlingPlanDetails.tankRegApplicationNumber?this.bppObj.bottlingPlanDetails.tankRegApplicationNumber:'',
         packagesize:this.bppObj.bottlingPlanDetails.labelDetails?this.bppObj.bottlingPlanDetails.labelDetails.packageSizeCode:'',
         packageType:this.bppObj.bottlingPlanDetails.labelDetails?this.bppObj.bottlingPlanDetails.labelDetails.packagingTypeCode:'',
         bottleType:this.bppObj.bottlingPlanDetails.bottlingType,
         bottlecases:this.bppObj.bottlingPlanDetails.labelDetails?this.bppObj.bottlingPlanDetails.labelDetails.cartonSize:'',
         gtin:this.bppObj.bottlingPlanDetails.labelDetails.gtin,
         production:this.bppObj.bottlingPlanDetails.productionLineCode,
       })
       this.getTankdetailsbyAPplicationnumber(this.bppObj.bottlingPlanDetails.tankRegApplicationNumber);
      //  this.getGtin(this.bppObj.bottlingPlanDetails.labelDetails.packagingTypeCode);
       console.log(this.licenceTypeList);
       this.getSubLiquorType(this.bppObj.bottlingPlanDetails.brandDetails.liquorTypeCode);
       this.getBrandname(this.bppObj.bottlingPlanDetails.brandDetails.subLiquorTypeCode);
       this.getDomainValue(this.bppObj.bottlingPlanDetails.brandDetails.brandCode);
       this.getSupplyType(this.bppObj.bottlingPlanDetails.brandDetails.domainCode);
       this.getStrength(this.bppObj.bottlingPlanDetails.brandDetails.supplyTypeCode);
       this.getEDP(this.bppObj.bottlingPlanDetails.brandDetails.brandStrength);
       this.getETIN(this.bppObj.bottlingPlanDetails.brandDetails.edp);
       this.getBrandId(this.bppObj.bottlingPlanDetails.brandDetails.parentEtin);
       this.brandDetailsId = parseInt(this.bppObj.bottlingPlanDetails.brandDetails.id);
       this.getPackagetype(this.bppObj.bottlingPlanDetails.labelDetails.packageSizeCode);
       }
      });

      // this.getproductioncode(this.bppObj.bottlingPlanDetails.productionLineCode);

  }

  getTankdetailsbyAPplicationnumber(applicationNo){
    let data ='?applicationNumber='+applicationNo
    this.distilleryService.getTankDetailsbyApplicatioin(data).subscribe((responceData: any) => {
      let tankDetails = responceData.content;
      this.getTankRawMaterialList(tankDetails.tankRegistrationDetails.tankUsageGroupDto.code);
      this.getTankList(tankDetails.tankRegistrationDetails.tankRawMaterialId);
      // this.getTankRegNo(tankDetails.tankRegistrationDetails.id);
      this.bottlingprodForm.patchValue({
        tank:tankDetails.tankRegistrationDetails.tankUsageGroupDto.code,
        tankRawMaterialId: tankDetails.tankRegistrationDetails.tankRawMaterialId,
        tankName: tankDetails.tankRegistrationDetails.id,
        tankRegistration:this.bppObj.bottlingPlanDetails.tankRegApplicationNumber?this.bppObj.bottlingPlanDetails.tankRegApplicationNumber:'',
      })
    });


  }

  editFuncal(){
   this.getlicensedata(this.bppObj.licenseType,false);
  //  this.getsizelist(this.bppObj.bottlingPlanDetails.brandDetails.id);
  }

  getliquertype() {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'LIQUOR_TYPE',
    }
    this.distilleryService.findBrandDropdowns(payload).subscribe((responceData: any) => {
        this.liquortypeList = responceData.content;
    });
  }

  getSubLiquorType(liquorId) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'SUB_LIQUOR_TYPE',
      liquorTypeCode: liquorId
    }
    this.liqourtypecode= liquorId;
    if (this.liqourtypecode) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {

        this.subliquortype = resp.content;
      });
    }
  }

  getBrandname(code) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'BRAND_NAME',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: code
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.brandlists = resp.content;
      });
    }
  }


  getDomainValue(code) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'DOMAIN',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: code
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.domainlist = resp.content;
      });
    }
  }

  getSupplyType(code) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'SUPPLY_TYPE',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: this.bottlingprodForm.get('brandname').value,
      domainCode: code
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.supplytype = resp.content;
      });
    }
  }

  getStrength(code?) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'STRENGTH',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: this.bottlingprodForm.get('brandname').value,
      domainCode: this.bottlingprodForm.get('domain').value,
      supplyTypeCode: code
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.strengthList = resp.content;
      });
    }
  }

  getEDP(code?) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'EDP',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: this.bottlingprodForm.get('brandname').value,
      domainCode: this.bottlingprodForm.get('domain').value,
      supplyTypeCode: this.bottlingprodForm.get('supplyType').value,
      brandStrength: parseInt(code)
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.edpList = resp.content;
      });
    }
  }

  getETIN(code?) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      brandDropdownType: 'ETIN',
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: this.bottlingprodForm.get('brandname').value,
      domainCode: this.bottlingprodForm.get('domain').value,
      supplyTypeCode: this.bottlingprodForm.get('supplyType').value,
      brandStrength: parseInt(this.bottlingprodForm.get('strength').value),
      edp: parseInt(code)
    }
    if (code) {
      this.distilleryService.findBrandDropdowns(payload).subscribe((resp: any) => {
        this.etinList = resp.content;
      });
    }
  }

  getBrandId(code?) {
    const payload = {
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      liquorTypeCode: this.liqourtypecode,
      subLiquorTypeCode: this.bottlingprodForm.get('liquorsubtype').value,
      brandCode: this.bottlingprodForm.get('brandname').value,
      domainCode: this.bottlingprodForm.get('domain').value,
      supplyTypeCode: this.bottlingprodForm.get('supplyType').value,
      brandStrength: parseInt(this.bottlingprodForm.get('strength').value),
      edp: parseInt(this.bottlingprodForm.get('edp').value),
      etin: code
    }
    if (code) {
      this.distilleryService.findBrand(payload).subscribe((resp: any) => {
        this.brandDetailsList = resp.content;
        this.brandDetailsId = resp.content.id;
        this.getPackageSize(this.brandDetailsId);
      });
    }
  }

  getPackageSize(code?){
    const payload = {
      brandDetailId: parseInt(code),
      labelDropdownType: 'PACKAGE_SIZE',
    }
    if (code) {
      this.distilleryService.findLabelDetails(payload).subscribe((resp: any) => {
        this.packageSizeList = resp.content;
      });
    }
  }

  getPackagetype(code) {
    const payload = {
      brandDetailId: this.brandDetailsId,
      labelDropdownType: 'PACKAGE_TYPE',
      packageSizeCode: code
    }
    if (code) {
      this.distilleryService.findLabelDetails(payload).subscribe((resp: any) => {
        this.packagetypeData = resp.content;
      });
    }
  }

  getBrandDropdow(data) {
     this.distilleryService.getBrandDetails(data)
      .subscribe((resp: any) => {
        this.brandlists = resp.content;
      });
  }

   getlicencetype() {
    this.licensetypeService.getLicenseType().subscribe((responceData: any) => {
      console.log(responceData);
      this.licenceTypeList = responceData.data;
      // return this.licenceTypeList;
    });
  }

  getLicensee() {
    this.licenseeService.getLicensee().subscribe((responceData: any) => {
      this.licenseeData = responceData.data;
    });
  }

  getGtin(code) {
    const {gtin,cartonSize} = this.packagetypeData.find(item => item.packagingTypeCode == code);
    this.bottlingprodForm.patchValue({
      gtin: gtin,
      bottlecases:cartonSize
    })
  }

  getsizelist(id) {

    this.distilleryService.getallmeasurement(id).subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.content;
      if(this.brandlists.length >0){
        const brandDetail = this.brandlists.find(item => item.id == id);
        this.bottlingprodForm.patchValue({
          domain: brandDetail.domainValue,
          supplyType: brandDetail.supplyTypeValue,
          strength: brandDetail.brandStrength,
          edp: brandDetail.edp,
          etin: brandDetail.parentEtin
        })
      }
    });
  
  }

   getDropdowncontrol() {
     this.brandregservice.getAllDomain().subscribe((responceData: any) => {
      if (responceData.status == 's') {
        this.domainlist = responceData.data;
      }
    });

     this.brandregservice.getsupplytype().subscribe((responceData: any) => {
      this.supplytype = responceData.data;
    });
  }

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === 'static-1') {
      $event.preventDefault();
    }
    if ($event.panelId === 'static-2' && $event.nextState === false) {
      $event.preventDefault();
    }
    if ($event.panelId === 'static-3' && $event.nextState === false) {
      $event.preventDefault();
    }
    if ($event.panelId === 'static-4' && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  calNoCasesBLAL(value) {
    // let noOfCases = value / parseInt(this.bottlingprodForm.get('bottlecases').value);
    // let bl = noOfCases * parseInt(this.bottlingprodForm.get('packagesize').value);
    // let al = (bl * this.bottlingprodForm.get('strength').value) / 100;
    // this.bottlingprodForm.patchValue({
    //   cases: noOfCases,
    //   quantity: bl,
    //   quantityAl: al,

    // })

    let noofbottles = value * parseInt(this.bottlingprodForm.get('bottlecases').value);
    let bl = value * parseInt(this.bottlingprodForm.get('packagesize').value)/1000;
    let al = (bl * this.bottlingprodForm.get('strength').value) / 100;
      this.bottlingprodForm.patchValue({
      noOfBottles: noofbottles,
      quantity: bl,
      quantityAl: al,

    })

  }


  saveBPplan(bottlingForm, status) {
    const payload = {
      applicationNumber: this.bppObj.applicationNumber,
      bottlingPlanDetails: {
        requestDate: this.bottlingprodForm.get('requestDateandtime').value,
        distilleryType: "checking",
        packageSizeCode: this.bottlingprodForm.get('packagesize').value,
        packageTypeCode: this.bottlingprodForm.get('packageType').value,
        brandDetailsId: this.brandDetailsId,
        numberOfBottles: this.bottlingprodForm.get('noOfBottles').value,
        numberOfCases: this.bottlingprodForm.get('cases').value,
        quantityBL: this.bottlingprodForm.get('quantity').value,
        quantityAL: this.bottlingprodForm.get('quantityAl').value,
        // productionLineCode: "TEST1234",
        // productionLineValue: "test",
        productionLineCode:this.bottlingprodForm.get('production').value,
        productionLineValue:this.productionvalue,
        bottlingType: this.bottlingprodForm.get('bottleType').value,
        tankRegApplicationNumber: this.bottlingprodForm.get('tankRegistration').value
      },
      comments: "Create BPP",
      licenseNumber: this.bottlingprodForm.get('licenseNo').value,
      licenseType: this.bottlingprodForm.get('licenseType').value,
      event: status,
      isDigitalSignature: this.workflowobj ? this.workflowobj.isDigitalSignature : false,
      level: this.workflowobj ? this.workflowobj.level : 'Level 1',
      status: status,
    }
    if (this.editId) {
      payload['id'] = parseInt(this.editId)
    } else {
      payload['applicationNumber'] = this.bppapplicationnumber
    }
    this.formSubmitted = false;
    if (bottlingForm.valid === false) {
      this.formSubmitted = true;
      this.accordion.expandAll()
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {
          ((this.editId) ? this.distilleryService.addBpp(payload) : this.distilleryService.addBpp(payload))
            .subscribe((responceData: any) => {
              if (responceData.responseCode == 200) {
                this.alert.showSuccess(responceData.responseMessage, 'Success');
                this.router.navigate(['/supplychainmanagement/distillery/bottlingproplannew/list']);
              } else {
                this.alert.showError(responceData.userDisplayMesg, 'error');
              }
            });
        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }



   navigatePreview(form) {
    if (form.valid === false) {
      this.formSubmitted = true;
      this.alert.showError('Please fill required Fields', 'error');
    } else {
      if (this.editId != '') {
        this.preview.setData.id = this.editId
      }

      this.router.navigate(['/supplychainmanagement/distillery/bottlingproplannew/preview']);
    }

  }

  getproductioncode(data){
    console.log('selected data -->>',data);    
    const producationlistobj = this.productionlistdata.find((resp: any) => resp.paramKey == data);
    this.productionvalue = producationlistobj.paramValue;
    console.log('su category obj', producationlistobj);
    
  }
}
