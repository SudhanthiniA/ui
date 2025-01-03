import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreviewService } from '@app/services/preview.service';
import { SugarmillapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-tankremovel',
  templateUrl: './tankremovel.component.html',
  styleUrls: ['./tankremovel.component.scss']
})
export class TankremovelComponent implements OnInit {

  tankconverstionObj: any = {
    requestdate: '',
    tankname: '',
    istankempty: '',
    capacity: '',
    dateforemoval: '',
    dateofactive: '',
    durationofmaintain: '',
    reason: '',
  }
  maintains = "Maintainance";
  tanklist: any;
  formSubmitted: any;
  tankoverviewList: any;
  
  tankregistrationForm: any;
  tanks: any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,
    private MasterapiService: MasterapiService
  ) { }

  ngOnInit() {
    this.gettankregester();
    this.gettank();
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   searching: false,
    //   lengthMenu: [5, 10, 20, 50, 100]
    // };
    this.gettank();
    this.preview.setData = '';
  }

  navigateView() {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankremovel/view']);
  }

  navigateEdit(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/edit', id]);
  }

  gettank() {
    this.MasterapiService.get('tankType/getAllTankType/').then((responceData: any) => {
      console.log(responceData);
      this.tanks = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

 
  gettankregester() {
    
    this.apiService.get('tankRegistration/getAllTankReg').then((responceData: any) => {
      console.log('tanks names',responceData);
      // this.tankoverviewList = responceData.data;
      
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  gettankoverviewlist() {
    this.apiService.get(apiUrls.getAvailableTank).then((responceData: any) => {
      console.log('tanks names',responceData);

      this.tankoverviewList = responceData.data;
      
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }

}
