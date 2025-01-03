import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pd8aWashdetailService,AlertService } from '@app/services';

@Component({
  selector: 'app-viewpd-eight',
  templateUrl: './viewpd-eight.component.html',
  styleUrls: ['./viewpd-eight.component.scss']
})
export class ViewpdEightComponent implements OnInit {
  addedit: any;
  entityType:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private datepipe: DatePipe,
    private pd8aservice: Pd8aWashdetailService

  ) { }
  Pd: any = {
  };
  editId:any;
  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd8arecordsById(params.id);
        this.Pd.id = params.id;

        this.editId = params.id
        // this.addedit = 'Edit';

      } else {
        this.getPd8arecordsById();
       }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  getPd8arecordsById(id?) {
    if (id) {  
    this.pd8aservice.getPd8AwashdetailById(id).subscribe(responceData => {
      this.Pd = responceData['data'];
    })
  } else {
      this.Pd = JSON.parse(sessionStorage.getItem('formdata'));
      

    }
  }

  userapproval(status){
    let id = this.editId;

    let data = '/'+ `${this.editId}` + '/' + `${status}`
     console.log('log of approvel ==>>',data);
     console.log('id of data ===>>>',this.editId);
     
     
  this.pd8aservice.approvalpd8a(data).subscribe((ressponseDate:any)=>{
      this.handleResponse(ressponseDate);
  })

}

handleResponse(responceData: any) {
  if (responceData.status == 's') {
    this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    this.router.navigate(['/supplychainmanagement/distillery/pd-8/list']);
  } else {
    this.alert.showError(responceData.userDisplayMesg, 'error');
  }
}
}
