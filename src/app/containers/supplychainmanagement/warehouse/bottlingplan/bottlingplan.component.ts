import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';
@Component({
  selector: 'app-bottlingplan',
  templateUrl: './bottlingplan.component.html',
  styleUrls: ['./bottlingplan.component.css']
})
export class BottlingplanComponent implements OnInit {

  alldata:any=[];
  dataofarray =[];
  bottlelist: any;
  bottlingObj:any={
    noOfCases:'',
    brandId:'',
    liquorTypeId:'',
    mapId:''
  };
  rawmaterialList: any = [];
  licenceTypeList: any = [];
  licenseeData: any = [];
  packagetypeData: any = [];
  brandlists: any = [];
  viewId: any;
  bottledata: any;
  sizelist: any;
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  qrcodemappinglists: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder,
    private apiservice: ApiService,
    private liquorTypeService: LiquorTypeService,
    //private brandIdService: brandIdService,
    private licenseeService: LicenseeService,
    private packageService: PackageTypeService,
    private brandService: BrandMasterService,
    private alert: AlertService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private bottlingplanservice: WarehousebottlingplanService
  ) { }

  ngOnInit() {
    this.getdata();
    this.getliquertype();
    this.getBrandMaster();
    this.getQrcodeMappin();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    //this.searchBottlingData();
  }


  getdata(){
    this.bottlingplanservice.getallbotlingplan()
    .subscribe((resp: any) => {
      this.bottlelist = resp.data
      this.refreshTabIns();
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
  getBrandMaster() {
    this.brandService.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
      });
  }

  // mapping
  getQrcodeMappin() {
    this.bottlingplanservice.getQrcodeMapping()
      .subscribe((resp: any) => {
        this.qrcodemappinglists = resp.data;
      });
  }
  refreshTabIns() {
    if (this.dtElement.dtInstance) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtTrigger.next();
      });
    } else {
      this.dtTrigger.next();
    }
    return true;
  }
  // search api
  searchBottlingData(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        noOfCases: this.bottlingObj.noOfCases ? this.bottlingObj.noOfCases : null,
        liquorTypeId: this.bottlingObj.liquorTypeId ? this.bottlingObj.liquorTypeId : null,  
        brandId: this.bottlingObj.brandId ? this.bottlingObj.brandId : null,
        mapId: this.bottlingObj.mapId ? this.bottlingObj.mapId : null,       
      },
      pageNo,
      paginationSize,
      //search: this.bottlingObj.bwfl4date || this.bottlingObj.placeId || this.bottlingObj.passNo  ||  this.bottlingObj.noOfBottles
       
    };

    this.bottlingplanservice.searchBottlingData(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bottlelist = responceData.data.contents;
      this.refreshTabIns();
      
      });
  }

  resetKey() {
    this.bottlingObj = {
      noOfCases:'',
      brandId:'',
      liquorTypeId:'',
      mapId:'',
    };
  }

}
