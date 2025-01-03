import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import {Pd8BdistilaryService,AlertService} from '@app/services'
@Component({
  selector: 'app-view-pd8b',
  templateUrl: './view-pd8b.component.html',
  styleUrls: ['./view-pd8b.component.scss']
})
export class ViewPd8bComponent implements OnInit {


  pd8bDistillationObj: any = {};
  editId: any;
  entityType:any;
  addedit: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private alert: AlertService,
    private pd8bbuilder:Pd8BdistilaryService
  ) { }

  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd8bDistillation(params.id);
        this.pd8bDistillationObj.id = params.id;
        this.editId = params.id;
      } else {
        this.pd8bDistillationObj = JSON.parse(sessionStorage.getItem('pd8bdistillation'));
      }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';

  }

  getPd8bDistillation(id){
    this.pd8bbuilder.getpd8bbyid(id).subscribe(responceData => {
      this.pd8bDistillationObj = responceData['data'];
    });
  }

  userapproval(status){
    let id = this.editId;

    let data = '/'+ `${this.editId}` + '/' + `${status}`
     console.log('log of approvel ==>>',data);
     console.log('id of data ===>>>',this.editId);
     
     
  this.pd8bbuilder.approvalpd8b(data).subscribe((ressponseDate:any)=>{
      this.handleResponse(ressponseDate);
  })

}

handleResponse(responceData: any) {
  if (responceData.status == 's') {
    this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    this.router.navigate(['/supplychainmanagement/distillery/pd8b-distillationdetails/list']);
  } else {
    this.alert.showError(responceData.userDisplayMesg, 'error');
  }
}

}
