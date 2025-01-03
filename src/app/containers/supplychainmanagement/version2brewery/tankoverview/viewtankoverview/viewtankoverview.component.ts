import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import * as fileSaver from 'file-saver';

import { AlertService, TankregistartionService,WorkflowcofigService,MasterapiService,DocumentUploadService } from '@app/services';



@Component({
  selector: 'app-viewtankoverview',
  templateUrl: './viewtankoverview.component.html',
  styleUrls: ['./viewtankoverview.component.scss']
})
export class ViewtankoverviewComponent implements OnInit {

  viewId:any;
  tankregreqlist:any;
  workflowdata:any;
  loginuser:any;

  tankregobjt={
    newtankreg:'',
    requestdate:'',
    tankusage:'',
    tankrawmetireal:'',
    tankname:'',
    metirealofcontration:'',
    tanktype:'',
    tankcovertype:'',
    tankshape:'',
    hight:'',
    Width:'',
    innerdiametor:'',
    tankcapacity:'',
    status:'',
    tankStatus:'',
    tankCatagory:''

  };

  uploadDocList: any[]=[];

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TankRegistrationService: TankregistartionService,
    private workflowservice:WorkflowcofigService,
    private alert: AlertService,
    private documentUploadService: DocumentUploadService



  ) { }

  ngOnInit() {
    this.loginuser = localStorage.getItem('USER_NAME');
    this.route.params.subscribe(params => {
      console.log('prams -->>',params);
      
      if (params.id) {
        this.viewId = params.id;
        this.setData(this.viewId);
        sessionStorage.setItem('tankid', this.viewId);

      } else {
        this.setData();
      }
    });
    }

    downloadDocument(uuid, documentName) {

      if (uuid && documentName) {
        this.documentUploadService.downloadDocument(uuid, documentName).subscribe((resp: any) => {
          // const blob: any = new Blob([resp], { type: 'image/jpeg; charset=utf-8' });
          fileSaver.saveAs(resp, documentName);
        },
          (error: any) => this.alert.showError('Error downloading the file', 'Error'),
          () => console.info('File downloaded successfully')
        );
      } else {
        this.alert.showError('File not available', 'Error');
      }
  
    }


  setData(id?: any) {
    console.log('tank id of overview-->>',id);
    
    // let data =`?applicationNumber=${id}&registrationType=${id}`
    if (id) {
      this.TankRegistrationService.getTanRegById(id).subscribe((responceData: any) => {

        if(responceData.content){
          // this.tankregobj = responceData.data;
          this.tankregobjt.newtankreg ='';
          this.uploadDocList = responceData.content.tankRegistrationDetails.tankDocumentList;
          // this.tankregobjt.requestdate= responceData.content.tankRegistrationDetails.requestDate?responceData.content.tankRegistrationDetails.requestDate:'';
          this.tankregobjt.tankusage= responceData.content.tankRegistrationDetails.tankUsageGroupDto?responceData.content.tankRegistrationDetails.tankUsageGroupDto.name:'-';
          this.tankregobjt.tankrawmetireal= responceData.content.tankRegistrationDetails.tankRawMaterialDto?responceData.content.tankRegistrationDetails.tankRawMaterialDto.name:'-';
          this.tankregobjt.tankname= responceData.content.tankRegistrationDetails.tankName?responceData.content.tankRegistrationDetails.tankName:'-';
          this.tankregobjt.metirealofcontration= responceData.content.tankRegistrationDetails.tankMaterialDto?responceData.content.tankRegistrationDetails.tankMaterialDto.name:'-';
          this.tankregobjt.tanktype= responceData.content.tankRegistrationDetails.tankTypeDto?responceData.content.tankRegistrationDetails.tankTypeDto.name:'-';
          this.tankregobjt.tankcovertype=responceData.content.tankRegistrationDetails.tankCoverTypeDto?responceData.content.tankRegistrationDetails.tankCoverTypeDto.name:'-';
          this.tankregobjt.tankshape= responceData.content.tankRegistrationDetails.tankShapeDto?responceData.content.tankRegistrationDetails.tankShapeDto.name:'-';
          this.tankregobjt.hight=responceData.content.tankRegistrationDetails.height?responceData.content.tankRegistrationDetails.height:'-';
          this.tankregobjt.Width= responceData.content.tankRegistrationDetails.width?responceData.content.tankRegistrationDetails.width:'-';
          this.tankregobjt.innerdiametor= responceData.content.tankRegistrationDetails.innerDiameter?responceData.content.tankRegistrationDetails.innerDiameter:'-';
          this.tankregobjt.tankcapacity= responceData.content.tankRegistrationDetails.capacity?responceData.content.tankRegistrationDetails.capacity:'-';
          this.tankregobjt.status= responceData.content.status?responceData.content.status:'-';
          this.tankregobjt.tankStatus = responceData.content.tankStatus?responceData.content.tankStatus:'-'
          this.tankregobjt.tankCatagory = responceData.content.tankRegistrationDetails.tankUsageGroupDto?responceData.content.tankRegistrationDetails.tankUsageGroupDto.tankCatagory.name:'-'
          this.tankregobjt.requestdate = responceData.content.tankRegistrationDetails.requestDate;

          let tankobj = responceData.content.tankRegistrationDetails;
       
        }        
       this.tankregreqlist = responceData.content.tankRegistrationDetails.tankActivityRequestDTOList;
       console.log('tank audit list ==>>',this.tankregreqlist);
       console.log('tankregreqlist==>>',this.tankregreqlist);

        this.workflowservice.getworkflowbydesignation('DISTILLERY','DISTILLERY_TANK_REGISTRATION').subscribe((resp: any) => {
          this.workflowdata = resp.content
          
        })
      })
    } else {
         
    }
  }
  tankmaintenace(){
    this.router.navigate(['/supplychainmanagement/distillery/tankmaintenance/add']);
  }
  tankconversion(){
    this.router.navigate(['/supplychainmanagement/distillery/tankconversion/add']);

  }
  tanktransfer(){
    this.router.navigate(['/supplychainmanagement/distillery/tanktransfer/add']);

  }

  // onEdit(event) {
  //   this.router.navigate(['/supplychainmanagement/distillery/tankregistration/edit', event.id]);
  // }
  // onView(event) {
  //   this.router.navigate(['/supplychainmanagement/distillery/tankoverview/view', event.id]);
  // } 
}
