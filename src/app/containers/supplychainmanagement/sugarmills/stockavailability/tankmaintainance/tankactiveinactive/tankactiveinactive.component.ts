import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { AlertService,StockInService, TankConversionService,TankRegistrationService ,TankactiveInactiveService} from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MasterapiService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
@Component({
  selector: 'app-tankactiveinactive',
  templateUrl: './tankactiveinactive.component.html',
  styleUrls: ['./tankactiveinactive.component.scss']
})

export class TankactiveinactiveComponent implements OnInit {
  tankconverstionObj: any = {
    "reqdate": '',
    "tankId": '',
    "tankEmpty": '',
    "capacity": '',
    "plannedDateOfActiveInactive": '',
    "reasonForActiveInactive": '',
    "tankGradeId": '',

   
    // avlQty: '',
    // createdBy: '7',
    // createdDate: '2020-01-15',
    // feedback: '',
    // modifiedBy: '7',
    // modifiedDate: '2020-01-15',
    // status: '',
    // toTankGrade: ''
  }
  maintains = "Maintainance";
  tanklist: any;
  formSubmitted: any;
  alltankactivelist: any;
  tankGradeList: any;
  tankList: any;
  viewId: any;
@ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  constructor(private TankactiveInactiveService:TankactiveInactiveService,private route: ActivatedRoute,private router: Router,
    private StockInService:StockInService,private alert: AlertService,  private tankconversionservice: TankConversionService,private masterapiService: MasterapiService) { }

  ngOnInit() {
    this.gettank();
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });

    this.getTankLists()
    this.getAllTankGrades()
  }
  getTankbyid(id) {
    this.tankconversionservice.getstockbytank(id).subscribe((resp: any) => {
      if (resp.status = 's') {
        console.log(resp.data)
        this.tankconverstionObj.tankId = resp.data.id;
        // this.tankconverstion.assisid = resp.data.assetName;
        this.tankconverstionObj.tankGradeId = resp.data.gradeId;
        // this.tankconverstion.balenceqtl = resp.data.balanceCapacity;
        this.tankconverstionObj[`capacity`] = resp.data.capacity;     
       }
    })
  }
  changetankforautopop(id){
    this.StockInService.getTankDetail(id).subscribe((resp: any) => {
      this.tankconverstionObj.capacity = resp.data.totalCapacity;
      this.tankconverstionObj.tankGradeId = resp.data.gradeId;
      // this.getFromGrade(id)
    })
  }
  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }
 
  getTankLists() {
    // this.masterapiService.get(apiUrls.getAllTank).then((responceData: any) => {
    //   this.tankList = responceData.data;
    // }).catch((err: any) => {
    //   console.log('\n err...', err);
    // });
    const postData = {"filters":{"registration_id":null,"tank_id":null,"total_capacity":null},"pageNo":0,"paginationSize":500}
    this.StockInService.searchTanReg(postData).subscribe((resp: any) => {
      console.log('tankList',resp)
      this.tankList = resp.data.contents
    })
  }
  gettank() {
    console.log("tanks names");
    this.masterapiService.get('tankType/getAllTankType').then((responceData: any) => {
      console.log("tanks names",responceData);
      this.tanklist = responceData.data.contents;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addtankactive(form){
  console.log('tank active inactive');
  if(form.valid === false){
    this.alert.showError('Please fill required Fields', 'error');
    this.exampleModalCenter.hide();
  }else {
    this.TankactiveInactiveService.addTankactiveInactive(this.tankconverstionObj).subscribe((res:any)=>{
      this.alltankactivelist = res.data
      console.log('tank active inactive');
      this.handleResponse(res)
 
    })
  }
 }
 navigate(){
  this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.tankconverstionObj.tankId ]);

}
 handleResponse(responceData: any) {
  if (responceData.status == 's') {
    this.exampleModalCenter.hide();

    this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    // this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance',this.tankconverstion.tankname]);
  this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.tankconverstionObj.tankId ]);

    
   } else {
    this.exampleModalCenter.hide()

    this.alert.showError(responceData.userDisplayMesg, 'error');
  }
}

}
