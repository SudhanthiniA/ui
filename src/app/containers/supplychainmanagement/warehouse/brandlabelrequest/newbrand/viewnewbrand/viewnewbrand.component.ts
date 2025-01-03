import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { WarehouseNewbrandService } from '@app/services/ware-house';
import { AlertService, ApiService } from '@app/services';

@Component({
  selector: 'app-viewnewbrand',
  templateUrl: './viewnewbrand.component.html',
  styleUrls: ['./viewnewbrand.component.scss']
})
export class ViewnewbrandComponent implements OnInit {
  editId: any;
  BrandNewObj: any;
  formSubmitted = false;
  username = localStorage.getItem('USER_NAME')
  approvalobj={
    remarks:''
  }
  alertmeg: string;
  workflow: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datepipe: DatePipe,
    private warehouseNewbrandService: WarehouseNewbrandService,
    private alert: AlertService,
    private apiservice:ApiService,
  ) { }

  ngOnInit() {
    console.log(this.username)
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getById(params.id);
        // this.BrandNewObj.id = params.id;
        this.editId = params.id;
        // this.addedit = 'Edit';

      }
    });
  }
  
  getById(id) {
    this.warehouseNewbrandService.getbyid(id).subscribe((response: any) => {
      if (response.status == 's') {
        this.BrandNewObj = response.data;
      }
    })
    let userdata
    if(this.username != 'parentwarehouse') {
      this.warehouseNewbrandService.getuserbyid(+localStorage.getItem('USER_ID'))
      .subscribe((resp:any) => {
        userdata = resp.data.designationResponseDto.name;
        let postdata = {
          workflowname: 'Brand Regestration',
          design: userdata
        }
        this.warehouseNewbrandService.getworkflowbydesignation(postdata)
        .subscribe((resp: any) => {
          if(resp.responseCode == 200){
            this.workflow = resp.content
          }          
        })
      })
    }
  }

  approval(data) {

    let postData = {
      applicationNumber: this.BrandNewObj.applicationNumber,
      comments: "string",
      // callbackURL: "string",
      id: 0,
      level: this.workflow.level,
      workflowName: 'Brand Regestration'
    }
    if(this.workflow.isFinished){
      postData['event'] ='APPROVED';
     this.alertmeg ='Approved Record Successfully'
    } else{
      postData['event']=`${this.workflow.level}_APPROVED`;
      this.alertmeg ='Clarification Record Successfully'
    }
  
    this.warehouseNewbrandService.approvalAllotment(postData).subscribe(responceData => {
      if (responceData['status'] == 's') {
        this.alert.showSuccess(this.alertmeg, 'Success')
        // sessionStorage.removeItem("formdata")
        this.router.navigate(['/supplychainmanagement/warehouse/brandlabelrequest/newbrand/list']);
        console.log(responceData);
      } else {
        this.alert.showError(responceData['userDisplayMesg'], 'error')
      }
    })
  }
}
