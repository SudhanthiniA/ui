import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '@app/services';
import { AlertService, TankRegistrationService,TankConversionService,StockInService ,TankMaintananceService} from '@app/services';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MasterapiService } from '@app/services';
import { PreviewService } from '@appServices/preview.service';
// import { apiUrls } from '@appEnv/apiurls';
@Component({
  selector: 'app-tankmaintain',
  templateUrl: './tankmaintain.component.html',
  styleUrls: ['./tankmaintain.component.scss']
})
export class TankmaintainComponent implements OnInit {
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
  tankmaintananceObj: any = {
    requestdate: '',
    tankname: '',
    istankempty: true,
    capacity: '',
    tankGradeId: '',
    durationofmaintain: '',
    reason: ''
   
    }
@ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;
    
  maintains = "Maintainance";
  tanklist: any;
  formSubmitted: any;
  tanks: any;
  viewId: any;
  tankList: any;
  tankGradeList: any;
  gradeCode: any;
  gradeValue: any;

  constructor(private apiService: ApiService,private route: ActivatedRoute,
    private TankRegistrationService: TankRegistrationService,
    private TankmaintananceService:TankMaintananceService,

    private router: Router,
    private datepipe: DatePipe,
   
    private preview: PreviewService, private tankconversionservice: TankConversionService, private StockInService: StockInService,
    private masterapiService: MasterapiService,private alert: AlertService,) { }

  ngOnInit() {
    this.gettank();
    this.getalltankMann();
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
        this.tankmaintananceObj.tankname = resp.data.id;
        this.tankmaintananceObj.tankGradeId = resp.data.gradeId;

        // this.tankconverstion.assisid = resp.data.assetName;
        // this.tankmaintananceObj.tankgrade = resp.data.gradeId;
        // this.tankconverstion.balenceqtl = resp.data.balanceCapacity;
        this.tankmaintananceObj[`capacity`] = resp.data.capacity;   
         }
    })
  }
  changetankforautopop(id){
    this.StockInService.getTankDetail(id).subscribe((resp: any) => {
      this.tankmaintananceObj.capacity = resp.data.totalCapacity;
      this.tankmaintananceObj.tankGradeId = resp.data.gradeId;
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

  getMolassesType(Id) {
    const molassesObj = this.tankGradeList.find((x: any) => { return x.id == Id });
      this.gradeCode = molassesObj.code,
      this.gradeValue = molassesObj.name
  }

  getTankLists() {
    // this.masterapiService.get(apiUrls.getAllTank).then((responceData: any) => {
    //   this.tankList = responceData.data;
    // }).catch((err: any) => {
    //   console.log('\n err...', err);
    // });
    const postData = {"filters":{"registration_id":null,"tank_id":null,"total_capacity":null},"pageNo":0,"paginationSize":500}
    this.StockInService.searchTanReg(postData).subscribe((resp: any) => {
      this.tankList = resp.data.contents
    })
  }
  clickedevent(event) {
    this.maintains = event.target.value;
  }
  gettank() {
    console.log("tanks names");
    this.masterapiService.get('tankType/getAllTankType').then((responceData: any) => {
      console.log("tanks names",responceData);
      this.tanklist = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err); 
    });
  }
  tankmaintananceSubmit(form){

    console.log('come in') ;
    if(form.valid === false){
      this.alert.showError('Please fill required Fields', 'error');
      this.exampleModalCenter.hide();
    }else {
      const TankmaintananceService = this.TankmaintananceService;
      const postData = {
        "capacity": this.tankmaintananceObj.capacity,
        "durationofMaintenance": this.tankmaintananceObj.durationofmaintain,
        "id": this.viewId,
        "tankEmpty": this.tankmaintananceObj.istankempty,
        "reasonForMaintenance": this.tankmaintananceObj.reason,
        "reqDate": this.tankmaintananceObj.requestdate,
        "tankId": this.tankmaintananceObj.tankname,
        "tankGradeId": this.tankmaintananceObj.tankGradeId,
        "createdBy": 0,
        "createdDate": new Date(),
        "modifiedBy": 0,
        "modifiedDate": new Date(),

        // "gradeCode": this.gradeCode,
        // "gradeValue": this.gradeValue
      }
      this.TankmaintananceService.addTanmaintanance(postData).subscribe((responce:any)=>{
          console.log('submitted',responce)
          this.handleResponse(responce)
      })
    }
  
   } 
   handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.exampleModalCenter.hide();
      this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.viewId]);
      
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
      this.exampleModalCenter.hide();
 
    }
  }
  navigate(){
       this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.viewId]);

  }
   getalltankMann(){
     const tankmaintananceService =this.TankmaintananceService
     tankmaintananceService.getAllTanmaintanance().subscribe((res:any)=>{
      console.log('all tank man',res);
    })
   
  }
}
