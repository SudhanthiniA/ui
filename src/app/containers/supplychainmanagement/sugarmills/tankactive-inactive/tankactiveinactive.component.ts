import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { apiUrls } from '@appEnv/apiurls';
import { SugarmillapiService, PreviewService, MasterapiService,TankMaintananceService,TankactiveInactiveService } from '@app/services';
@Component({
    selector: 'app-tankmaintainance',
    templateUrl: './tankactiveinactive.component.html',
    styleUrls: ['./tankactiveinactive.component.scss']
  })
  export class TankmaintainanceComponent implements OnInit {


    constructor( private router: Router,
      private masterapiService: MasterapiService,
      private preview: PreviewService,
      private apiService: SugarmillapiService,
      private TankmaintananceService: TankMaintananceService,private TankactiveInactiveService:TankactiveInactiveService) { }

      tankConObj = {
        application_id: '',
        tank_id: '',
        total_capacity: '',
      };
      alltankactvielist:any;
    ngOnInit(){
     this.getalltankactiveInactive();
    }
    getalltankactiveInactive(){
      this.TankactiveInactiveService.getAllTanActiveInactive().subscribe((res:any)=>{
        this.alltankactvielist = res.data
        console.log('tank actie', res)
      })
    }
  
    navigateView(id) {
      this.router.navigate(['/supplychainmanagement/sugarmills/tankactiveinactive/view',id]);
    }
    navigateEdit(id){
  
      this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankactiveinactive',id]);
    } 
  }