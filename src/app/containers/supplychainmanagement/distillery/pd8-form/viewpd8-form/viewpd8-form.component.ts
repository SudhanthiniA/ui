import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pd8Service,AlertService } from '@app/services';

@Component({
  selector: 'app-viewpd8-form',
  templateUrl: './viewpd8-form.component.html',
  styleUrls: ['./viewpd8-form.component.scss']
})
export class Viewpd8FormComponent implements OnInit {

  addedit: any;
  entityType:any;
  editId:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private datepipe: DatePipe,
    private pd8service: Pd8Service

  ) { }
  pd8viewobj: any = {
   

  };
  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd8recordsById(params.id);
        this.editId = params.id;
        this.pd8viewobj.id = params.id;
      } else {
        this.getPd8recordsById();
       }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  getPd8recordsById(id?) {
    if (id) {  
    this.pd8service.getpd8byid(id).subscribe(responceData => {
      this.pd8viewobj = responceData['data'];
    })
  } else {
      this.pd8viewobj = JSON.parse(sessionStorage.getItem('pd8formobj'));

    }
  }

  userapproval(status){
    let id = this.editId;

    let data = '/'+ `${this.editId}` + '/' + `${status}`
     console.log('log of approvel ==>>',data);
     console.log('id of data ===>>>',this.editId);
     
     
  this.pd8service.approvalpd8(data).subscribe((ressponseDate:any)=>{
      this.handleResponse(ressponseDate);
  })

}

handleResponse(responceData: any) {
  if (responceData.status == 's') {
    this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    this.router.navigate(['/supplychainmanagement/distillery/pd8-form/list']);
  } else {
    this.alert.showError(responceData.userDisplayMesg, 'error');
  }
}

}
