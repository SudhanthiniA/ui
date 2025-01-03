import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { rolloverService } from '@app/services/ware-house/warehouse-rollover-previous.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-rolloverstkentryprevyear',
  templateUrl: './rolloverstkentryprevyear.component.html',
  styleUrls: ['./rolloverstkentryprevyear.component.scss']
})
export class RolloverstkentryprevyearComponent implements OnInit {
  brandData: any;
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  transportData: any;
  constructor(
    private roll: rolloverService,
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
    this.roll.getallrollover().subscribe((response:any)=>{
      // if(response.status == 's'){
        this.transportData = response.data;

      console.log( this.transportData );
      
        this.refreshTabIns();
      // }l
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
}
