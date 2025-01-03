import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MasterapiService, DistilleryapiService,ApiService, TransportGenService, LiquorTypeService, LicenseeService, BrandMasterService, WarehouseNewbrandService, AlertService } from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { apiUrls } from '@appEnv/apiurls';
import { MatTableDataSource } from '@angular/material/table';
import { BoxingService } from '@app/services/ware-house/boxing.service';
import { BoxingPlanenConfig } from '@app/config/warehouse/boxing-Plane.config';
import { BoxingPlane } from '@app/models/warehouse/boxing';
@Component({
  selector: 'app-boxing',
  templateUrl: './boxing.component.html',
  styleUrls: ['./boxing.component.css']
})
export class BoxingComponent implements OnInit {

  boxingbottlinglist: any;
  producttypelist: any[] = [];
  boxingbottlingSearchObj: any = {
    year: '',
    plannoId:'',
    brandId:'',
    typeOfLiquorId:'',
    date:''
  };
  pageNo = 0;
  public actionKeys = ['edit', 'view'];
  public pageSize = 5;
  public totalCount: number;
  public isSearchRes = false;
  public titleSection = BoxingPlanenConfig.titleSection.list;
  public breadcrumbs = BoxingPlanenConfig.breadcrumbs;
  public columns = BoxingPlanenConfig.columns;
  public lastText = 'master.common.list';
  public dataSource = new MatTableDataSource<BoxingPlane>();

  rawmaterialList:any;
  brandlists: any;
  sizelist: any;
  constructor(
    private brandService: BrandMasterService,
    private liquorTypeService: LiquorTypeService,
    private distilleryapiService: DistilleryapiService,
    private apiservice: ApiService,
    private router: Router,
    private masterapiService: MasterapiService,
    private boxingplan: BoxingService
  ) { }

  ngOnInit() {
    this.getboxingbottlinglist();
    this.searchapi();
    this.getliquertype();
    this.getBrandMaster();
    this.getProductsType();
  }
  
  getBrandMaster() {
    this.brandService.getBrandMaster()
      .subscribe((resp: any) => {
        this.brandlists = resp.data;
      });
  }
  getliquertype() {
    this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
      console.log(responceData);
      this.rawmaterialList = responceData.data;
    });
  }
  getboxingbottlinglist() {
    this.boxingplan.getallboxes().subscribe((response: any) => {
      if (response) {
        this.boxingbottlinglist = response.data;
      }
    });
  }

  onEdit(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/boxing/edit' + event.id]);
  }

  onView(event) {
    this.router.navigate(['/supplychainmanagement/warehouse/boxing/view' + event.id]);
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.searchapi(pageNo, pageSize);
  }

  // commoncontrol() {
  //   this.warehouseNewbrandService.getallmeasurement().subscribe((responceData: any) => {
  //     console.log(responceData);
  //     this.sizelist = responceData.data;
  //   });
  //   this.liquorTypeService.getLiquorType().subscribe((responceData: any) => {
  //     this.rawmaterialList = responceData.data;
  //   });
    
  //   this.brandService.getBrandMaster()
  //   .subscribe((resp: any) => {
  //     this.brandlists = resp.data;
  //   });

  // }



  searchapi(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        plannoId: this.boxingbottlingSearchObj.plannoId ? this.boxingbottlingSearchObj.plannoId : null,
        brandId: this.boxingbottlingSearchObj.brandId ? this.boxingbottlingSearchObj.brandId : null,
        typeOfLiquorId: this.boxingbottlingSearchObj.typeOfLiquorId ? this.boxingbottlingSearchObj.typeOfLiquorId : null,
        date: this.boxingbottlingSearchObj.date ? this.boxingbottlingSearchObj.date : null,
        year: this.boxingbottlingSearchObj.year ? this.boxingbottlingSearchObj.year : null,
        // this.boxingbottlingSearchObj.status ? this.boxingbottlingSearchObj.status : null,
      },
      pageNo,
      paginationSize,
    };

    this.boxingplan.searchBoxingData(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.dataSource.data = responceData.data.contents as BoxingPlane[];
      this.totalCount = responceData.data.totalElements;
      //this.boxingbottlinglist = responceData.data.contents;
      });
    // this.boxingbottlingSearchObj.productTypeId = parseInt(this.boxingbottlingSearchObj.productTypeId);
    // const objtest = {
    //   filters: {
    //     id: this.boxingbottlingSearchObj.id ? this.boxingbottlingSearchObj.id : null,
    //     grade: this.boxingbottlingSearchObj.grade ? this.boxingbottlingSearchObj.grade : null,
    //     productTypeId: this.boxingbottlingSearchObj.productTypeId ? this.boxingbottlingSearchObj.productTypeId : null,
    //     plannoId: this.boxingbottlingSearchObj.plannoId ? this.boxingbottlingSearchObj.plannoId : null,
        

    //   },
    //   pageNo: 0,
    //   paginationSize: 5
    // };
    // this.distilleryapiService.post(apiUrls.indentlazysearch, objtest).then((responceData: any) => {
    //   this.boxingbottlinglist = responceData.data.contents;
    //   if (this.dtElement.dtInstance) {
    //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
    //       dtInstance.destroy();
    //       this.dtTrigger.next();
    //     });
    //   } else {
    //     this.dtTrigger.next();
    //   }
    // }).catch((err: any) => {
    //   console.log('\n err...', err);
    // });
  }

  resetKey() {
    this.boxingbottlingSearchObj = {
      year: '',
      plannoId:'',
      brandId:'',
      typeOfLiquorId:'',
      date:''
    };
    //this.getboxingbottlinglist();
  }

  getPdfData1(type: any) {
    let url, downloadType, title;
    const postData = {
      filters: {},
      pageNo: 0,
      paginationSize: 5
    };
    if (type == 'downloadPdf') {
      downloadType = 'application/pdf';
      title = 'indentRequest.pdf';
    }
    if (type == 'downloadExcel') {
      downloadType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      title = 'indentRequest.xlsx';
    }
    if (type == 'downloadCsv') {
      downloadType = 'application/csv';
      title = 'indentRequest.csv';
    }
    this.exportFile(downloadType, title);
    return true;
  }

  exportFile(downloadType, title) {
    // this.indentreq.getDownload().subscribe((responceData: any) => {
    //   const newBlob = new Blob([responceData], { type: downloadType });
    //   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //     window.navigator.msSaveOrOpenBlob(newBlob);
    //     return;
    //   }
    //   const data = window.URL.createObjectURL(newBlob);
    //   const link = document.createElement('a');
    //   link.href = data;
    //   link.download = title
    //   link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    //   return true;

    // })
  }

  getProductsType() {
    this.masterapiService.get('productType/getAllProductType').then((responceData: any) => {
      console.log(responceData);
      this.producttypelist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }


}
