import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WarehouseNewbrandService } from '@app/services/ware-house';
@Component({
  selector: 'app-newbrand',
  templateUrl: './newbrand.component.html',
  styleUrls: ['./newbrand.component.scss']
})
export class NewbrandComponent implements OnInit {

  brandData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  username = localStorage.getItem('USER_NAME')
  constructor(
    private apiService: ApiService,
    private warehouseNewbrandService: WarehouseNewbrandService,
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
    this.warehouseNewbrandService.getallbrand().subscribe((response:any)=>{
      if(response.status == 's'){
        this.brandData = response.data;
        this.brandData = this.brandData.reverse();
        if(this.username == 'whapprover') {
          this.brandData = this.brandData.filter(x => x.status == 'SUBMITTED')
        }
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

}
