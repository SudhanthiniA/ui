import { Component, OnInit, ViewChild } from '@angular/core';
import { OutofupbrandService } from '@app/services/ware-house/outofupbrand.service';
import { WarehouseNewbrandService, AlertService, WorkflowcofigService } from '@app/services';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-addoutupdistbrandreg',
  templateUrl: './addoutupdistbrandreg.component.html',
  styleUrls: ['./addoutupdistbrandreg.component.scss']
})
export class AddoutupdistbrandregComponent implements OnInit {
  financeyear: any;
  brandmaster: any;
  liquortypeList: any;
  liquorcategory: any;
  domainlist: any;
  subliquortype: any;
  category: any;
  supplytype: any;
  statelist: any;
  rawmaterial: any;
  brandform: FormGroup;
  moduleArr: any;
  editid: any;
  countrylist: any;
  responceData: any;
  otherbrand: boolean = false;
  workflowobj: any;
  bandRegObj: any;
  rejectid: any;
  address = 'Plot No. 12,xyz nagar, Karnataka, Bangalore, Bangalore, Shivaji nagar, Majestic, 500001';
  formSubmitted = false;
  idstatus: any = 'branddetails';
  constructor(
    private brandregservice: OutofupbrandService,
    private route: Router,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private alert: AlertService,
    private subliquorService: SubLiquorTypeService,
    private wrokflowconfig: WorkflowcofigService
  ) { }
  @ViewChild('tabSet', { static: false }) tabSet;

  ngOnInit() {
    this.buildFormGroup();
    this.router.params.subscribe(params => {
      this.editid = params.id;
      if (params.id) {
        this.setbyid(params.id);
        this.commoncontrol();
        this.editid = params.id;
      } else {
        this.commoncontrol();
      }
    });
  }
  get f() {
    return this.brandform.controls;
  }
  buildFormGroup() {
    this.brandform = this.fb.group({
      date: [this.datepipe.transform(new Date(), 'yyyy-MM-dd')],
      previousyear: '',
      registrationyear: ['', Validators.required],
      noyears: ['', Validators.required],
      bottlinglicencetype: ['Test', Validators.required],
      bottlinglicencenum: ['12345', Validators.required],
      bottlingunitname: ['Bottling Unit 1'],
      bottlingaddress: [this.address],
      brandunitname: ['KF001'],
      brandaddress: [this.address],
      brandorigin: ['', Validators.required],
      brandunitstate: ['', Validators.required],
      brandname: ['', Validators.required],
      liquortype: ['', Validators.required],
      brandsubliquortype: ['', Validators.required],
      brandliquorcategory: ['', Validators.required],
      strength: ['500'],
      brandsupplytype: ['', Validators.required],
      branddomain: ['', Validators.required],
      brandedp: ['', Validators.required],
      brandcategory: ['', Validators.required],
      brandname1: '',
      shelflife: [0, Validators.required],
      brandregistrationfor: [4, Validators.required],
      parentetin: [''],
      brandfees: ['5000', Validators.required],
      rawmaterialdetails: this.fb.array([
        this.addformgroup()
      ])
    });

    this.brandform.get('liquortype').valueChanges.subscribe((resp: any) => {

      if (!this.liquorcategory) {

      }
    })
  }
  setbyid(id) {
    this.brandregservice.getbyid(id)
      .subscribe((resp: any) => {
        this.responceData = resp.data;
        let response = resp.data.brandRegistrationDetails.brandDetails;
        // this.getOriginlistbyDomainId(this.responceData.brandRegistrationDetails.originValue);
        this.brandform.patchValue({
          date: this.datepipe.transform(new Date(response.createdDate), 'yyyy-MM-dd'),
          previousyear: this.responceData.brandRegistrationDetails.preRegYear,
          registrationyear: this.datepipe.transform(new Date(this.responceData.brandRegistrationDetails.regYear), 'yyyy-MM-dd'),
          noyears: this.responceData.brandRegistrationDetails.regNoOfYears,
          brandorigin: this.responceData.brandRegistrationDetails.originValue,
          brandname: response.brandValue,
          liquortype: response.liquorTypeValue,
          brandsubliquortype: response.subLiquorTypeValue,
          brandliquorcategory: response.liquorCategoryValue,
          brandsupplytype: response.supplyTypeValue,
          branddomain: response.domainValue,
          brandedp: response.edp,
          brandcategory: response.categoryValue,
          branddomian: response.originId,
          shelflife: response.shellLife,
          brandregistrationfor: response.brandRegFor,
          parentetin: response.parentEtin,
          brandunitstate: this.responceData.brandRegistrationDetails.subOriginValue
        });
        this.responceData.brandRegistrationDetails.brandRawMaterials.forEach(element => {
          (this.brandform.get('rawmaterialdetails') as FormArray).push(this.addformgroup(element));
        });
        (this.brandform.get('rawmaterialdetails') as FormArray).removeAt(0);
        this.brandregservice.getallliquorcategory()
          .subscribe((resp: any) => {
            if (resp.status == 's') {
              this.liquorcategory = resp.data;
              if (this.responceData && this.responceData.brandRegistrationDetails) {
                this.getSubLiquorType(this.responceData && this.responceData.brandRegistrationDetails.brandDetails.liquorTypeValue)
              }
            }
          });
      });

  }

  async commoncontrol() {
    await this.brandregservice.getfinanceyear()
      .subscribe((resp: any) => {
        this.financeyear = resp.data;
      });

    await this.brandregservice.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandmaster = resp.data;
      });

    await this.brandregservice.getLiquorType()
      .subscribe((resp: any) => {
        this.liquortypeList = resp.data;
      });

    await this.brandregservice.getallliquorcategory()
      .subscribe((resp: any) => {
        if (resp.status == 's') {
          this.liquorcategory = resp.data;
          if (this.responceData && this.responceData.brandRegistrationDetails) {
            this.getSubLiquorType(this.responceData && this.responceData.brandRegistrationDetails.brandDetails.liquorTypeValue)
          }
        }
      });

    await this.brandregservice.getAllDomain().subscribe((responceData: any) => {
      if (responceData.status == 's') {
        this.domainlist = responceData.data;

        if (this.responceData && this.responceData.brandRegistrationDetails) {
          this.getOriginlistbyDomainId(this.responceData && this.responceData.brandRegistrationDetails.originValue);
        }
      }
    });

    let iscustomer = localStorage.getItem('IS_CUSTOMER');
    if (iscustomer == 'false') {
      this.wrokflowconfig.getworkflowbydesignation('PARENT_UNIT', 'PARENT_UNIT_BRAND_REGISTRATION').subscribe((resp: any) => {
        this.workflowobj = resp.content
      })
    }

    // this.brandregservice.getallsubliquor().subscribe((responceData: any) => {
    //   this.subliquortype = responceData.data;
    // });

    await this.brandregservice.getcategory().subscribe((responceData: any) => {
      this.category = responceData.data;
    });

    await this.brandregservice.getsupplytype().subscribe((responceData: any) => {
      this.supplytype = responceData.data;
    });

    this.brandregservice.getallrawmaterial().subscribe((responceData: any) => {
      this.rawmaterial = responceData.data;
    });

    this.brandregservice.getActiveEntities()
      .subscribe((resp: any) => {
        this.moduleArr = resp.content.content;
      });
  }

  getOriginlistbyDomainId(id) {
    console.log('code', id);
    const code = this.domainlist.find((ele: any) => {
      return ele.name == id;
    });

    if (code.name == 'Within UP') {
      this.brandregservice.getallDistrics().subscribe((responceData: any) => {
        this.statelist = responceData.data;
      });
    } else if (code.name == 'Export(Other State)') {
      this.brandregservice.getallstates().subscribe((responceData: any) => {
        this.statelist = responceData.data;
      });
    } else {
      this.brandregservice.getallcountries().subscribe((responceData: any) => {
        this.statelist = responceData.data;
      });
    }

  }

  addformgroup(data?: any) {
    return this.fb.group({
      rawmaterialid: data && data.rawValue || '',
      rawmaterialquantity: data && data.rawQty || '',
      unitname: 'Kgs',
      id: data && data.id || 0
    });
  }

  ramaterialChange(i) {
    let formdata = [];
    formdata = this.brandform.get('rawmaterialdetails').value;
    let value = formdata[i].rawmaterialid;
    let existItem = formdata.filter(item => item.rawmaterialid === value);
    if (existItem.length > 1) {
      this.alert.showError(value + "   Data Already Exists", "Error")
      this.deleterow(i);
      this.addgroup();
    }
  }

  addgroup() {
    (this.brandform.get('rawmaterialdetails') as FormArray).push(this.addformgroup());
  }

  deleterow(i) {
    (this.brandform.get('rawmaterialdetails') as FormArray).removeAt(i);
  }

  getcommondata(name, val) {
    let data;
    switch (name) {
      case 'raw':
        data = this.rawmaterial.find(x => x.name == val);
        break;
      case 'Brand':
        data = this.brandmaster.find(x => x.brandName == val);
        break;
      case 'category':
        data = this.category.find(x => x.name == val);
        break;
      case 'Domain':
        data = this.domainlist.find(x => x.name == val);
        break;
      case 'liqcat':
        data = this.liquorcategory.find(x => x.name == val);
        break;
      case 'liqtype':
        data = this.liquortypeList.find(x => x.name == val);
        break;
      case 'subliqtype':
        data = this.subliquortype.find(x => x.name == val);
        break;
      case 'supply':
        data = this.supplytype.find(x => x.name == val);
        break;
      case 'origin':
        data = this.domainlist.find(x => x.name == val);
        break;
      case 'suborigin':
        data = this.statelist.find(x => x.id == val);
        break;
    }
    return data.code || data.brandCode || data.supplyType
  }
  addregistration(form, status) {
    this.formSubmitted = false;
    console.log(form, ' ==== Form ====')
    if (!form.valid) {
      this.formSubmitted = true;
    } else {

      let event
      if (status == 'SUBMITTED' || status == 'SUBMITTED') {
        event = 'INITIATE'
      } else {
        event = status
      }

      const formvalue = this.brandform.value;

      const postArray = formvalue.rawmaterialdetails.map((x: any) => {
        if (x.rawmaterialid) {
          return {
            "brandRegistrationDetails": {},
            // "createdBy": "Customer",
            // "createdDate": new Date(),
            "entityID": 6,
            "id": x.id,
            "isactive": true,
            rawValue: x.rawmaterialid,
            rawQty: x.rawmaterialquantity,
            rawCode: this.getcommondata('raw', x.rawmaterialid),
            status,
            "unom": x.unitname,
          };
        }
      });
      const postobj = {
        "brandCode": formvalue.brandname != 'others' ? this.getcommondata('Brand', formvalue.brandname) : '',
        "brandName": formvalue.brandname1 ? formvalue.brandname1 : '',
        "brandRegFees": formvalue.brandfees,
        "brandRegFor": formvalue.brandregistrationfor,
        "brandRegistrationDetails": {},
        "brandStrength": formvalue.strength,
        "brandValue": formvalue.brandname != 'others' ? formvalue.brandname : '',
        "categoryCode": this.getcommondata('category', formvalue.brandcategory),
        "categoryValue": formvalue.brandcategory,
        // "createdBy": "Customer",
        // "createdDate": new Date(),
        "domainCode": this.getcommondata('Domain', formvalue.branddomain),
        "domainValue": formvalue.branddomain,
        "edp": formvalue.brandedp,
        "id": this.responceData && this.responceData.brandRegistrationDetails.brandDetails.id ? this.responceData.brandRegistrationDetails.brandDetails.id : 0,
        "isactive": true,
        "liquorCategoryCode": this.getcommondata('liqcat', formvalue.brandliquorcategory),
        "liquorCategoryValue": formvalue.brandliquorcategory,
        "liquorTypeCode": this.getcommondata('liqtype', formvalue.liquortype),
        "liquorTypeValue": formvalue.liquortype,
        "parentEtin": formvalue.parentetin,
        "shellLife": formvalue.shelflife,
        "subLiquorTypeCode": this.getcommondata('subliqtype', formvalue.brandsubliquortype),
        "subLiquorTypeValue": formvalue.brandsubliquortype,
        "supplyTypeCode": this.getcommondata('supply', formvalue.brandsupplytype),
        "supplyTypeValue": formvalue.brandsupplytype,
      }
      // let Bdata: any = [];
      //  Bdata.push(postobj)
      //  console.log(Bdata,"array Data")
      const postingData = {
        "brandRegistrationDetails": {
          "bottlingUnitAddress": formvalue.bottlingaddress,
          "bottlingUnitName": formvalue.bottlingunitname,
          "brandDetails": postobj,
          "brandOwnerAddress": formvalue.brandaddress,
          "brandOwnerUnitName": formvalue.brandunitname,
          "brandRawMaterials": postArray,
          "brandRegistrantLicenseNo": formvalue.bottlinglicencenum,
          "brandRegistrantLicenseType": 'Type',
          "brandRegistration": {},
          // "createdBy": 'Customer',
          // "createdDate": new Date(),
          "id": this.responceData && this.responceData.brandRegistrationDetails.id ? this.responceData.brandRegistrationDetails.id : 0,
          "isactive": true,
          "originCode": this.getcommondata('origin', formvalue.brandorigin),
          "originValue": formvalue.brandorigin,
          "preRegYear": formvalue.previousyear,
          "regNoOfYears": formvalue.noyears,
          "regYear": formvalue.registrationyear,
          "subOriginCode": this.getcommondata('suborigin', formvalue.brandunitstate),
          "subOriginValue": formvalue.brandunitstate
        },
        "stage": "Staged",
        "stageDescription": "Stage-Desc",
        "event": event,
        "level": this.workflowobj ? this.workflowobj.level : 'Level 1',
        "sentBackLevels": this.rejectid ? this.rejectid : '',
        "id": this.editid ? this.editid : 0,
        "isactive": true,
        status
      };

      if (this.editid) {
        postingData[`applicationNumber`] = this.responceData.applicationNumber;
        postingData[`createdBy`] = this.responceData.createdBy;
        postingData[`createdDate`] = this.responceData.createdDate;

      }

      console.log(postingData, "===postingData===")

      if (postArray.length > 0) {
        this.brandregservice.addnewbrand(postingData)
          .subscribe((resp: any) => {
            if (resp.errorCode == 200) {
              this.alert.showSuccess(resp.userDisplayMesg, 'Success');
              this.route.navigate(['supplychainmanagement/warehouse/outupdistbrandreg/list']);
            } else {
              this.alert.showError(resp.userDisplayMesg, 'Error');
              this.route.navigate(['supplychainmanagement/warehouse/outupdistbrandreg/list']);
            }
          });
      } else {
        this.alert.showError('Please Fill all Fileds', 'Error');

      }
    }
  }
  getSubLiquorType(subliquorId) {
    let find = this.liquortypeList.find(x => x.name == subliquorId).id
    this.subliquorService.getSubLiquorTypesByLiquorId(find).subscribe((resp) => {
      this.subliquortype = resp.data;
    });

  }

  getById(id) {
    this.brandregservice.getbyid(id).subscribe((response: any) => {
      console.log(response);
      if (response.status == 's') {
        this.bandRegObj = response.data
      }
    })
  }

  checkother(data) {
    console.log(data)
    if (data == 'others') {
      this.otherbrand = true;
      // this.brandform.get('brandname').setValue('')
    } else {
      this.otherbrand = false
    }
  }
  // for approving the record
  approveregistration(state) {

  }

  sendback(state) {

  }

  nexttoraw(status) {
    this.idstatus = status;
    this.tabSet.select(status);
  }
}
