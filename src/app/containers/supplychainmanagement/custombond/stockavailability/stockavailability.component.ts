import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import{WholesaleStockAvailabilityService,ApiService, BrandMasterService} from '@app/services';
import { BrandName, UnitName } from '@app/models/wholesale/stockavailability';
import { MatTableDataSource } from '@angular/material/table';
import { stockAvailability } from '@app/config/wholesale/stockavailability.config';
import { SubLiquorTypeService } from '@app/services/masters/subliquortype.service';

@Component({
  selector: 'app-stockavailability',
  templateUrl: './stockavailability.component.html',
  styleUrls: ['./stockavailability.component.scss']
})
export class StockavailabilityComponent implements OnInit {
  public pageSizeUnitName = 5;
  public pageSizeBrandName = 5;

  public dataSourceUintName = new MatTableDataSource<UnitName>();
  public dataSourceBrandName = new MatTableDataSource<BrandName>();

  public unitName = stockAvailability.UnitName;
  public brandName = stockAvailability.BrandName;
  searchType = true;
  brandNames: any;
  liquorNames: any;
  subLiquorList: any;
  stockInAvaObj ={
    brandName:'',
    liquorType:'',
    subLiquorType:'',
    liquorCategory:'',
    packageType:'',
    packAgeSize:'',
    unitType:'',
    unitName:'',
    unitAddress:'',
  }
  licenseList: any;
  constructor(private router: Router,
    private apiservice:ApiService,
    private WholesaleStockAvailabilityService: WholesaleStockAvailabilityService,
    private subLiquorType: SubLiquorTypeService,
    private masterService:BrandMasterService,
    ) { }
selected: any;
@ViewChild(DataTableDirective, { static: false })
 dtElement: DataTableDirective;
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject();
 stockavaillist: any;
  

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.ListApi();
    this.getbrandnames();
    this.getliquorType();
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
  onClickChange(value){
    if(value == 'BRANDNAME'){
      this.searchType = false
    }
    else{
      this.searchType = true
    }
  }
  BrandName(event){
    
    console.log(event)
   
    }
    subLiqrType(event){
      console.log(event)
    }
  getbrandnames(){
    this.masterService.getBrandMaster().subscribe((res:any) => {
      this.brandNames = res.data
    })
  }
  getliquorType(){
    this.WholesaleStockAvailabilityService.getLiquiorType().subscribe((res:any) =>{
      this.liquorNames = res.data
    })
  }
  LiquorType(eventData){
    let id = eventData.target ? eventData.target.value : eventData;
    console.log(eventData)
    this.subLiquorType.getSubLiquorTypesByLiquorId(id).subscribe((res:any) => {
      this.subLiquorList = res.data
    });
   
  }
  getUnitType(eventData){
 console.log(eventData)
  }

  
  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    // this.TransPassCancelsearchByPendForApprov(pageNo, pageSize);
  }
  ListApi() {
    this.WholesaleStockAvailabilityService.get("WholesaleStockAvailList").then((response:any)=>{
      if(response){
        this.stockavaillist = response;
      //  this.dataSourceUintName.data = response.data.contents as UnitName[];;
       
        this.refreshTabIns();
      }
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  // view(event){
  //   this.router.navigate(['/supplychainmanagement/wholesale/stockavailability/view/'+event.id])
  //     }
  //     editt(event){
  //   this.router.navigate(['/supplychainmanagement/wholesale/transitgatepass/view/'+event.id])
  //     }
}

