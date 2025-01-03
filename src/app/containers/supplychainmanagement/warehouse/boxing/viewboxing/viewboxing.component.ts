import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
//import { AlertService, ApiService } from '@app/services';
import {BoxingService} from '@app/services/ware-house/boxing.service'
import { ApiService, LiquorTypeService, LicenseeService, PackageTypeService,
  BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';

@Component({
  selector: 'app-viewboxing',
  templateUrl: './viewboxing.component.html',
  styleUrls: ['./viewboxing.component.scss']
})
export class ViewboxingComponent implements OnInit {

  boxbottlingobj: any = {
    remarks: ''
  };

  formSubmitted = false;
  curDate = new Date();



  addedit: any;
  editId: any;
  boxbottling: any;
  allbrands: any;
  sizelist: any;
  rawmaterialList: any;
  measurementData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert:AlertService,
    private liquorTypeService: LiquorTypeService,
    private brandService: BrandMasterService,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private service:BoxingService,
    private apiservice:ApiService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params=>{
     if(params.id){
       this.getById(params.id)
     }
   })
   
    // brand calling
    this.warehouseNewbrandService.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
    // calling liquor
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
    });
    //  calling measurement
    this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
      console.log(responceData);
      this.sizelist = responceData.data;
    });
  }

  
  
  getById(id) {
    this.service.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.boxbottling = response.data
        console.log(this.boxbottling);
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }


  getboxbottlingbyId(id?){
    if(id){
      this.apiservice.get("bottlingboxingList/"+id).then((response:any)=>{
         if(response){
          this.boxbottlingobj = response;
         
         }
      })
    } else {
         this.boxbottlingobj = JSON.parse(sessionStorage.getItem('formdata'));
    }
  }

}
