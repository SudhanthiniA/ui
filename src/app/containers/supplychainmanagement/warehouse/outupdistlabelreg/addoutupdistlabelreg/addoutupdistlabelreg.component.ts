import { Component, OnInit, ViewChild } from '@angular/core';
import { OutsidelabelService } from '@app/services/ware-house/outsidelabel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AlertService, AuthService, DocumentUploadService } from '@app/services';
import {  WorkflowcofigService } from '@app/services/ware-house';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';

@Component({
  selector: 'app-addoutupdistlabelreg',
  templateUrl: './addoutupdistlabelreg.component.html',
  styleUrls: ['./addoutupdistlabelreg.component.scss']
})
export class AddoutupdistlabelregComponent implements OnInit {
  @ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
  OutUpDistLabelObj: any = {
    routeId: '',
    majorDistrictsRnRoutes1Id: ''
  };
  applicatio_num: any;
  labelupload: any;
  registrationobj: any = JSON.parse(sessionStorage.getItem('formdata'));
  formSubmitted = false;
  editId: any;
  date: any;
  curDate = new Date();
  labelReg: FormGroup;
  addedit: any;
  sizelist: any;
  allbrands: any;
  img: File;
  liquortypeList: any;
  liquorcategory: any;
  domainlist: any;
  subliquortype: any;
  supplytype: any;
  brandmaster: any;
  labeldetails: any;
  packagetypelist: any;
  labeldata: any = [];
  editable = null;
  responceData: any;
  workflowobj: any;
  rejectid: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    // above code need to chang(write service)
    private alert: AlertService,
    private authService: AuthService,
    private docUplSer: DocumentUploadService,
    private formbuilder: FormBuilder,
    private labelservice: OutsidelabelService,
    private brandservice: OutofupbrandService,
    private wrokflowconfig: WorkflowcofigService
  ) { }

 async ngOnInit() {
    this.buildPrescriptionFormGrp();
  await this.commoncontrol()

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.editId = params.id;
      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
  }
  // Buildig the forms
  buildPrescriptionFormGrp() {
    this.labelReg = this.formbuilder.group({
      unitType: ['Parent Unit', Validators.required],
      licenseType: ['BWFL 2B', Validators.required],
      licenseNo: ['LICENCE-FL2B-2_1-20_21', Validators.required],
      unitName: ['ANHEUSER BUSCH INBEV INDIA LTD', Validators.required],
      address: ['Plot:43,Sanathnager', Validators.required],
      licenseeAddress: ['Plot:43,Sanathnager', Validators.required],
      applicationNumber: ['', Validators.required],
      parentCode: [' ', Validators.required],
      brandName: [' ', Validators.required],
      liquorType: [' ', Validators.required],
      subliquorType: ['', Validators.required],
      liquorCategory: ['', Validators.required],
      strength: ['', Validators.required],
      edp: ['', Validators.required],
      supplyType: ['', Validators.required],
      domain: ['', Validators.required]
    });
    this.labeldetails = this.buildformgroup();

    this.labelupload = this.formbuilder.group({
      uploadlabel1: '',
      uploadlabel2: '',
      uploadlabel3: '',
      uploadaffidavit: '',
      uploadtrademark: '',
      uploadbrandownership: ''
    })
  }

  // Add labels to the Table
  addRegistration(forms) {


    if (forms.valid) {
      console.log(this.editable);
      if (this.editable == null) {
        let form = forms.value;
        // form[`packsize`] = this.sizelist.find(x => x.id == form.packagingsize).desc;
        // form[`packtype`] = this.packagetypelist.find(x => x.id == form.packagingType).name;
        // form[`supply`] = this.supplytype.find(x => x.id == form.supplyType).name;
        let find = this.labeldata.find(x => x.packagingsize == form.packagingsize && x.packagingType == form.packagingType )
        if (!find){
          this.labeldata.push(form);
        this.labeldetails = this.buildformgroup();
        } else {
          this.alert.showError(form.packagingsize +'Data Already Exists', 'Error')
        }
      } else {
        let form = forms.value;
       
        let find = this.labeldata.find(x => x.packagingsize == form.packagingsize && x.packagingType == form.packagingType )
        if (!find){
        this.labeldata[this.editable] = form
        this.labeldetails = this.buildformgroup();
        this.editable = null;
        } else {
          this.alert.showError('Data Already Exists', 'Error')
        }
      }
    } else {
      this.alert.showError('Please fill the all fields', 'Error')
    }
  }


  getById(id) {
    this.labelservice.getLabelRegbyid(id)
    .subscribe((resp: any) => {
      console.log(resp.data);
      if(resp.status == 's') {
        this.responceData = resp.data;
       let brandData =(this.responceData.brandRegistration.brandRegistrationDetails.brandDetails)
        this.labelReg.patchValue({
          applicationNumber: this.responceData.brandRegistration.id
         })
        this.labeldata = this.responceData.lableRegistrationDetails.labelDetails.map(x => 
          {
          return  {id: x.id,
         
            packagingsize: x.packageSizeName,
            packagingType:x.packagingTypeName ,
            supplyType: x.supplyTypeName,
            domain: 'Within UP',
            gtin: x.gtin,
            cartonsize: x.cartonSize,
            numeroflabels:  x.numberOfLabels,
            labelFee: '500',
            edp: '100',
            considerationFee: '90',
            additionalConsiderationFee: '70',
            exportFee: '980',
            permitFee: '190',
            wholesalerMargin: '90',
            retailmargin: '10',
            mrp: '200'}
          } );

          this.labelReg.patchValue({
            parentCode: brandData.parentEtin,
            brandName: brandData.brandValue,
            liquorType: brandData.liquorTypeValue,
            subliquorType: brandData.subLiquorTypeValue,
            liquorCategory: brandData.liquorCategoryValue,
            strength: brandData.brandStrength,
            edp: brandData.edp,
            supplyType: brandData.supplyTypeValue,
            domain: brandData.domainValue
          });
      }
    })
  }
  // Get Brand Details By application Number
  getbranddetails(id) {
    const find = this.applicatio_num.find(x => x.id ==id);
    const brandData = find.brandRegistrationDetails.brandDetails;

      this.labelReg.patchValue({
        parentCode: brandData.parentEtin,
        brandName: brandData.brandValue,
        liquorType: brandData.liquorTypeValue,
        subliquorType: brandData.subLiquorTypeValue,
        liquorCategory: brandData.liquorCategoryValue,
        strength: brandData.brandStrength,
        edp: brandData.edp,
        supplyType: brandData.supplyTypeValue,
        domain: brandData.domainValue
      });

  }
  // Form For the label Data
  buildformgroup(data?: any) {

    return this.formbuilder.group({
      id: 0,
      brandRegistrationId: '',
      packagingsize: '',
      packagingType: '',
      supplyType: '',
      domain: 'Within UP',
      gtin: '',
      cartonsize: '',
      numeroflabels: '',
      labelFee: '500',
      edp: '100',
      considerationFee: '90',
      additionalConsiderationFee: '70',
      exportFee: '980',
      permitFee: '190',
      wholesalerMargin: '90',
      retailmargin: '10',
      mrp: '200'
    });
  }

  // Common API calls  

  async commoncontrol() {

    this.labelservice.getLiquorType()
      .subscribe((resp: any) => {
        this.liquortypeList = resp.data;
      })

    this.labelservice.getAllpackageType()
      .subscribe((resp: any) => {
        this.packagetypelist = resp.data;
      })

    this.labelservice.getAllDomain().subscribe((responceData: any) => {
      this.domainlist = responceData.data;
    });

    this.labelservice.getallmeasurement().subscribe((responceData: any) => {
      this.sizelist = responceData.data;
    });

    this.labelservice.getsupplytype().subscribe((responceData: any) => {
      this.supplytype = responceData.data;
    });

    this.labelservice.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandmaster = resp.data
      });
   
      let iscustomer=localStorage.getItem('IS_CUSTOMER');
      if(iscustomer == 'false'){
        this.wrokflowconfig.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_LABEL_REGISTRATION').subscribe((resp: any) => {
          this.workflowobj = resp.content
        })
      }

    // this.labelservice.getBrandapplicationum()
    //   .subscribe((resp: any) => {
    //     this.applicatio_num = resp.data
    //   })

     await this.brandservice.getallbrand()
      .subscribe((resp: any) => {
        if(resp.status == 's'){
        this.applicatio_num = resp.data
        }
      })
  }

  // Adding label for The Brand
  addLabelGenDetails(forms, status) {
    // let formapplicationData = await this.uploadedimageData(forms.value.applicationNumber)
    this.formSubmitted = false;
    if (forms.valid === false) {
      this.formSubmitted = true;
    } else {
      const form = forms.value
      const paramArray = this.labeldata.map(x => {
        return {
          "additionalCosiderationFee": x.additionalConsiderationFee,
          "cosiderationFee": x.considerationFee,
          "cartonSize": x.cartonsize,
          // "createdBy": "Customer",
          // "createdDate": new Date(),
          "edp": x.edp,
          "exportFee": x.exportFee,
          "gtin": x.gtin,
          "id": x.id,
          "isactive": true,
          "labelFee": x.labelFee,
          "labelRegistrationDetails": {

          },
          // "modifiedBy": "Customer",
          // "modifiedDate": new Date(),
          "mrp": x.mrp,
          "numberOfLabels": x.numeroflabels,
          "packageSizeCode": this.getcommondata('pakingsize', x.packagingsize),
          "packageSizeName": x.packagingsize,
          "packagingTypeCode": this.getcommondata('pakingtype', x.packagingType),
          "packagingTypeName": x.packagingType,
          "permitFee": x.permitFee,
          "retailerMargin": x.retailmargin,
          "supplyTypeCode": this.getcommondata('supplytype', x.supplyType),
          "supplyTypeName": x.supplyType,
          "wholsaleMargin": x.wholesalerMargin
        };
      });

      let event
      if (status == 'Submitted' || status == 'DRAFT') {
        event = 'INITIATE'
      } else {
        event = status
      }

      const postobj = {
        "address":form.address,
        // "createdBy":"Customer",
        // "createdDate":new Date(),
        "id": this.responceData && this.responceData.lableRegistrationDetails?this.responceData && this.responceData.lableRegistrationDetails.id : 0,
        "isactive":true,
        "labelDetails":paramArray,
        "labelRegistration":{},
        "licenseNumber":form.licenseNo,
        "licensetype":form.licenseType,
        // "modifiedBy":'Customer',
        // "modifiedDate": new Date(),
        "unitName":form.unitName,
        "unitType":form.unitType,
     }

     const postingObj = {
      "brandRegistration":{
        "id":form.applicationNumber
      },
      // "createdBy":"Customer",
      // "createdDate":new Date(),
      "id": this.responceData && this.responceData.id > 0?this.responceData && this.responceData.id : 0,
      "isactive":true,
      brandRegistrationid: form.applicationNumber,
      "lableRegistrationDetails": postobj,
      // "modifiedBy":"Customer",
      // "modifiedDate": new Date(),
      "event": event,
      "level": this.workflowobj ? this.workflowobj.level : 'Level 1',
        "sentBackLevels": this.rejectid ? this.rejectid : '',
      "stage":"string",
      "stageDescription":"string",
      "status": status
   }

   if(this.editId) {
    postingObj[`applicationNumber`] = this.responceData.applicationNumber
   }

   this.labelservice.addlabel(postingObj)
   .subscribe((resp: any) => {
     console.log(resp,"responce")
     if(resp.status == 's') {
       this.alert.showSuccess(resp.userDisplayMesg,'Success')
       this.router.navigate(['supplychainmanagement/warehouse/outupdistlabelreg/list'])
     } else {
       this.alert.showError(resp.userDisplayMesg,'Error')
     }
   })
  
    }
  }

  //For Code 
  getcommondata(val, formvalue) {
    let data;
    switch (val) {
      case 'pakingsize':
        data = this.sizelist.find(x => x.desc == formvalue).code;
        break;
      case 'pakingtype':
        data = this.packagetypelist.find(x => x.name == formvalue).code;
        break;
      case 'supplytype':
        data = this.supplytype.find(x => x.name == formvalue).supplyType;
        break;

    }

    return data;
  }
  // Deleting the row from Table//
  deletetabledata(idx) {
    this.labeldata.splice(idx, 1);
  }

  // edit tabe Data

  edittabledata(data, idx) {
    this.editable = idx;
    this.labeldetails.patchValue({
      id: data && data.id || '',
      brandRegistrationId: data && data.brandName || '',
      packagingsize: data && data.packagingsize || '',
      packagingType: data && data.packagingType || '',
      supplyType: data && data.supplyType || '',
      domain: 'Within UP',
      gtin: data && data.gtin || '',
      cartonsize: data && data.cartonsize || '',
      numeroflabels: data && data.numeroflabels || '',
      labelFee: '800',
      edp: '100',
      considerationFee: '90',
      additionalConsiderationFee: '70',
      exportFee: '980',
      permitFee: '190',
      wholesalerMargin: '90',
      retailmargin: '10',
      mrp: '200'
    });
  }

  //get Files From Form

  uploadedimageData(appnum) {
    const file1 = this.labelupload.get('uploadlabel1').value
    const file2 = this.labelupload.get('uploadlabel2').value
    const file3 = this.labelupload.get('uploadlabel3').value
    const file4 = this.labelupload.get('uploadaffidavit').value
    const file5 = this.labelupload.get('uploadtrademark').value
    const file6 = this.labelupload.get('uploadbrandownership').value

    const files = [file1, file2, file3, file4, file5, file6];
    const formData = new FormData();
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < files.length; i++) {
      formData.append('files[' + i + '].name', files[i].fileFor);
      formData.append('files[' + i + '].file', files[i]);
    }

    formData.append('moduleName', 'warehouse');
    formData.append('screenName', 'labelregistration');
    formData.append('applicationNumber', appnum);

    console.log('formData::', formData);

    this.authService.fileUploadFlag = true;
    const res: any = this.docUplSer.uploadDocuments(formData);
    this.authService.fileUploadFlag = false;
    console.log(res, "//// result ////")
    return res;
  }
}
