import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PreviewService } from '@app/services/preview.service';
import { SugarmillapiService } from '@app/services';
import { apiUrls } from '@appEnv/apiurls';
import { MasterapiService } from '@app/services';
import { AlertService, TankRemovelService,TankConversionService,StockInService ,TankMaintananceService} from '@app/services';


@Component({
  selector: 'app-removal',
  templateUrl: './removal.component.html',
  styleUrls: ['./removal.component.scss']
})
export class RemovalComponent implements OnInit {

  tankconverstionObj: any = {
    // attach:'',
    requestdate: '',
    tankId: '',
    tankGradeId: '',
    tankEmpty: '',
    capacity: '',
    plannedDateOfRemoval: '',
    reasonForRemoval: '',
  }
  maintains = "Maintainance";
  tankList: any;
  formSubmitted: any;
  tankoverviewList: any;
  
  tankregistrationForm: any;
  tanks: any;
  viewId: any;
  tankGradeList: any;

  constructor(
    private router: Router,
    private preview: PreviewService,
    private datepipe: DatePipe,
    private apiService: SugarmillapiService,private TankRemovelService:TankRemovelService,
    private MasterapiService: MasterapiService,private route: ActivatedRoute,
    private tankconversionservice: TankConversionService, private StockInService: StockInService,
    private masterapiService: MasterapiService,private alert: AlertService,
  ) { }

  ngOnInit() {
    this.gettankregester();
    this.gettank();
    this.preview.setData = '';
    this.route.params.subscribe(params => {
      if (params.Id) {
        this.viewId = params.Id;
        this.getTankbyid(this.viewId);
      }
    });
    this.getTankLists()
    this.getAllTankGrades()
  }
@ViewChild('exampleModalCenter', { static: false }) exampleModalCenter;

  navigate(){
    this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.tankconverstionObj.tankId]);

}
  addtankremovel(form){
    if(form.valid === false){
      this.alert.showError('Please fill required Fields', 'error');
      this.exampleModalCenter.hide();
    }else {
      this.TankRemovelService.addTankremovel({
        "capacity": this.tankconverstionObj.capacity,
        "plannedDateOfRemoval":this.tankconverstionObj.plannedDateOfRemoval,
        "reasonForRemoval": this.tankconverstionObj.reasonForRemoval,
        "reqdate": this.tankconverstionObj.requestdate,
        "tankEmpty": this.tankconverstionObj.tankEmpty,
        "tankId":this.tankconverstionObj.tankId,
        "toTankGrade": this.tankconverstionObj.tankGradeId
      }).subscribe((res:any)=>{
        console.log('addremovel',res)
        this.handleResponse(res);
      })
    }
     
  }
  handleResponse(responceData: any) {
    if (responceData.status == 's') {
      this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
      this.exampleModalCenter.hide();

    this.router.navigate(['/supplychainmanagement/sugarmills/stockavailability/tankmaintainance', this.tankconverstionObj.tankId]);
      
    } else {
      this.alert.showError(responceData.userDisplayMesg, 'error');
      this.exampleModalCenter.hide();

    }
  }
  getTankLists() {
   
    const postData = {"filters":{"registration_id":null,"tank_id":null,"total_capacity":null},"pageNo":0,"paginationSize":500}
    this.StockInService.searchTanReg(postData).subscribe((resp: any) => {
      console.log('tankList',resp)
      this.tankList = resp.data.contents
    })
  }
  getTankbyid(id) {
    this.tankconversionservice.getstockbytank(id).subscribe((resp: any) => {
      if (resp.status = 's') {
        console.log('tank details by id',resp.data)
        // this.tankconverstionObj.tankname = resp.data.id;
        this.tankconverstionObj.tankId = resp.data.id;
        this.tankconverstionObj.tankGradeId = resp.data.gradeId;
        // this.tankconverstionObj.balenceqtl = resp.data.balanceCapacity;
        this.tankconverstionObj[`capacity`] = resp.data.capacity;   
         }
    })
  }
  getAllTankGrades() {
    this.masterapiService.get('molassesType/getAllMolassesType').then((responceData: any) => {
      if (responceData.status === 's') {
        this.tankGradeList = responceData.data;
      }
    });
  }
 
  navigateView(id) {
    this.router.navigate(['/supplychainmanagement/sugarmills/tankregistration/view', id]);
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
    console.log('tanksssss')
    this.apiService.get('tankRegistration/getAllTankReg').then((responceData: any) => {
      console.log('tanks names',responceData);
      this.tankoverviewList = responceData.data;
      
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
