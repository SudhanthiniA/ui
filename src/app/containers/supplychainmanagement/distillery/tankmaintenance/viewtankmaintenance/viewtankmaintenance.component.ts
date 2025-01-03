import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TankMaintainancesService } from '@app/services/distillery/tankmaintainance.service';
import { PreviewService, AlertService, WorkflowcofigService, TankregistartionService } from '@app/services';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-viewtankmaintenance',
  templateUrl: './viewtankmaintenance.component.html',
  styleUrls: ['./viewtankmaintenance.component.scss']
})
export class ViewtankmaintenanceComponent implements OnInit {


  viewid: any;
  addedit: string;
  formSubmitted: boolean;
  workflowdata: any;
  logactive:boolean = false;
  logshow: any[] = []

  s={
    nextId:'TM'
  }
  viewobj: any ;
    // remarks: '',
  
  requestdate:any;
  userId: string;
  entityType: string;
  status: string;

  constructor(
    private router: Router,
    private alert: AlertService,
    private route: ActivatedRoute,
    private TankmaintainanceService: TankMaintainancesService,
    private datePipe: DatePipe,
    private workflowService: WorkflowcofigService,
    private preview: PreviewService,
    private tankRegService: TankregistartionService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('nextId','TM')

    this.getworkflow();
    this.route.params.subscribe((param) => {
      if (param.Id) {
        this.viewid = param.Id;
        this.getById(this.viewid);
      }
      else {
        this.getById();
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }

  getById(id?) {
    if (id) {
      this.TankmaintainanceService.getTanById(id).subscribe(responceData => {
        console.log(responceData);
        this.viewobj = responceData.content;

        let data = responceData.content;
        // this.viewobj.requestDate =`${this.viewobj.requestDate[0]}/${this.viewobj.requestDate[1]}/${this.viewobj.requestDate[1]}`;
        let reqdate = data.toDistTankRegistration.tankRegistrationDetails? data.toDistTankRegistration.tankRegistrationDetails.requestDate : null;
        this.viewobj.requestDate = this.datePipe.transform(reqdate,'yyyy-MM-dd');
         this.viewobj.capacity = data.toDistTankRegistration.tankRegistrationDetails ? data.toDistTankRegistration.tankRegistrationDetails.capacity : null;
        this.viewobj.tankId = data.toDistTankRegistration.tankRegistrationDetails ? data.toDistTankRegistration.tankRegistrationDetails.tankName : null;
        this.viewobj.status = data ? data.status : null;
        this.viewobj.createdDate = this.datePipe.transform(data.createdDate, 'yyyy-MM-dd');
        this.viewobj.modifiedDate = this.datePipe.transform(data.modifiedDate, 'yyyy-MM-dd');
        this.viewobj.scheduleDate = this.datePipe.transform(data.scheduleDate, 'yyyy-MM-dd');
        this.viewobj.tank = data.toDistTankRegistration.id;
        if (this.viewobj.applicationNumber){
          this.workflowService.getapprovallogs(this.viewobj.applicationNumber)
          .subscribe((resp: any) => {
            if(resp){
              if (resp.length > 0) {
                this.logactive = true;
                this.logshow = resp
              }
            }
          })
        }
        
    
      });
    
    }  
      
    else {
      this.viewobj = this.preview.setData;
      // debugger;
      this.viewid = this.preview.setData.id;
      if (this.viewobj.tank) {
        this.tankRegService.getTanRegById(this.viewobj.tank).subscribe((resp: any) => {
          if (resp.data) {
           
            this.viewobj.tankId = resp.data.tankRegistrationDetails.tankName ? resp.data.tankRegistrationDetails.tankName : '';
            
          }
        })
      }
      
    }
 
}
getworkflow(){
  this.workflowService.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_MAINTENANCE').subscribe((resp: any) => {
    this.workflowdata = resp.content
  });
}
  feedback(data, form) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {
      const approveObj = {
          comments:"approved",
          event: data,
          id: parseInt(this.viewid),
          applicationNumber: this.viewobj.applicationNumber,
          isDigitalSignature: this.workflowdata ? this.workflowdata.isDigitalSignature : true,
          level: this.workflowdata ? this.workflowdata.level : 'Level 2',
      };
      this.TankmaintainanceService.addTank(approveObj).subscribe((responseData: any) => {
        if (responseData.responseCode === 200) {
          this.alert.showSuccess(responseData.responseMessage, 'Success');
          this.router.navigate(['/supplychainmanagement/distillery/tankoverview']);
        } else {
          this.alert.showError(responseData.responseMessage, 'error');
        }
      })
    }
  }

}
