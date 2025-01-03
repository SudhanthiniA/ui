import { Component, OnInit } from '@angular/core';
import { WarehouseNewbrandService, LabelregestrationService } from '@app/services/ware-house';
import { FormBuilder, FormArray } from '@angular/forms';
import { AlertService } from '@app/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addedlabels',
  templateUrl: './addedlabels.component.html',
  styleUrls: ['./addedlabels.component.scss']
})
export class AddedlabelsComponent implements OnInit {
  domainlist: any;
  labelregester: any;
  sizelist: any;
  liquortype: any;
  allbrands: any;

  constructor(   private warehouseNewbrandService: WarehouseNewbrandService,
                 private formbuilder: FormBuilder,
                 private labelregestrationservice : LabelregestrationService,
                 private alert: AlertService,
                 private router: Router) { }

  ngOnInit() {
    
    this.labelregester = this.formbuilder.group({
      unitname:'',
      address:'',
      unittype:'',
      liquorcategory:'',
      licencetype:'',
      domainId:'',
      labelcategory:'',
      applicationNumber: '',
        brandRegistrationId: '',
      lebeldetails:this.formbuilder.array([
        this.buildformgroup()
      ])
    })
    this.getdomain()
  }
  public getPresFormLength(): number {
    return (this.labelregester.get('lebeldetails') as FormArray).length;
  }
  getdomain(){
    this.warehouseNewbrandService.getAllDomain().subscribe((responceData: any) => {
      this.domainlist = responceData.data;
    });

    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      this.sizelist = responceData.data;
    });

    // this.labelregestrationservice.getliquortype().subscribe((resp: any) => {
    //   this.liquortype = resp.data;
    // })
      this.warehouseNewbrandService.getAllLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.liquortype = responceData.data;
    });

    this.labelregestrationservice.getunitdetails().subscribe((resp:any) => {
      if(resp.status == 's') {
        this.labelregester.patchValue({
          unitname:resp.data.unitName,
          address:resp.data.address,
          unittype:resp.data.unitType,
          licencetype:resp.data.licenseType,
        })
      }
    });

    // const url = 'brand/getAllBrand'
    this.warehouseNewbrandService.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    })
  }

  buildformgroup(data?: any){

    return this.formbuilder.group({
      brandRegistrationId: '',
      sizeId:  '',
      numberLables:'',
      domainIdta:'',
      remarks: "string",
      id: 0
    });
  }
  addrow() {
    (this.labelregester.get('lebeldetails') as FormArray).push(this.buildformgroup());
   }

   addlebel(form) {
     let formdata = form.value;
    const paramdpd ={ 
    "address": formdata.address,
    "applicationNumber": formdata.applicationNumber,
    "brandRegistrationId": formdata.brandRegistrationId,
    "domainId": formdata.domainId,
    "entityId": 6,
    "id": 0,
    "isactive": true,
    "labelStatus": 'MAINTENANCE',
    "licenseType": formdata.licencetype,
    "liquorCategory": formdata.liquorcategory,
    "liquorTypeId": formdata.licenseType,
    "requestLabelDetlist": formdata.lebeldetails,
    "selfLive": "string",
    "status": "SUBMITTED",
    "subcategoryTypeId": "string",
    "unitName": formdata.unitname,
    "unitType": formdata.unittype
  }

    this.labelregestrationservice.addlabeldetails(paramdpd).subscribe((response: any) => {
      if (response.status == "s") {
        this.alert.showSuccess(response.userDisplayMesg, 'Success');
        // this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/addedlabels']);
        // this.labelregester.reset();   
        this.ngOnInit();
      }
      else {
        this.alert.showError(response['userDisplayMesg'], 'error')
      }
    })
   }

   getbrandsid(id){
     let formdata = this.allbrands.find(x => x.id == id);
     if(formdata){
       this.labelregester.patchValue({
        "applicationNumber": formdata.id,
        "brandRegistrationId": formdata.id,
       })
     }
   }
}
