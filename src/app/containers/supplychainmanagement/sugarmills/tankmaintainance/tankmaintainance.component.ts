// import { Component, OnInit } from '@angular/core';
import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { SugarmillapiService, PreviewService, MasterapiService,TankMaintananceService } from '@app/services';
@Component({
  selector: 'app-tankmaintainance',
  templateUrl: './tankmaintainance.component.html',
  styleUrls: ['./tankmaintainance.component.scss']
})
export class TankmaintainanceComponent implements OnInit {
  tankmaintananceList: any;

  constructor( private router: Router,
    private masterapiService: MasterapiService,
    private preview: PreviewService,
    private apiService: SugarmillapiService,
    private TankmaintananceService: TankMaintananceService) { }
    tankConversionForm:any
  ngOnInit() {
    this.getalltankMann();
    
  }
  tankConObj = {
      application_id: '',
      tank_id: '',
      total_capacity: '',
    };
    
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankmaintainance/view',id]);
  }
  navigateEdit(id){

    this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintain',id]);
  }
  getalltankMann(){
    const tankmaintananceService =this.TankmaintananceService
    tankmaintananceService.getAllTanmaintanance().subscribe((res:any)=>{
     console.log('all tank man',res);
     this.tankmaintananceList = res.data
   })
  
 }
}
