import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WarehouseBwfl5Service } from '@app/services/ware-house';

@Component({
  selector: 'app-bwfl5',
  templateUrl: './bwfl5.component.html',
  styleUrls: ['./bwfl5.component.scss']
})
export class Bwfl5Component implements OnInit {
  bwfl5Data: any;
  bwfl5Form:any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  bwfl5Obj:any={
    bwfl5Date:'',
    treasuryChallanNo:'',
  }
  constructor(
    private apiService: ApiService,
    private warehouseBwfl5Service: WarehouseBwfl5Service,
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
    this.warehouseBwfl5Service.getList().subscribe((response:any)=>{
      if(response.status == 's'){
        this.bwfl5Data = response.data;
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
  // search api
  searchBwfl5(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        bwfl5Date: this.bwfl5Obj.bwfl5Date ? this.bwfl5Obj.bwfl5Date : null,
        treasuryChallanNo: this.bwfl5Obj.treasuryChallanNo ? this.bwfl5Obj.treasuryChallanNo : null,     
      },
      pageNo,
      paginationSize,
      //search: this.bwfl5Obj.bwfl4date || this.bwfl5Obj.placeId || this.bwfl5Obj.passNo  ||  this.bwfl5Obj.noOfBottles
       
    };

    this.warehouseBwfl5Service.searchBwfl5(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl5Data = responceData.data.contents;
      this.refreshTabIns();
      
      });
  }

  resetKey() {
    this.bwfl5Obj = {
      bwfl5Date:'',
      treasuryChallanNo:'',
    };
    //this.getEntity();
  }
}
