import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MasterapiService, ApiService, TransportGenService, LiquorTypeService, LicenseeService, BrandMasterService, WarehouseNewbrandService, AlertService } from '@app/services';
import { BoxingService } from '@app/services/ware-house/boxing.service';

@Component({
  selector: 'app-addboxing',
  templateUrl: './addboxing.component.html',
  styleUrls: ['./addboxing.component.scss']
})
export class AddboxingComponent implements OnInit {

  boxingbottlingObj: any = {
    year: 'Molasses Year (2020-21)',
    date: '',
    liquiorType: '',
    licenceType: 'Parent Unit',
    licenceNo: '',
    planNo: '',
    serialNO: '',
    brand: '',
    size: '',
    noOfBottle: '',
    boxingNoOfBox: '',
    boxingNooOfBottle: '',
    boxingStatus: '',
    etinNo: '',
    typeOfLiquorId:'',
    uploadDoc: ''
  };
  formSubmitted = false;
  curDate = new Date();
  editId: any;
  addedit: any;
  licenceformslist: any[] = [{id: 1, name: 'F.L-3 License'}, {id: 2, name: 'F.L-3A License'}, {id: 3, name: 'CL License'}];
  statuslist: any[] = [{ id: 1, name: 'Boxing Done' }, {id: 2, name: 'Boxing Pending'}];
  rawmaterialList: any;
  licenseeData: any;
  brandlists: any;
  sizelist: any;
  planids: any;
  boxbottling: any={};
  boxData:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private masterapiService: MasterapiService,
    private apiservice: ApiService,
    private transportGenService: TransportGenService,
    private liquorTypeService: LiquorTypeService,
    private licenseeService: LicenseeService,
    private brandService: BrandMasterService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private boxingplan: BoxingService,
    private alert:  AlertService

  ) { }

  ngOnInit() {
    this.boxingbottlingObj.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.commoncontrol()
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        this.boxingbottlingObj.id = params.id;
        this.editId = params.id;
        this.addedit = 'Edit';
       
      }
    });
    this.addedit = this.router.url.includes('add') == true ? 'Add' : 'Edit';
  }

  getById(id) {
    this.boxingplan.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.boxData = response.data
        console.log(this.boxingbottlingObj);
        this.boxingbottlingObj.liquiorType= this.boxData.typeOfLiquorId,
        this.boxingbottlingObj.brand= this.boxData.brandId,
        this.boxingbottlingObj.date= this.boxData.date,
        this.boxingbottlingObj.etinNo= this.boxData.etin,
        this.boxingbottlingObj.licenceNo= this.boxData.licensenoId,
        this.boxingbottlingObj.planNo= this.boxData.plannoId,
        this.boxingbottlingObj.size= this.boxData.sizeId,
        this.boxingbottlingObj.status= this.boxData.status,
        this.boxingbottlingObj.year= this.boxData.year,
        this.boxingbottlingObj.date = this.datePipe.transform(this.boxingbottlingObj.date, 'yyyy-MM-dd');
      }
    })
  }
  commoncontrol() {
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      // console.log(responceData);
      this.rawmaterialList = responceData.data;
    });

    this.licenseeService.getLicensee().subscribe((responceData: any) => {
      this.licenseeData = responceData.data;
    });

    this.brandService.getBrandMaster()
    .subscribe((resp: any) => {
      this.brandlists = resp.data;
    });

    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });

    this.boxingplan.getplan()
    .subscribe((resp: any) => {
      this.planids = resp.data
    })
  }

  saveData(form, status) {
    this.formSubmitted = false;
    if (form.valid == false) {
      this.formSubmitted = true;
    } else {

      let postingdata = {
        brandId: this.boxingbottlingObj.brand,
        date: this.boxingbottlingObj.date,
        entityId: 7,
        etin: this.boxingbottlingObj.etinNo,
        id: this.editId? this.editId:0,
        isactive: true,
        licensenoId: this.boxingbottlingObj.licenceNo,
        plannoId: this.boxingbottlingObj.planNo,
        sizeId: this.boxingbottlingObj.size,
        status: status,
        typeOfLiquorId: this.boxingbottlingObj.liquiorType,
        year: '2020-21'
      }
      if (this.editId) {
        this.boxingplan.upDateBoxingData(postingdata)
        .subscribe((resp: any) => {
          if (resp.status == 's') {
            this.alert.showSuccess(resp.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/boxing/list']);
          } else {
            this.alert.showError(resp.userDisplayMesg, 'error');
          }
        })
       }
      //if (this.editId) {
        //.apiservice.patch('bottlingboxingList/' + this.editId, this.boxingbottlingObj).then((response: any) => {
         // this.router.navigate(['/supplychainmanagement/warehouse/boxing/list']);
          // if(response.status =='s'){
          //        this.alert.showSuccess(response.userDisplayMesg, 'Success')
          //   this.router.navigate(['/supplychainmanagement/distillery/bottleboxing/list']);
          // }else{
          //   this.alert.showError(response.userDisplayMesg, 'error')
          // }
        //});
      //} 
      else {

        this.boxingplan.addboxingplan(postingdata).subscribe((response: any) => {
        
          if(response.status =='s'){
            this.alert.showSuccess(response.userDisplayMesg, 'Success')
            this.router.navigate(['/supplychainmanagement/warehouse/boxing/list']);
          }else{
            this.alert.showError(response.userDisplayMesg, 'error')
          }
        });
      }

    }

  }

  previewcategory(form) {
    sessionStorage.setItem('formdata', JSON.stringify(this.boxingbottlingObj));
    this.router.navigate(['/supplychainmanagement/distillery/indentrequest/preview']);
  }

  // getIndentRequestById(id?) {
  //   if (id) {
  //     this.apiservice.get('bottlingboxingList/' + id).then((response: any) => {
  //        if (response) {
  //         this.boxingbottlingObj = response;
  //        }
  //     });
  //   } else {
  //   }
  // }

  getProductsType() {
    this.masterapiService.get('productType/getAllProductType').then((responceData: any) => {

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getConsumptionType() {
    this.masterapiService.get('consumptionType/getAllConsumptionType').then((responceData: any) => {

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  getDomainType() {
    this.masterapiService.get('domain/getAllDomain').then((responceData: any) => {

    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  sugarmillname() {
    this.transportGenService.getAllSugarMilllName().subscribe((responceData: any) => {

    });
  }

}


// barcodeevent(event, value) {
//   console.log(value);

//   if (value == 'Yes') {
//     this.capacityDistillery = 'true';
//   } else {
//     this.capacityDistillery = 'false';
//   }
// }


// brandId: this.boxingbottlingObj.brand,
// date: this.boxingbottlingObj.date,
// entityId: 7,
// etin: this.boxingbottlingObj.etinNo,
// id: 0,
// isactive: true,
// licensenoId: this.boxingbottlingObj.licenceNo,
// plannoId: this.boxingbottlingObj.planNo,
// sizeId: this.boxingbottlingObj.size,
// status: status,
// typeOfLiquorId: this.boxingbottlingObj.liquiorType,
// year: '2020-21'