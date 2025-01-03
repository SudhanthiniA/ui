import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseBwfl4Service } from '@app/services/ware-house';

@Component({
  selector: 'app-bwfl4',
  templateUrl: './bwfl4.component.html',
  styleUrls: ['./bwfl4.component.scss']
})
export class Bwfl4Component implements OnInit {
  bwfl4Data: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  bwfl4DataOne:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public totalCount: number;
  public isSearchRes = false;
  public dataSource = new MatTableDataSource<Location>();
  bwfl4Form:any;
  bwfl4Obj:any={
    bwfl4date: '',
    placeId: '',
    passNo: '',
    noOfBottles:''
  }
  public pageSize = 5;
  pageNo = 0;
  constructor(
    private apiService: ApiService,
    private warehouseBwfl4Service: WarehouseBwfl4Service,
    
  ) { }

  ngOnInit() {
    this.getlist();
  }
  getlist(){
    this.warehouseBwfl4Service.GetList().subscribe((response:any)=>{
      if(response.status == 's'){
        this.bwfl4Data = response.data;
        console.log(this.bwfl4Data);
        this.refreshTabIns();
      }
    })
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

  searchBwfl4(pageNo = 0, pageSize = 5){
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        bwfl4date: this.bwfl4Obj.bwfl4date ? this.bwfl4Obj.bwfl4date : null,
        placeId: this.bwfl4Obj.placeId ? this.bwfl4Obj.placeId : null,
        passNo: this.bwfl4Obj.passNo ? this.bwfl4Obj.passNo : null,
        noOfBottles: this.bwfl4Obj.noOfBottles ? this.bwfl4Obj.noOfBottles : null
      },
      pageNo,
      paginationSize,
    };

    this.warehouseBwfl4Service.searchBwfl4(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.bwfl4Data = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.bwfl4Obj = {
      bwfl4date: '',
      placeId: '',
      passNo: '',
      noOfBottles:''
    };
  }
}
