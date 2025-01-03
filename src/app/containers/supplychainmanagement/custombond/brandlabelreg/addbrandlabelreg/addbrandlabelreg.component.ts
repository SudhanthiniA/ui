import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertService, DropdownConfigService, MasterDropdownsService } from '@app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonPopupComponent } from '@app/_shared/common-popup/common-popup.component';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { BrandlabelregService } from '@appServices/distillery/brandlabelreg.service';
import { DatePipe } from '@angular/common';
import { DocumentUploadService, AuthService, CommonService } from '@app/services';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
@Component({
  selector: 'app-addbrandlabelreg',
  templateUrl: './addbrandlabelreg.component.html',
  styleUrls: ['./addbrandlabelreg.component.scss']
})
export class AddbrandlabelregComponent implements OnInit {

  // @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  @ViewChild('tabSet', { static: false }) tabSet;
  // @ViewChild('rejectModal', { static: false }) rejectModal;
  totallabelfees: any = 0;
  formSubmitted = false;
  isShelf: any;
  brandform: FormGroup;
  bottlingdetaildetails: any = [];
  myDate: any = new Date();
  createddate: any = new Date();
  applicationno: any = {};
  newExiting: any;
  domin: any;
  suppyType: any;
  edp: any;
  tradeMark: any;
  registration: any;
  shelf: any;
  years: any;
  material: any;
  measurement: any;
  brandeName = false;
  brandeNameSelect = false;
  subliquortype: any;
  liquortypeList: any;
  liqour: any;
  liqourDetailed: any;
  package: any;
  subliqourlist: any;
  editId: any;
  // formSubmitted: boolean;
  packageType: any;

  fileArr = {
    ['LabelFiles']: []
  };
  listofBrand: any;
  licensenodata: any = [];
  address: any;
  bottlingUnitAddress: any = {};
  addedit: string;
  editdata: any;
  brandLabelExistingData: any;
  existingLabelData: any;
  tradeMarkfile: any;
  brandownershipfile: any;
  affidavitFiles: any;
  selfExpiryFiles: any;
  firstfile: any;
  secondfile: any;
  thirdfile: any;
  isExistNew: boolean;
  isNext: boolean = true;
  isPreview: boolean;
  isBack: boolean;
  isSubmit: boolean;
  status: any;
  constructor(
    private router: Router,
    private alert: AlertService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private brandlabelregService: BrandlabelregService,
    private route: ActivatedRoute,
    private documentUploadService: DocumentUploadService,
    private authService: AuthService,
    private dropDownService: DropdownConfigService,
    private datepipe: DatePipe
  ) {
    this.myDate = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
    this.createddate = this.datepipe.transform(this.createddate, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.createFormGrp();
    this.route.params.subscribe(params => {
      if (params.id) {
        this.editId = params.id;
        this.setData(this.editId);
        this.getAllexistingDropdown()
        this.selectNewExisting();
        this.getallBrands();
      } else {
        this.bottlingdetaildetail();
        this.getapplicationnumber();
        // this.getAlldropdown();
        this.getallBrands();
        this.selectNewExisting();
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';

  }
  selectNewExisting() {
    this.dropDownService.getDropdownByKey('NEW_EXISTING')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.newExiting = resp.data.downDropDownMasterValueList;
        }
      });
  }
  bottlingdetaildetail() {
    let data = [];
    this.brandlabelregService.getdetails().subscribe((responceData: any) => {
      if (responceData.content.length > 0) {
        this.bottlingdetaildetails = [...new Map(responceData.content.map(item =>
          [item.licenseSubCategory, item])).values()];
        if (this.editId) {
          const licensenumber = this.editdata.licenseNumber;
          this.getaddress(licensenumber);
        }
      } else {
        this.bottlingdetaildetails = responceData.content;
        this.getaddress(responceData.content.licenseNumber);
      }

    });
  }
  getlicensenumber(value) {
    this.licensenodata = [];
    this.bottlingdetaildetails.forEach(ele => {
      if (ele.licenseSubCategory === value) {
        const Obj = {
          licenseno: ele.licenseNumber
        };
        this.licensenodata.push(Obj);
      }
    });
    console.log(this.licensenodata)
  }
  getaddress(licensenumber) {
    this.bottlingUnitAddress = this.bottlingdetaildetails.find(ele => ele.licenseNumber === licensenumber);
    this.bottlingUnitAddress.address = (this.bottlingUnitAddress ? this.bottlingUnitAddress.street : '') + ',' +
      (this.bottlingUnitAddress ? this.bottlingUnitAddress.tahsilDesc : '') + ',' +
      (this.bottlingUnitAddress ? this.bottlingUnitAddress.districtDesc : '') + ',' +
      (this.bottlingUnitAddress ? this.bottlingUnitAddress.stateDesc : '') + ',' +
      (this.bottlingUnitAddress ? this.bottlingUnitAddress.pinCode : '');
    console.log(this.bottlingUnitAddress);
  }

  createFormGrp() {
    this.brandform = this.formBuilder.group({
      newExist: ['', Validators.required],
      brandName: [''],
      brandValue: ['', Validators.required],
      regForValue: [''],
      originValue: ['', Validators.required],
      trademarkNameValue: ['', Validators.required],
      liquorTypeValue: ['', Validators.required],
      subLiquorTypeValue: ['', Validators.required],
      liquorDetailedDescValue: ['', Validators.required],
      brandStrength: ['', Validators.required],
      brandSupplyTypeValue: ['', Validators.required],
      brandDomainValue: ['', Validators.required],
      edp: [''],
      shelfLifeValue: [''],
      parentEtin: [''],
      edpCategoryValue: ['', Validators.required],
      regNoOfYearsValue: ['', Validators.required],
      validityOfReg: ['', Validators.required],
      brandRegFees: ['', Validators.required],
      trademarkUpload: [''],
      trademarkUploadFiles: [''],
      brandownershipCertificate: [''],
      brandownershipCertificateFiles: [''],
      affidavitUpload: [''],
      affidavitUploadFiles: [''],
      selfExpiryDoc: [''],
      selfExpiryDocFiles: [''],
      licensetype: ['', Validators.required],
      licenseno: ['', Validators.required],
      productList: this.formBuilder.array([
        this.productsformgroup()
      ]),
      labelList: this.formBuilder.array([
        this.labelformgroup()
      ])
    });

  }
  get labelDetails() {
    return this.brandform.get('labelList')['controls'];
    //  return this.brandform.get('labelList') as FormArray;
  }
  lableDetailss(): FormArray {
    return this.brandform.get('labelList') as FormArray;
  }
  Select(event) {
    const eventValue = event;
    if (eventValue === 'NEW') {
      this.brandeName = true;
      this.brandeNameSelect = false;
      this.getapplicationnumber();
      this.getAlldropdown();
      this.getallBrands();
    } else {
      this.brandeName = false;
      this.brandeNameSelect = true;
      this.getAllexistingDropdown();
      this.brandlabelregService.brandLabelExisting()
        .subscribe((resp: any) => {
          this.existingLabelData = resp.data;
          this.brandLabelExistingData = resp.data;
          this.liqour = resp.data;
          this.subliqourlist = resp.data;
          this.liqourDetailed = resp.data;
          this.edp = resp.data;
        });

    }
  }
  getLiquorType(brandCode) {
    const LiquorType = this.brandform.get('liquorTypeValue').value;
    if (!LiquorType) {
      this.liqour = this.existingLabelData.filter(el => el.brandCode == brandCode);
      this.brandform.patchValue({
        brandRegFees: this.liqour[0].brandRegFees,
        brandStrength: this.liqour[0].brandStrength,
        edp: this.liqour[0].edp,
        parentEtin: this.liqour[0].parentEtin
      });
      console.log(this.liqour.brandRegFees);
      console.log(this.liqour);
    } else {
      this.liqour = this.existingLabelData.filter(el => el.brandCode == brandCode);
      this.brandform.patchValue({
        brandRegFees: this.liqour[0].brandRegFees,
        brandStrength: this.liqour[0].brandStrength,
        edp: this.liqour[0].edp,
        parentEtin: this.liqour[0].parentEtin
      });
      console.log(this.liqour.brandRegFees);
    }

  }
  getExistSubLiquorType(liquortype) {
    const subLiquorType = this.brandform.get('subLiquorTypeValue').value;
    if (!subLiquorType) {
      this.subliqourlist = this.existingLabelData.filter(el => el.liquorTypeCode == liquortype);
      this.brandLabelExistingData = this.subliqourlist;
      this.liqour = this.subliqourlist;
      if (liquortype === 'LT003') {
        this.isShelf = true;
        this.brandform.controls['shelfLifeValue'].setValidators(Validators.required);
      } else {
        this.isShelf = false;
      }
    } else {
      this.subliqourlist = this.existingLabelData.filter(el => el.liquorTypeCode == liquortype);
      this.brandLabelExistingData = this.subliqourlist;
      // this.liqour = this.subliqourlist;
      if (liquortype === 'LT003') {
        this.isShelf = true;
        this.brandform.controls['shelfLifeValue'].setValidators(Validators.required);
      } else {
        this.isShelf = false;
      }
    }
  }
  getLiquorDetailDesc(subliquorType) {
    const liquorDetailDes = this.brandform.get('liquorDetailedDescValue').value;
    if (!liquorDetailDes) {
      this.liqourDetailed = this.existingLabelData.filter(el => el.subLiquorTypeCode == subliquorType);
      this.edp = this.liqourDetailed;
      this.brandLabelExistingData = this.liqourDetailed;
      this.liqour = this.liqourDetailed;
    } else {
      this.liqourDetailed = this.existingLabelData.filter(el => el.subLiquorTypeCode == subliquorType);
      this.edp = this.liqourDetailed;
      this.brandLabelExistingData = this.liqourDetailed;
      this.liqour = this.liqourDetailed;
      this.subliqourlist = this.liqourDetailed;
    }
  }
  getEdpCategory(liquorDetDes) {
    this.edp = this.existingLabelData.filter(el => el.liquorDetailedDescCode == liquorDetDes);
    this.liqour = this.edp;
    this.liqourDetailed = this.edp;
    this.brandLabelExistingData = this.edp;
    this.subliqourlist = this.edp;
  }
  getSubLiquorType(liquorId) {
    if (liquorId) {
      this.dropDownService.findDependentValuesByFilterCodeAndSubCode('LIQUOR_TYPE', liquorId)
        .subscribe((resp: any) => {
          this.subliqourlist = resp.data;
        });
      if (liquorId === 'LT003') {
        this.isShelf = true;
        this.brandform.controls['shelfLifeValue'].setValidators(Validators.required);
      } else {
        this.isShelf = false;
      }
    }
  }
  getAlldropdown() {
    this.dropDownService.getDropdownByKey('DOMAIN_MASTER')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.domin = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('LIQUOR_SUPPLY_TYPE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.suppyType = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('EDP_CATEGORY')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.edp = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('TRADEMARK_NAME')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.tradeMark = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('REGISTRATION_FOR')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.registration = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('SHELF_LIFE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.shelf = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('REG_FOR_NO_OF_YEARS')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.years = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('RAW_MATERIAL')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.material = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('MEASUREMENT_UNIT')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.measurement = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('LIQUOR_TYPE ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.liqour = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('LIQUOR_DETAILED_DESC ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.liqourDetailed = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('PACKAGE_SIZE ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.package = resp.data.downDropDownMasterValueList;
        }
      });

    this.dropDownService.getDropdownByKey('PACKAGING_TYPE ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.packageType = resp.data.downDropDownMasterValueList;
        }
      });
  }
  getAllexistingDropdown() {

    this.dropDownService.getDropdownByKey('DOMAIN_MASTER')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.domin = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('LIQUOR_SUPPLY_TYPE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.suppyType = resp.data.downDropDownMasterValueList;
        }
      });

    this.dropDownService.getDropdownByKey('TRADEMARK_NAME')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.tradeMark = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('REGISTRATION_FOR')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.registration = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('SHELF_LIFE')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.shelf = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('REG_FOR_NO_OF_YEARS')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.years = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('RAW_MATERIAL')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.material = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('MEASUREMENT_UNIT')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.measurement = resp.data.downDropDownMasterValueList;
        }
      });
    this.dropDownService.getDropdownByKey('PACKAGE_SIZE ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.package = resp.data.downDropDownMasterValueList;
        }
      });

    this.dropDownService.getDropdownByKey('PACKAGING_TYPE ')
      .subscribe((resp: any) => {
        if (resp.errorCode === 200) {
          this.packageType = resp.data.downDropDownMasterValueList;
        }
      });
  }
  getallBrands() {
    this.dropDownService.getallbrands().subscribe((resp: any) => {
      this.listofBrand = resp.data;
    });
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  nexttoraw(status) {
    console.log(this.tabSet.activeId);
   // alert(this.tabSet.activeId)
    if (this.tabSet.activeId === status) {
      this.tabSet.select('label');
    }
    if (this.tabSet.activeId === 'branddetails') {
      this.tabSet.select('raw');
      this.isNext = true;
      this.isPreview = true;
      this.isBack = true;
      this.isSubmit = false;
    }
    if (this.tabSet.activeId === 'label') {
      this.isNext = false;
      this.isPreview = true;
      this.isBack =true;
      this.isSubmit = true;
    }
  }
  beforeChange($event: NgbTabChangeEvent) {
   // console.log($event.activeId)
    if($event.nextId == "branddetails") {
      this.isNext = true;
      this.isPreview = true;
      this.isBack = false;
      this.isSubmit = false;
    } else if($event.nextId == "raw") {
      this.isNext = true;
      this.isPreview = true;
      this.isBack = true;
      this.isSubmit = false;
    } else if($event.nextId == "label") {
      this.isNext = false;
      this.isPreview = true;
      this.isBack = true;
      this.isSubmit = true;
    }
  }

  backtoraw() {
    if (this.tabSet.activeId === 'raw') {
      this.tabSet.select('branddetails');
      this.isNext = true;
      this.isPreview = false;
    }
    if (this.tabSet.activeId === 'label') {
      this.tabSet.select('raw');
      this.isNext = true;
      this.isPreview = true;
    }
  }

  productsformgroup(data?: any) {
    return this.formBuilder.group({
      rawMaterialNameValue: data && data.rawMaterialNameValue || ['', Validators.required],
      rawMaterialDescValue: data && data.rawMaterialDescValue || ['', Validators.required],
      quantity: data && data.quantity || ['', Validators.required],
      id: data && data.id || ''

    });
  }

  labelformgroup(data?: any): FormGroup {
    return this.formBuilder.group({
      packagingSizeValue: data && data.packagingSizeValue || ['', Validators.required],
      packagingTypeValue: data && data.packagingTypeValue || ['', Validators.required],
      supplyTypeValue: data && data.supplyTypeValue || ['', Validators.required],
      domainValue: data && data.domainValue || ['', Validators.required],
      gtin: data && data.gtin || ['', Validators.required],
      cartonSize: data && data.cartonSize || ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      noOfLabels: data && data.noOfLabels || ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      labelFees: data && data.labelFees || ['', Validators.required],
      uploadLabel: data && data.labelFees || '',
      selectone: data && data.selectone || '',
      selecttwo: data && data.selecttwo || '',
      selectthree: data && data.selectthree || '',
      id: data && data.id || '',
      uploadLabelList: this.formBuilder.array([])
    });
  }

  uploadLabelList(dat?: any): FormGroup {
    return this.formBuilder.group({
      description: dat && dat.description || '',
      fileone: dat && dat.documentName || '',
      fileoneSource: '', // dat && dat.fileoneSource ||
    })
  }

  onFileChangeNew(event, sourceName, fileFor, formControl) {
    if (this.editId) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        if (sourceName === 'trademarkUploadFiles') {
          this.tradeMarkfile = file.name;
          console.log(this.tradeMarkfile);
        } else if (sourceName === 'brandownershipCertificateFiles') {
          this.brandownershipfile = file.name;
        } else if (sourceName === 'affidavitUploadFiles') {
          this.affidavitFiles = file.name;
        } else if (sourceName === 'selfExpiryDocFiles') {
          this.selfExpiryFiles = file.name;
        } else if (sourceName === 'fileone') {
          this.firstfile = file.name;
        }
        file.fileFor = fileFor;
        formControl.patchValue({ [sourceName]: file });
        return true;
      }
      return false;
    } else {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        file.fileFor = fileFor;
        formControl.patchValue({ [sourceName]: file });
        return true;
      }
      return false;
    }
  }

  onFirmCompanyFileChange(event, idx, formControl, sourceName, fileFor) {
    const secName = 'LabelFiles';
    const filesize = event.target.files[0].size;
    const maxfilesize = 1024 * 1024;
    if (filesize < maxfilesize) {
      const fileUpRes = this.onFileChangeNew(event, sourceName, fileFor, formControl);
      if (!fileUpRes) {
        return false;
      }
      console.log('labelList::', this.brandform.value.labelList);
      if (this.fileArr[secName][idx]) {
        this.fileArr[secName][idx].push(sourceName);
      } else {
        this.fileArr[secName][idx] = [];
        this.fileArr[secName][idx].push(sourceName);
      }
      console.log('fileArr::', this.fileArr);
    } else {
      this.alert.showError('Upload Less Then 1MB Size Photo');
    }
  }


  async uploadFirmCompanyFiles(applicationNo) {
    console.log('this.fileArr::', this.fileArr)
    const files = this.fileArr['LabelFiles'];
    const allUpRes = [];

    if (files.length === 0) {
      return [];
    }
    console.log('files::', files);
    console.log('files length::', files.length);
    console.log('labelList::', this.brandform.get('labelList')['controls']);
    const labelList = this.brandform.get('labelList')['controls'];
    for (let idx = 0; idx < labelList.length; idx++) {
      // tslint:disable-next-line: no-string-literal
      console.log(idx);
      const formCntrl = this.brandform.get('labelList')['controls'][idx];
      console.log('formCntrl::', formCntrl.value);
      const formCntrl2 = formCntrl.get('uploadLabelList');
      console.log('formCntrl2::', formCntrl2.value);

      const fileArr = files[idx];
      console.log('files::', files);
      const upRes = await this.createFormData(applicationNo, fileArr, formCntrl2, idx);
      allUpRes.push(upRes);
    }
    return allUpRes;
  }

  async createFormData(applicationNo, files, formCntr, idx) {
    if (files.length === 0) {
      return [];
    }
    const formData = new FormData();
    console.log(files.length);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      const fileStr = files[i];
      console.log(formCntr);
      console.log(formCntr.value[i]);
      if (formCntr.value[i]) {
        const fileSrc = formCntr.value[i][fileStr];
        formData.append('files[' + i + '].name', fileSrc.fileFor);
        formData.append('files[' + i + '].file', fileSrc);
        formData.append('description[' + i + ']', formCntr.value[i]['description']);
      }
    }

    formData.append('moduleName', 'distillery');
    formData.append('screenName', 'brandlabelregistration');
    formData.append('applicationNumber', applicationNo);

    this.authService.fileUploadFlag = true;
    const res: any = await this.documentUploadService.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    let res2 = res.forEach((el: any, i) => {
      if (el) {
        el['description'] = formCntr.value[i]['description'];
      }
    })
    console.log("labelsDatarkrkrk", res);
    return res;
  }

  addgroup() {
    (this.brandform.get('productList') as FormArray).push(this.productsformgroup());
  }

  deleterow(i) {
    (this.brandform.get('productList') as FormArray).removeAt(i);
  }

  getPresFormLength(): number {
    return (this.brandform.get('productList') as FormArray).length;
  }

  addlabelgroup() {
    (this.brandform.get('labelList') as FormArray).push(this.labelformgroup());
  }

  deletelabelrow(i) {
    (this.brandform.get('labelList') as FormArray).removeAt(i);
  }

  getlabelFormLength(): number {
    return (this.brandform.get('labelList') as FormArray).length;
  }

  uploadLabels(labelInd: number): FormArray {
    return this.lableDetailss().at(labelInd).get('uploadLabelList') as FormArray;
  }

  addUploaLabeldRows(labelIndex: number, noOfLabels) {
    (this.lableDetailss().at(labelIndex).get('uploadLabelList') as FormArray).clear();
    for (var i = 0; i < parseInt(noOfLabels, 10); i++) {
      this.uploadLabels(labelIndex).push(this.uploadLabelList());
    }
  }
  clearRow(labelIndex:number, uploadIndex:number) {
    (this.lableDetailss().at(labelIndex).get('uploadLabelList') as FormArray).at(uploadIndex).reset();
    this.fileArr.LabelFiles[labelIndex].splice(uploadIndex,1);
    console.log("clear::", this.fileArr.LabelFiles[labelIndex]);
  }
  rejectConfirmation() {
    $('#rejectModal').modal('show');
  }

  setData(id) {
    this.brandlabelregService.getById(id).subscribe((responceData: any) => {
      this.editdata = responceData.data;
      this.status = responceData.data.status;
      const licensesvalue = this.editdata.licenseDetailsResponse.licenseSubCategory;
      this.bottlingdetaildetail();
      this.Select(this.editdata.newExistCode);
      this.getSubLiquorType(this.editdata.liquorTypeCode);
      setTimeout(() => {
        this.getlicensenumber(licensesvalue);
      }, 300)
      const newexist = this.brandform.get('newExist').value;
      console.log(this.editdata.brandRawMaterialList[0].quantity);
      if (responceData.status === 's') {
        this.brandform.patchValue({
          licensetype: this.editdata.licenseDetailsResponse.licenseSubCategory,
          licenseno: this.editdata.licenseDetailsResponse.licenseNumber,
          newExist: this.editdata.newExistCode,
          regForValue: this.editdata.regForCode,
          originValue: this.editdata.originCode,
          brandValue: this.editdata.brandCode,
          trademarkNameValue: this.editdata.trademarkNameCode,
          liquorTypeValue: this.editdata.liquorTypeCode,
          subLiquorTypeValue: this.editdata.subLiquorTypeCode,
          liquorDetailedDescValue: this.editdata.liquorDetailedDescCode,
          brandStrength: this.editdata.brandStrength,
          brandSupplyTypeValue: this.editdata.supplyTypeCode,
          brandDomainValue: this.editdata.domainCode,
          edp: this.editdata.edp,
          edpCategoryValue: this.editdata.edpCategoryCode,
          shelfLifeValue: this.editdata.shelfLifeCode,
          parentEtin: this.editdata.parentEtin,
          regNoOfYearsValue: this.editdata.regNoOfYearsCode,
          validityOfReg: this.editdata.validityOfReg,
          brandRegFees: this.editdata.brandRegFees,
        });
        const labelcontrol = this.brandform.get('labelList') as FormArray;
        const rawcontrol = this.brandform.get('productList') as FormArray;
        responceData.data.brandRawMaterialList.forEach((element, i) => {
          const rawobj = {
            rawMaterialDescValue: element.rawMaterialDescCode,
            rawMaterialNameValue: element.rawMaterialNameCode,
            quantity: element.quantity,
            id: element.id,
          };
          console.log(element[i], 'hiiiii');
          console.log(element, 'helllo');
          rawcontrol.push(this.productsformgroup(rawobj));
          (this.brandform.get('productList') as FormArray).removeAt(0);
        });
        (this.brandform.get('labelList') as FormArray).removeAt(0);
        responceData.data.labelDetailList.forEach((element, i) => {
          const labelobj = {
            packagingSizeValue: element.packagingSizeCode,
            packagingTypeValue: element.packagingTypeCode,
            supplyTypeValue: element.supplyTypeCode,
            domainValue: element.domainCode,
            gtin: element.domainCode,
            cartonSize: element.cartonSize,
            noOfLabels: element.noOfLabels,
            labelFees: element.labelFees,
            id: element.id
          };
          console.log('element::', element)
          console.log('labelobj::', labelobj)
          labelcontrol.push(this.labelformgroup(labelobj));
          element.labelDetailDocumentList.forEach((ele, j) => {
            let uploadList = this.uploadLabelList(ele);
            this.uploadLabels(i).push(uploadList);
          });
        });

      }
    });

  }

  addbrandLabel(form, method) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const modalRef = this.modalService.open(CommonPopupComponent);
      modalRef.result.then(respData => {
        if (respData) {

        }
      }).catch(err => {
        console.log('\n err...', err);
      });
    }
  }

  handleResponse(responceData: any) {
    if (responceData.status === 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.router.navigate(['supplychainmanagement\distillery\brandlabelreg\list']);
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
    }
  }

  async uploadDocuments(applicationNo, fileArrList) {
    console.log('applicationNo::', applicationNo);
    console.log('fileArrList::', fileArrList);
    const formData = new FormData();
    let uploadFlag = false;
    if (fileArrList) {
      for (let i = 0; i < fileArrList.length; i++) {
        // console.log(fileArrList[i].fileSource)
        // console.log(this.brandform.get(fileArrList[i].fileSource).value)
        // console.log(this.brandform.get(fileArrList[i].fileSource));
        // console.log('i::', i);
        if (this.brandform.get(fileArrList[i].fileSource).value) {
          uploadFlag = true;
          formData.append('files[' + i + '].name', fileArrList[i].name);
          formData.append('files[' + i + '].file', this.brandform.get(fileArrList[i].fileSource).value);
        }
      }
    }

    formData.append('moduleName', 'distillery');
    formData.append('screenName', 'brandlabelregistration');
    formData.append('applicationNumber', applicationNo);

    console.log('formData::', formData);
    if (uploadFlag) {
      this.authService.fileUploadFlag = true;
      const res: any = await this.documentUploadService.uploadDocuments(formData);
      this.authService.fileUploadFlag = false;
      const uploadDoc = res.map(item => {
        return {
          documentName: item.documentName,
          name: item.name,
          status: true,
          uuid: item.uuid
        };
      });
      return uploadDoc;
    } else {
      return null;
    }
  }

  getDocumentName(name) {
    // console.log('name::', name);
    // return this.editdata ? this.editdata.brandDetailDocumentsList.find(data => data.name === name).documentName : '';
  }

  async uploaddoc(applicationno) {
    const applicantDocuments = [
      { name: 'Upload TradeMark Registration', fileSource: 'trademarkUploadFiles' },
      { name: 'Upload Brand Ownership Certificate', fileSource: 'brandownershipCertificateFiles' },
      { name: 'Upload Affidavit', fileSource: 'affidavitUploadFiles' },
      { name: 'Self Expiry Document', fileSource: 'selfExpiryDocFiles' },
      // { name: 'Upload Label Sample', fileSource: 'uploadLabelSampleFiles' },
    ];

    const applicantDocumentsUploadedDetails = await this.uploadDocuments(applicationno, applicantDocuments);
    return applicantDocumentsUploadedDetails;
    // await this.uploaddocs(uploadObj, regviewform);
  }

  async getapplicationnumber() {

    this.brandlabelregService.getapplicationnumbers('BR_').subscribe((res: any) => {
      this.applicationno = res.content;
    });

    return this.applicationno;

  }

  totallabelfee() {
    this.totallabelfees = 0;
    const labeldetaillist = this.brandform.value.labelList.map((numb: any, i) => {
      this.totallabelfees += parseInt(numb.labelFees);
      console.log(this.totallabelfee);
    });
  }

  combineArr(oldArr, newArr) {
    if (newArr && newArr.length > 0) {
      newArr.forEach(element => {
        const ind = oldArr.findIndex((item) => item.name === element.name);
        if (ind !== -1) {
          oldArr[ind] = element;
        } else {
          oldArr.push(element);
        }
      });

    }
    return oldArr;
  }

  async addbrandDetails(brandform, method) {
    const form = this.brandform.value;
    this.formSubmitted = false;
    console.log('brandform::', brandform.invalid);
    if (brandform.invalid) {
      this.formSubmitted = true;
      return false;
    }

    const event = (method === 'SUBMITTED' || method === 'DRAFT') ? 'INITIATE' : method;
    const applicationno = await this.getapplicationnumber();
    let documentDetails: any = await this.uploaddoc(applicationno);
    const uploadFirmCompanyFiles = await this.uploadFirmCompanyFiles(this.applicationno);

    if (this.editdata) {
      documentDetails = this.combineArr(this.editdata.brandDetailDocumentsList, documentDetails);
    }

    const brandrawlist = brandform.value.productList.map((ele: any) => {
      return {
        brandDetail: {},
       // id:ele.id || '',
        quantity: ele.quantity,
        rawMaterialDescCode: ele.rawMaterialDescValue,
        rawMaterialDescValue: (ele.rawMaterialDescValue) ? this.measurement.find(data => data.paramKey === ele.rawMaterialDescValue).paramValue : '',
        rawMaterialNameCode: ele.rawMaterialNameValue,
        rawMaterialNameValue: (ele.rawMaterialNameValue) ? this.material.find(data => data.paramKey === ele.rawMaterialNameValue).paramValue : '',
      };
    });
    let documentdetaillist = []
    if (documentDetails) {
      documentdetaillist = documentDetails.map((elee: any) => {
        return {
          documentName: elee.documentName,
          status: elee.status,
          name: elee.name,
          uuid: elee.uuid
        };
      });
    }
    // let totallabelfee = 0;
    let labeldetaillist = []
    if (brandform.value.labelList.length > 0) {
      labeldetaillist = brandform.value.labelList.map((eleee: any, idx) => {
        let labelObj = {
          applicationNumber: this.applicationno,
          cartonSize: eleee.cartonSize,
          domainCode: eleee.domainValue,
          domainValue: this.domin.find(data => data.paramKey === eleee.domainValue).paramValue,
          etin: 'string',
          gtin: eleee.gtin,
          labelDetailDocumentList: uploadFirmCompanyFiles[idx],
          labelFees: eleee.labelFees,
          noOfLabels: eleee.noOfLabels,
          packagingSizeCode: eleee.packagingSizeValue,
          packagingSizeValue: this.package.find(data => data.paramKey === eleee.packagingSizeValue).paramValue,
          packagingTypeCode: eleee.packagingTypeValue,
          packagingTypeValue: this.packageType.find(data => data.paramKey === eleee.packagingTypeValue).paramValue,
          status: 'INITIATE',
          supplyTypeCode: eleee.supplyTypeValue,
          supplyTypeValue: this.suppyType.find(data => data.paramKey === eleee.supplyTypeValue).paramValue
        };
        if (this.editId) {
          labelObj['id'] = eleee.id
        } 
        return labelObj
      });
    }
    const subliquorType = form.newExist === 'EXISTING' ? this.subliqourlist.find(
      data => data.subLiquorTypeCode === form.subLiquorTypeValue).subLiquorTypeValue : this.subliqourlist.find(data => data.paramKey === form.subLiquorTypeValue).paramValue;
    const brandcode = form.newExist === 'EXISTING' ? this.brandLabelExistingData.find(data => data.brandCode == form.brandValue).brandCode : form.brandValue;
    const postParam = {
      applicationNumber: this.applicationno,
      brandCode: brandcode,
      createdDate: this.myDate,
      createdBy: parseInt(localStorage.getItem('USER_ID')),
      modifiedDate: this.editId ? this.myDate : '',
      modifiedBy: parseInt(localStorage.getItem('USER_ID')),
      brandDetailCommentsList: [],
      brandDetailDocumentsList: documentdetaillist || '',
      brandRawMaterialList: brandrawlist,
      brandRegFees: form.brandRegFees,
      brandStrength: form.brandStrength,
      brandValue: form.newExist === 'EXISTING' ? form.brandValue : '',
      comments: method == 'SUBMITTED' ? "application submitted" : '',
      domainCode: form.brandDomainValue,
      domainValue: this.domin.find(data => data.paramKey == form.brandDomainValue).paramValue,
      edp: form.edp,
      edpCategoryCode: form.edpCategoryValue,
      edpCategoryValue: form.newExist === 'EXISTING' ? this.edp.find(
        data => data.edpCategoryCode === form.edpCategoryValue).edpCategoryValue :
        this.edp.find(data => data.paramKey === form.edpCategoryValue).paramValue,
      event,
      isDigitalSignature: true,
      isShowButtons: true,
      labelDetailList: labeldetaillist,
      level: 'Level 1',
      licenseDetailsResponse: {
        // country: this.bottlingUnitAddress.country,
        // districtDesc: this.bottlingUnitAddress.districtDesc,
        // licenseCategory: this.bottlingUnitAddress.licenseCategory,
        // licenseCategoryDesc: this.bottlingUnitAddress.licenseCategoryDesc,
        // licenseExpiryDate: this.bottlingUnitAddress.licenseExpiryDate,
        // licenseIssueDate: this.bottlingUnitAddress.licenseIssueDate,
        // licenseNumber: form.licenseno,
        // licenseSubCategory: this.bottlingUnitAddress.licenseSubCategory,
        // licenseSubCategoryDesc: this.bottlingUnitAddress.licenseSubCategoryDesc,
        // parentDetails: {},
        // pinCode: this.bottlingUnitAddress.pinCode,
        // stateDesc: this.bottlingUnitAddress.stateDesc,
        // street: this.bottlingUnitAddress.street,
        // tahsilDesc: this.bottlingUnitAddress.tahsilDesc,
        // unitName: this.bottlingUnitAddress.unitName,
        // unitType: this.bottlingUnitAddress.unitType
      },
      licenseNumber: form.licenseno,
      licenseType: form.licensetype,
      unitName: this.bottlingUnitAddress.unitName,
      liquorDetailedDescCode: form.liquorDetailedDescValue,
      liquorDetailedDescValue: form.newExist === 'EXISTING' ? this.liqourDetailed.find(
        data => data.liquorDetailedDescCode == form.liquorDetailedDescValue).liquorDetailedDescValue :
        this.liqourDetailed.find(data => data.paramKey === form.liquorDetailedDescValue).paramValue,
      liquorTypeCode: form.liquorTypeValue,
      liquorTypeValue: form.newExist === 'EXISTING' ? this.liqour.find(
        ly => ly.liquorTypeCode === form.liquorTypeValue).liquorTypeValue :
        this.liqour.find(ly => ly.paramKey === form.liquorTypeValue).paramValue,
      originCode: form.originValue,
      originValue: this.domin.find(data => data.paramKey === form.originValue).paramValue,
      parentEtin: form.parentEtin,
      regForCode: form.regForValue ? form.regForValue : '',
      regForValue: form.regForValue ? this.registration.find(data => data.paramKey === form.regForValue).paramValue : '',
      regNoOfYearsCode: form.regNoOfYearsValue,
      regNoOfYearsValue: this.years.find(data => data.paramKey === form.regNoOfYearsValue).paramValue,
      sentBackLevels: 'string',
      shelfLifeCode: form.shelfLifeValue ? form.shelfLifeValue : '',
      shelfLifeValue: form.shelfLifeValue ? this.shelf.find(data => data.paramKey === form.shelfLifeValue).paramValue : '',
      stage: 'stage',
      stageDesc: 'stageDesc',
      status: method,
      subLiquorTypeCode: form.subLiquorTypeValue,
      subLiquorTypeValue: subliquorType,
      supplyTypeCode: form.brandSupplyTypeValue,
      supplyTypeValue: this.suppyType.find(data => data.paramKey === form.brandSupplyTypeValue).paramValue,
      trademarkNameCode: form.trademarkNameValue,
      trademarkNameValue: this.tradeMark.find(data => data.paramKey === form.trademarkNameValue).paramValue,
      validityOfReg: form.validityOfReg,
      newExistCode: form.newExist,
      newExistValue: this.newExiting.find(data => data.paramKey === form.newExist).paramValue
    };
    if (this.editId) {
      postParam['id'] = this.editId;
    }
    console.log('postParam:: ', postParam);
    this.brandlabelregService.addetails(postParam).subscribe((responceData: any) => {
      if (responceData.errorCode == 201) {
        if (method === 'SUBMITTED' && this.status == 'SENDBACK') {
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/list']);
        } else if(method === 'SUBMITTED') {
          sessionStorage.setItem('applicationNo', this.applicationno);
          sessionStorage.setItem('unitAddress', this.bottlingUnitAddress.address);
          sessionStorage.setItem('unitName', this.bottlingUnitAddress.unitName);
          sessionStorage.setItem('brandFees', form.brandRegFees);
          sessionStorage.setItem('labelFees', this.totallabelfees);
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          let  id = responceData.data.id;
          this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/payment/',id]);
        } else {
          this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/brandlabelreg/list']);
        }
      } else {
        this.alert.showError(responceData.userDisplayMesg);
      }
    });
  }

  onFileChange(event, sourceName, form) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.brandform.patchValue({
        [sourceName]: file
      });
    }
  }
  getFormCntr(element) {
    return this.brandform.get(element);
  }
  indenxno(i) {
    console.log(this.brandform.get('labelList'))
    const key = '#' + i;
    console.log(key);
    $(key).modal();
  }
  registrationYear(event) {
    const registeryerar = event.target.options[event.target.options.selectedIndex].text;
    const dt = new Date();
    const currentYear: any = dt.getFullYear();
    const validityYear = parseInt(registeryerar) + parseInt(currentYear);
    // alert(validityYear)
    this.brandform.patchValue({
      validityOfReg: validityYear
    });
  }
  selLabelPckSize(event) {

  }
}
