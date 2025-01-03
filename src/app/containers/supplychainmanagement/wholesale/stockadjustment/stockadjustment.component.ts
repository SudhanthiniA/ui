import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StockadjustmentService } from '@app/services';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-stockadjustment',
  templateUrl: './stockadjustment.component.html',
  styleUrls: ['./stockadjustment.component.css']
})
export class StockadjustmentComponent implements OnInit {
  stockAdjustmentList: any;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private stockAdjustmentService:StockadjustmentService,
    private router: Router
  ) { }




  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.getAllStockAdjustment();
    sessionStorage.removeItem('formdata');
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
  getAllStockAdjustment(){
    this.stockAdjustmentService.getAll('StockAdjustment').then((Responce:any)=>{
          if(Responce){
      this.stockAdjustmentList = Responce;
     
    }
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  edit(i){
    this.router.navigate(['/supplychainmanagement/wholesale/stockadjustment/edit' , i])
  }

}
