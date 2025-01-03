import { Component, OnInit } from '@angular/core';
import { AccidentalService } from '@app/services/ware-house/accidental.service';
import { apiUrls } from '@appEnv/apiurls';
import { DatePipe } from '@angular/common';
import { AlertService, MasterapiService } from '@app/services';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-addaccidental-application',
  templateUrl: './addaccidental-application.component.html',
  styleUrls: ['./addaccidental-application.component.scss']
})
export class AddaccidentalApplicationComponent implements OnInit {
  districtList: any;
  accidentresp: any;
  formSubmitted = false;
  editId:any;
  addedit:any;
  accidentrespObj:any={}
  constructor(
    private accident: AccidentalService, 
    private masterapiService: MasterapiService,
    private route: ActivatedRoute,
    private datepipe: DatePipe,
    private router: Router,
    private alert: AlertService
  ) { }
  
  ngOnInit() {
    this.getDistricts();
    this.route.params.subscribe(params => {
      console.log(params);
      if (params.Id) {
       
        this.getById(params.Id);
        this.accidentrespObj.Id = params.Id;
        this.editId = params.Id;
        this.addedit = 'Edit';

      }
    });
    this.addedit = this.router.url.includes('add') === true ? 'Add' : 'Edit';
    this.accidentrespObj.accidentalDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    this.accidentrespObj.transportPassDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  }

  resetForm(){
    this.accidentrespObj.reset();
  }
  
  getById(id) {
    this.accident.getbyaccid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.accidentrespObj = response.data
        this.accidentrespObj.accidentalDate = this.datepipe.transform(this.accidentrespObj.accidentalDate, 'yyyy-MM-dd');
        this.accidentrespObj.transportPassDate = this.datepipe.transform(this.accidentrespObj.transportPassDate, 'yyyy-MM-dd');
      }
    })
  }
  
  getDistricts() {
    this.masterapiService.get(apiUrls.getAllDistrict).then((responceData: any) => {
      this.districtList = responceData.data;
    }).catch((err: any) => {
      console.log('\n err...', err);
    });
  }
  addaccident(form, status) {
    this.formSubmitted = false;
    if (form.valid === false) {
      this.formSubmitted = true;
    } else {

      if (this.editId) {
        const paramdpd = {
          "_active": true,
          "accidentalDate":this.accidentrespObj.accidentalDate,
          "accidentalDistrict": this.accidentrespObj.accidentalDistrict,
          "accidentalLocatAddress": this.accidentrespObj.accidentalLocatAddress,
          "entityId": 7,
          "id": 0,
          "landmark": this.accidentrespObj.landmark,
          "remarks": this.accidentrespObj.remarks,
          "status": "SUBMITTED",
          "transportPassDate": this.accidentrespObj.transportPassDate,
          "transportPassNo": this.accidentrespObj.transportPassNo,
          "transportPassTypeid": this.accidentrespObj.transportPassTypeid
        }
        paramdpd['id'] = this.editId;

        this.accident.updateAccident(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/accidental-application/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      } else {
        const paramdpd = {
          "_active": true,
          "accidentalDate":this.accidentrespObj.accidentalDate,
          "accidentalDistrict": this.accidentrespObj.accidentalDistrict,
          "accidentalLocatAddress": this.accidentrespObj.accidentalLocatAddress,
          "entityId": 7,
          "id": 0,
          "landmark": this.accidentrespObj.landmark,
          "remarks": this.accidentrespObj.remarks,
          "status": "SUBMITTED",
          "transportPassDate": this.accidentrespObj.transportPassDate,
          "transportPassNo": this.accidentrespObj.transportPassNo,
          "transportPassTypeid": this.accidentrespObj.transportPassTypeid
          }
       
        this.accident.addaccident(paramdpd).subscribe((response: any) => {
          if (response.status == "s") {
            this.alert.showSuccess(response.userDisplayMesg, 'Success');
            this.router.navigate(['/supplychainmanagement/warehouse/accidental-application/list']);
          }
          else {
            this.alert.showError(response['userDisplayMesg'], 'error')
          }
        })
      }
    }
  }
}

