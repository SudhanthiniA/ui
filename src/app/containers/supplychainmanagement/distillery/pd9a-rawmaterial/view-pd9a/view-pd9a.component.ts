import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pd9arawmetirialService } from '@app/services';
import { AlertService } from '@app/services';


@Component({
  selector: 'app-view-pd9a',
  templateUrl: './view-pd9a.component.html',
  styleUrls: ['./view-pd9a.component.scss']
})

export class ViewPd9aComponent implements OnInit {

  pd9arawmaterialObj: any = {};
  editId: any;
  addedit: any;
  entityType:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pd9arwserv: Pd9arawmetirialService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.addedit = this.router.url.includes('preview') === true ? 'Preview' : 'View';

    this.route.params.subscribe(params => {
      if (params.id) {
        this.getpad9aRawmaterial(params.id);
        this.pd9arawmaterialObj.id = params.id;
        this.editId = params.id;
      } else {
        this.pd9arawmaterialObj = JSON.parse(sessionStorage.getItem('pd9arawmaterial'));
      }
    });
  }

  getpad9aRawmaterial(id) {
    this.pd9arwserv.getpd9abyid(id).subscribe( (responceData: any) => {
      this.pd9arawmaterialObj = responceData['data'];
      console.log(this.pd9arawmaterialObj);
    });
  }

  userapproval(status){
    let id = this.editId;

    let data = '/'+ `${this.editId}` + '/' + `${status}`
     console.log('log of approvel ==>>',data);
     console.log('id of data ===>>>',this.editId);
  this.pd9arwserv.approved(data).subscribe((ressponseDate:any)=>{
      this.handleResponse(ressponseDate);
  });
 }
 handleResponse(responceData: any) {
  if (responceData.status == 's') {
    this.alert.showSuccess(responceData.userDisplayMesg, 'Success');
    this.router.navigate(['/supplychainmanagement/distillery/pd9/list']);
  } else {
    this.alert.showError(responceData.userDisplayMesg, 'error');
  }
}

}
