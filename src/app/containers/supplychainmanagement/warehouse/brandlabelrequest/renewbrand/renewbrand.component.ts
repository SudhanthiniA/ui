import { Component, OnInit,ViewChild } from '@angular/core';
import { ApiService, LiquorTypeService, LicenseTypeService, LicenseeService, PackageTypeService, BrandMasterService, WarehousebottlingplanService, AlertService, WarehouseNewbrandService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-renewbrand',
  templateUrl: './renewbrand.component.html',
  styleUrls: ['./renewbrand.component.scss']
})
export class RenewbrandComponent implements OnInit {

   @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Location>();
  public pageSize = 5;
  pageNo = 0;
  page: number;
  limit: any;
  licenceTypeList: any = [];
  reNewBrandObj:any = {
    brandRegistrationId: '',
    categoryName: '',
    licencetype:''
  };
  dateselected: any = moment().format('LLLL');
  allbrands: any;
  constructor(
    //private router: Router,
    private licensetypeService: LicenseTypeService,
    private warehouseservice:WarehouseNewbrandService
  ) { }

  ngOnInit() {
    this.getlicencetype();
     // brand calling
     this.warehouseservice.getallbrand().subscribe((responseData: any) => {
      this.allbrands = responseData.data;
      console.log('brand data', this.allbrands);
    });
  }

  
  getAllRenewBrand() {
    this.warehouseservice.getallbrand().subscribe((response:any)=>{
      if(response.status == 's'){
        this.reNewBrandObj = response.data;
        this.refreshTabIns();
      }
    })
  }

  getlicencetype() {
    this.licensetypeService.getLicenseType().subscribe((responceData: any) => {
      console.log(responceData);
      this.licenceTypeList = responceData.data;
    });
  }
 
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
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

  searchReNewBrand(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        brandRegistrationId: this.reNewBrandObj.brandRegistrationId ? this.reNewBrandObj.brandRegistrationId : null,
        categoryName: this.reNewBrandObj.categoryName ? this.reNewBrandObj.categoryName : null,
        licencetype: this.reNewBrandObj.licencetype ? this.reNewBrandObj.licencetype : null
      },
      pageNo,
      paginationSize,
    };

    this.warehouseservice.searchRenewBrand(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.reNewBrandObj = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.reNewBrandObj = {
      brandRegistrationId: '',
      categoryName: '',  
      licencetype:''
    };
  }
}
