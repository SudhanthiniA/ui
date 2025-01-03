import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pd10Service,AlertService } from '@app/services';

@Component({
  selector: 'app-viewpd10form',
  templateUrl: './viewpd10form.component.html',
  styleUrls: ['./viewpd10form.component.scss']
})
export class Viewpd10formComponent implements OnInit {

  addedit: any;
  entityType:any;
  editId:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private datepipe: DatePipe,
    private pd10service: Pd10Service

  ) { }
  pd10viewobj: any = {
   

  };
  ngOnInit() {
    this.entityType =localStorage.getItem('EntityType');
    this.route.params.subscribe(params => {
      if (params.id) {
        this.getPd8recordsById(params.id);
        this.editId = params.id;
        this.pd10viewobj.id = params.id;
      } else {
        this.getPd8recordsById();
       }
    });
    this.addedit = this.router.url.includes('preview') == true ? 'Preview' : 'View';
  }
  getPd8recordsById(id?) {
    if (id) {  
    this.pd10service.getpd10byid(id).subscribe(responceData => {
      this.pd10viewobj = responceData['data'];
      this.pd10viewobj.tankerSealed = responceData.data.tankerSealed?'Sealed':'Un Sealed'
    })
  } else {
      this.pd10viewobj = JSON.parse(sessionStorage.getItem('pd10formobj'));

    }
  }


}
