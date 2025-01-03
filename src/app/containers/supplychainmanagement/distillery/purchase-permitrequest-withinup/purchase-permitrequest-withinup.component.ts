import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import {PurchaseprmtreqwtinupService} from '@app/services'
@Component({
  selector: 'app-purchase-permitrequest-withinup',
  templateUrl: './purchase-permitrequest-withinup.component.html',
  styleUrls: ['./purchase-permitrequest-withinup.component.css']
})
export class PurchasePermitrequestWithinupComponent implements OnInit {
  // indentrequestData: any;
  // pd26List:any
   indentPurchaseObj:any={
    unitName:'',
    spiritType:''
  }
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  purchasepermitlist: unknown;
  constructor(private purchageprmtwtinup:PurchaseprmtreqwtinupService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      searching: false,
      lengthMenu: [5, 10, 20, 50, 100],
      scrollX: true
    };
    this.listapi();
  }
  listapi() {
    this.purchageprmtwtinup.getallpurchasedata().subscribe(responceData => {
      console.log(responceData);
      this.purchasepermitlist=responceData['data'];
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
        } else {
          this.dtTrigger.next();
        }
    });
  }


  searchapi() {
    const objtest = {
      filters: {
        unitName: this.indentPurchaseObj.unitName ? this.indentPurchaseObj.unitName : null,
        spiritType: this.indentPurchaseObj.spiritType ? this.indentPurchaseObj.spiritType : null,
       
      },
      pageNo: 0,
      paginationSize: 5
    };
    this.purchageprmtwtinup.searchdata(objtest).subscribe((responceData: any) => {
      this.purchasepermitlist = responceData.data.contents;
      if (this.dtElement.dtInstance) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.dtTrigger.next();
      }
    });
  }
  resetKey() {
    this.indentPurchaseObj = {
      unitName: '',
      spiritType: '',
    };
    this.listapi();
  }


}
