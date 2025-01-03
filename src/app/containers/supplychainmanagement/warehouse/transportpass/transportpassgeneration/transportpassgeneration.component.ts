import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WarehouseTrnsportPassGenService } from '@app/services/ware-house';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportpassgeneration',
  templateUrl: './transportpassgeneration.component.html',
  styleUrls: ['./transportpassgeneration.component.scss']
})
export class TransportpassgenerationComponent implements OnInit {
  brandData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  transportData: any;
  TransportDetailsObj:any={
    licenseeNo: '',
      licenseeType: '',
      gatePassNumber: ''
  }
  constructor(
    private apiService: ApiService,
    private warehouseTrnsportPassGenService: WarehouseTrnsportPassGenService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getlist();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
  }
  getlist(){
    this.warehouseTrnsportPassGenService.getalltransportdetails().subscribe((response:any)=>{
      if(response.status == 's'){
        this.transportData = response.data;
        this.refreshTabIns();
      }
    })
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
  navigate(id,value){
  if(value == 'edit'){
  this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/edit/',id])
    }
    else if(value == 'view'){
      this.router.navigate(['/supplychainmanagement/warehouse/transportpass/transportpassgeneration/view/',id])
    }
  }
  // search data
  searchWareHousePass(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        licenseeType: this.TransportDetailsObj.licenseeType ? this.TransportDetailsObj.licenseeType : null,
        licenseeNo: this.TransportDetailsObj.licenseeNo ? this.TransportDetailsObj.licenseeNo : null,
        gatePassNumber: this.TransportDetailsObj.gatePassNumber ? this.TransportDetailsObj.gatePassNumber : null,
        //liquorTypeName :this.TransportDetailsObj.liquorTypeName ? this.TransportDetailsObj.liquorTypeName : null,
      },
      pageNo,
      paginationSize,
    };
    this.warehouseTrnsportPassGenService.searchTransportDetails(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.transportData = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.TransportDetailsObj = {
      licenseeNo: '',
      licenseeType: '',
      gatePassNumber:''
    };
  }
}
