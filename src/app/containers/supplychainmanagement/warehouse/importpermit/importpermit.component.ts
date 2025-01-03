import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '@app/services';
import { ImportPermitStatus } from '@app/models/warehouse/import-permit-status';
import { importpasspermitService } from '@app/services/ware-house/warehouse-importpasspermit.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-importpermit',
  templateUrl: './importpermit.component.html',
  styleUrls: ['./importpermit.component.css']
})
export class ImportpermitComponent implements OnInit {
  brandData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  transportData: any;

  importPermitObj:any={
    permitNumber: ''
  }
  constructor(
    private apiService: ApiService,
    private importpermit: importpasspermitService,
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
    
    this.importpermit.getAllImports().subscribe((response:any)=>{
      if(response.status == 's'){ 
        this.transportData = response.data;
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
  navigate(id , value){
    if(value=='view'){
    this.router.navigate(['/supplychainmanagement/warehouse/importpermit/view',id]);
    }
    else if(value=='edit'){
      this.router.navigate(['/supplychainmanagement/warehouse/importpermit/edit',id]);

    }
  }

  searchImportPermit(pageNo = 0, pageSize = 5) {
    const paginationSize = pageSize;
    const searchObj = {
      filters: {
        permitNumber: this.importPermitObj.permitNumber ? this.importPermitObj.permitNumber : null,
        
      },
      pageNo,
      paginationSize,
    };

    this.importpermit.importPermitSearch(searchObj).subscribe((responceData: any) => {
      console.log(responceData);
      this.transportData = responceData.data.contents;
      this.refreshTabIns();
      });
  }

  resetKey() {
    this.importPermitObj = {
      permitNumber: ''
    };
  }
}
